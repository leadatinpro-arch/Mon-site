// Générateur statique : produit site/**/index.html en FR (racine) et EN (/en/).
// Usage : node build/build.mjs
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  SITE, ROUTES, UI, PASSIONS, HOME, TESTIMONIALS, ABOUT, PASSION_PAGE,
  EXPERIENCE, PROJECTS, CONTACT, NOTFOUND,
} from './content.mjs';

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'site');
const LANGS = ['fr', 'en'];
const PASSION_KEYS = ['art', 'sport', 'travel'];

const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// Les textes entre [crochets] sont des emplacements à compléter : on les signale visuellement.
const txt = (s) => esc(s).replace(/\[([^\]]+)\]/g, '<span class="todo">[$1]</span>');

// ---------- Icônes (SVG inline, trait 1.8) ----------
const ICONS = {
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowLeft: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  arrowUp: '<path d="M12 19V5M6 11l6-6 6 6"/>',
  download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>',
  palette: '<path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.7-.8 1.7-1.7 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-.9.8-1.7 1.7-1.7H16a5 5 0 0 0 5-5c0-4-4-7.2-9-7.2z"/><circle cx="7.5" cy="11" r="1.2"/><circle cx="10" cy="7" r="1.2"/><circle cx="15" cy="7.5" r="1.2"/>',
  sport: '<circle cx="12" cy="12" r="9"/><path d="M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18M3 12h18"/>',
  plane: '<path d="M10.5 13.5 3 11l1.5-1.5 8 1 4-4.5a2.1 2.1 0 0 1 3 3l-4.5 4 1 8L15.5 22 13 14.5l-3 3v3L8.5 22 7 17l-5-1.5L3.5 14h3z"/>',
  reset: '<path d="M4 12a8 8 0 1 0 2.4-5.7L4 8.6"/><path d="M4 4v4.6h4.6"/>',
  pin: '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  quote: '<path d="M9 7H5v5h4v1a3 3 0 0 1-3 3M19 7h-4v5h4v1a3 3 0 0 1-3 3"/>',
  send: '<path d="M21 3 10 14M21 3l-7 18-4-7-7-4z"/>',
  school: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
};
const icon = (name, cls = '') =>
  `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;

const t = (o, lang) => (o && typeof o === 'object' && lang in o ? o[lang] : o);
// Liens relatifs : le site s'ouvre aussi bien en local (double-clic) que sur n'importe quel hébergeur.
// La page 404 garde des liens absolus car elle est servie à des adresses quelconques.
let DEPTH = 0; // profondeur de dossier de la page en cours ; null = liens absolus
const href = (path) => {
  if (DEPTH === null) return path;
  const [p, hash = ''] = path.split('#');
  const file = (p.endsWith('/') ? p + 'index.html' : p).replace(/^\//, '');
  return '../'.repeat(DEPTH) + file + (hash ? '#' + hash : '');
};
const url = (key, lang) => href(ROUTES[key][lang]);
const other = (lang) => (lang === 'fr' ? 'en' : 'fr');

const logo = (lang) =>
  `<a class="logo" href="${url('home', lang)}" aria-label="Léa Datin — ${t(UI.nav.home, lang)}">Léa <span>DATIN</span></a>`;

const eyebrow = (num, label) =>
  `<p class="eyebrow">${num ? `<span class="eyebrow__num">${num}</span>` : ''}${esc(label)}</p>`;

const img = (src, alt, cls = '') =>
  `<img class="${cls}" src="${href(src)}" alt="${esc(alt)}" loading="lazy" decoding="async">`;

// ---------- Blocs communs ----------
function langSwitch(lang, pageKey) {
  const target = url(pageKey, other(lang));
  return `<a class="lang-switch${lang === 'en' ? ' is-en' : ''}" href="${target}" hreflang="${other(lang)}" data-lang-switch aria-label="${esc(t(UI.langSwitch, lang))}">
    <span class="lang-switch__label" aria-hidden="true">FR</span>
    <span class="lang-switch__label" aria-hidden="true">EN</span>
    <span class="lang-switch__thumb" aria-hidden="true"></span>
  </a>`;
}

function navLinks(lang, pageKey, cls) {
  const cur = ['art', 'sport', 'travel'].includes(pageKey) ? 'about' : pageKey;
  const item = (key) =>
    `<li><a class="${cls}__link" href="${url(key, lang)}"${cur === key ? ' aria-current="page"' : ''}>${esc(t(UI.nav[key], lang))}</a></li>`;
  return `<ul class="${cls}__list">
    ${item('home')}${item('about')}${item('experience')}${item('projects')}
    <li><a class="${cls}__link ${cls}__link--cv" href="${href(SITE.cv)}" download>${icon('download')}${esc(t(UI.nav.cv, lang))}</a></li>
    ${item('contact')}
  </ul>`;
}

function header(lang, pageKey) {
  return `<a class="skip-link" href="#main">${esc(t(UI.skip, lang))}</a>
<header class="site-header" data-header>
  <div class="container site-header__inner">
    ${logo(lang)}
    <nav class="main-nav" aria-label="${esc(t(UI.navLabel, lang))}">
      ${navLinks(lang, pageKey, 'main-nav')}
    </nav>
    <div class="site-header__actions">
      ${langSwitch(lang, pageKey)}
      <button class="burger" type="button" aria-expanded="false" aria-controls="mobile-menu"
        data-burger data-label-open="${esc(t(UI.menuOpen, lang))}" data-label-close="${esc(t(UI.menuClose, lang))}"
        aria-label="${esc(t(UI.menuOpen, lang))}"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>
<div class="mobile-menu" id="mobile-menu" data-mobile-menu aria-hidden="true" inert>
  <nav class="mobile-menu__nav" aria-label="${esc(t(UI.navLabel, lang))}">
    ${navLinks(lang, pageKey, 'mobile-menu')}
  </nav>
  <div class="mobile-menu__foot">
    <a href="mailto:${SITE.email}">${icon('mail')}${esc(SITE.email)}</a>
    <a href="${SITE.linkedin}" target="_blank" rel="noopener">${icon('linkedin')}LinkedIn</a>
  </div>
</div>`;
}

function footer(lang) {
  const year = new Date().getFullYear();
  return `<footer class="site-footer" data-theme="dark">
  <div class="container site-footer__grid">
    <div>
      ${logo(lang)}
      <p class="site-footer__tag">${esc(t(UI.footerTag, lang))}</p>
    </div>
    <nav aria-label="Footer">
      <ul class="site-footer__nav">
        ${['home', 'about', 'experience', 'projects', 'contact'].map((k) => `<li><a class="u-link" href="${url(k, lang)}">${esc(t(UI.nav[k], lang))}</a></li>`).join('')}
      </ul>
    </nav>
    <div class="site-footer__contact">
      <p class="script">${esc(t(UI.footerWrite, lang))}</p>
      <a class="u-link" href="mailto:${SITE.email}">${icon('mail')}${esc(SITE.email)}</a>
      <a class="u-link" href="${SITE.linkedin}" target="_blank" rel="noopener">${icon('linkedin')}LinkedIn</a>
    </div>
  </div>
  <div class="container site-footer__bottom">
    <p>© ${year} Léa Datin. ${esc(t(UI.rights, lang))}</p>
    <button type="button" class="u-link" data-cookie-open>${esc(t(UI.cookieSettings, lang))}</button>
  </div>
</footer>
<button class="to-top" type="button" data-to-top aria-label="${esc(t(UI.backToTop, lang))}">${icon('arrowUp')}</button>
<div class="cookie" data-cookie role="dialog" aria-live="polite" aria-label="Cookies" hidden>
  <p>${esc(t(UI.cookie.text, lang))}</p>
  <div class="cookie__actions">
    <button type="button" class="btn btn--ghost btn--sm" data-cookie-refuse>${esc(t(UI.cookie.refuse, lang))}</button>
    <button type="button" class="btn btn--primary btn--sm" data-cookie-accept>${esc(t(UI.cookie.accept, lang))}</button>
  </div>
</div>`;
}

function layout(lang, pageKey, { title, description, content, bodyClass = '', noindex = false }) {
  const canonical = SITE.baseUrl + ROUTES[pageKey][lang];
  const alt = LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${SITE.baseUrl}${ROUTES[pageKey][l]}">`).join('\n  ');
  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  ${noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${canonical}">\n  ${alt}\n  <link rel="alternate" hreflang="x-default" href="${SITE.baseUrl}${ROUTES[pageKey].fr}">`}
  <meta name="theme-color" content="#03012A">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Léa Datin">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:locale" content="${lang === 'fr' ? 'fr_FR' : 'en_GB'}">
  <meta property="og:image" content="${SITE.baseUrl}/assets/img/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="${href('/assets/img/favicon.svg')}" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,500;0,700;1,400&family=League+Spartan:wght@600;700;800&family=Caveat:wght@500;700&display=swap">
  <link rel="stylesheet" href="${href('/assets/css/style.css')}">
  <script>document.documentElement.classList.add('js');</script>
  <script src="${href('/assets/js/main.js')}" defer data-analytics-provider="${SITE.analytics.provider}" data-analytics-id="${SITE.analytics.id}"></script>
</head>
<body class="${bodyClass}">
${header(lang, pageKey)}
<main id="main">
${content}
</main>
${footer(lang)}
</body>
</html>
`;
}

const blobs = (variant = '') =>
  `<div class="blobs ${variant}" aria-hidden="true"><span class="blob blob--1"></span><span class="blob blob--2"></span><span class="blob blob--3"></span></div>`;

function pageHero(lang, { eyebrowText, title, text, script, theme = 'light', extra = '' }) {
  return `<section class="page-hero page-hero--${theme}" data-theme="${theme}">
  ${blobs(theme === 'dark' ? 'blobs--dark' : '')}
  <div class="dot-pattern" aria-hidden="true"></div>
  <div class="container page-hero__inner">
    <div data-reveal>${eyebrow('', eyebrowText)}</div>
    <h1 class="page-hero__title" data-reveal style="--d:80ms">${esc(title)}${script ? ` <span class="script script--hero">${esc(script)}</span>` : ''}</h1>
    <p class="page-hero__text" data-reveal style="--d:160ms">${txt(text)}</p>
    ${extra}
  </div>
</section>`;
}

function passionCard(lang, key, i, { big = false } = {}) {
  const p = PASSIONS[key];
  return `<a class="passion-card passion-card--${p.color}${big ? ' passion-card--big' : ''}" href="${url(p.route, lang)}" data-reveal style="--d:${i * 90}ms">
    <span class="passion-card__logo">${img(`/assets/img/logo-${key}.svg`, '', 'passion-card__logo-img')}</span>
    <span class="passion-card__title">${esc(t(p.title, lang))}</span>
    <span class="passion-card__text">${esc(t(p.teaser, lang))}</span>
    <span class="passion-card__arrow">${icon('arrow')}</span>
  </a>`;
}

function projectCard(lang, p, i) {
  return `<a class="project-card shine-border" href="${url('projects', lang)}#${p.id}" data-reveal style="--d:${i * 90}ms">
    <span class="project-card__media">${img(`/assets/img/project-${p.id}.svg`, p.name)}</span>
    <span class="project-card__body">
      <span class="project-card__tag">${txt(t(p.tag, lang))}</span>
      <span class="project-card__name">${esc(p.name)}</span>
      <span class="project-card__pitch">${txt(t(p.pitch, lang))}</span>
    </span>
  </a>`;
}

const counter = (s, lang) =>
  `<div class="stat"><span class="stat__value">${s.prefix ? esc(s.prefix) : ''}<span data-count="${s.value}">${s.value}</span>${s.suffix || ''}</span><span class="stat__label">${esc(t(s.label, lang))}</span></div>`;

// ---------- Pages ----------
function home(lang) {
  const roles = t(HOME.roles, lang);
  const jobs = EXPERIENCE.items.filter((e) => e.kind === 'job').reverse();
  const content = `
<section class="hero" data-theme="light">
  ${blobs()}
  <div class="dot-pattern" aria-hidden="true"></div>
  <div class="container hero__grid">
    <div class="hero__copy">
      <p class="script hero__hello" data-reveal>${esc(t(HOME.hello, lang))}</p>
      <h1 class="hero__title" data-reveal style="--d:80ms">Léa <span class="text-gradient">Datin</span></h1>
      <p class="hero__role" data-reveal style="--d:160ms">${esc(t(HOME.rolePrefix, lang))}
        <span class="rotator" data-rotator data-words='${esc(JSON.stringify(roles))}' aria-live="polite"><span class="rotator__word">${esc(roles[0])}</span></span>
      </p>
      <p class="hero__lead" data-reveal style="--d:240ms">${esc(t(HOME.lead, lang))}</p>
      <div class="hero__ctas" data-reveal style="--d:320ms">
        <span class="magnetic" data-magnetic>
          <a class="btn btn--primary btn--lg" href="${url('contact', lang)}">${esc(t(UI.contactMe, lang))}${icon('arrow')}</a>
        </span>
        <a class="btn btn--ghost btn--lg" href="${href(SITE.cv)}" download>${icon('download')}${esc(t(UI.cvDownload, lang))}</a>
      </div>
      <div class="stats" data-reveal style="--d:400ms">${HOME.stats.map((s) => counter(s, lang)).join('')}</div>
    </div>
    <div class="hero__visual" data-reveal="scale" style="--d:200ms">
      <div class="portrait border-beam">
        ${img('/assets/img/portrait.svg', lang === 'fr' ? 'Portrait de Léa Datin' : 'Portrait of Léa Datin', 'portrait__img')}
      </div>
      <span class="hero__badge hero__badge--1">${icon('pin')} Nancy</span>
      <span class="hero__badge hero__badge--2">ICN · PGE 2026</span>
    </div>
  </div>
</section>

<section class="section" data-theme="light">
  <div class="container">
    <div class="section-head" data-reveal>
      ${eyebrow('01', t(HOME.whoEyebrow, lang))}
      <h2>${esc(t(HOME.whoTitle, lang))}</h2>
      <p>${esc(t(HOME.whoText, lang))}</p>
    </div>
    <div class="passion-grid">${PASSION_KEYS.map((k, i) => passionCard(lang, k, i)).join('')}</div>
    <p class="section-cta" data-reveal><a class="btn btn--ghost" href="${url('about', lang)}">${esc(t(HOME.whoMore, lang))}${icon('arrow')}</a></p>
  </div>
</section>

<section class="section section--dark" data-theme="dark">
  ${blobs('blobs--dark')}
  <div class="container exp-teaser">
    <div class="exp-teaser__copy">
      <div data-reveal>${eyebrow('02', t(HOME.expEyebrow, lang))}</div>
      <h2 data-reveal style="--d:80ms">${esc(t(HOME.expTitle, lang))}</h2>
      <p data-reveal style="--d:160ms">${esc(t(HOME.expText, lang))}</p>
      <div class="stats stats--dark" data-reveal style="--d:240ms">${HOME.expStats.map((s) => counter(s, lang)).join('')}</div>
      <p data-reveal style="--d:320ms"><a class="btn btn--primary" href="${url('experience', lang)}">${esc(t(HOME.expCta, lang))}${icon('arrow')}</a></p>
    </div>
    <ol class="mini-timeline">
      ${jobs.map((j, i) => `<li class="mini-timeline__item glass" data-reveal="right" style="--d:${i * 100}ms">
        <span class="mini-timeline__date">${esc(t(j.date, lang))}</span>
        <span class="mini-timeline__org">${esc(j.org)}</span>
        <span class="mini-timeline__role">${esc(t(j.title, lang))}</span>
      </li>`).join('')}
    </ol>
  </div>
</section>

<section class="section section--tint" data-theme="light">
  <div class="container">
    <div class="section-head" data-reveal>
      ${eyebrow('03', t(HOME.projEyebrow, lang))}
      <h2>${esc(t(HOME.projTitle, lang))}</h2>
    </div>
    <div class="project-grid">${PROJECTS.items.map((p, i) => projectCard(lang, p, i)).join('')}</div>
    <p class="section-cta" data-reveal><a class="btn btn--ghost" href="${url('projects', lang)}">${esc(t(HOME.projCta, lang))}${icon('arrow')}</a></p>
  </div>
</section>

<section class="section" data-theme="light">
  <div class="container">
    <div class="section-head section-head--center" data-reveal>
      ${eyebrow('04', t(HOME.testiEyebrow, lang))}
      <h2>${esc(t(HOME.testiTitle, lang))}</h2>
    </div>
    <div class="testimonials">
      ${TESTIMONIALS.map((q, i) => `<figure class="testimonial" data-reveal style="--d:${i * 120}ms">
        ${icon('quote', 'testimonial__icon')}
        <blockquote>${txt(t(q.quote, lang))}</blockquote>
        <figcaption><span class="testimonial__avatar" aria-hidden="true">${q.name.split(' ').map((w) => w[0]).join('')}</span>
          <span><strong>${esc(q.name)}</strong><span>${esc(t(q.role, lang))}</span></span></figcaption>
      </figure>`).join('')}
    </div>
  </div>
</section>`;
  return layout(lang, 'home', { title: t(HOME.metaTitle, lang), description: t(HOME.metaDesc, lang), content, bodyClass: 'page-home' });
}

function about(lang) {
  const photos = ABOUT.album;
  const content = `
${pageHero(lang, { eyebrowText: t(ABOUT.heroEyebrow, lang), title: t(ABOUT.heroTitle, lang), text: t(ABOUT.heroText, lang), script: t(ABOUT.heroScript, lang) })}

<section class="section section--gradient" data-theme="light">
  ${blobs('blobs--soft')}
  <div class="container about-who">
    <div class="about-who__photo" data-reveal="left">
      ${img('/assets/img/about-portrait.svg', lang === 'fr' ? 'Léa Datin' : 'Léa Datin', 'rounded')}
    </div>
    <div class="glass glass--light about-who__card" data-reveal="right">
      ${eyebrow('01', t(ABOUT.whoTitle, lang))}
      <h2>${esc(t(ABOUT.whoTitle, lang))}</h2>
      <p>${esc(t(ABOUT.whoText, lang))}</p>
      <ul class="chips">${ABOUT.traits.map((tr) => `<li class="chip">${esc(t(tr, lang))}</li>`).join('')}</ul>
    </div>
  </div>
</section>

<section class="section section--dark" data-theme="dark">
  ${blobs('blobs--dark')}
  <div class="container">
    <div class="section-head" data-reveal>
      ${eyebrow('02', t(ABOUT.visionTitle, lang))}
      <h2>${esc(t(ABOUT.visionTitle, lang))}</h2>
      <p class="script script--lg">${esc(t(ABOUT.visionIntro, lang))}</p>
    </div>
    <div class="vision-grid">
      ${ABOUT.vision.map((v, i) => `<article class="glass vision-card" data-reveal style="--d:${i * 110}ms">
        <span class="vision-card__num">0${i + 1}</span>
        <h3>${esc(t(v.title, lang))}</h3>
        <p>${esc(t(v.text, lang))}</p>
      </article>`).join('')}
    </div>
  </div>
</section>

<section class="section" data-theme="light">
  <div class="container">
    <div class="section-head" data-reveal>
      ${eyebrow('03', t(ABOUT.inspireTitle, lang))}
      <h2>${esc(t(ABOUT.inspireTitle, lang))}</h2>
      <p>${esc(t(ABOUT.inspireText, lang))}</p>
    </div>
    <div class="panels" data-reveal>
      ${PASSION_KEYS.map((k) => {
        const p = PASSIONS[k];
        return `<a class="panel panel--${p.color}" href="${url(p.route, lang)}">
          ${img(`/assets/img/${k}-cover.svg`, '', 'panel__bg')}
          <span class="panel__vertical" aria-hidden="true">${esc(t(p.title, lang))}</span>
          <span class="panel__content">
            <span class="panel__logo">${img(`/assets/img/logo-${k}.svg`, '')}</span>
            <span class="panel__title">${esc(t(p.title, lang))}</span>
            <span class="panel__text">${esc(t(p.teaser, lang))}</span>
            <span class="panel__cta">${esc(t(ABOUT.discover, lang))} ${icon('arrow')}</span>
          </span>
        </a>`;
      }).join('')}
    </div>
  </div>
</section>

<section class="section section--dark" data-theme="dark">
  ${blobs('blobs--dark')}
  <div class="container album-wrap">
    <div class="section-head" data-reveal>
      ${eyebrow('04', t(ABOUT.albumTitle, lang))}
      <h2>${esc(t(ABOUT.albumTitle, lang))}</h2>
      <p>${esc(t(ABOUT.albumText, lang))}</p>
    </div>
    <div class="album" data-album data-reveal="scale">
      <div class="album__stage">
        ${photos.map((cap, i) => `<button type="button" class="album__card" data-album-card style="--i:${i};--rot:${[-4, 3, -2, 5, -3][i % 5]}deg" aria-label="${esc(t(ABOUT.albumNext, lang))}">
          <span class="album__face album__face--front">${img(`/assets/img/album-${i + 1}.svg`, t(cap, lang))}</span>
          <span class="album__face album__face--back"><span class="script">${txt(t(cap, lang))}</span><span class="album__count">${i + 1} / ${photos.length}</span></span>
        </button>`).join('')}
      </div>
      <div class="album__controls">
        <button type="button" class="icon-btn" data-album-prev aria-label="${esc(t(ABOUT.albumPrev, lang))}">${icon('arrowLeft')}</button>
        <div class="album__dots" role="group">
          ${photos.map((_, i) => `<button type="button" class="album__dot" data-album-dot="${i}" aria-label="${esc(t(ABOUT.albumGoto, lang))} ${i + 1}"></button>`).join('')}
        </div>
        <button type="button" class="icon-btn" data-album-next aria-label="${esc(t(ABOUT.albumNext, lang))}">${icon('arrow')}</button>
        <button type="button" class="btn btn--ghost btn--sm album__reset" data-album-reset>${icon('reset')}${esc(t(ABOUT.albumReset, lang))}</button>
      </div>
    </div>
  </div>
</section>`;
  return layout(lang, 'about', { title: t(ABOUT.metaTitle, lang), description: t(ABOUT.metaDesc, lang), content, bodyClass: 'page-about' });
}

function passionPage(lang, key) {
  const p = PASSIONS[key];
  const others = PASSION_KEYS.filter((k) => k !== key);
  const content = `
<section class="page-hero page-hero--passion page-hero--${p.color}" data-theme="dark">
  ${blobs('blobs--dark')}
  <div class="container page-hero__inner passion-hero">
    <a class="back-link u-link" href="${url('about', lang)}" data-reveal>${icon('arrowLeft')}${esc(t(PASSION_PAGE.back, lang))}</a>
    <div class="passion-hero__logo" data-reveal="scale" style="--d:80ms">${img(`/assets/img/logo-${key}.svg`, '')}</div>
    <h1 class="page-hero__title" data-reveal style="--d:140ms">${esc(t(p.title, lang))}</h1>
    <p class="page-hero__text" data-reveal style="--d:200ms">${esc(t(p.intro, lang))}</p>
  </div>
</section>

<section class="section section--gradient" data-theme="light">
  ${blobs('blobs--soft')}
  <div class="container passion-body">
    <article class="glass glass--light" data-reveal="left">
      ${eyebrow('01', t(PASSION_PAGE.whyTitle, lang))}
      <h2>${esc(t(PASSION_PAGE.whyTitle, lang))}</h2>
      <p>${txt(t(p.why, lang))}</p>
    </article>
    <article class="glass glass--light" data-reveal="right" style="--d:100ms">
      ${eyebrow('02', t(PASSION_PAGE.workTitle, lang))}
      <h2>${esc(t(PASSION_PAGE.workTitle, lang))}</h2>
      <p>${esc(t(p.work, lang))}</p>
    </article>
  </div>
</section>

<section class="section" data-theme="light">
  <div class="container">
    <div class="section-head" data-reveal>${eyebrow('03', t(PASSION_PAGE.galleryTitle, lang))}<h2>${esc(t(PASSION_PAGE.galleryTitle, lang))}</h2></div>
    <div class="gallery">
      ${[1, 2, 3, 4].map((n, i) => `<figure class="gallery__item" data-reveal style="--d:${i * 80}ms">${img(`/assets/img/${key}-${n}.svg`, `${t(p.title, lang)} ${n}`)}</figure>`).join('')}
    </div>
  </div>
</section>

<section class="section section--dark" data-theme="dark">
  <div class="container">
    <div class="section-head" data-reveal><h2>${esc(t(PASSION_PAGE.others, lang))}</h2></div>
    <div class="passion-grid passion-grid--2">${others.map((k, i) => passionCard(lang, k, i)).join('')}</div>
  </div>
</section>`;
  return layout(lang, key, {
    title: `${t(p.title, lang)} — Léa Datin`,
    description: t(PASSION_PAGE.metaDesc, lang) + t(p.title, lang).toLowerCase() + '. ' + t(p.teaser, lang),
    content, bodyClass: 'page-passion',
  });
}

function experience(lang) {
  const L = EXPERIENCE.labels;
  const last = EXPERIENCE.items.length - 1;
  const content = `
${pageHero(lang, { eyebrowText: t(EXPERIENCE.heroEyebrow, lang), title: t(EXPERIENCE.heroTitle, lang), text: t(EXPERIENCE.heroText, lang), theme: 'dark' })}

<section class="section" data-theme="light">
  <div class="container container--narrow">
    <ol class="timeline" data-accordion>
      ${EXPERIENCE.items.map((e, i) => {
        const open = i === last;
        const id = `exp-${i}`;
        const details = e.kind === 'job'
          ? `<div class="timeline__cols">
              <div><h4>${esc(t(L.context, lang))}</h4><p>${esc(t(e.context, lang))}</p>
              <h4>${esc(t(L.why, lang))}</h4><p>${esc(t(e.why, lang))}</p></div>
              <div><h4>${esc(t(L.resp, lang))}</h4><ul class="check-list">${e.resp.map((r) => `<li>${esc(t(r, lang))}</li>`).join('')}</ul></div>
            </div>`
          : `<p>${esc(t(e.summary, lang))}</p>`;
        return `<li class="timeline__item timeline__item--${e.kind}${open ? ' is-open' : ''}" data-reveal style="--d:${i * 70}ms">
          <span class="timeline__dot" aria-hidden="true">${icon(e.kind === 'job' ? 'briefcase' : 'school')}</span>
          <h3 class="timeline__heading">
            <button type="button" class="timeline__trigger" aria-expanded="${open}" aria-controls="${id}" data-accordion-trigger>
              <span class="timeline__meta"><span class="badge badge--${e.kind}">${esc(t(L[e.kind], lang))}</span><span class="timeline__date">${esc(t(e.date, lang))}</span></span>
              <span class="timeline__org">${esc(e.org)}</span>
              <span class="timeline__title">${esc(t(e.title, lang))}</span>
              <span class="timeline__summary">${esc(t(e.summary, lang))}</span>
              <span class="timeline__toggle" aria-hidden="true">${icon('plus')}</span>
            </button>
          </h3>
          <div class="timeline__panel" id="${id}" role="region"${open ? '' : ' inert'}>
            <div class="timeline__panel-inner"><div class="timeline__body">${details}</div></div>
          </div>
        </li>`;
      }).join('')}
    </ol>
    <p class="section-cta section-cta--center" data-reveal>
      <span class="magnetic" data-magnetic><a class="btn btn--primary btn--lg" href="${url('contact', lang)}">${esc(t(EXPERIENCE.cta, lang))}${icon('arrow')}</a></span>
      <a class="btn btn--ghost btn--lg" href="${href(SITE.cv)}" download>${icon('download')}${esc(t(UI.cvDownload, lang))}</a>
    </p>
  </div>
</section>`;
  return layout(lang, 'experience', { title: t(EXPERIENCE.metaTitle, lang), description: t(EXPERIENCE.metaDesc, lang), content, bodyClass: 'page-experience' });
}

function projects(lang) {
  const content = `
${pageHero(lang, { eyebrowText: t(PROJECTS.heroEyebrow, lang), title: t(PROJECTS.heroTitle, lang), text: t(PROJECTS.heroText, lang) })}
${PROJECTS.items.map((p, i) => {
  const dark = i % 2 === 1;
  return `<section class="section project${dark ? ' section--dark' : i ? ' section--tint' : ''}" id="${p.id}" data-theme="${dark ? 'dark' : 'light'}">
  ${dark ? blobs('blobs--dark') : ''}
  <div class="container project__grid${i % 2 ? ' project__grid--rev' : ''}">
    <div class="project__media border-beam" data-reveal="${i % 2 ? 'right' : 'left'}">${img(`/assets/img/project-${p.id}.svg`, p.name)}</div>
    <div class="project__copy">
      <div data-reveal>${eyebrow(`0${i + 1}`, t(p.tag, lang))}</div>
      <h2 class="project__name" data-reveal style="--d:80ms">${esc(p.name)}</h2>
      <p class="project__pitch" data-reveal style="--d:140ms">${txt(t(p.pitch, lang))}</p>
      <p data-reveal style="--d:200ms">${txt(t(p.text, lang))}</p>
      <p class="project__role" data-reveal style="--d:260ms"><strong>${esc(t(PROJECTS.roleLabel, lang))} :</strong> ${txt(t(p.role, lang))}</p>
    </div>
  </div>
</section>`;
}).join('\n')}`;
  return layout(lang, 'projects', { title: t(PROJECTS.metaTitle, lang), description: t(PROJECTS.metaDesc, lang), content, bodyClass: 'page-projects' });
}

function contact(lang) {
  const C = CONTACT;
  const content = `
${pageHero(lang, { eyebrowText: t(C.heroEyebrow, lang), title: t(C.heroTitle, lang), text: t(C.heroText, lang), script: t(C.heroScript, lang), theme: 'dark' })}

<section class="section section--gradient" data-theme="light">
  ${blobs('blobs--soft')}
  <div class="container contact-grid">
    <div class="contact-cards">
      <a class="contact-card glass glass--light" href="mailto:${SITE.email}" data-reveal="left">
        <span class="contact-card__icon">${icon('mail')}</span>
        <span><span class="contact-card__label">${esc(t(C.cards.email, lang))}</span><span class="contact-card__value">${esc(SITE.email)}</span></span>
      </a>
      <a class="contact-card glass glass--light" href="${SITE.linkedin}" target="_blank" rel="noopener" data-reveal="left" style="--d:90ms">
        <span class="contact-card__icon">${icon('linkedin')}</span>
        <span><span class="contact-card__label">${esc(t(C.cards.linkedin, lang))}</span><span class="contact-card__value">${esc(t(C.cards.linkedinText, lang))}</span></span>
      </a>
      <a class="contact-card glass glass--light" href="${href(SITE.cv)}" download data-reveal="left" style="--d:180ms">
        <span class="contact-card__icon">${icon('download')}</span>
        <span><span class="contact-card__label">${esc(t(C.cards.cv, lang))}</span><span class="contact-card__value">${esc(t(C.cards.cvText, lang))}</span></span>
      </a>
    </div>
    <form class="contact-form glass glass--light" data-contact-form data-email="${SITE.email}" data-reveal="right">
      <h2>${esc(t(C.form.title, lang))}</h2>
      <div class="field-row">
        <label class="field"><span>${esc(t(C.form.name, lang))}</span><input name="name" autocomplete="name" required></label>
        <label class="field"><span>${esc(t(C.form.email, lang))}</span><input name="email" type="email" autocomplete="email" required></label>
      </div>
      <label class="field"><span>${esc(t(C.form.subject, lang))}</span><input name="subject" required></label>
      <label class="field"><span>${esc(t(C.form.message, lang))}</span><textarea name="message" rows="5" required></textarea></label>
      <div class="contact-form__foot">
        <span class="magnetic" data-magnetic><button class="btn btn--primary" type="submit">${esc(t(C.form.send, lang))}${icon('send')}</button></span>
        <small>${esc(t(C.form.note, lang))}</small>
      </div>
    </form>
  </div>
</section>`;
  return layout(lang, 'contact', { title: t(C.metaTitle, lang), description: t(C.metaDesc, lang), content, bodyClass: 'page-contact' });
}

function notFound(lang) {
  const content = `
<section class="nf" data-theme="light">
  ${blobs()}
  <div class="container nf__inner">
    <h1 class="nf__code" aria-label="404"><span aria-hidden="true">4</span><span class="nf__ball-wrap" aria-hidden="true"><span class="nf__ball">0</span><span class="nf__shadow"></span></span><span aria-hidden="true">4</span></h1>
    <p class="nf__text">${esc(t(NOTFOUND.text, lang))}</p>
    <span class="magnetic" data-magnetic><a class="btn btn--primary btn--lg" href="${url('home', lang)}">${icon('arrowLeft')}${esc(t(NOTFOUND.cta, lang))}</a></span>
  </div>
</section>`;
  return layout(lang, 'notfound', { title: t(NOTFOUND.metaTitle, lang), description: t(NOTFOUND.text, lang), content, bodyClass: 'page-404', noindex: true });
}

// ---------- Écriture ----------
function write(route, html) {
  const file = join(OUT, route.endsWith('/') ? route + 'index.html' : route);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  return file;
}

let count = 0;
for (const lang of LANGS) {
  const pages = {
    home: () => home(lang), about: () => about(lang), experience: () => experience(lang), projects: () => projects(lang),
    contact: () => contact(lang), notfound: () => notFound(lang),
    ...Object.fromEntries(PASSION_KEYS.map((k) => [k, () => passionPage(lang, k)])),
  };
  for (const [key, render] of Object.entries(pages)) {
    const route = ROUTES[key][lang];
    DEPTH = key === 'notfound' ? null : route.split('/').length - 2;
    write(route, render()); count++;
  }
}

const urls = Object.entries(ROUTES).filter(([k]) => k !== 'notfound');
writeFileSync(join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.flatMap(([, r]) => LANGS.map((l) => `  <url><loc>${SITE.baseUrl}${r[l]}</loc>${LANGS.map((a) => `<xhtml:link rel="alternate" hreflang="${a}" href="${SITE.baseUrl}${r[a]}"/>`).join('')}</url>`)).join('\n')}
</urlset>
`);
writeFileSync(join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE.baseUrl}/sitemap.xml\n`);
console.log(`✓ ${count} pages générées dans site/`);
