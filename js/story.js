/* Pages projets & passions : construites à partir de js/pages.js */
(() => {
  "use strict";

  const $ = (s, ctx = document) => ctx.querySelector(s);
  const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const root = $("[data-story-root]");
  const id = document.body.dataset.story;
  const P = (window.PAGES || {})[id];
  if (!root || !P) return;

  let lang = "fr";
  let t = (k) => k;
  const esc = (str) => String(str == null ? "" : str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const pick = (v) => (v && typeof v === "object" ? (v[lang] || v.fr) : v);
  const tx = (v) => esc(pick(v));

  /* ---------- building blocks ---------- */
  const phIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-8 8"/></svg>`;

  function media(src, alt, cls = "", label = "story.placeholder", lb = "") {
    return `<figure class="media ${cls}"${lb ? ` data-lb="${lb}"` : ""}>
      <img src="${esc(src)}" alt="${esc(alt || "")}" loading="lazy" onerror="this.parentNode.classList.add('is-empty');this.remove()" />
      <span class="ph">${phIcon}<span>${esc(t(label))}</span></span>
    </figure>`;
  }

  const eq = (n = 5) => `<span class="eq" aria-hidden="true">${Array.from({ length: n }, (_, i) => `<i style="--i:${i}"></i>`).join("")}</span>`;

  function heroVisual() {
    if (P.theme === "eclipse") {
      return `<div class="eclipse" aria-hidden="true">
          <div class="eclipse__sun"></div>
          <div class="eclipse__corona"></div>
          <div class="eclipse__moon"></div>
        </div>
        ${P.heroMascot ? `<img class="hero-mascot" src="${esc(P.heroMascot)}" alt="" onerror="this.remove()" />` : ""}
        <div class="hero-eq" aria-hidden="true">${Array.from({ length: 48 }, (_, i) => `<i style="--i:${i};--h:${20 + ((i * 37) % 80)}%;--dur:${(0.5 + ((i * 37) % 70) / 100).toFixed(2)}s"></i>`).join("")}</div>`;
    }
    if (P.theme === "punch" && P.logo) {
      return `<div class="punch-hero" aria-hidden="true">
          <span class="punch-hero__burst"></span>
          <img class="punch-hero__logo" src="${esc(P.logo)}" alt="" />
          ${P.heroMascot ? `<img class="punch-hero__mascot" src="${esc(P.heroMascot)}" alt="" />` : ""}
          <span class="punch-hero__spark punch-hero__spark--1">✦</span>
          <span class="punch-hero__spark punch-hero__spark--2">✦</span>
          <span class="punch-hero__spark punch-hero__spark--3">★</span>
        </div>`;
    }
    if (P.theme === "punch") {
      return `<div class="phone" aria-hidden="true">
          <div class="phone__notch"></div>
          <div class="phone__screen">
            <img src="${esc(P.phone && P.phone.src)}" alt="" onerror="this.remove()" />
            <div class="phone__ui">
              <span class="phone__logo">PUNCH</span>
              <span class="phone__bar"></span><span class="phone__bar phone__bar--short"></span>
              <span class="phone__card"></span><span class="phone__card phone__card--alt"></span>
              <span class="phone__pulse"><svg viewBox="0 0 120 30"><path d="M0 15h30l6-12 8 24 8-18 5 6h63"/></svg></span>
            </div>
          </div>
        </div>`;
    }
    if (P.theme === "idcom" && P.logo) {
      return `<div class="idcom-hero" aria-hidden="true">
          <span class="arc arc--1"></span><span class="arc arc--2"></span><span class="arc arc--3"></span><span class="arc arc--4"></span>
          <img class="idcom-hero__logo" src="${esc(P.logo)}" alt="" />
          <span class="doodle doodle--gear">${doodles.gear}</span>
          <span class="doodle doodle--mega">${doodles.mega}</span>
          <span class="doodle doodle--wrench">${doodles.wrench}</span>
          <span class="doodle doodle--idea">${doodles.idea}</span>
        </div>`;
    }
    if (P.theme === "idcom") {
      return `<div class="ring" aria-hidden="true">
          <svg viewBox="0 0 200 200"><defs><path id="ringPath" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"/></defs>
          <text><textPath href="#ringPath" textLength="500" lengthAdjust="spacing">GESTION DE PROJET • STRATÉGIE • INNOVATION • ÉQUIPE • </textPath></text></svg>
          <span class="ring__deg">360°</span>
        </div>`;
    }
    return `<span class="s-bigword" aria-hidden="true">${tx(P.title)}</span>${P.heroImage ? `<img class="s-hero-img" src="${esc(P.heroImage)}" alt="" onerror="this.remove()" />` : ""}`;
  }

  const doodles = {
    gear: `<svg viewBox="0 0 64 64"><circle cx="24" cy="24" r="7"/><path d="M24 8v5M24 35v5M8 24h5M35 24h5M12.7 12.7l3.5 3.5M31.8 31.8l3.5 3.5M12.7 35.3l3.5-3.5M31.8 16.2l3.5-3.5"/><circle cx="24" cy="24" r="12"/><circle cx="44" cy="44" r="6"/><circle cx="44" cy="44" r="11"/><path d="M44 29v4M44 55v4M29 44h4M55 44h4"/></svg>`,
    mega: `<svg viewBox="0 0 64 64"><path d="M10 28h8l22-12v32L18 36h-8z"/><path d="M18 36l4 14h6l-3-14"/><path d="M48 24l6-4M50 32h7M48 40l6 4"/></svg>`,
    wrench: `<svg viewBox="0 0 64 64"><path d="M40 10a12 12 0 0 0-11 16L10 45a5 5 0 0 0 7 7l19-19a12 12 0 0 0 16-11l-7 4-6-3-1-7z"/></svg>`,
    idea: `<svg viewBox="0 0 64 64"><path d="M22 54V44c-6-4-9-10-8-17a17 17 0 0 1 33 1c0 4-1 7 1 10l3 6h-6v6c0 2-2 4-4 4h-6v0"/><path d="M30 14l2-6M40 16l4-5M22 16l-3-5M46 24l6-2"/><circle cx="31" cy="27" r="4"/></svg>`
  };

  function hero() {
    const back = P.back === "about" ? ["about.html", "story.back.about"] : ["projects.html", "story.back.projects"];
    return `<section class="s-hero s-hero--${esc(P.theme)}">
      ${heroVisual()}
      <div class="container s-hero__inner">
        <a href="${back[0]}" class="s-back reveal-up">${esc(t(back[1]))}</a>
        <p class="eyebrow reveal-up"><span>✦</span> <span>${tx(P.eyebrow)}</span></p>
        <h1 class="s-title${String(pick(P.title)).length > 7 ? " s-title--long" : ""}"><span class="line"><span class="split${P.theme === "eclipse" ? " split--outline" : ""}" data-split>${tx(P.title)}</span></span></h1>
        <p class="s-tagline reveal-up">${tx(P.tagline)}</p>
        ${P.facts ? `<dl class="s-facts reveal-up">${P.facts.map((f) => `<div><dt>${tx(f.label)}</dt><dd>${tx(f.value)}</dd></div>`).join("")}</dl>` : ""}
      </div>
    </section>`;
  }

  function marquee() {
    if (!P.marquee) return "";
    const row = P.marquee.map((m) => `<span>${esc(m)}</span><i>✦</i>`).join("");
    return `<section class="marquee marquee--story" aria-hidden="true"><div class="marquee__track"><div class="marquee__content">${row}</div><div class="marquee__content">${row}</div></div></section>`;
  }

  function intro() {
    if (!P.intro) return "";
    return `<section class="s-intro"><div class="container s-intro__grid">
      <h2 class="section-title reveal-up">${tx(P.intro.title)}</h2>
      <p class="s-intro__text reveal-up">${tx(P.intro.text)}</p>
    </div></section>`;
  }

  function context() {
    const C = P.context;
    if (!C) return "";
    return `<section class="s-context"><div class="container">
      <h2 class="section-title reveal-up">${tx(C.title)}<span class="dots" aria-hidden="true">…</span></h2>
      <div class="context-grid">${C.items.map((it, i) => `
        <article class="context-card reveal-up" style="--d:${i * 0.1}s">
          <span class="context-card__label">${tx(it.label)}</span>
          <p class="context-card__value">${tx(it.value)}</p>
          ${it.note ? `<p class="context-card__note">${tx(it.note)}</p>` : ""}
          ${it.chips ? `<ul class="context-card__chips">${it.chips.map((c, ci) => `<li class="pill" style="--ci:${ci}">${tx(c)}</li>`).join("")}</ul>` : ""}
        </article>`).join("")}</div>
    </div></section>`;
  }

  function concept() {
    const C = P.concept;
    if (!C) return "";
    return `<section class="s-concept"><div class="container s-concept__grid">
      <div class="s-concept__visual reveal-up">
        <span class="s-concept__ring" aria-hidden="true"></span>
        ${C.image ? `<img class="s-concept__mascot" src="${esc(C.image)}" alt="${esc(t("story.mascotAlt"))}" onerror="this.remove()" />` : ""}
        ${C.photo ? media(C.photo, "", "s-concept__photo", "story.placeholder", "concept") : ""}
      </div>
      <div class="s-concept__text">
        <h2 class="section-title reveal-up">${tx(C.title)}</h2>
        <p class="s-intro__text reveal-up">${tx(C.text)}</p>
        ${C.pillars ? `<ul class="pillars">${C.pillars.map((pl, i) => `<li class="pillar reveal-up" style="--d:${i * 0.1}s"><span class="pillar__icon">${["◎", "✚", "♥"][i % 3]}</span>${tx(pl)}</li>`).join("")}</ul>` : ""}
      </div>
    </div></section>`;
  }

  function award() {
    const A = P.award;
    if (!A) return "";
    return `<section class="s-award"><div class="container s-award__grid">
      <div class="s-award__text">
        <div class="medal reveal-up" aria-hidden="true">
          <span class="medal__ribbon"></span>
          <span class="medal__disc"><span>1</span></span>
        </div>
        <h2 class="section-title reveal-up">${tx(A.title)}</h2>
        <p class="s-award__badge reveal-up"><strong>${tx(A.badge)}</strong> · ${tx(A.prize)}</p>
        <p class="s-award__desc reveal-up">${tx(A.text)}</p>
      </div>
      ${A.image ? media(A.image, pick(A.prize), "s-award__photo reveal-up", "story.placeholder", "award") : ""}
    </div></section>`;
  }

  function outro() {
    const O = P.outro;
    if (!O) return "";
    return `<section class="s-outro"><div class="container"><div class="s-outro__grid">
      <div>
        ${O.badge ? `<span class="live-badge reveal-up"><i></i>${tx(O.badge)}</span>` : ""}
        <h2 class="section-title reveal-up">${tx(O.title).replace("?", '<span class="q">?</span>')}</h2>
        <p class="s-intro__text reveal-up">${tx(O.text)}</p>
      </div>
      ${O.image ? `<img class="s-outro__img reveal-up" src="${esc(O.image)}" alt="" onerror="this.remove()" />` : ""}
    </div></div></section>`;
  }

  function services() {
    const S = P.services;
    if (!S) return "";
    return `<section class="s-services"><div class="container">
      <div class="section-head">
        <p class="eyebrow reveal-up"><span>✦</span> <span>${tx(S.subtitle)}</span></p>
        <h2 class="section-title reveal-up">${tx(S.title)}</h2>
      </div>
      <div class="s-services__grid">
        <div class="services">${S.groups.map((g, i) => `
          <article class="service reveal-up" style="--c:${esc(g.color)};--d:${i * 0.08}s">
            <h3 class="service__name"><span class="service__dot"></span>${tx(g.name)}<span class="service__count">${g.items.length}</span></h3>
            <ul class="service__list">${g.items.map((it) => `<li>${tx(it)}</li>`).join("")}</ul>
          </article>`).join("")}</div>
        ${S.image ? media(S.image, pick(S.title), "s-services__flyer reveal-up", "story.visualPh", "services") : ""}
      </div>
    </div></section>`;
  }

  function impact() {
    const I = P.impact;
    if (!I) return "";
    const imgs = I.images || [];
    return `<section class="s-impact"><div class="container">
      <div class="s-impact__head">
        <h2 class="section-title reveal-up">${tx(I.title)}</h2>
        <div class="days reveal-up"><span class="days__value">${esc(I.days.value)}</span><span class="days__label">${tx(I.days.label)}<strong>📍 ${tx(I.place)}</strong></span></div>
      </div>
      <div class="s-impact__grid">
        <div>
          <p class="s-impact__text reveal-up">${tx(I.text)}</p>
          <div class="impact-actions">${I.actions.map((a, i) => `
            <article class="impact-action reveal-up" style="--d:${i * 0.1}s">
              <span class="impact-action__icon" aria-hidden="true">${esc(a.icon)}</span>
              <h3>${tx(a.title)}</h3>
              <p>${tx(a.text)}</p>
            </article>`).join("")}</div>
        </div>
        <div class="impact-photos">${imgs.map((src, i) => media(src, "", `impact-photo impact-photo--${i + 1} reveal-up`, "story.placeholder", "impact")).join("")}</div>
      </div>
      <blockquote class="impact-quote reveal-up">${tx(I.conclusion)}</blockquote>
    </div></section>`;
  }

  function event() {
    const E = P.event;
    if (!E) return "";
    return `<section class="s-event"><div class="container s-event__grid">
      ${E.poster ? media(E.poster, E.name, "s-event__poster reveal-up", "story.visualPh", "event") : ""}
      <div class="ticket reveal-up">
        <div class="ticket__main">
          <span class="ticket__kicker">${esc(t("story.event.kicker"))}</span>
          <h2 class="ticket__name">${esc(E.name)}</h2>
          <dl class="ticket__rows">
            <div><dt>${esc(t("story.event.date"))}</dt><dd>${tx(E.date)}</dd></div>
            <div><dt>${esc(t("story.event.hours"))}</dt><dd>${tx(E.hours)}</dd></div>
            <div class="ticket__wide"><dt>${esc(t("story.event.venue"))}</dt><dd>${esc(E.venue)}<small>${esc(E.address)}</small></dd></div>
            <div class="ticket__wide"><dt>${esc(t("story.event.sound"))}</dt><dd>${esc(E.genres)}</dd></div>
          </dl>
        </div>
        <div class="ticket__stub" aria-hidden="true">
          <span class="ticket__barcode"></span>
          <span class="ticket__admit">ECLIPSE · NANCY</span>
        </div>
      </div>
    </div></section>`;
  }

  function walker() {
    if (!P.walker) return "";
    return `<div class="walker" aria-hidden="true"><img src="${esc(P.walker)}" alt="" onerror="this.parentNode.remove()" /></div>`;
  }

  function stats() {
    if (!P.stats) return "";
    return `<section class="s-stats"><div class="container s-stats__grid">
      ${P.stats.map((s, i) => `<div class="stat reveal-up" style="--d:${i * 0.1}s"><span class="stat__value">${esc(s.value)}</span><span class="stat__label">${tx(s.label)}</span></div>`).join("")}
    </div></section>`;
  }

  function role() {
    if (!P.role) return "";
    const head = `<div class="section-head"><p class="eyebrow reveal-up"><span>✦</span> <span>${tx(P.role.subtitle)}</span></p><h2 class="section-title reveal-up">${tx(P.role.title)}</h2></div>`;
    if (P.theme === "eclipse") {
      return `<section class="s-role"><div class="container">${head}
        <ol class="tracklist">${P.role.items.map((it, i) => `
          <li class="track reveal-up" style="--d:${i * 0.08}s">
            <span class="track__num">${String(i + 1).padStart(2, "0")}</span>
            <span class="track__play" aria-hidden="true">▶</span>
            <span class="track__body"><strong class="track__title">${tx(it.title)}</strong><span class="track__text">${tx(it.text)}</span></span>
            ${eq(6)}
          </li>`).join("")}</ol>
      </div></section>`;
    }
    const withImg = P.role.image ? `<figure class="role-photo reveal-up">${media(P.role.image, "", "role-photo__media", "story.placeholder", "role")}</figure>` : "";
    return `<section class="s-role"><div class="container">${head}
      <div class="${P.role.image ? "role-split" : ""}">${withImg}
      <div class="role-grid${P.role.items.length === 4 ? " role-grid--4" : ""}">${P.role.items.map((it, i) => `
        <article class="value reveal-up" style="--d:${i * 0.1}s">
          <span class="value__num">${String(i + 1).padStart(2, "0")}</span>
          <h3 class="value__title">${tx(it.title)}</h3>
          <p class="value__text">${tx(it.text)}</p>
        </article>`).join("")}</div></div>
    </div></section>`;
  }

  function highlights() {
    if (!P.highlights) return "";
    return `<section class="s-role"><div class="container">
      <div class="role-grid">${P.highlights.map((it, i) => `
        <article class="value reveal-up" style="--d:${i * 0.1}s">
          <span class="value__num">${String(i + 1).padStart(2, "0")}</span>
          <h3 class="value__title">${tx(it.title)}</h3>
          <p class="value__text">${tx(it.text)}</p>
        </article>`).join("")}</div>
    </div></section>`;
  }

  function mascot() {
    const M = P.mascot;
    if (!M) return "";
    return `<section class="s-mascot"><div class="container s-mascot__grid">
      <div class="mascot reveal-up" data-mascot>
        <div class="mascot__halo" aria-hidden="true"></div>
        <button class="mascot__btn" aria-label="${esc(t("story.mascot.click"))}">
          <img class="mascot__img" src="${esc(M.poses ? M.poses[0].src : M.src)}" alt="${esc(t("story.mascot.alt"))}" onerror="this.closest('.mascot').classList.add('is-fallback');this.remove()" />
          <span class="mascot__fallback" aria-hidden="true">
            <span class="mf__corona"></span>
            <span class="mf__body"><span class="mf__eye"><i></i></span><span class="mf__eye"><i></i></span><span class="mf__mouth"></span></span>
          </span>
        </button>
        <span class="mascot__bubble">${tx(M.poses ? M.poses[0].bubble : M.bubble)}</span>
        <span class="mascot__hint">${esc(t("story.mascot.click"))}</span>
      </div>
      <div class="s-mascot__text">
        <p class="eyebrow reveal-up"><span>✦</span> <span>${esc(t("story.mascot.eyebrow"))}</span></p>
        <h2 class="section-title reveal-up">${tx(M.title)}</h2>
        <p class="s-intro__text reveal-up">${tx(M.text)}</p>
      </div>
    </div></section>`;
  }

  function posters() {
    if (!P.posters) return "";
    return `<section class="s-posters">
      <div class="container section-head">
        <p class="eyebrow reveal-up"><span>✦</span> <span>${tx(P.posters.subtitle)}</span></p>
        <h2 class="section-title reveal-up">${tx(P.posters.title)}</h2>
      </div>
      <div class="posters" data-drag data-cursor="drag">
        <div class="posters__track">${P.posters.items.map((it, i) => media(it.src, pick(it.alt), `poster poster--${(i % 3) + 1}${it.fit === "contain" ? " poster--art" : ""}`, "story.visualPh", "posters")).join("")}</div>
      </div>
    </section>`;
  }

  function gallery() {
    if (!P.gallery) return "";
    return `<section class="s-gallery"><div class="container">
      <div class="section-head">
        <p class="eyebrow reveal-up"><span>✦</span> <span>${tx(P.gallery.subtitle)}</span></p>
        <h2 class="section-title reveal-up">${tx(P.gallery.title)}</h2>
      </div>
      <div class="gallery">${P.gallery.items.map((it, i) => `
        <div class="gallery__item reveal-up" style="--d:${(i % 3) * 0.08}s">
          ${media(it.src, pick(it.caption) || "", `gallery__media gallery__media--${(i % 4) + 1}`, "story.placeholder", "gallery")}
          ${it.caption ? `<span class="gallery__caption">${tx(it.caption)}</span>` : ""}
        </div>`).join("")}</div>
    </div></section>`;
  }

  function links() {
    const L = (P.links || []).filter((l) => l.url);
    if (!L.length) return "";
    return `<section class="s-links"><div class="container">
      <p class="eyebrow reveal-up"><span>✦</span> <span>${esc(t("story.follow"))}</span></p>
      <div class="s-links__row">${L.map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener" class="s-link reveal-up magnetic"><span>${tx(l.label)}</span><i>↗</i></a>`).join("")}</div>
    </div></section>`;
  }

  function next() {
    if (!P.next || !window.PAGES[P.next]) return "";
    const N = window.PAGES[P.next];
    return `<section class="s-next"><div class="container">
      <a href="${esc(P.next)}.html" class="s-next__link" data-cursor="go">
        <span class="s-next__label">${esc(t("story.next"))}</span>
        <span class="s-next__title">${tx(N.title)} <i>→</i></span>
      </a>
    </div></section>`;
  }

  function cta() {
    if (!P.cta) return "";
    return `<section class="cta cta--small"><div class="container">
      <h2 class="cta__title"><span class="line"><span class="split split--gradient" data-split>${tx(P.cta)}</span></span></h2>
      <div class="cta__row reveal-up">
        <a href="projects.html" class="btn btn--ghost magnetic"><span class="btn__text">${esc(t("story.otherProjects"))}</span><span class="btn__icon">→</span></a>
        <a href="contact.html" class="btn btn--primary magnetic"><span class="btn__text">${esc(t("about.cta.contact"))}</span><span class="btn__icon">→</span></a>
      </div>
    </div></section>`;
  }

  /* ---------- render (called by main.js on load and on language change) ---------- */
  window.renderStory = (currentLang, translate) => {
    lang = currentLang;
    t = translate;
    document.body.classList.add(`theme-${P.theme}`);
    root.innerHTML = hero() + marquee() + intro() + context() + services() + concept() + event() + stats() + walker() + role() + highlights() + impact() + award() + outro() + mascot() + posters() + gallery() + links() + next() + cta();
    document.title = `${pick(P.title)} — Léa Datin`;
    const meta = $('meta[name="description"]');
    if (meta) meta.setAttribute("content", pick(P.tagline));
    bindDrag();
    bindMascot();
  };

  /* ---------- scroll: eclipse moon ---------- */
  function onScroll() {
    const hero = $(".s-hero--eclipse");
    if (!hero) return;
    const p = Math.min(Math.max(window.scrollY / (hero.offsetHeight * 0.8), 0), 1);
    hero.style.setProperty("--p", reduceMotion ? 1 : p);
  }
  window.addEventListener("scroll", () => requestAnimationFrame(onScroll), { passive: true });
  requestAnimationFrame(onScroll);

  /* ---------- drag to scroll (posters) ---------- */
  function bindDrag() {
    $$("[data-drag]").forEach((el) => {
      let down = false, startX = 0, startScroll = 0, moved = false;
      el.addEventListener("pointerdown", (e) => {
        if (e.pointerType !== "mouse") return; // touch devices scroll natively
        down = true; moved = false; startX = e.clientX; startScroll = el.scrollLeft;
      });
      window.addEventListener("pointermove", (e) => {
        if (!down) return;
        const dx = e.clientX - startX;
        if (Math.abs(dx) > 4 && !moved) { moved = true; el.classList.add("is-dragging"); }
        el.scrollLeft = startScroll - dx;
      });
      window.addEventListener("pointerup", () => { down = false; el.classList.remove("is-dragging"); });
      el.addEventListener("click", (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); } }, true);
    });
  }

  /* ---------- mascot ---------- */
  function bindMascot() {
    const m = $("[data-mascot]");
    if (!m) return;
    const btn = $(".mascot__btn", m);
    const poses = (P.mascot && P.mascot.poses) || [];
    let pose = 0;
    // preload the other poses so the swap is instant
    poses.forEach((ps) => { const im = new Image(); im.src = ps.src; });
    btn.addEventListener("click", () => {
      if (poses.length > 1 && !m.classList.contains("is-fallback")) {
        pose = (pose + 1) % poses.length;
        const img = $(".mascot__img", m);
        setTimeout(() => { if (img) img.src = poses[pose].src; }, 180);
        $(".mascot__bubble", m).textContent = pick(poses[pose].bubble);
      }
      m.classList.remove("is-jumping");
      void m.offsetWidth;
      m.classList.add("is-jumping", "is-talking");
      for (let i = 0; i < 10; i++) {
        const s = document.createElement("span");
        s.className = "spark";
        s.textContent = i % 2 ? "✦" : "★";
        s.style.setProperty("--a", `${(i / 10) * 360}deg`);
        s.style.setProperty("--r", `${120 + Math.random() * 80}px`);
        m.appendChild(s);
        setTimeout(() => s.remove(), 1000);
      }
      clearTimeout(m._t);
      m._t = setTimeout(() => m.classList.remove("is-talking"), 2600);
    });
    // fallback mascot: eyes follow the pointer
    window.addEventListener("mousemove", (e) => {
      if (!m.classList.contains("is-fallback")) return;
      $$(".mf__eye i", m).forEach((pupil) => {
        const r = pupil.parentNode.getBoundingClientRect();
        const a = Math.atan2(e.clientY - (r.top + r.height / 2), e.clientX - (r.left + r.width / 2));
        pupil.style.transform = `translate(${Math.cos(a) * 5}px, ${Math.sin(a) * 5}px)`;
      });
    });
  }

  /* ---------- lightbox ---------- */
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.setAttribute("aria-hidden", "true");
  lb.innerHTML = `<button class="lightbox__close" aria-label="Fermer">✕</button>
    <button class="lightbox__nav lightbox__nav--prev" aria-label="Précédent">←</button>
    <figure class="lightbox__figure"><img alt="" /><figcaption></figcaption></figure>
    <button class="lightbox__nav lightbox__nav--next" aria-label="Suivant">→</button>
    <span class="lightbox__count"></span>`;
  document.body.appendChild(lb);
  let group = [], index = 0;

  function show() {
    const fig = group[index];
    const img = $("img", fig);
    $(".lightbox__figure img", lb).src = img.currentSrc || img.src;
    $(".lightbox__figure img", lb).alt = img.alt;
    const cap = fig.parentNode.querySelector(".gallery__caption");
    $(".lightbox figcaption").textContent = cap ? cap.textContent : "";
    $(".lightbox__count", lb).textContent = `${index + 1} / ${group.length}`;
  }
  function openLb(fig) {
    group = $$(`[data-lb="${fig.dataset.lb}"]:not(.is-empty)`);
    index = group.indexOf(fig);
    if (index < 0) return;
    show();
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    document.documentElement.classList.add("no-scroll");
    $(".lightbox__close", lb).focus();
  }
  function closeLb() {
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    document.documentElement.classList.remove("no-scroll");
  }
  const step = (d) => { index = (index + d + group.length) % group.length; show(); };

  document.addEventListener("click", (e) => {
    const fig = e.target.closest("[data-lb]");
    if (fig && !fig.classList.contains("is-empty")) openLb(fig);
  });
  $(".lightbox__close", lb).addEventListener("click", closeLb);
  $(".lightbox__nav--prev", lb).addEventListener("click", () => step(-1));
  $(".lightbox__nav--next", lb).addEventListener("click", () => step(1));
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  });
  let touchX = null;
  lb.addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
    touchX = null;
  });
})();
