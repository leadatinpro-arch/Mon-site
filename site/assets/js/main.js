/* ===========================================================
   Léa Datin — main.js
   Interactions partagées par toutes les pages (sans dépendance).
   =========================================================== */

// La classe .js n'est posée que si ce script tourne : sans lui, tout le texte reste visible.
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* stockage indisponible */ } },
  };

  /* ---------- Scroll reveal (rejoué à chaque entrée/sortie du viewport) ---------- */
  const revealEls = $$('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle('is-visible', entry.isIntersecting));
    }, { threshold: 0.15 });
    revealEls.forEach((el) => io.observe(el));
    // Filet de sécurité (aperçus, iframes) : ce qui est à l'écran après 1,5 s s'affiche quoi qu'il arrive.
    setTimeout(() => revealEls.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < innerHeight && r.bottom > 0) el.classList.add('is-visible');
    }), 1500);
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- Switch FR/EN : le curseur glisse, puis on ouvre la page dans l'autre langue ---------- */
  $$('[data-lang-switch]').forEach((wrap) => {
    const btn = $('.lang-switch', wrap);
    const target = wrap.dataset.target;
    const current = btn.dataset.lang;
    const go = (lang) => {
      if (lang === current) return;
      btn.setAttribute('data-lang', lang);
      $$('.lang-side', wrap).forEach((s) => s.classList.toggle('is-active', s.dataset.langSide === lang));
      setTimeout(() => { location.href = target; }, reduceMotion ? 0 : 320);
    };
    btn.addEventListener('click', () => go(current === 'FR' ? 'EN' : 'FR'));
    $$('.lang-side', wrap).forEach((side) => side.addEventListener('click', (e) => {
      e.preventDefault();
      go(side.dataset.langSide);
    }));
  });
  addEventListener('pageshow', (e) => {
    if (!e.persisted) return; // retour arrière : remettre le switch dans l'état de la page
    const lang = document.documentElement.lang.toUpperCase();
    $$('[data-lang-switch]').forEach((w) => {
      $('.lang-switch', w).setAttribute('data-lang', lang);
      $$('.lang-side', w).forEach((s) => s.classList.toggle('is-active', s.dataset.langSide === lang));
    });
  });

  /* ---------- Menu mobile plein écran : cercle qui part du hamburger ---------- */
  $$('[data-menu-toggle]').forEach((burger) => {
    const overlay = document.getElementById(burger.getAttribute('data-menu-toggle'));
    if (!overlay) return;
    const set = (open) => {
      const r = burger.getBoundingClientRect();
      overlay.style.setProperty('--cx', `${r.left + r.width / 2}px`);
      overlay.style.setProperty('--cy', `${r.top + r.height / 2}px`);
      overlay.classList.toggle('is-open', open);
      overlay.inert = !open;
      overlay.setAttribute('aria-hidden', String(!open));
      burger.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('menu-open', open);
      if (open) setTimeout(() => $('a', overlay)?.focus({ preventScroll: true }), 250);
      else burger.focus({ preventScroll: true });
    };
    burger.addEventListener('click', () => set(!overlay.classList.contains('is-open')));
    $$('[data-menu-close]', overlay).forEach((el) => el.addEventListener('click', () => set(false)));
    addEventListener('keydown', (e) => { if (e.key === 'Escape' && overlay.classList.contains('is-open')) set(false); });
    matchMedia('(min-width: 900px)').addEventListener('change', (m) => { if (m.matches && overlay.classList.contains('is-open')) set(false); });
  });

  /* ---------- Boutons magnétiques (souris uniquement) ---------- */
  if (finePointer && !reduceMotion) {
    $$('[data-magnet-zone]').forEach((zone) => {
      const target = $('.magnet', zone);
      if (!target) return;
      zone.addEventListener('mousemove', (e) => {
        const r = target.getBoundingClientRect();
        const mx = (e.clientX - (r.left + r.width / 2)) * 0.22;
        const my = (e.clientY - (r.top + r.height / 2)) * 0.22;
        target.style.transform = `translate(${mx}px, ${my}px)`;
      });
      zone.addEventListener('mouseleave', () => { target.style.transform = 'translate(0px, 0px)'; });
    });
  }

  /* ---------- Objets 3D extrudés : on empile des couches du même dessin ---------- */
  $$('[data-x3d]').forEach((el) => {
    const obj = $('.x3d__obj', el);
    const depth = Number(el.dataset.x3d) || 12;
    const svg = obj.innerHTML;
    const step = Math.max(1, Math.round(depth / 10));
    let html = '';
    for (let z = 0; z <= depth; z += step) html += `<span class="x3d__layer" style="--z:${z}">${svg}</span>`;
    obj.innerHTML = html;
  });
  $$('[data-x3d-text]').forEach((el) => {
    const word = $('.p3d__word', el);
    const depth = Number(el.dataset.x3dText) || 10;
    const text = word.textContent;
    word.innerHTML = Array.from({ length: depth + 1 }, (_, z) => `<span class="x3d-text__layer" style="--z:${z * 1.5}">${text}</span>`).join('');
  });

  /* ---------- Parallaxe : les objets 3D suivent la souris ---------- */
  if (finePointer && !reduceMotion) {
    const groups = $$('[data-parallax], [data-hero]');
    addEventListener('pointermove', (e) => {
      const nx = e.clientX / innerWidth - 0.5;
      const ny = e.clientY / innerHeight - 0.5;
      groups.forEach((g) => {
        $$('.x3d:not(.x3d--spin):not(.x3d--sway) .x3d__obj', g).forEach((o, i) => {
          const k = 1 + (i % 3) * 0.35;
          o.style.transform = `rotateX(${-18 - ny * 40 * k}deg) rotateY(${24 + nx * 60 * k}deg)`;
        });
      });
    }, { passive: true });
  }

  /* ---------- Cartes inclinables (tilt 3D + reflet) ---------- */
  if (finePointer && !reduceMotion) {
    $$('[data-tilt]').forEach((card) => {
      const max = Number(card.dataset.tiltMax) || 7;
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        card.classList.add('is-tilting');
        card.style.transition = 'transform .08s linear';
        card.style.transform = `perspective(900px) rotateX(${(0.5 - py) * max}deg) rotateY(${(px - 0.5) * max}deg) translateY(-4px)`;
        card.style.setProperty('--gx', `${px * 100}%`);
        card.style.setProperty('--gy', `${py * 100}%`);
      });
      card.addEventListener('pointerleave', () => {
        card.classList.remove('is-tilting');
        card.style.transition = 'transform .6s cubic-bezier(0.16,1,0.3,1)';
        card.style.transform = '';
      });
    });
  }

  /* ---------- Globe 3D des 12 pays (canvas, sans bibliothèque) ---------- */
  $$('canvas[data-globe]').forEach((canvas) => {
    let data;
    try { data = JSON.parse(canvas.dataset.globe); } catch { return; }
    const ctx = canvas.getContext('2d');
    const DEG = Math.PI / 180;
    const toVec = ([lat, lon]) => [Math.cos(lat * DEG) * Math.sin(lon * DEG), Math.sin(lat * DEG), Math.cos(lat * DEG) * Math.cos(lon * DEG)];
    // Sphère de points (répartition de Fibonacci)
    const N = 1100;
    const dots = Array.from({ length: N }, (_, i) => {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const th = i * Math.PI * (3 - Math.sqrt(5));
      return [Math.cos(th) * r, y, Math.sin(th) * r];
    });
    const hub = toVec(data.hub);
    const pts = data.points.map(toVec);
    // Arcs du hub vers chaque pays (interpolation sphérique + élévation)
    const arcs = pts.map((p) => {
      const dot = Math.min(1, Math.max(-1, hub[0] * p[0] + hub[1] * p[1] + hub[2] * p[2]));
      const om = Math.acos(dot) || 1e-6;
      return Array.from({ length: 33 }, (_, s) => {
        const tt = s / 32;
        const a = Math.sin((1 - tt) * om) / Math.sin(om);
        const b = Math.sin(tt * om) / Math.sin(om);
        const lift = 1 + Math.sin(Math.PI * tt) * (0.08 + om * 0.35);
        return [0, 1, 2].map((k) => (a * hub[k] + b * p[k]) * lift);
      });
    });
    let rotY = -8 * DEG; // Europe face à l'écran au départ
    let rotX = 0.8;
    let vel = reduceMotion ? 0 : 0.0022;
    let dragging = false; let lastX = 0; let lastY = 0;
    let visible = true; let drawn = false;
    let size = 0; let dpr = 1;
    const resize = () => {
      dpr = Math.min(2, devicePixelRatio || 1);
      size = canvas.clientWidth;
      canvas.width = canvas.height = size * dpr;
    };
    resize();
    addEventListener('resize', resize);
    const project = ([x, y, z]) => {
      const cy = Math.cos(rotY); const sy = Math.sin(rotY);
      let X = x * cy - z * sy; let Z = x * sy + z * cy;
      const cx = Math.cos(rotX); const sx = Math.sin(rotX);
      const Y = y * cx - Z * sx; Z = y * sx + Z * cx;
      return [X, Y, Z];
    };
    let t0 = performance.now();
    const draw = (now) => {
      if (!visible && drawn) { requestAnimationFrame(draw); return; }
      drawn = true;
      const dt = Math.min(50, now - t0); t0 = now;
      if (!dragging) rotY += vel * dt * 0.06;
      const R = size * dpr * 0.4;
      const c = size * dpr / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // halo
      const g = ctx.createRadialGradient(c, c, R * 0.7, c, c, R * 1.25);
      g.addColorStop(0, 'rgba(46,106,203,0.25)'); g.addColorStop(1, 'rgba(46,106,203,0)');
      ctx.fillStyle = g; ctx.fillRect(0, 0, canvas.width, canvas.height);
      // points de la sphère
      for (const d of dots) {
        const [x, y, z] = project(d);
        if (z < -0.15) continue;
        const a = z > 0 ? 0.25 + z * 0.6 : 0.08;
        ctx.fillStyle = `rgba(117,157,215,${a})`;
        ctx.beginPath(); ctx.arc(c + x * R, c - y * R, (z > 0 ? 1.4 : 0.9) * dpr, 0, 7); ctx.fill();
      }
      // arcs animés
      const phase = (now / 2400) % 1;
      arcs.forEach((arc, i) => {
        ctx.beginPath();
        let started = false;
        arc.forEach((p) => {
          const [x, y, z] = project(p);
          if (z < -0.05) { started = false; return; }
          if (!started) { ctx.moveTo(c + x * R, c - y * R); started = true; } else ctx.lineTo(c + x * R, c - y * R);
        });
        ctx.strokeStyle = 'rgba(251,222,90,0.35)'; ctx.lineWidth = 1.2 * dpr; ctx.stroke();
        // impulsion qui voyage le long de l'arc
        const k = Math.floor(((phase + i / arcs.length) % 1) * (arc.length - 1));
        const [x, y, z] = project(arc[k]);
        if (z > -0.05) { ctx.fillStyle = '#FBDE5A'; ctx.beginPath(); ctx.arc(c + x * R, c - y * R, 2.4 * dpr, 0, 7); ctx.fill(); }
      });
      // pays + hub
      const pulse = 1 + Math.sin(now / 300) * 0.25;
      [...pts, hub].forEach((p, i) => {
        const [x, y, z] = project(p);
        if (z < 0) return;
        const isHub = i === pts.length;
        ctx.fillStyle = isHub ? '#FFFFFF' : '#FBDE5A';
        ctx.shadowColor = '#FBDE5A'; ctx.shadowBlur = 12 * dpr;
        ctx.beginPath(); ctx.arc(c + x * R, c - y * R, (isHub ? 4.5 : 3) * dpr * (isHub ? pulse : 1), 0, 7); ctx.fill();
        ctx.shadowBlur = 0;
      });
      requestAnimationFrame(draw);
    };
    requestAnimationFrame(draw);
    if ('IntersectionObserver' in window) new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(canvas);
    canvas.addEventListener('pointerdown', (e) => { dragging = true; lastX = e.clientX; lastY = e.clientY; canvas.setPointerCapture(e.pointerId); });
    canvas.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      rotY += (e.clientX - lastX) * 0.008;
      rotX = Math.max(-0.2, Math.min(1.2, rotX + (e.clientY - lastY) * 0.005));
      lastX = e.clientX; lastY = e.clientY;
    });
    const stop = () => { dragging = false; };
    canvas.addEventListener('pointerup', stop);
    canvas.addEventListener('pointercancel', stop);
  });

  /* ---------- "Ce qui m'inspire" : accordéon au survol (desktop) ---------- */
  $$('[data-inspire-panels]').forEach((wrap) => {
    const panels = $$('.inspire-panel', wrap);
    const activate = (panel) => {
      wrap.classList.add('has-hover');
      panels.forEach((p) => p.classList.toggle('is-hovered', p === panel));
    };
    const reset = () => { wrap.classList.remove('has-hover'); panels.forEach((p) => p.classList.remove('is-hovered')); };
    panels.forEach((panel) => {
      panel.addEventListener('mouseenter', () => activate(panel));
      panel.addEventListener('focus', () => activate(panel));
    });
    wrap.addEventListener('mouseleave', reset);
    wrap.addEventListener('focusout', (e) => { if (!wrap.contains(e.relatedTarget)) reset(); });
  });

  /* ---------- Album photo (pile de cartes qui se retournent) ---------- */
  $$('[data-album]').forEach((album) => {
    const pages = $$('.album-page', album);
    const pick = (attr) => (album.getAttribute(attr) ? $(album.getAttribute(attr)) : null);
    const dotsWrap = pick('data-album-dots');
    const dots = dotsWrap ? $$('.album-dot', dotsWrap) : [];
    let order = pages.map((_, i) => i);
    let flipping = false;

    const render = () => {
      order.forEach((pageIndex, pos) => {
        const page = pages[pageIndex];
        const offset = pos * 4;
        page.style.zIndex = order.length - pos;
        page.style.transform = `rotateY(0deg) translate(${offset}px, ${offset}px)`;
        page.tabIndex = pos === 0 ? 0 : -1;
      });
      dots.forEach((d, i) => {
        d.classList.toggle('is-active', i === order[0]);
        d.setAttribute('aria-current', String(i === order[0]));
      });
    };
    const flipNext = () => {
      if (flipping) return;
      flipping = true;
      const front = pages[order[0]];
      front.style.zIndex = order.length + 1;
      front.style.transform = 'rotateY(-165deg) translate(0px, 0px)';
      setTimeout(() => { order = order.slice(1).concat(order[0]); flipping = false; render(); }, reduceMotion ? 0 : 850);
    };
    const flipPrev = () => {
      if (flipping) return;
      flipping = true;
      order = [order[order.length - 1], ...order.slice(0, -1)];
      const back = pages[order[0]];
      back.style.transition = 'none';
      back.style.zIndex = order.length + 1;
      back.style.transform = 'rotateY(-165deg)';
      back.getBoundingClientRect();
      back.style.transition = '';
      render();
      setTimeout(() => { flipping = false; }, reduceMotion ? 0 : 850);
    };
    const goTo = (i) => {
      if (flipping || order[0] === i) return;
      const pos = order.indexOf(i);
      order = order.slice(pos).concat(order.slice(0, pos));
      render();
    };
    album.addEventListener('click', (e) => { if (e.target.closest('.album-page')) flipNext(); });
    album.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') { e.preventDefault(); flipNext(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); flipPrev(); }
    });
    pick('data-album-next')?.addEventListener('click', flipNext);
    pick('data-album-prev')?.addEventListener('click', flipPrev);
    pick('data-album-reset')?.addEventListener('click', () => { order = pages.map((_, i) => i); render(); });
    dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));
    render();
  });

  /* ---------- Expérience : timeline en accordéon (un seul ouvert) ---------- */
  $$('[data-timeline]').forEach((timeline) => {
    const items = $$('.timeline-item', timeline);
    items.forEach((item) => {
      $('.timeline-item__header', item).addEventListener('click', () => {
        const willOpen = !item.classList.contains('is-open');
        items.forEach((it) => {
          const open = it === item && willOpen;
          it.classList.toggle('is-open', open);
          $('.timeline-item__header', it).setAttribute('aria-expanded', String(open));
          $('.timeline-item__body', it).inert = !open;
        });
      });
    });
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

  /* ---------- Liens désactivés (ex. LinkedIn pas encore renseigné) ---------- */
  $$('a[aria-disabled="true"]').forEach((a) => a.addEventListener('click', (e) => e.preventDefault()));

  /* ---------- Bouton « remonter en haut » ---------- */
  const toTop = $('[data-to-top]');
  if (toTop) {
    const onScroll = () => toTop.classList.toggle('is-visible', scrollY > 600);
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }));
  }

  /* ---------- Cookies + mesure d'audience après consentement ---------- */
  const banner = $('[data-cookie]');
  const script = $('script[data-analytics-provider]');
  const provider = script?.dataset.analyticsProvider;
  const trackingId = script?.dataset.analyticsId;
  const KEY = 'ld-consent';
  const loadAnalytics = () => {
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
  };
  if (banner) {
    const consent = store.get(KEY);
    if (consent === 'yes') loadAnalytics();
    else if (consent !== 'no') banner.hidden = false;
    $('[data-cookie-accept]').addEventListener('click', () => { store.set(KEY, 'yes'); banner.hidden = true; loadAnalytics(); });
    $('[data-cookie-refuse]').addEventListener('click', () => { store.set(KEY, 'no'); banner.hidden = true; });
    $$('[data-cookie-open]').forEach((b) => b.addEventListener('click', () => { banner.hidden = false; }));
  }
});
