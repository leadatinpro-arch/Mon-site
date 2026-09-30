/* Léa Datin — interactions du site (vanilla JS, sans dépendance) */
(() => {
  'use strict';
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* stockage indisponible */ } },
  };

  /* ---------- Apparition au scroll : rejouée à chaque entrée/sortie du viewport ---------- */
  const revealEls = $$('[data-reveal]');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.target.classList.toggle('is-visible', e.isIntersecting));
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- En-tête : état « scrollé » + couleur selon la section dessous ---------- */
  const header = $('[data-header]');
  const toTop = $('[data-to-top]');
  const themed = $$('[data-theme]').filter((el) => !el.closest('.site-header'));
  let ticking = false;
  function onScroll() {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 10);
    const probe = header.offsetHeight / 2;
    const under = themed.find((el) => {
      const r = el.getBoundingClientRect();
      return r.top <= probe && r.bottom > probe;
    });
    header.classList.toggle('on-dark', !!under && under.dataset.theme === 'dark');
    toTop.classList.toggle('is-visible', y > 600);
    ticking = false;
  }
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  addEventListener('resize', onScroll);
  onScroll();

  toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }));

  /* ---------- Interrupteur de langue : on laisse le curseur glisser avant de changer de page ---------- */
  $$('[data-lang-switch]').forEach((sw) => {
    sw.addEventListener('click', (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      sw.classList.toggle('is-en');
      setTimeout(() => { location.href = sw.href; }, reduceMotion ? 0 : 320);
    });
  });
  // Au retour arrière (bfcache), remettre l'interrupteur dans l'état de la page.
  addEventListener('pageshow', (e) => {
    if (!e.persisted) return;
    const en = document.documentElement.lang === 'en';
    $$('[data-lang-switch]').forEach((sw) => sw.classList.toggle('is-en', en));
  });

  /* ---------- Menu mobile : cercle qui se déploie depuis le hamburger ---------- */
  const burger = $('[data-burger]');
  const menu = $('[data-mobile-menu]');
  function setMenu(open) {
    const r = burger.getBoundingClientRect();
    menu.style.setProperty('--cx', `${r.left + r.width / 2}px`);
    menu.style.setProperty('--cy', `${r.top + r.height / 2}px`);
    menu.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? burger.dataset.labelClose : burger.dataset.labelOpen);
    menu.setAttribute('aria-hidden', String(!open));
    menu.inert = !open;
    if (open) setTimeout(() => $('a', menu)?.focus({ preventScroll: true }), 300);
  }
  burger.addEventListener('click', () => setMenu(!menu.classList.contains('is-open')));
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) { setMenu(false); burger.focus(); }
  });
  matchMedia('(min-width: 901px)').addEventListener('change', (m) => { if (m.matches) setMenu(false); });

  /* ---------- Bouton magnétique : suit le curseur ---------- */
  if (finePointer && !reduceMotion) {
    $$('[data-magnetic]').forEach((wrap) => {
      const el = wrap.firstElementChild;
      const strength = 0.35;
      const zone = 40; // px de marge autour du bouton où l'attraction agit
      let active = false;
      addEventListener('pointermove', (e) => {
        const r = wrap.getBoundingClientRect();
        const inside = e.clientX > r.left - zone && e.clientX < r.right + zone && e.clientY > r.top - zone && e.clientY < r.bottom + zone;
        if (inside) {
          const dx = e.clientX - (r.left + r.width / 2);
          const dy = e.clientY - (r.top + r.height / 2);
          el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
          active = true;
        } else if (active) {
          el.style.transform = '';
          active = false;
        }
      }, { passive: true });
    });
  }

  /* ---------- Accroche animée : mots qui défilent ---------- */
  $$('[data-rotator]').forEach((rot) => {
    let words;
    try { words = JSON.parse(rot.dataset.words); } catch { return; }
    if (words.length < 2 || reduceMotion) return;
    let i = 0;
    setInterval(() => {
      const cur = rot.firstElementChild;
      cur.classList.add('is-out');
      setTimeout(() => {
        i = (i + 1) % words.length;
        const next = document.createElement('span');
        next.className = 'rotator__word is-in';
        next.textContent = words[i];
        rot.replaceChildren(next);
      }, 420);
    }, 2800);
  });

  /* ---------- Compteurs animés ---------- */
  const counters = $$('[data-count]');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const end = Number(el.dataset.count);
        const start = performance.now();
        const dur = 1400;
        const step = (now) => {
          const p = Math.min(1, (now - start) / dur);
          el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    }, { threshold: 0.6 });
    counters.forEach((c) => cio.observe(c));
  }

  /* ---------- Timeline : accordéon, un seul élément ouvert à la fois ---------- */
  $$('[data-accordion]').forEach((acc) => {
    const items = $$('.timeline__item', acc);
    items.forEach((item) => {
      const btn = $('[data-accordion-trigger]', item);
      btn.addEventListener('click', () => {
        const willOpen = !item.classList.contains('is-open');
        items.forEach((it) => {
          const open = it === item && willOpen;
          it.classList.toggle('is-open', open);
          $('[data-accordion-trigger]', it).setAttribute('aria-expanded', String(open));
          $('.timeline__panel', it).inert = !open;
        });
        if (willOpen) {
          setTimeout(() => {
            const r = item.getBoundingClientRect();
            if (r.top < header.offsetHeight || r.top > innerHeight * 0.6) {
              scrollTo({ top: scrollY + r.top - header.offsetHeight - 16, behavior: reduceMotion ? 'auto' : 'smooth' });
            }
          }, 320);
        }
      });
    });
  });

  /* ---------- Album photo : cartes qui se retournent ---------- */
  $$('[data-album]').forEach((album) => {
    const cards = $$('[data-album-card]', album);
    const dots = $$('[data-album-dot]', album);
    const prev = $('[data-album-prev]', album);
    const next = $('[data-album-next]', album);
    let idx = 0; // nombre de cartes retournées
    function render() {
      cards.forEach((c, i) => {
        c.classList.toggle('is-flipped', i < idx);
        c.classList.toggle('is-top', i === idx);
        c.tabIndex = i === idx ? 0 : -1;
      });
      dots.forEach((d, i) => {
        d.classList.toggle('is-active', i === Math.min(idx, cards.length - 1));
        d.setAttribute('aria-current', String(i === idx));
      });
      prev.disabled = idx === 0;
      next.disabled = idx >= cards.length;
    }
    const go = (n) => { idx = Math.max(0, Math.min(cards.length, n)); render(); };
    cards.forEach((c, i) => c.addEventListener('click', () => go(i < idx ? i : i + 1)));
    prev.addEventListener('click', () => go(idx - 1));
    next.addEventListener('click', () => go(idx + 1));
    dots.forEach((d, i) => d.addEventListener('click', () => go(i)));
    $('[data-album-reset]', album).addEventListener('click', () => go(0));
    album.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); go(idx + 1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(idx - 1); }
    });
    render();
  });

  /* ---------- Formulaire de contact : ouvre la messagerie pré-remplie ---------- */
  $$('[data-contact-form]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const d = new FormData(form);
      const body = `${d.get('message')}\n\n— ${d.get('name')} (${d.get('email')})`;
      location.href = `mailto:${form.dataset.email}?subject=${encodeURIComponent(d.get('subject'))}&body=${encodeURIComponent(body)}`;
    });
  });

  /* ---------- Bandeau cookies + mesure d'audience après consentement ---------- */
  const banner = $('[data-cookie]');
  const script = $('script[data-analytics-provider]');
  const provider = script?.dataset.analyticsProvider;
  const trackingId = script?.dataset.analyticsId;
  const KEY = 'ld-consent';
  function loadAnalytics() {
    if (!trackingId || window.__ldAnalytics) return;
    window.__ldAnalytics = true;
    const s = document.createElement('script');
    s.defer = true;
    if (provider === 'ga4') {
      s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(trackingId)}`;
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() { window.dataLayer.push(arguments); };
      window.gtag('js', new Date());
      window.gtag('config', trackingId, { anonymize_ip: true });
    } else {
      s.src = 'https://plausible.io/js/script.js';
      s.dataset.domain = trackingId;
    }
    document.head.appendChild(s);
  }
  const consent = store.get(KEY);
  if (consent === 'yes') loadAnalytics();
  else if (consent !== 'no') banner.hidden = false;
  $('[data-cookie-accept]').addEventListener('click', () => { store.set(KEY, 'yes'); banner.hidden = true; loadAnalytics(); });
  $('[data-cookie-refuse]').addEventListener('click', () => { store.set(KEY, 'no'); banner.hidden = true; });
  $$('[data-cookie-open]').forEach((b) => b.addEventListener('click', () => { banner.hidden = false; }));
})();
