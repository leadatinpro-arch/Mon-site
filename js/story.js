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

  /* Objets 3D des pages passions (CSS 3D, pas d'image) : vinyle, médaille, sac à dos */
  function obj3d(kind) {
    const L = (n, cls, from, to) => Array.from({ length: n }, (_, i) => `<span class="${cls}" style="--z:${(from + (to - from) * i / (n - 1)).toFixed(3)}em"></span>`).join("");
    const sparks = (chars) => chars.map((c, i) => `<span class="o3__spark" style="--i:${i}">${c}</span>`).join("");
    let body = "";
    if (kind === "vinyl") {
      body = `<div class="vin">
          <div class="vin__disc">${L(10, "vin__layer", -1.15, -0.55)}<span class="vin__face"><span class="vin__label"><b>LD</b><i>SIDE A · 33⅓</i></span></span></div>
          <span class="vin__sheen"></span>
          <div class="vin__sleeve"><span class="vin__sun"></span><span class="vin__stripes"></span><span class="vin__title">LÉA<br>DATIN</span><span class="vin__sub">Mixtape · Vol. 1</span></div>
        </div>${sparks(["♪", "♫", "♪", "♬"])}`;
    } else if (kind === "medal") {
      const ring = "AVIRON • ESPRIT D'ÉQUIPE • DÉPASSEMENT • ";
      body = `<div class="med">
          <span class="med__strap med__strap--r"></span><span class="med__strap med__strap--l"></span>
          <span class="med__ring"></span>
          <div class="med__coin">${L(16, "med__layer", -0.6, 0.6)}
            <span class="med__face med__face--front"><svg viewBox="0 0 200 200">
              <defs><path id="medRing" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"/></defs>
              <circle cx="100" cy="100" r="88" class="med__line"/><circle cx="100" cy="100" r="58" class="med__line"/>
              <text class="med__txt"><textPath href="#medRing" textLength="440" lengthAdjust="spacing">${ring}</textPath></text>
              <g class="med__oars"><path d="M68 132 L132 68"/><path d="M132 132 L68 68"/><path d="M126 62 q14 -10 18 -4 q4 6 -8 18 z" class="med__blade"/><path d="M74 62 q-14 -10 -18 -4 q-4 6 8 18 z" class="med__blade"/></g>
              <text x="100" y="152" class="med__one">1</text>
            </svg></span>
            <span class="med__face med__face--back"><b>LD</b><i>TEAM · RIGUEUR</i></span>
          </div>
        </div>${sparks(["✦", "✧", "✦", "✧"])}`;
    } else if (kind === "backpack") {
      const flags = ["fr", "al", "hr", "de", "be", "ch", "es"];
      const pos = [[1.1, 4.6, -12], [8.2, 4.2, 10], [7.3, 1.6, -6], [3.3, 2.7, 14]];
      const ppos = [[1.0, 1.2, 8], [3.4, 2.4, -10], [5.8, 1.0, 6]];
      body = `<div class="bp">
          <span class="bp__handle"></span>
          ${L(18, "bp__layer", -2.8, 2.8)}
          <div class="bp__front">
            <span class="bp__flap"></span>
            <span class="bp__strap"><i></i></span>
            ${pos.map(([x, y, r], i) => `<span class="bp__badge bp__badge--${flags[i + 3]}" style="left:${x}em;top:${y}em;--r:${r}deg"></span>`).join("")}
          </div>
          <div class="bp__pocket">${L(6, "bp__player", 0, 1.3)}<span class="bp__pface"><span class="bp__zip"></span>
            ${ppos.map(([x, y, r], i) => `<span class="bp__badge bp__badge--${flags[i]}" style="left:${x}em;top:${y}em;--r:${r}deg"></span>`).join("")}
          </span></div>
          <span class="bp__tag"><b>NANCY</b><i>→ ✈</i></span>
        </div>${sparks(["✈", "✦", "✧", "✦"])}`;
    }
    return `<div class="o3 o3--${esc(kind)}" aria-hidden="true"><div class="o3__tilt"><div class="o3__float">${body}</div></div><span class="o3__shadow"></span></div>`;
  }

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
    if (P.heroPhotos) {
      return `<div class="photo-stack" aria-hidden="true">${P.heroPhotos.map((src, i) => `<img class="photo-stack__img photo-stack__img--${i + 1}" src="${esc(src)}" alt="" />`).join("")}</div>`;
    }
    if (P.theme === "jli" && P.logo) {
      return `<div class="jli-hero" aria-hidden="true">
          <span class="jli-hero__beam"></span>
          <img class="jli-hero__logo" src="${esc(P.logo)}" alt="" />
          <span class="jli-hero__key">🔑</span>
          <span class="jli-hero__pin">📍</span>
          <span class="jli-hero__like">♥</span>
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
    return `<span class="s-bigword" aria-hidden="true">${tx(P.title)}</span>${P.hero3d ? obj3d(P.hero3d) : ""}${P.heroImage ? `<img class="s-hero-img${P.heroFx ? ` s-hero-img--${esc(P.heroFx)}` : ""}" src="${esc(P.heroImage)}" alt="" onerror="this.remove()" />` : ""}`;
  }

  const doodles = {
    gear: `<svg viewBox="0 0 64 64"><circle cx="24" cy="24" r="7"/><path d="M24 8v5M24 35v5M8 24h5M35 24h5M12.7 12.7l3.5 3.5M31.8 31.8l3.5 3.5M12.7 35.3l3.5-3.5M31.8 16.2l3.5-3.5"/><circle cx="24" cy="24" r="12"/><circle cx="44" cy="44" r="6"/><circle cx="44" cy="44" r="11"/><path d="M44 29v4M44 55v4M29 44h4M55 44h4"/></svg>`,
    mega: `<svg viewBox="0 0 64 64"><path d="M10 28h8l22-12v32L18 36h-8z"/><path d="M18 36l4 14h6l-3-14"/><path d="M48 24l6-4M50 32h7M48 40l6 4"/></svg>`,
    wrench: `<svg viewBox="0 0 64 64"><path d="M40 10a12 12 0 0 0-11 16L10 45a5 5 0 0 0 7 7l19-19a12 12 0 0 0 16-11l-7 4-6-3-1-7z"/></svg>`,
    idea: `<svg viewBox="0 0 64 64"><path d="M22 54V44c-6-4-9-10-8-17a17 17 0 0 1 33 1c0 4-1 7 1 10l3 6h-6v6c0 2-2 4-4 4h-6v0"/><path d="M30 14l2-6M40 16l4-5M22 16l-3-5M46 24l6-2"/><circle cx="31" cy="27" r="4"/></svg>`
  };

  function hero() {
    const back = P.back === "about" ? ["about.html#passions", "story.back.about"] : ["projects.html", "story.back.projects"];
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

  function editions() {
    const E = P.editions;
    if (!E) return "";
    const ticket = (ed) => `
      <div class="ticket ticket--ed reveal-up">
        <div class="ticket__main">
          <span class="ticket__kicker">${esc(t("story.ed.edition"))} ${esc(ed.num)}</span>
          <h3 class="ticket__name">${tx(ed.date)}</h3>
          <dl class="ticket__rows">
            <div><dt>${esc(t("story.event.hours"))}</dt><dd>${esc(ed.hours)}</dd></div>
            <div><dt>${esc(t("story.ed.price"))}</dt><dd>${tx(ed.price)}</dd></div>
            <div class="ticket__wide"><dt>${esc(t("story.event.venue"))}</dt><dd>Nirvana Club<small>6 quai Claude Lorrain — Nancy</small></dd></div>
            <div class="ticket__wide"><dt>${esc(t("story.event.sound"))}</dt><dd>${esc(ed.genres)}</dd></div>
          </dl>
        </div>
        <div class="ticket__stub" aria-hidden="true"><span class="ticket__barcode"></span><span class="ticket__admit">ECLIPSE · ${esc(ed.num)}</span></div>
      </div>`;
    const lineup = (ed) => `
      <div class="lineup reveal-up">
        <h4 class="lineup__title">Line-up${ed.lineup.some((a) => a.time) ? ` <span>· timetable</span>` : ""}</h4>
        <ol class="lineup__list">${ed.lineup.map((a, i) => `
          <li class="lineup__item${a.headliner ? " is-head" : ""}" style="--i:${i}">
            <span class="lineup__name">${esc(a.name)}${a.headliner ? ` <em>${esc(t("story.ed.headliner"))}</em>` : ""}</span>
            ${a.time ? `<span class="lineup__time">${esc(a.time)}</span>` : ""}
          </li>`).join("")}</ol>
      </div>`;
    const N = E.next;
    return `<section class="s-editions" data-editions>
      <div class="s-editions__bgwrap" aria-hidden="true"><div class="s-editions__bg"></div></div>
      <div class="container">
        <div class="section-head">
          <p class="eyebrow reveal-up"><span>✦</span> <span>${tx(E.subtitle)}</span></p>
          <h2 class="section-title reveal-up">${tx(E.title)}</h2>
        </div>
        ${E.items.map((ed) => `
        <article class="edition" data-ed-color="${esc(ed.color)}" data-ed-color2="${esc(ed.color2)}" style="--c:${esc(ed.color)};--c2:${esc(ed.color2)}">
          <header class="edition__head">
            <span class="edition__num" aria-hidden="true">${esc(ed.num)}</span>
            <div>
              <p class="edition__season reveal-up">${tx(ed.season)} · <strong>${tx(ed.crowd)}</strong></p>
              <p class="edition__story reveal-up">${tx(ed.story)}</p>
            </div>
          </header>
          <div class="edition__grid">
            <div class="edition__info">${ticket(ed)}${lineup(ed)}</div>
            <div class="edition__posters">${ed.posters.map((po, i) => media(po.src, pick(po.alt), `edition__poster edition__poster--${i + 1} reveal-up`, "story.visualPh", `ed-${ed.num}`)).join("")}</div>
          </div>
        </article>`).join("")}
        ${N ? `
        <article class="edition edition--next" data-ed-color="${esc(N.color)}" data-ed-color2="${esc(N.color2)}" style="--c:${esc(N.color)};--c2:${esc(N.color2)}">
          <div class="next-teaser reveal-up">
            <span class="edition__num" aria-hidden="true">${esc(N.num)}</span>
            <div class="next-teaser__text">
              <span class="live-badge"><i></i>${tx(N.badge)}</span>
              <h3 class="next-teaser__title">${tx(N.title)}</h3>
              <p>${tx(N.text)}</p>
              <div class="next-teaser__date" aria-hidden="true"><span>??</span><span>·</span><span>??</span><span>·</span><span>2026</span></div>
            </div>
            ${N.image ? `<div class="next-teaser__img"><img src="${esc(N.image)}" alt="" loading="lazy" /></div>` : ""}
          </div>
        </article>` : ""}
      </div>
    </section>`;
  }

  function faq() {
    const F = P.mascot && P.mascot.faq;
    if (!F) return "";
    return `<section class="s-faq"><div class="container">
      <div class="faq">${F.map((f, i) => `
        <article class="faq__card reveal-up" style="--d:${i * 0.12}s">
          <img class="faq__img" src="${esc(f.img)}" alt="" loading="lazy" />
          <h3 class="faq__q">${tx(f.q)}</h3>
          <p class="faq__a">${tx(f.a)}</p>
        </article>`).join("")}</div>
    </div></section>`;
  }

  function project() {
    const J = P.project;
    if (!J) return "";
    return `<section class="s-project"><div class="container s-project__grid">
      <div>
        <h2 class="section-title reveal-up">${tx(J.title)}</h2>
        <p class="s-impact__text reveal-up">${tx(J.text)}</p>
      </div>
      ${J.image ? `<figure class="s-project__img reveal-up" data-lb="project"><span class="show-row__halo"></span><img src="${esc(J.image)}" alt="${esc(pick(J.title))}" loading="lazy" /></figure>` : ""}
    </div></section>`;
  }

  function showcase() {
    const S = P.showcase;
    if (!S) return "";
    return `<section class="s-showcase"><div class="container">
      <div class="section-head">
        <p class="eyebrow reveal-up"><span>✦</span> <span>${tx(S.subtitle)}</span></p>
        <h2 class="section-title reveal-up">${tx(S.title)}</h2>
      </div>
      ${S.items.map((it, i) => `
      <article class="show-row${i % 2 ? " show-row--rev" : ""}">
        <figure class="show-row__img reveal-up" data-lb="showcase"><span class="show-row__halo"></span><img src="${esc(it.src)}" alt="${esc(pick(it.title))}" loading="lazy" /></figure>
        <div class="show-row__text">
          <span class="tag reveal-up">${tx(it.tag)}</span>
          <h3 class="show-row__title reveal-up">${tx(it.title)}</h3>
          <p class="reveal-up">${tx(it.text)}</p>
          ${it.link ? `<a href="${esc(it.link.href)}" class="btn btn--primary btn--sm magnetic reveal-up" style="margin-top:20px"><span class="btn__text">${tx(it.link.label)}</span><span class="btn__icon">→</span></a>` : ""}
        </div>
      </article>`).join("")}
    </div></section>`;
  }

  function trips() {
    const T = P.trips;
    if (!T) return "";
    // simple equirectangular projection over Europe
    const X = (lon) => ((lon + 2) / 26) * 1000, Y = (lat) => ((55 - lat) / 17) * 700;
    const pts = T.stops.map((st) => [X(st.lon), Y(st.lat)]);
    const home = [X(T.home.lon), Y(T.home.lat)];
    const all = [home, ...pts];
    const segs = pts.map((pt, i) => {
      const [x1, y1] = all[i], [x2, y2] = pt;
      const mx = (x1 + x2) / 2, my = (y1 + y2) / 2 - Math.hypot(x2 - x1, y2 - y1) * 0.25;
      return `<path class="tmap__seg" data-seg="${i}" d="M${x1.toFixed(1)} ${y1.toFixed(1)} Q${mx.toFixed(1)} ${my.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}" pathLength="1" />`;
    }).join("");
    const grid = [];
    for (let lon = 0; lon <= 24; lon += 4) grid.push(`<line x1="${X(lon)}" y1="0" x2="${X(lon)}" y2="700" />`);
    for (let lat = 40; lat <= 54; lat += 2) grid.push(`<line x1="0" y1="${Y(lat)}" x2="1000" y2="${Y(lat)}" />`);
    const dots = T.stops.map((st, i) => {
      const [x, y] = pts[i];
      const ex = (st.extra || []).map((e) => `<circle class="tmap__mini" cx="${X(e.lon).toFixed(1)}" cy="${Y(e.lat).toFixed(1)}" r="4" />`).join("");
      return `<g class="tmap__stop" data-stop="${i}">${ex}<circle class="tmap__pulse" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="16" /><circle class="tmap__dot" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="8" /><text x="${(x + 14).toFixed(1)}" y="${(y - 12).toFixed(1)}">${tx(st.name)}</text></g>`;
    }).join("");
    return `<section class="s-trips" data-trips>
      <div class="container">
        <div class="section-head">
          <p class="eyebrow reveal-up"><span>✦</span> <span>${tx(T.subtitle)}</span></p>
          <h2 class="section-title reveal-up">${tx(T.title)}</h2>
        </div>
        <div class="trips">
          <div class="trips__map">
            <svg class="tmap" viewBox="0 0 1000 700" aria-hidden="true">
              <g class="tmap__grid">${grid.join("")}</g>
              ${segs}
              <g class="tmap__home"><circle cx="${home[0].toFixed(1)}" cy="${home[1].toFixed(1)}" r="7" /><text x="${(home[0] + 12).toFixed(1)}" y="${(home[1] + 22).toFixed(1)}">${esc(T.home.name)} ★</text></g>
              ${dots}
            </svg>
            <div class="trips__counter"><span data-trip-count>01</span> / ${String(T.stops.length).padStart(2, "0")}</div>
          </div>
          <ol class="trips__list">${T.stops.map((st, i) => `
            <li class="trip" data-trip="${i}">
              <div class="trip__head">
                <span class="trip__num">${String(i + 1).padStart(2, "0")}</span>
                <div><h3 class="trip__name">${tx(st.name)}</h3><span class="trip__meta">${tx(st.country)} · ${tx(st.when)}</span></div>
              </div>
              <p class="trip__title">${tx(st.title)}</p>
              <p class="trip__text">${tx(st.text)}</p>
              ${st.photos.length ? `<div class="trip__photos">${st.photos.map((ph, k) => `<figure class="trip__photo" data-lb="trip-${i}" style="--k:${k}"><img src="${esc(ph)}" alt="${tx(st.name)}" loading="lazy" /></figure>`).join("")}</div>` : ""}
              ${st.link ? `<a href="${esc(st.link.href)}" class="link-arrow">${tx(st.link.label)}</a>` : ""}
            </li>`).join("")}</ol>
        </div>
      </div>
    </section>`;
  }

  function race() {
    const R = P.race;
    if (!R) return "";
    return `<section class="s-race" data-race style="--n:${R.steps.length}">
      <div class="s-race__sticky">
        <div class="container">
          <div class="section-head">
            <p class="eyebrow"><span>✦</span> <span>${tx(R.subtitle)}</span></p>
            <h2 class="section-title">${tx(R.title)}</h2>
          </div>
        </div>
        <div class="lane">
          <div class="lane__water" aria-hidden="true"></div>
          <div class="lane__buoys" aria-hidden="true">${R.steps.map(() => "<i></i>").join("")}</div>
          <img class="lane__boat" src="${esc(R.boat)}" alt="" />
          <span class="lane__wake" aria-hidden="true"></span>
        </div>
        <div class="container">
          <ol class="race-steps">${R.steps.map((st, i) => `
            <li class="race-step" data-step="${i}">
              <span class="race-step__tag">${tx(st.tag)}</span>
              <h3>${tx(st.title)}</h3>
              <p>${tx(st.text)}</p>
            </li>`).join("")}</ol>
        </div>
      </div>
    </section>`;
  }

  function asset() {
    const A = P.asset;
    if (!A) return "";
    return `<section class="s-asset"><div class="container">
      <div class="s-asset__head">
        <h2 class="section-title reveal-up">${tx(A.title).replace("?", "")}<span class="q"> ?</span></h2>
        <p class="s-impact__text reveal-up">${tx(A.text)}</p>
      </div>
      <div class="s-asset__deck">${A.images.map((im, i) => `
        <figure class="deck-card deck-card--${i + 1} reveal-up" data-lb="asset"><img src="${esc(im.src)}" alt="${tx(im.caption)}" loading="lazy" /><figcaption>${tx(im.caption)}</figcaption></figure>`).join("")}</div>
    </div></section>`;
  }

  // Visuels animés en CSS pour Musique (égaliseur) et Cinéma (pellicule)
  function duoVisual(d) {
    if (d.fx === "eq") {
      return `<span class="duo-eq" aria-hidden="true">${Array.from({ length: 18 }, (_, i) => `<i style="--i:${i};--h:${(35 + ((i * 37) % 60))}%"></i>`).join("")}</span>`;
    }
    if (d.fx === "film") {
      const frames = (lang === "en" ? ["Arthouse", "Classics", "Docs", "Animation", "Soundtracks"] : ["Auteur", "Classiques", "Docu", "Animation", "B.O."]);
      const row = frames.map((f, i) => `<span class="duo-film__frame" style="--i:${i}"><b>${esc(f)}</b></span>`).join("");
      return `<span class="duo-film" aria-hidden="true"><span class="duo-film__track">${row}${row}</span></span>`;
    }
    return d.img ? `<span class="duo-card__obj duo-card__obj--${esc(d.fx || "")}"><img src="${esc(d.img)}" alt="" loading="lazy" /></span>` : "";
  }

  function duo() {
    if (!P.duo) return "";
    return `<section class="s-duo"><div class="container s-duo__grid">${P.duo.map((d, i) => `
      <article class="duo-card reveal-up" style="--d:${i * 0.12}s">
        ${duoVisual(d)}
        <h3 class="duo-card__title">${tx(d.title)}</h3>
        <p>${tx(d.text)}</p>
      </article>`).join("")}</div></section>`;
  }

  function quote() {
    if (!P.quote) return "";
    return `<section class="s-quote"><div class="container"><blockquote class="s-quote__text reveal-up">“${tx(P.quote)}”</blockquote></div></section>`;
  }

  function banner() {
    const B = P.banner;
    if (!B) return "";
    return `<section class="s-banner" data-banner aria-label="${tx(B.quote)}">
      <img class="s-banner__img" src="${esc(B.src)}" alt="" loading="lazy" />
      <p class="s-banner__quote reveal-up">${tx(B.quote)}</p>
    </section>`;
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
    const lead = P.role.lead ? `<p class="role-lead reveal-up">${tx(P.role.lead)}</p>` : "";
    const withImg = P.role.image ? `<figure class="role-photo reveal-up">${media(P.role.image, "", "role-photo__media", "story.placeholder", "role")}</figure>` : "";
    return `<section class="s-role"><div class="container">${head}${lead}
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
        <div class="posters__track">${P.posters.items.map((it, i) => media(it.src, pick(it.alt), `poster poster--${(i % 3) + 1}${it.fit === "contain" ? " poster--art" : ""}${it.wide ? " poster--wide" : ""}`, "story.visualPh", "posters")).join("")}</div>
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
    root.innerHTML = hero() + marquee() + intro() + trips() + race() + project() + context() + services() + concept() + event() + stats() + editions() + banner() + walker() + role() + (P.showcaseAfter ? "" : showcase()) + asset() + duo() + quote() + highlights() + impact() + award() + outro() + (P.showcaseAfter ? showcase() : "") + mascot() + faq() + posters() + gallery() + links() + next() + cta();
    document.title = `${pick(P.title)} — Léa Datin`;
    const meta = $('meta[name="description"]');
    if (meta) meta.setAttribute("content", pick(P.tagline));
    bindDrag();
    bindMascot();
  };

  /* ---------- scroll: eclipse moon ---------- */
  function onScroll() {
    const eds = $$("[data-ed-color]");
    if (eds.length) {
      const mid = window.innerHeight * 0.55;
      let cur = eds[0];
      eds.forEach((e) => { if (e.getBoundingClientRect().top < mid) cur = e; });
      document.body.style.setProperty("--ed", cur.dataset.edColor);
      document.body.style.setProperty("--ed2", cur.dataset.edColor2);
    }
    const tr = $("[data-trips]");
    if (tr) {
      const items = $$(".trip", tr);
      const mid = window.innerHeight * 0.5;
      let cur = 0;
      items.forEach((el, i) => { if (el.getBoundingClientRect().top < mid) cur = i; });
      items.forEach((el, i) => el.classList.toggle("is-on", i === cur));
      $$(".tmap__seg", tr).forEach((el, i) => el.classList.toggle("is-drawn", i <= cur));
      $$(".tmap__stop", tr).forEach((el, i) => { el.classList.toggle("is-on", i === cur); el.classList.toggle("is-past", i < cur); });
      const c = $("[data-trip-count]", tr); if (c) c.textContent = String(cur + 1).padStart(2, "0");
    }
    const rc = $("[data-race]");
    if (rc) {
      const r = rc.getBoundingClientRect();
      const total = rc.offsetHeight - window.innerHeight;
      const p = total > 0 ? Math.min(Math.max(-r.top / total, 0), 1) : 0;
      rc.style.setProperty("--rp", reduceMotion ? 1 : p);
      const n = P.race.steps.length;
      const cur = Math.min(n - 1, Math.floor(p * n * 0.999));
      $$(".race-step", rc).forEach((el, i) => { el.classList.toggle("is-on", i === cur); el.classList.toggle("is-done", i < cur); });
    }
    const ban = $("[data-banner]");
    if (ban && !reduceMotion) {
      const r = ban.getBoundingClientRect();
      const p = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
      ban.style.setProperty("--by", `${(p * 18).toFixed(2)}%`);
    }
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

  /* ---------- objets 3D : suivent la souris ---------- */
  window.addEventListener("mousemove", (e) => {
    const o = document.querySelector(".o3");
    if (!o) return;
    o.style.setProperty("--mx", (e.clientX / innerWidth - 0.5).toFixed(3));
    o.style.setProperty("--my", (e.clientY / innerHeight - 0.5).toFixed(3));
  }, { passive: true });

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
