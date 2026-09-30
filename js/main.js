(() => {
  "use strict";

  const $ = (s, ctx = document) => ctx.querySelector(s);
  const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const T = window.TRANSLATIONS;
  const normalize = (w) => w.toLowerCase().replace(/[.,;:!?'"«»]/g, "");

  let lang = "fr";

  /* ------------------------------------------------------------------
     Split text helpers
     ------------------------------------------------------------------ */
  function splitChars(el) {
    const text = el.textContent;
    const wasVisible = el.classList.contains("is-visible");
    el.textContent = "";
    [...text].forEach((ch, i) => {
      const span = document.createElement("span");
      span.className = "char";
      span.style.setProperty("--i", i);
      span.textContent = ch === " " ? " " : ch;
      el.appendChild(span);
    });
    el.setAttribute("aria-label", text);
    if (wasVisible) el.classList.add("is-visible");
  }

  function splitWords(el) {
    const keys = (T[lang]["manifesto.keys"] || []).map(normalize);
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
    updateWords();
  }

  /* ------------------------------------------------------------------
     i18n
     ------------------------------------------------------------------ */
  function applyLang(next) {
    lang = T[next] ? next : "fr";
    const dict = T[lang];
    document.documentElement.lang = lang;
    document.title = dict["meta.title"];
    const meta = $('meta[name="description"]');
    if (meta) meta.setAttribute("content", dict["meta.description"]);

    $$("[data-i18n]").forEach((el) => {
      const val = dict[el.dataset.i18n];
      if (typeof val === "string") el.textContent = val;
    });
    $$("[data-i18n-html]").forEach((el) => {
      const val = dict[el.dataset.i18nHtml];
      if (typeof val === "string") el.innerHTML = val;
    });

    $$("[data-split]").forEach(splitChars);
    $$("[data-words]").forEach(splitWords);

    $$(".lang__btn").forEach((b) => {
      const active = b.dataset.lang === lang;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", active);
    });

    rotator.reset();
    try { localStorage.setItem("lang", lang); } catch (e) { /* ignore */ }
  }

  function initialLang() {
    try {
      const saved = localStorage.getItem("lang");
      if (saved) return saved;
    } catch (e) { /* ignore */ }
    return (navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en";
  }

  $$(".lang__btn").forEach((b) => b.addEventListener("click", () => {
    if (b.dataset.lang === lang) return;
    document.body.classList.add("lang-switching");
    applyLang(b.dataset.lang);
    refreshProjects();
  }));

  /* ------------------------------------------------------------------
     Rotating words in hero
     ------------------------------------------------------------------ */
  const rotator = (() => {
    const el = $(".rotator__word");
    let idx = 0;
    let timer;

    function words() { return T[lang]["hero.words"]; }

    function next() {
      el.classList.add("is-out");
      setTimeout(() => {
        idx = (idx + 1) % words().length;
        el.textContent = words()[idx];
        el.classList.remove("is-out");
        el.classList.add("is-in");
        void el.offsetWidth; // force reflow
        el.classList.remove("is-in");
      }, 600);
    }

    return {
      reset() {
        clearInterval(timer);
        idx = 0;
        el.textContent = words()[0];
        if (!reduceMotion) timer = setInterval(next, 2600);
      }
    };
  })();

  /* ------------------------------------------------------------------
     Loader
     ------------------------------------------------------------------ */
  function runLoader(done) {
    const num = $("#loader-num");
    if (reduceMotion) { num.textContent = "100"; return done(); }
    const duration = 1600;
    const start = performance.now();
    (function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      num.textContent = Math.round(eased * 100);
      if (p < 1) requestAnimationFrame(tick);
      else setTimeout(done, 250);
    })(start);
  }

  /* ------------------------------------------------------------------
     Reveal on scroll
     ------------------------------------------------------------------ */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });

  function startReveals() {
    $$(".reveal-up, [data-split]").forEach((el, i) => {
      // hero elements get staggered delays
      if (el.closest(".hero")) el.style.setProperty("--d", `${0.15 + i * 0.08}s`);
      io.observe(el);
    });
    // hero outline line comes slightly after first line
    const outline = $(".hero .split--outline");
    if (outline) outline.style.setProperty("--d", "0.25s");
    const ctaGrad = $(".cta .split--gradient");
    if (ctaGrad) ctaGrad.style.setProperty("--d", "0.2s");
  }

  /* ------------------------------------------------------------------
     Manifesto: words light up as you scroll
     ------------------------------------------------------------------ */
  function updateWords() {
    const text = $(".manifesto__text");
    if (!text) return;
    const words = $$(".word", text);
    const rect = text.getBoundingClientRect();
    const vh = window.innerHeight;
    const progress = Math.min(Math.max((vh * 0.85 - rect.top) / (rect.height + vh * 0.35), 0), 1);
    const lit = reduceMotion ? words.length : Math.floor(progress * words.length);
    words.forEach((w, i) => w.classList.toggle("is-lit", i < lit));
  }

  /* ------------------------------------------------------------------
     Horizontal projects scroll
     ------------------------------------------------------------------ */
  const projects = $(".projects");
  const track = $(".projects__track");
  const bar = $(".projects__progress span");
  let maxShift = 0;

  function refreshProjects() {
    if (!projects || !track) return;
    maxShift = Math.max(track.scrollWidth - window.innerWidth, 0);
    projects.style.height = `${window.innerHeight + maxShift}px`;
    updateProjects();
  }

  function updateProjects() {
    if (!projects) return;
    const rect = projects.getBoundingClientRect();
    const total = projects.offsetHeight - window.innerHeight;
    const p = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 0;
    track.style.transform = `translate3d(${-p * maxShift}px,0,0)`;
    bar.style.transform = `scaleX(${p})`;
  }

  /* ------------------------------------------------------------------
     Header: hide on scroll down, show on scroll up + active link
     ------------------------------------------------------------------ */
  const header = $(".header");
  let lastY = 0;

  function updateHeader() {
    const y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 40);
    header.classList.toggle("is-hidden", y > lastY && y > 300 && !menuOpen);
    lastY = y;
  }

  const sections = ["top", "about", "projects", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  function updateActiveLink() {
    const mid = window.innerHeight * 0.4;
    let current = "top";
    sections.slice(1).forEach((s) => {
      if (s.getBoundingClientRect().top < mid) current = s.id;
    });
    $$(".nav__link").forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === `#${current}`));
  }

  /* ------------------------------------------------------------------
     Scroll loop
     ------------------------------------------------------------------ */
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateHeader();
      updateWords();
      updateProjects();
      updateActiveLink();
      ticking = false;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", () => { refreshProjects(); updateWords(); });

  /* ------------------------------------------------------------------
     Mobile menu
     ------------------------------------------------------------------ */
  const burger = $(".burger");
  const menu = $(".menu");
  let menuOpen = false;

  function toggleMenu(force) {
    menuOpen = typeof force === "boolean" ? force : !menuOpen;
    menu.classList.toggle("is-open", menuOpen);
    menu.setAttribute("aria-hidden", !menuOpen);
    burger.setAttribute("aria-expanded", menuOpen);
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }

  burger.addEventListener("click", () => toggleMenu());
  $$(".menu__link").forEach((a) => a.addEventListener("click", () => toggleMenu(false)));

  /* ------------------------------------------------------------------
     Pointer effects (desktop only)
     ------------------------------------------------------------------ */
  if (finePointer && !reduceMotion) {
    // Custom cursor
    const cursor = $(".cursor");
    const dot = $(".cursor-dot");
    const label = $(".cursor__label");
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let cx = mx, cy = my;

    window.addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate3d(${mx}px,${my}px,0)`;
    });

    (function loop() {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      cursor.style.transform = `translate3d(${cx}px,${cy}px,0)`;
      requestAnimationFrame(loop);
    })();

    document.addEventListener("mouseover", (e) => {
      const labelled = e.target.closest("[data-cursor]");
      const hoverable = e.target.closest("a, button");
      if (labelled) {
        label.textContent = T[lang][`cursor.${labelled.dataset.cursor}`] || "";
        cursor.classList.add("has-label");
        cursor.classList.remove("is-hover");
      } else if (hoverable) {
        cursor.classList.add("is-hover");
        cursor.classList.remove("has-label");
      } else {
        cursor.classList.remove("is-hover", "has-label");
      }
    });

    document.addEventListener("mouseleave", () => { cursor.style.opacity = 0; dot.style.opacity = 0; });
    document.addEventListener("mouseenter", () => { cursor.style.opacity = 1; dot.style.opacity = 1; });

    // Magnetic buttons
    $$(".magnetic").forEach((el) => {
      const strength = el.classList.contains("cta__button") ? 0.45 : 0.3;
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        el.style.transition = "transform 0.15s linear";
        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      });
      el.addEventListener("mouseleave", () => {
        el.style.transition = "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
        el.style.transform = "";
      });
    });

    // Tilt cards + spotlight
    $$(".tilt").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        card.classList.add("is-tilting");
        card.style.transform = `rotateX(${(0.5 - py) * 12}deg) rotateY(${(px - 0.5) * 12}deg)`;
        card.style.setProperty("--gx", `${px * 100}%`);
        card.style.setProperty("--gy", `${py * 100}%`);
      });
      card.addEventListener("mouseleave", () => {
        card.classList.remove("is-tilting");
        card.style.transform = "";
      });
    });

    // Hero blob follows mouse
    const hero = $(".hero");
    hero.addEventListener("mousemove", (e) => {
      const r = hero.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 120;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 120;
      hero.style.setProperty("--mx", `${x}px`);
      hero.style.setProperty("--my", `${y}px`);
    });
  }

  /* ------------------------------------------------------------------
     Init
     ------------------------------------------------------------------ */
  $("#year").textContent = new Date().getFullYear();
  applyLang(initialLang());

  runLoader(() => {
    document.body.classList.add("is-loaded");
    document.body.classList.remove("is-loading");
    setTimeout(startReveals, reduceMotion ? 0 : 500);
  });

  // Fonts may change widths — recompute once loaded
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refreshProjects);
  window.addEventListener("load", refreshProjects);
  refreshProjects();
  onScroll();
})();
