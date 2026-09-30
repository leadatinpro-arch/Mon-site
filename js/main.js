(() => {
  "use strict";

  const $ = (s, ctx = document) => ctx.querySelector(s);
  const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const T = window.TRANSLATIONS;
  const PROJECTS = window.PROJECTS || [];
  const SOCIAL = window.SOCIAL || {};
  const normalize = (w) => w.toLowerCase().replace(/[.,;:!?'"«»]/g, "");
  const esc = (str) => String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } },
    sget(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } },
    sset(k, v) { try { sessionStorage.setItem(k, v); } catch (e) { /* ignore */ } }
  };

  let lang = "fr";
  let revealsStarted = false;
  const t = (key) => (T[lang] && T[lang][key] !== undefined ? T[lang][key] : T.fr[key]);
  const pick = (val) => (val && typeof val === "object" ? (val[lang] || val.fr) : val);

  /* ==================================================================
     Split text helpers
     ================================================================== */
  function splitChars(el) {
    const text = el.textContent;
    const wasVisible = el.classList.contains("is-visible");
    el.textContent = "";
    let i = 0;
    text.split(/[ \u00a0]/).forEach((word, wi, arr) => {
      const w = document.createElement("span");
      w.className = "split-word";
      [...word].forEach((ch) => {
        const span = document.createElement("span");
        span.className = "char";
        span.style.setProperty("--i", i++);
        span.textContent = ch;
        w.appendChild(span);
      });
      el.appendChild(w);
      if (wi < arr.length - 1) { el.appendChild(document.createTextNode(" ")); i++; }
    });
    el.setAttribute("aria-label", text);
    if (wasVisible) el.classList.add("is-visible");
  }

  function splitWords(el) {
    const keys = (t(el.dataset.words || "manifesto.keys") || []).map(normalize);
    const words = el.textContent.trim().split(/\s+/);
    el.textContent = "";
    words.forEach((w, i) => {
      const span = document.createElement("span");
      span.className = "word";
      if (keys.includes(normalize(w))) span.classList.add("is-key");
      span.textContent = w;
      el.appendChild(span);
      if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
    });
  }

  /* ==================================================================
     Dynamic content (from js/content.js)
     ================================================================== */
  function visual(p, extra = "") {
    const img = p.image ? `<img src="${esc(p.image)}" alt="" loading="lazy" />` : `<span class="project__shape shape--${esc(p.shape || "circle")}"></span>`;
    return `<div class="project__visual project__visual--${p.color || 1} ${extra}">${img}</div>`;
  }

  function tagLabel(type) { return t(type === "pro" ? "projects.pro" : "projects.perso"); }

  function renderHomeProjects() {
    const track = $("[data-home-projects]");
    if (!track) return;
    track.innerHTML = PROJECTS.map((p) => `
      <a href="projects.html#${esc(p.id)}" class="project" data-cursor="view">
        ${visual(p)}
        <div class="project__meta">
          <span class="tag${p.type === "perso" ? " tag--alt" : ""}">${esc(tagLabel(p.type))}</span>
          <h3 class="project__title">${esc(pick(p.title))}</h3>
          <p class="project__desc">${esc(pick(p.summary))}</p>
        </div>
      </a>`).join("") + `
      <a href="projects.html" class="project project--all" data-cursor="go">
        <span class="project--all__text">${t("projects.all")}</span>
        <span class="project--all__arrow">→</span>
      </a>`;
  }

  function renderTimeline() {
    const list = $("[data-timeline]");
    if (!list) return;
    list.innerHTML = (window.TIMELINE || []).map((item) => `
      <li class="tl-item reveal-up">
        <span class="tl-item__dot" aria-hidden="true"></span>
        <div class="tl-item__head">
          <span class="tl-item__period">${esc(pick(item.period))}</span>
          <span class="tag${item.kind === "school" ? " tag--alt" : ""}">${esc(t(item.kind === "school" ? "about.timeline.school" : "about.timeline.work"))}</span>
        </div>
        <h3 class="tl-item__title">${esc(pick(item.title))}</h3>
        <p class="tl-item__place">${esc(pick(item.place))}</p>
        <p class="tl-item__text">${esc(pick(item.text))}</p>
      </li>`).join("");
  }

  function renderSkills() {
    const grid = $("[data-skills]");
    if (!grid) return;
    grid.innerHTML = (window.SKILLS || []).map((g, gi) => `
      <div class="skill-group reveal-up" style="--d:${gi * 0.08}s">
        <h3 class="skill-group__title"><span>0${gi + 1}</span>${esc(pick(g.title))}</h3>
        <ul class="skill-group__list">${g.items.map((it) => `<li class="pill">${esc(pick(it))}</li>`).join("")}</ul>
      </div>`).join("");
  }

  /* ---------- Projects page ---------- */
  let currentFilter = "all";

  function renderProjectsGrid() {
    const grid = $("[data-projects-grid]");
    if (!grid) return;
    grid.innerHTML = PROJECTS.map((p, i) => `
      <button class="work-card reveal-up${currentFilter !== "all" && p.type !== currentFilter ? " is-hidden" : ""}" data-type="${esc(p.type)}" data-index="${i}" data-cursor="view" style="--d:${(i % 2) * 0.1}s">
        ${visual(p, "work-card__visual")}
        <span class="work-card__meta">
          <span class="work-card__top">
            <span class="tag${p.type === "perso" ? " tag--alt" : ""}">${esc(tagLabel(p.type))}</span>
            <span class="work-card__year">${esc(p.year || "")}</span>
          </span>
          <span class="work-card__title">${esc(pick(p.title))}</span>
          <span class="work-card__desc">${esc(pick(p.summary))}</span>
          <span class="work-card__more">${esc(t("projects.view"))} <i>→</i></span>
        </span>
      </button>`).join("");

    const counts = { all: PROJECTS.length, pro: 0, perso: 0 };
    PROJECTS.forEach((p) => { counts[p.type] = (counts[p.type] || 0) + 1; });
    $$("[data-count]").forEach((el) => { el.textContent = counts[el.dataset.count] || 0; });
    const total = $("[data-project-count]");
    if (total) total.textContent = String(PROJECTS.length).padStart(2, "0");
  }

  /* ==================================================================
     i18n
     ================================================================== */
  function applyLang(next) {
    lang = T[next] ? next : "fr";
    document.documentElement.lang = lang;

    const titleKey = document.body.dataset.title || "meta.title";
    const descKey = document.body.dataset.desc || "meta.description";
    if (t(titleKey)) document.title = t(titleKey);
    const meta = $('meta[name="description"]');
    if (meta && t(descKey)) meta.setAttribute("content", t(descKey));

    $$("[data-i18n]").forEach((el) => {
      const val = t(el.dataset.i18n);
      if (typeof val === "string") el.textContent = val;
    });
    $$("[data-i18n-html]").forEach((el) => {
      const val = t(el.dataset.i18nHtml);
      if (typeof val === "string") el.innerHTML = val;
    });

    $$("[data-split]").forEach(splitChars);
    $$("[data-words]").forEach(splitWords);

    renderHomeProjects();
    renderTimeline();
    renderSkills();
    renderProjectsGrid();
    if (modal.isOpen()) modal.fill();

    $$(".lang__btn").forEach((b) => {
      const active = b.dataset.lang === lang;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", active);
    });

    rotator.reset();
    if (revealsStarted) observeReveals(true);
    requestAnimationFrame(() => { refreshProjects(); updateScrollFx(); moveFilterPill(); });
    store.set("lang", lang);
  }

  function initialLang() {
    const saved = store.get("lang");
    if (saved) return saved;
    return (navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en";
  }

  document.addEventListener("click", (e) => {
    const b = e.target.closest(".lang__btn");
    if (b && b.dataset.lang !== lang) applyLang(b.dataset.lang);
  });

  /* ==================================================================
     Rotating words in hero
     ================================================================== */
  const rotator = (() => {
    const el = $(".rotator__word");
    let idx = 0;
    let timer;
    const words = () => t("hero.words") || [];

    function next() {
      el.classList.add("is-out");
      setTimeout(() => {
        idx = (idx + 1) % words().length;
        el.textContent = words()[idx];
        el.classList.remove("is-out");
        el.classList.add("is-in");
        void el.offsetWidth;
        el.classList.remove("is-in");
      }, 600);
    }

    return {
      reset() {
        if (!el) return;
        clearInterval(timer);
        idx = 0;
        el.textContent = words()[0];
        if (!reduceMotion) timer = setInterval(next, 2600);
      }
    };
  })();

  /* ==================================================================
     Reveal on scroll
     ================================================================== */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

  function observeReveals(onlyNew) {
    let heroIdx = 0;
    $$(".reveal-up, [data-split]").forEach((el) => {
      if (el.classList.contains("is-visible")) return;
      if (!onlyNew && el.closest(".hero, .page-hero")) el.style.setProperty("--d", `${0.1 + heroIdx++ * 0.08}s`);
      io.observe(el);
    });
  }

  function startReveals() {
    revealsStarted = true;
    $$(".split--outline, .split--gradient").forEach((el) => el.style.setProperty("--d", "0.2s"));
    observeReveals(false);
  }

  /* ==================================================================
     Loader & page transitions
     ================================================================== */
  function runLoader(done) {
    const num = $("#loader-num");
    if (reduceMotion || !num) { if (num) num.textContent = "100"; return done(); }
    const duration = 1600;
    const start = performance.now();
    (function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      num.textContent = Math.round((1 - Math.pow(1 - p, 3)) * 100);
      if (p < 1) requestAnimationFrame(tick);
      else setTimeout(done, 250);
    })(start);
  }

  function pageReady() {
    document.body.classList.add("is-loaded");
    document.body.classList.remove("is-loading");
  }

  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href]");
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    if (a.target === "_blank" || a.hasAttribute("download")) return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin || !/\.html$|\/$/.test(url.pathname)) return;
    if (url.pathname === location.pathname && url.hash) return; // same-page anchor
    if (reduceMotion) return;
    e.preventDefault();
    if (menuOpen) toggleMenu(false);
    document.body.classList.add("is-leaving");
    setTimeout(() => { location.href = url.href; }, 650);
  });

  window.addEventListener("pageshow", (e) => {
    if (e.persisted) document.body.classList.remove("is-leaving");
  });

  /* ==================================================================
     Scroll effects
     ================================================================== */
  function updateWords() {
    $$("[data-words]").forEach((text) => {
      const words = $$(".word", text);
      const rect = text.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(Math.max((vh * 0.85 - rect.top) / (rect.height + vh * 0.35), 0), 1);
      const lit = reduceMotion ? words.length : Math.floor(progress * words.length);
      words.forEach((w, i) => w.classList.toggle("is-lit", i < lit));
    });
  }

  // Horizontal projects scroll (home)
  const hProjects = $(".projects");
  const hTrack = $(".projects__track");
  const hBar = $(".projects__progress span");
  let maxShift = 0;

  function refreshProjects() {
    if (!hProjects || !hTrack) return;
    maxShift = Math.max(hTrack.scrollWidth - window.innerWidth, 0);
    hProjects.style.height = `${window.innerHeight + maxShift}px`;
    updateProjects();
  }

  function updateProjects() {
    if (!hProjects || !hTrack) return;
    const rect = hProjects.getBoundingClientRect();
    const total = hProjects.offsetHeight - window.innerHeight;
    const p = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 0;
    hTrack.style.transform = `translate3d(${-p * maxShift}px,0,0)`;
    if (hBar) hBar.style.transform = `scaleX(${p})`;
  }

  // Timeline line fill (about)
  const tl = $(".timeline");
  function updateTimeline() {
    if (!tl) return;
    const rect = tl.getBoundingClientRect();
    const vh = window.innerHeight;
    const p = Math.min(Math.max((vh * 0.6 - rect.top) / rect.height, 0), 1);
    tl.style.setProperty("--progress", p);
    $$(".tl-item", tl).forEach((item) => {
      item.classList.toggle("is-active", item.getBoundingClientRect().top < vh * 0.6);
    });
  }

  const header = $(".header");
  let lastY = 0;
  function updateHeader() {
    const y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 40);
    header.classList.toggle("is-hidden", y > lastY && y > 300 && !menuOpen && !modal.isOpen());
    lastY = y;
  }

  function updateScrollFx() {
    updateWords();
    updateProjects();
    updateTimeline();
  }

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { updateHeader(); updateScrollFx(); ticking = false; });
  }, { passive: true });

  window.addEventListener("resize", () => { refreshProjects(); updateScrollFx(); moveFilterPill(); });

  /* ==================================================================
     Mobile menu
     ================================================================== */
  const burger = $(".burger");
  const menu = $(".menu");
  let menuOpen = false;

  function toggleMenu(force) {
    menuOpen = typeof force === "boolean" ? force : !menuOpen;
    menu.classList.toggle("is-open", menuOpen);
    menu.setAttribute("aria-hidden", !menuOpen);
    burger.setAttribute("aria-expanded", menuOpen);
    document.documentElement.classList.toggle("no-scroll", menuOpen);
  }
  burger.addEventListener("click", () => toggleMenu());

  /* ==================================================================
     Projects page: filters + modal
     ================================================================== */
  const filters = $(".filters");
  const pill = $(".filters__pill");

  function moveFilterPill() {
    if (!filters || !pill) return;
    const active = $(".filters__btn.is-active", filters);
    if (!active) return;
    pill.style.width = `${active.offsetWidth}px`;
    pill.style.height = `${active.offsetHeight}px`;
    pill.style.transform = `translate(${active.offsetLeft}px, ${active.offsetTop}px)`;
  }

  if (filters) {
    filters.addEventListener("click", (e) => {
      const btn = e.target.closest(".filters__btn");
      if (!btn || btn.dataset.filter === currentFilter) return;
      currentFilter = btn.dataset.filter;
      $$(".filters__btn", filters).forEach((b) => {
        const on = b === btn;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-selected", on);
      });
      moveFilterPill();

      const grid = $("[data-projects-grid]");
      grid.classList.add("is-switching");
      setTimeout(() => {
        $$(".work-card", grid).forEach((card) => {
          card.classList.toggle("is-hidden", currentFilter !== "all" && card.dataset.type !== currentFilter);
        });
        grid.classList.remove("is-switching");
      }, reduceMotion ? 0 : 300);
    });
  }

  const modal = (() => {
    const el = $(".modal");
    let index = -1;
    let lastFocus = null;

    const visibleIndexes = () => PROJECTS.map((p, i) => i)
      .filter((i) => currentFilter === "all" || PROJECTS[i].type === currentFilter);

    function fill() {
      const p = PROJECTS[index];
      if (!p) return;
      $(".modal__visual", el).innerHTML = visual(p);
      $(".modal__meta", el).innerHTML = `<span class="tag${p.type === "perso" ? " tag--alt" : ""}">${esc(tagLabel(p.type))}</span><span class="work-card__year">${esc(p.year || "")}</span>`;
      $(".modal__title", el).textContent = pick(p.title);
      $(".modal__summary", el).textContent = pick(p.summary);
      $$("[data-field]", el).forEach((f) => { f.textContent = pick(p[f.dataset.field]) || ""; });
      $(".modal__tags", el).innerHTML = (p.tags || []).map((tg) => `<li class="pill">${esc(pick(tg))}</li>`).join("");
      $(".modal__close", el).setAttribute("aria-label", lang === "fr" ? "Fermer" : "Close");
    }

    function open(i) {
      if (!el || !PROJECTS[i]) return;
      index = i;
      fill();
      lastFocus = document.activeElement;
      el.classList.add("is-open");
      el.setAttribute("aria-hidden", "false");
      document.documentElement.classList.add("no-scroll");
      $(".modal__panel", el).scrollTop = 0;
      history.replaceState(null, "", `#${PROJECTS[i].id}`);
      setTimeout(() => $(".modal__close", el).focus(), 50);
    }

    function close() {
      if (!el || !isOpen()) return;
      el.classList.remove("is-open");
      el.setAttribute("aria-hidden", "true");
      document.documentElement.classList.remove("no-scroll");
      history.replaceState(null, "", location.pathname + location.search);
      index = -1;
      if (lastFocus) lastFocus.focus();
    }

    function step(dir) {
      const list = visibleIndexes();
      const pos = list.indexOf(index);
      const next = list[(pos + dir + list.length) % list.length];
      const panel = $(".modal__panel", el);
      panel.classList.add("is-swapping");
      setTimeout(() => { index = next; fill(); panel.scrollTop = 0; history.replaceState(null, "", `#${PROJECTS[next].id}`); panel.classList.remove("is-swapping"); }, reduceMotion ? 0 : 220);
    }

    function isOpen() { return !!el && el.classList.contains("is-open"); }

    if (el) {
      el.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) close(); });
      $(".modal__prev", el).addEventListener("click", () => step(-1));
      $(".modal__next", el).addEventListener("click", () => step(1));
      document.addEventListener("keydown", (e) => {
        if (!isOpen()) return;
        if (e.key === "Escape") close();
        if (e.key === "ArrowRight") step(1);
        if (e.key === "ArrowLeft") step(-1);
        if (e.key === "Tab") { // keep focus inside
          const f = $$("button, a[href]", $(".modal__panel", el));
          if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
          else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
        }
      });
      document.addEventListener("click", (e) => {
        const card = e.target.closest(".work-card");
        if (card) open(Number(card.dataset.index));
      });
    }

    return { open, close, fill, isOpen, openFromHash() {
      const id = decodeURIComponent(location.hash.slice(1));
      const i = PROJECTS.findIndex((p) => p.id === id);
      if (i > -1) open(i);
    } };
  })();

  /* ==================================================================
     Contact page
     ================================================================== */
  const toastEl = $(".toast");
  let toastTimer;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("is-visible"), 2400);
  }

  // Social links from content.js
  $$("[data-social]").forEach((a) => { if (SOCIAL[a.dataset.social]) a.href = SOCIAL[a.dataset.social]; });
  $$("[data-email]").forEach((a) => { if (SOCIAL.email) { a.href = `mailto:${SOCIAL.email}`; a.textContent = SOCIAL.email; } });

  $$("[data-copy]").forEach((btn) => btn.addEventListener("click", async () => {
    const email = SOCIAL.email || "lea.datinpro@gmail.com";
    try {
      await navigator.clipboard.writeText(email);
    } catch (e) {
      const ta = document.createElement("textarea");
      ta.value = email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    btn.classList.add("is-done");
    setTimeout(() => btn.classList.remove("is-done"), 1500);
    toast(t("contactPage.copied"));
  }));

  const form = $(".form");
  if (form) {
    const counter = $("[data-counter]", form);
    const msg = form.elements.message;
    msg.addEventListener("input", () => { counter.textContent = msg.value.length; });

    const rules = {
      name: (v) => v.trim().length >= 2,
      email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
      message: (v) => v.trim().length >= 10
    };

    function check(name) {
      const input = form.elements[name];
      const ok = rules[name](input.value);
      input.closest(".field").classList.toggle("has-error", !ok);
      input.setAttribute("aria-invalid", !ok);
      return ok;
    }

    Object.keys(rules).forEach((name) => {
      const input = form.elements[name];
      input.addEventListener("blur", () => { if (input.value) check(name); });
      input.addEventListener("input", () => { if (input.closest(".field").classList.contains("has-error")) check(name); });
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const results = Object.keys(rules).map(check);
      if (results.includes(false)) {
        const firstBad = $(".has-error input, .has-error textarea", form);
        if (firstBad) firstBad.focus();
        form.classList.remove("shake");
        void form.offsetWidth;
        form.classList.add("shake");
        return;
      }
      const f = form.elements;
      const topicInput = $('input[name="subject"]:checked', form);
      const topic = topicInput ? topicInput.nextElementSibling.textContent : "";
      const subject = `${t("contactPage.mail.subject")} — ${topic}`;
      const body = [
        f.message.value.trim(),
        "",
        "—",
        `${t("contactPage.mail.name")} : ${f.name.value.trim()}`,
        `${t("contactPage.mail.email")} : ${f.email.value.trim()}`,
        f.company.value.trim() ? `${t("contactPage.mail.company")} : ${f.company.value.trim()}` : null,
        `${t("contactPage.mail.topic")} : ${topic}`
      ].filter((l) => l !== null).join("\n");
      window.location.href = `mailto:${SOCIAL.email || "lea.datinpro@gmail.com"}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      form.classList.add("is-sent");
    });

    $("[data-reset]", form).addEventListener("click", () => {
      form.reset();
      counter.textContent = "0";
      form.classList.remove("is-sent");
    });
  }

  // Hide CV button if the file hasn't been added yet
  const cvBtn = $("[data-cv]");
  if (cvBtn) {
    fetch(cvBtn.getAttribute("href"), { method: "HEAD" })
      .then((r) => { if (!r.ok) cvBtn.remove(); })
      .catch(() => cvBtn.remove());
  }

  /* ==================================================================
     Pointer effects (desktop only)
     ================================================================== */
  if (finePointer && !reduceMotion) {
    const cursor = $(".cursor");
    const dot = $(".cursor-dot");
    const label = $(".cursor__label");
    let mx = -100, my = -100, cx = mx, cy = my;
    let hoverTarget = null;

    function updateCursorState(target) {
      hoverTarget = target;
      const labelled = target && target.closest("[data-cursor]");
      const hoverable = target && target.closest("a, button, input, textarea, label");
      if (labelled) {
        label.textContent = t(`cursor.${labelled.dataset.cursor}`) || "";
        cursor.classList.add("has-label");
        cursor.classList.remove("is-hover");
      } else if (hoverable) {
        cursor.classList.add("is-hover");
        cursor.classList.remove("has-label");
      } else {
        cursor.classList.remove("is-hover", "has-label");
      }
    }

    window.addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate3d(${mx}px,${my}px,0)`;
    });
    document.addEventListener("mouseover", (e) => updateCursorState(e.target));
    window.addEventListener("scroll", () => {
      const el = document.elementFromPoint(mx, my);
      if (el !== hoverTarget) updateCursorState(el);
    }, { passive: true });

    (function loop() {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      cursor.style.transform = `translate3d(${cx}px,${cy}px,0)`;
      requestAnimationFrame(loop);
    })();

    document.addEventListener("mouseleave", () => { cursor.style.opacity = 0; dot.style.opacity = 0; });
    document.addEventListener("mouseenter", () => { cursor.style.opacity = 1; dot.style.opacity = 1; });

    // Magnetic buttons
    document.addEventListener("mousemove", (e) => {
      $$(".magnetic").forEach((el) => {
        const r = el.getBoundingClientRect();
        const inside = e.clientX > r.left - 20 && e.clientX < r.right + 20 && e.clientY > r.top - 20 && e.clientY < r.bottom + 20;
        if (inside) {
          const strength = el.classList.contains("cta__button") ? 0.4 : 0.25;
          el.style.transition = "transform 0.15s linear";
          el.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * strength}px, ${(e.clientY - (r.top + r.height / 2)) * strength}px)`;
          el.dataset.mag = "1";
        } else if (el.dataset.mag) {
          el.style.transition = "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
          el.style.transform = "";
          delete el.dataset.mag;
        }
      });
    });

    // Tilt cards + spotlight (works for dynamically rendered cards too)
    document.addEventListener("mousemove", (e) => {
      const card = e.target.closest(".tilt, .work-card");
      $$(".is-tilting").forEach((c) => { if (c !== card) { c.classList.remove("is-tilting"); c.style.transform = ""; } });
      if (!card) return;
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const max = card.classList.contains("work-card") ? 6 : 12;
      card.classList.add("is-tilting");
      card.style.transform = `perspective(1200px) rotateX(${(0.5 - py) * max}deg) rotateY(${(px - 0.5) * max}deg)`;
      card.style.setProperty("--gx", `${px * 100}%`);
      card.style.setProperty("--gy", `${py * 100}%`);
    });

    // Blob follows mouse
    const hero = $(".hero, .page-hero, .notfound");
    if (hero) {
      hero.addEventListener("mousemove", (e) => {
        const r = hero.getBoundingClientRect();
        hero.style.setProperty("--mx", `${((e.clientX - r.left) / r.width - 0.5) * 120}px`);
        hero.style.setProperty("--my", `${((e.clientY - r.top) / r.height - 0.5) * 120}px`);
      });
    }
  }

  /* ==================================================================
     Init
     ================================================================== */
  applyLang(initialLang());

  const firstVisit = !store.sget("visited");
  store.sset("visited", "1");

  if (firstVisit) {
    runLoader(() => {
      pageReady();
      setTimeout(() => { startReveals(); modal.openFromHash(); }, reduceMotion ? 0 : 500);
    });
  } else {
    document.body.classList.add("no-loader", "is-entering");
    pageReady();
    setTimeout(() => { startReveals(); modal.openFromHash(); }, reduceMotion ? 0 : 250);
  }

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { refreshProjects(); moveFilterPill(); });
  window.addEventListener("load", () => { refreshProjects(); moveFilterPill(); });
  updateHeader();
  updateScrollFx();
})();
