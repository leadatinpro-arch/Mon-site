// Générateur statique : produit site/**/index.html en FR (racine) et EN (/en/).
// Les gabarits Accueil, À propos et Expérience reprennent la maquette validée par Léa.
// Usage : node build/build.mjs
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  SITE, GLOBE, ROUTES, UI, PASSIONS, HOME, TESTIMONIALS, TESTI_NOTE, ABOUT, PASSION_PAGE,
  EXPERIENCE, PROJECTS, CONTACT, NOTFOUND,
} from './content.mjs';

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'site');
const LANGS = ['fr', 'en'];
const PASSION_KEYS = ['art', 'sport', 'travel'];

const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// Texte : les [crochets] (à compléter) sont surlignés.
const txt = (s) => esc(s).replace(/\[([^\]]+)\]/g, '<span class="todo">[$1]</span>');
// Texte enrichi : <script>…</script> → accent manuscrit Cortado, <b> et <mark> autorisés.
const rich = (s) => txt(s)
  .replace(/&lt;script&gt;(.*?)&lt;\/script&gt;/g, '<span class="script">$1</span>')
  .replace(/&lt;(\/?)(b|mark)&gt;/g, '<$1$2>');

// ---------- Icônes ----------
const ICONS = {
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowLeft: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  arrowUp: '<path d="M12 19V5M6 11l6-6 6 6"/>',
  download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>',
  reset: '<path d="M4 12a8 8 0 1 0 2.4-5.7L4 8.6"/><path d="M4 4v4.6h4.6"/>',
  send: '<path d="M21 3 10 14M21 3l-7 18-4-7-7-4z"/>',
  school: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
  camera: '<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
};
const icon = (name, cls = '') =>
  `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;

// Formes pleines utilisées pour les objets 3D extrudés (remplissage = currentColor)
const SHAPES = {
  cursor: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M4 2.5 20 10l-6.6 2.2L10.8 19z"/></svg>',
  heart: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 21s-8.5-5.3-8.5-11.2A4.8 4.8 0 0 1 12 6.6a4.8 4.8 0 0 1 8.5 3.2C20.5 15.7 12 21 12 21z"/></svg>',
  play: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm-2 6v8l6.5-4z" fill-rule="evenodd"/></svg>',
  at: '<svg viewBox="0 0 24 24"><text x="12" y="18" text-anchor="middle" font-family="League Spartan, Arial Black, sans-serif" font-weight="800" font-size="20" fill="currentColor">@</text></svg>',
  palette: '<svg viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 2.5a9.5 9.5 0 1 0 0 19c1.3 0 2-.9 2-1.9 0-.5-.2-1-.6-1.3-.3-.4-.5-.8-.5-1.3 0-1 .8-1.8 1.8-1.8h2.2a5.6 5.6 0 0 0 5.6-5.6C22.5 5.6 17.8 2.5 12 2.5zM7 12.8a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2zm3-4.3a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2zm5 .2a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2z"/></svg>',
  oars: '<svg viewBox="0 0 24 24"><g fill="currentColor"><path d="M4.2 2.6 6.9 1l2.2 4.1-2.3 1.4z"/><path d="m7.4 6.3.9-.5 11.9 15.4-1.3.8z"/><path d="M19.8 2.6 17.1 1l-2.2 4.1 2.3 1.4z"/><path d="m16.6 6.3-.9-.5L3.8 21.2l1.3.8z"/></g></svg>',
  plane: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M21.5 3.2c.9-.9-.1-2.2-1.2-1.6L2.8 10.3c-1 .5-.9 1.9.1 2.2l5.2 1.6 1.7 5.6c.3 1 1.6 1.2 2.2.4l2.6-3.3 4.5 3.2c.8.6 2 .1 2.1-.9zM9 13.4l9.4-8.2-7.3 9.7-.4 3.3z"/></svg>',
};

const t = (o, lang) => (o && typeof o === 'object' && lang in o ? o[lang] : o);

// Liens relatifs : le site s'ouvre en local (double-clic) comme chez n'importe quel hébergeur.
// La page 404 garde des liens absolus car elle est servie à des adresses quelconques.
let DEPTH = 0;
const href = (path) => {
  if (DEPTH === null || /^(https?:|mailto:|#)/.test(path)) return path;
  const [p, hash = ''] = path.split('#');
  const file = (p.endsWith('/') ? p + 'index.html' : p).replace(/^\//, '');
  return '../'.repeat(DEPTH) + file + (hash ? '#' + hash : '');
};
const url = (key, lang) => href(ROUTES[key][lang]);
const other = (lang) => (lang === 'fr' ? 'en' : 'fr');
const img = (src, alt, cls = '', style = '') =>
  `<img class="${cls}" src="${href(src)}" alt="${esc(alt)}" loading="lazy" decoding="async"${style ? ` style="${style}"` : ''}>`;
const delay = (s) => `transition-delay:${s}s;`;
const linkedinAttrs = SITE.linkedin === '#' ? 'href="#" aria-disabled="true"' : `href="${SITE.linkedin}" target="_blank" rel="noopener"`;

// Objet 3D extrudé en CSS : main.js empile des couches pour donner l'épaisseur.
const obj3d = (shape, { cls = '', depth = 14, face = 'var(--yellow)', side = '#c9a92a', label = '' } = {}) =>
  `<span class="x3d ${cls}" data-x3d="${depth}" style="--face:${face};--side:${side}"${label ? ` role="img" aria-label="${esc(label)}"` : ' aria-hidden="true"'}><span class="x3d__obj">${SHAPES[shape]}</span></span>`;

// ---------- Blocs communs ----------
function langSwitch(lang, pageKey, dark) {
  const target = url(pageKey, other(lang));
  const L = lang.toUpperCase();
  return `<div class="lang-wrap${dark ? ' lang-wrap--on-dark' : ''}" data-lang-switch data-target="${target}">
    <a class="lang-side${L === 'FR' ? ' is-active' : ''}" href="${L === 'FR' ? '#' : target}" data-lang-side="FR" hreflang="fr">FR</a>
    <button class="lang-switch" type="button" data-lang="${L}" aria-label="${esc(t(UI.langSwitch, lang))}"><span class="lang-knob"></span></button>
    <a class="lang-side${L === 'EN' ? ' is-active' : ''}" href="${L === 'EN' ? '#' : target}" data-lang-side="EN" hreflang="en">EN</a>
  </div>`;
}

function header(lang, pageKey, dark) {
  const cur = PASSION_KEYS.includes(pageKey) ? 'about' : pageKey;
  const tone = dark ? 'navlink--on-dark' : 'navlink--on-light';
  const link = (k) => `<a class="navlink ${tone}${cur === k ? ' is-active' : ''}" href="${url(k, lang)}"${cur === k ? ' aria-current="page"' : ''}>${esc(t(UI.nav[k], lang))}</a>`;
  const mlink = (k) => `<a href="${url(k, lang)}" data-menu-close${cur === k ? ' aria-current="page"' : ''}>${esc(t(UI.nav[k], lang))}</a>`;
  return `<a class="skip-link" href="#main">${esc(t(UI.skip, lang))}</a>
<header class="container site-header${dark ? ' site-header--dark' : ''}">
  <nav class="nav" aria-label="${esc(t(UI.navLabel, lang))}">
    <a class="nav__logo h2${dark ? '' : ' nav__logo--outline'}" href="${url('home', lang)}">Léa <span class="accent">DATIN</span></a>
    <div class="nav__links">
      ${['home', 'about', 'experience', 'projects', 'contact'].map(link).join('\n      ')}
    </div>
    <div class="nav__right">
      ${langSwitch(lang, pageKey, dark)}
      <a class="cta nav__cv" href="${href(SITE.cv)}" download>${esc(t(UI.nav.cv, lang))} ↓</a>
      <button class="burger" type="button" data-menu-toggle="mobileMenu" aria-controls="mobileMenu" aria-expanded="false" aria-label="${esc(t(UI.menuOpen, lang))}">
        <span class="burger-line"></span><span class="burger-line"></span><span class="burger-line"></span>
      </button>
    </div>
  </nav>
</header>
<div id="mobileMenu" class="menu-overlay" aria-hidden="true" inert>
  ${['home', 'about', 'experience', 'projects'].map(mlink).join('\n  ')}
  <a href="${href(SITE.cv)}" download data-menu-close>${esc(t(UI.nav.cv, lang))} ↓</a>
  ${mlink('contact')}
  <div class="menu-overlay__lang">${langSwitch(lang, pageKey, true)}</div>
  <button class="close-btn" type="button" data-menu-close aria-label="${esc(t(UI.menuClose, lang))}">✕</button>
</div>`;
}

function footer(lang) {
  return `<footer class="container footer">
    <div class="h2" style="font-size:20px;">Léa Datin</div>
    <div class="footer__links">
      <a class="navlink navlink--on-light" href="mailto:${SITE.email}">${esc(SITE.email)}</a>
      <a class="navlink navlink--on-light" ${linkedinAttrs}>LinkedIn</a>
    </div>
    <div class="footer__legal">© ${new Date().getFullYear()} Léa Datin · <button type="button" class="linklike" data-cookie-open>${esc(t(UI.cookieSettings, lang))}</button></div>
  </footer>
<button class="to-top" type="button" data-to-top aria-label="${esc(t(UI.backToTop, lang))}">${icon('arrowUp')}</button>
<div class="cookie" data-cookie role="dialog" aria-live="polite" aria-label="Cookies" hidden>
  <p>${esc(t(UI.cookie.text, lang))}</p>
  <div class="cookie__actions">
    <button type="button" class="cta-outline" data-cookie-refuse>${esc(t(UI.cookie.refuse, lang))}</button>
    <button type="button" class="cta" data-cookie-accept>${esc(t(UI.cookie.accept, lang))}</button>
  </div>
</div>`;
}

function layout(lang, pageKey, { title, description, body, bodyClass = '', bodyStyle = '', noindex = false, extraHead = '' }) {
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
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@600;700;800&family=Arimo:wght@400;500;600;700&family=Caveat:wght@500;700&display=swap">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cortado&display=swap">
  <link rel="stylesheet" href="${href('/assets/css/style.css')}">
  <script>document.documentElement.classList.add('js');</script>
  <script src="${href('/assets/js/main.js')}" defer data-analytics-provider="${SITE.analytics.provider}" data-analytics-id="${SITE.analytics.id}"></script>
  ${extraHead}
</head>
<body class="${bodyClass}"${bodyStyle ? ` style="${bodyStyle}"` : ''}>
${body}
<div class="footer-wrap">${footer(lang)}</div>
</body>
</html>
`;
}

const photoPh = (label, style, cls = '') =>
  `<div class="photo-placeholder ${cls}" style="${style}">${icon('camera', 'ph-icon')}<span>${esc(label)}</span></div>`;

const projectsTeaser = (lang, variant) => `<section class="${variant === 'yellow' ? 'container ' : ''}section">
    <div class="card card--tilt reveal teaser teaser--${variant}" data-tilt>
      <div>
        <h2 class="h2 teaser__title">${esc(t(UI.projectsTeaser.title, lang))}</h2>
        <p class="teaser__text">${esc(t(UI.projectsTeaser.text, lang))}</p>
      </div>
      <a class="cta${variant === 'yellow' ? ' cta--dark' : ''}" href="${url('projects', lang)}">${esc(t(UI.projectsTeaser.cta, lang))}</a>
    </div>
  </section>`;

// ---------- Accueil ----------
function home(lang) {
  const P = PASSIONS;
  const heroObjects = SITE.model3d
    ? `<model-viewer class="hero__model" src="${href(SITE.model3d)}" auto-rotate camera-controls disable-zoom interaction-prompt="none" shadow-intensity="1" alt="3D"></model-viewer>`
    : `<div class="hero__floaters" data-parallax aria-hidden="true">
        ${obj3d('cursor', { cls: 'floater floater--cursor', face: 'var(--white)', side: '#b9c7e8' })}
        ${obj3d('heart', { cls: 'floater floater--heart', face: 'var(--yellow)', side: '#c9a92a' })}
        ${obj3d('at', { cls: 'floater floater--at', face: 'var(--navy)', side: '#000' })}
        ${obj3d('play', { cls: 'floater floater--play', face: 'var(--white)', side: '#8fa9dc' })}
        <span class="floater floater--notif glass3d">${lang === 'fr' ? '+12 pays' : '+12 countries'}</span>
      </div>`;
  const body = `${header(lang, 'home', false)}
<main id="main" class="container">

  <section class="hero" data-hero>
    <div class="hero__glow" aria-hidden="true"></div>
    <div class="hero__photo" data-tilt data-tilt-max="8">
      ${photoPh(t(HOME.photo, lang), 'width:100%; height:100%; border-radius:32px;')}
      ${heroObjects}
    </div>
    <div class="hero__text">
      <div class="pill reveal hero__pill" style="${delay(0.05)}"><span class="live-dot"></span>${esc(t(HOME.available, lang))}</div>
      <h1 class="hero__title reveal" style="margin-top:20px; ${delay(0.15)}">${rich(t(HOME.title, lang))}</h1>
      <p class="reveal hero__lead" style="${delay(0.25)}">${esc(t(HOME.lead, lang))}</p>
      <div class="reveal hero__ctas" data-magnet-zone style="${delay(0.35)}">
        <a class="cta magnet" href="${url('contact', lang)}">${esc(t(HOME.contact, lang))}</a>
        <a class="cta-outline" style="color:#fff; border-color:#fff;" href="${url('experience', lang)}">${esc(t(HOME.journey, lang))}</a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="reveal" style="max-width:640px;">
      <div class="eyebrow">${esc(t(HOME.whoEyebrow, lang))}</div>
      <h2 class="h2" style="font-size:32px; margin-top:10px;">${esc(t(HOME.whoTitle, lang))}</h2>
    </div>
    <div class="grid-3" style="margin-top:40px;">
      ${PASSION_KEYS.map((k, i) => `<div class="card card--hoverable card--tilt reveal passion-card" data-tilt style="${delay(0.05 + i * 0.1)}">
        <div class="passion-card__logo" style="border-color:${P[k].border};">${obj3d({ art: 'palette', sport: 'oars', travel: 'plane' }[k], { cls: 'x3d--sm', depth: 8, face: 'var(--navy)', side: '#5d6aa0' })}</div>
        <h3 class="h2" style="font-size:20px;">${esc(t(P[k].title, lang))}</h3>
        <p style="font-size:14px; color:var(--text-body); margin-top:8px;">${esc(t(P[k].card, lang))}</p>
      </div>`).join('\n      ')}
    </div>
  </section>

  <section class="section section--dark exp-teaser" style="border-radius:var(--radius-lg);">
    <div class="exp-teaser__globe" aria-hidden="true">
      <canvas class="globe" data-globe='${esc(JSON.stringify(GLOBE))}'></canvas>
      <span class="globe__hint script">${esc(t(HOME.globeHint, lang))} ↻</span>
    </div>
    <div class="exp-teaser__inner">
      <div class="reveal exp-teaser__head">
        <div style="max-width:560px;">
          <div class="eyebrow">${esc(t(HOME.expEyebrow, lang))}</div>
          <h2 class="h2" style="font-size:32px; color:#fff; margin-top:10px;">${esc(t(HOME.expTitle, lang))}</h2>
        </div>
        <a class="cta-outline" style="color:#fff; border-color:#fff;" href="${url('experience', lang)}">${esc(t(HOME.expAll, lang))}</a>
      </div>
      <div class="grid-3" style="margin-top:40px;">
        ${HOME.expCards.map((c, i) => `<div class="card card--tilt reveal glass-dark" data-tilt style="${delay(0.05 + i * 0.1)}">
          <div style="font-size:13px; color:var(--blue-light); font-weight:600;">${esc(t(c.date, lang))}</div>
          <h3 class="h2" style="font-size:19px; color:#fff; margin-top:8px;">${esc(t(c.title, lang))}</h3>
          <p style="font-size:14px; color:#b8c4e8; margin-top:8px;">${esc(t(c.text, lang))}</p>
        </div>`).join('\n        ')}
        <div class="card card--tilt reveal" data-tilt style="background:var(--yellow); padding:32px 28px; display:flex; flex-direction:column; justify-content:center; ${delay(0.25)}">
          <h3 class="h2" style="font-size:19px; color:var(--navy);">${esc(t(HOME.moreTitle, lang))}</h3>
          <a class="cta cta--dark" style="width:fit-content; margin-top:12px;" href="${href(SITE.cv)}" download>${esc(t(UI.cvDownload, lang))}</a>
        </div>
      </div>
    </div>
  </section>

  ${projectsTeaser(lang, 'blue')}

  <section class="section section--grey" style="border-radius:var(--radius-lg);">
    <div style="padding:0 32px;">
      <div class="reveal" style="max-width:560px;">
        <div class="eyebrow">${esc(t(HOME.recoEyebrow, lang))}</div>
        <h2 class="h2" style="font-size:32px; margin-top:10px;">${esc(t(HOME.recoTitle, lang))}</h2>
      </div>
      <div class="reco-grid" style="margin-top:36px;">
        ${TESTIMONIALS.map((q, i) => `<figure class="card reveal reco" style="${delay(0.05 + i * 0.1)}">
          <div class="reco__mark" aria-hidden="true">“</div>
          <blockquote>${esc(t(q.quote, lang))}</blockquote>
          <figcaption>
            <span class="reco__avatar" aria-hidden="true">${q.name.split(' ').map((w) => w[0]).join('')}</span>
            <span><strong>${esc(q.name)}</strong><small>${esc(t(q.role, lang))}</small></span>
          </figcaption>
        </figure>`).join('\n        ')}
      </div>
      ${t(TESTI_NOTE, lang) ? `<p class="reco__note">${esc(t(TESTI_NOTE, lang))}</p>` : ''}
    </div>
  </section>

</main>`;
  return layout(lang, 'home', { title: t(HOME.metaTitle, lang), description: t(HOME.metaDesc, lang), body, bodyClass: 'page-home',
    extraHead: SITE.model3d ? '<script type="module" src="https://unpkg.com/@google/model-viewer@3.5.0/dist/model-viewer.min.js"></script>' : '' });
}

// ---------- À propos ----------
function about(lang) {
  const photos = [1, 2, 3, 4, 5];
  const bgs = [
    'linear-gradient(160deg, var(--blue-light), var(--blue))',
    'linear-gradient(160deg, var(--blue), var(--navy))',
    'linear-gradient(160deg, var(--navy), var(--navy-soft))',
    'linear-gradient(160deg, var(--yellow), #f0c93a); color:var(--navy)',
    'linear-gradient(160deg, var(--blue-light), var(--navy))',
  ];
  const body = `<div class="about-hero">
  <div class="blob blob--float" style="width:480px; height:480px; background:var(--blue-light); top:-180px; right:-100px; opacity:0.55;"></div>
  <div class="blob blob--float" style="width:320px; height:320px; background:var(--yellow); bottom:-140px; left:20%; opacity:0.25; animation-delay:-6s;"></div>
  <div class="grid-floor" aria-hidden="true"></div>
  ${header(lang, 'about', true)}
  <div class="container about-hero__inner">
    <div style="flex:1;">
      <div class="pill glass reveal" style="padding:7px 16px; font-size:12px; font-weight:700; color:#fff; width:fit-content; margin-bottom:20px;">${esc(t(ABOUT.pill, lang))}</div>
      <h1 class="h1 reveal about-hero__title" style="${delay(0.05)}">${rich(t(ABOUT.title, lang))}</h1>
      <p class="reveal" style="font-size:15px; color:#c7d2f0; margin-top:16px; max-width:440px; line-height:1.5; ${delay(0.1)}">${esc(t(ABOUT.lead, lang))}</p>
    </div>
    <div class="about-hero__photo reveal" data-tilt data-tilt-max="10" style="${delay(0.15)}">
      ${photoPh(t(ABOUT.photo, lang), 'height:100%; border-radius:28px; color:#d8e0f7;', 'glass')}
      <div class="orbit" aria-hidden="true">
        ${['palette', 'oars', 'plane'].map((s, i) => `<span class="orbit__item" style="--i:${i}">${obj3d(s, { cls: 'x3d--sm', depth: 8, face: 'var(--yellow)', side: '#b8961f' })}</span>`).join('')}
      </div>
    </div>
  </div>
</div>

<main id="main" style="background:#fff;">

  <section class="container section">
    <div class="reveal">
      <div class="eyebrow">${esc(t(ABOUT.whoEyebrow, lang))}</div>
      <p class="about-who">${rich(t(ABOUT.who, lang))}</p>
    </div>
  </section>

  <section class="section vision">
    <div class="vision__rings" aria-hidden="true"><span></span><span></span><span></span></div>
    <div class="container" style="max-width:800px; position:relative;">
      <div class="eyebrow reveal" style="color:var(--yellow); margin-bottom:16px;">${esc(t(ABOUT.visionEyebrow, lang))}</div>
      <h2 class="h2 reveal vision__title" style="${delay(0.1)}">${rich(t(ABOUT.visionTitle, lang))}</h2>
      <p class="reveal" style="font-size:14px; line-height:1.75; color:#b8c4e8; margin-top:20px; ${delay(0.2)}">${esc(t(ABOUT.vision, lang))}</p>
    </div>
  </section>

  <section class="section section--grey">
    <div class="container">
      <div class="reveal" style="text-align:center; margin-bottom:32px;">
        <div class="eyebrow">${esc(t(ABOUT.inspireEyebrow, lang))}</div>
        <h2 class="h2" style="font-size:28px; margin-top:8px;">${esc(t(ABOUT.inspireTitle, lang))}</h2>
      </div>
      <div class="inspire-panels reveal" data-inspire-panels>
        ${PASSION_KEYS.map((k) => {
          const p = PASSIONS[k];
          return `<a class="inspire-panel" href="${url(p.route, lang)}" style="background:${p.gradient};">
          <span class="inspire-panel__obj">${obj3d({ art: 'palette', sport: 'oars', travel: 'plane' }[k], { depth: 12, face: 'var(--yellow)', side: '#b8961f' })}</span>
          <span class="inspire-panel__title-v" aria-hidden="true">${esc(t(p.title, lang))}</span>
          <span class="inspire-panel__content">
            <span class="script" style="color:var(--yellow); font-size:26px;">${esc(t(p.script, lang))}</span>
            <span class="inspire-panel__text">${esc(t(p.panel, lang))}</span>
            <span class="cta-outline" style="color:#fff; margin-top:12px; padding:8px 18px; font-size:12px; width:fit-content;">${esc(t(UI.more, lang))}</span>
          </span>
        </a>`;
        }).join('\n        ')}
      </div>
    </div>
  </section>

  <section class="section" style="background:var(--grey-bg); text-align:center;">
    <div class="container">
      <div class="reveal" style="margin-bottom:28px;">
        <div class="eyebrow">${esc(t(ABOUT.albumEyebrow, lang))}</div>
        <h2 class="h2" style="font-size:28px; margin-top:8px;">${esc(t(ABOUT.albumTitle, lang))}</h2>
      </div>
      <div class="reveal album" data-album data-album-dots="#albumDots" data-album-next="#albumNext" data-album-prev="#albumPrev" data-album-reset="#albumReset">
        ${photos.map((n, i) => `<div class="album-page" role="button" tabindex="${i ? -1 : 0}" aria-label="${esc(t(ABOUT.albumNext, lang))}" style="background:${bgs[i]};">
          ${icon('camera', 'album-page__icon')}
          <span class="script" style="font-size:24px;">Photo ${n}</span>
        </div>`).join('\n        ')}
      </div>
      <div class="album-nav">
        <button id="albumReset" type="button" class="album-nav-btn" aria-label="${esc(t(ABOUT.albumReset, lang))}">↺</button>
        <button id="albumPrev" type="button" class="album-nav-btn" aria-label="${esc(t(ABOUT.albumPrev, lang))}">←</button>
        <div id="albumDots" style="display:flex; gap:8px;">
          ${photos.map((n) => `<button type="button" class="album-dot" aria-label="${esc(t(ABOUT.albumGoto, lang))} ${n}"></button>`).join('')}
        </div>
        <button id="albumNext" type="button" class="album-nav-btn" aria-label="${esc(t(ABOUT.albumNext, lang))}">→</button>
      </div>
    </div>
  </section>

  ${projectsTeaser(lang, 'yellow')}

</main>`;
  return layout(lang, 'about', { title: t(ABOUT.metaTitle, lang), description: t(ABOUT.metaDesc, lang), body, bodyClass: 'page-about', bodyStyle: 'background:var(--navy);' });
}

// ---------- Sous-pages Art / Sport / Voyage ----------
function passionPage(lang, key) {
  const p = PASSIONS[key];
  const shape = { art: 'palette', sport: 'oars', travel: 'plane' }[key];
  const others = PASSION_KEYS.filter((k) => k !== key);
  const body = `<div class="about-hero passion-hero" style="background:${p.gradient.replace('160deg', '160deg')};">
  <div class="blob blob--float" style="width:420px; height:420px; background:var(--blue-light); top:-160px; right:-80px; opacity:0.45;"></div>
  <div class="blob blob--float" style="width:300px; height:300px; background:var(--yellow); bottom:-150px; left:10%; opacity:0.22; animation-delay:-5s;"></div>
  <div class="grid-floor" aria-hidden="true"></div>
  ${header(lang, key, true)}
  <div class="container about-hero__inner passion-hero__inner">
    <div style="flex:1;">
      <a class="navlink navlink--on-dark reveal" style="color:#d8e0f7; font-size:13px;" href="${url('about', lang)}">${esc(t(PASSION_PAGE.back, lang))}</a>
      <h1 class="h1 reveal about-hero__title" style="margin-top:18px; ${delay(0.05)}">${rich(t(p.heroTitle, lang))}</h1>
      <p class="reveal" style="font-size:15px; color:#c7d2f0; margin-top:16px; max-width:460px; line-height:1.5; ${delay(0.1)}">${esc(t(p.heroText, lang))}</p>
      <ul class="tags reveal" style="${delay(0.15)}">${p.tags.map((tag) => `<li class="pill glass">${esc(t(tag, lang))}</li>`).join('')}</ul>
    </div>
    <div class="passion-hero__obj reveal" data-parallax style="${delay(0.1)}">
      <div class="pedestal" aria-hidden="true"></div>
      ${obj3d(shape, { cls: 'x3d--xl x3d--spin', depth: 24, face: 'var(--yellow)', side: '#b8961f', label: t(p.title, lang) })}
    </div>
  </div>
</div>

<main id="main" style="background:#fff;">
  <section class="container section passion-body">
    <div class="card reveal passion-body__card">
      <div class="eyebrow">${esc(t(PASSION_PAGE.storyEyebrow, lang))}</div>
      <p>${txt(t(p.story, lang))}</p>
    </div>
    <div class="card reveal passion-body__card passion-body__card--dark" style="${delay(0.1)}">
      <div class="eyebrow">${esc(t(PASSION_PAGE.workEyebrow, lang))}</div>
      <p>${esc(t(p.work, lang))}</p>
    </div>
  </section>

  <section class="section section--grey">
    <div class="container">
      <div class="reveal" style="margin-bottom:28px;">
        <div class="eyebrow">${esc(t(PASSION_PAGE.galleryEyebrow, lang))}</div>
        <h2 class="h2" style="font-size:28px; margin-top:8px;">${esc(t(PASSION_PAGE.galleryTitle, lang))}</h2>
      </div>
      <div class="gallery">
        ${[1, 2, 3, 4].map((n, i) => `<figure class="gallery__item card--tilt reveal" data-tilt style="${delay(i * 0.08)}">${img(`/assets/img/${key}-${n}.svg`, `${t(p.title, lang)} ${n}`)}</figure>`).join('\n        ')}
      </div>
    </div>
  </section>

  <section class="container section">
    <div class="reveal" style="margin-bottom:28px;"><h2 class="h2" style="font-size:28px;">${esc(t(PASSION_PAGE.others, lang))}</h2></div>
    <div class="others">
      ${others.map((k, i) => `<a class="inspire-panel card--tilt reveal others__item" data-tilt href="${url(PASSIONS[k].route, lang)}" style="background:${PASSIONS[k].gradient}; ${delay(i * 0.1)}">
        <span class="inspire-panel__obj">${obj3d({ art: 'palette', sport: 'oars', travel: 'plane' }[k], { depth: 10, face: 'var(--yellow)', side: '#b8961f' })}</span>
        <span class="script" style="color:var(--yellow); font-size:30px;">${esc(t(PASSIONS[k].script, lang))}</span>
        <span class="inspire-panel__text">${esc(t(PASSIONS[k].panel, lang))}</span>
      </a>`).join('\n      ')}
    </div>
  </section>
</main>`;
  return layout(lang, key, {
    title: `${t(p.title, lang)} — Léa Datin`,
    description: t(PASSION_PAGE.metaDesc, lang) + t(p.title, lang).toLowerCase() + '. ' + t(p.card, lang),
    body, bodyClass: 'page-passion', bodyStyle: 'background:var(--navy);',
  });
}

// ---------- Expérience ----------
function experience(lang) {
  const L = EXPERIENCE.labels;
  const item = (e, i) => {
    const d = e.dark;
    const pill = e.kind === 'school'
      ? 'background:var(--yellow); color:var(--navy);'
      : d ? 'background:rgba(255,255,255,0.15); color:var(--yellow);' : 'background:#e7edfb; color:var(--blue);';
    const inner = e.kind === 'school'
      ? esc(t(e.body, lang))
      : `<p>${esc(t(e.context, lang))}</p>
            <p style="margin-top:14px;"><b>${esc(t(L.why, lang))}</b> ${esc(t(e.why, lang))}</p>
            <div class="timeline-item__label" style="color:${d ? '#fff' : 'var(--navy)'};">${esc(t(L.resp, lang))}</div>
            <ul class="timeline-item__list">${e.resp.map((r) => `<li>${esc(t(r, lang))}</li>`).join('')}</ul>`;
    return `<div class="timeline-item${d ? ' timeline-item--dark' : ''} card--tap reveal${e.open ? ' is-open' : ''}" style="${delay(i * 0.06)}">
        <button type="button" class="timeline-item__header" aria-expanded="${!!e.open}" aria-controls="exp-${i}">
          <span style="display:flex; align-items:center; gap:16px;">
            <span class="timeline-item__icon${d ? ' is-dark' : ''}">${icon(e.kind === 'school' ? 'school' : 'briefcase', 'timeline-item__svg')}</span>
            <span>
              <span class="pill" style="${pill} font-size:11px; font-weight:700; padding:4px 12px;">${esc(t(L[e.kind], lang))}</span>
              <span class="h2 timeline-item__title" style="${d ? 'color:#fff;' : ''}">${esc(t(e.title, lang))}</span>
              <span class="timeline-item__meta" style="color:${d ? '#b8c4e8' : 'var(--text-muted)'};">${esc(e.org)} · ${esc(t(e.date, lang))}</span>
            </span>
          </span>
          <span class="timeline-item__chevron" aria-hidden="true">▾</span>
        </button>
        <div class="timeline-item__body" id="exp-${i}" role="region"${e.open ? '' : ' inert'}>
          <div class="timeline-item__body-inner" style="color:${d ? '#c7d2f0' : 'var(--text-body)'};">
            ${inner}
          </div>
        </div>
      </div>`;
  };
  const body = `${header(lang, 'experience', false)}
<main id="main" class="container">

  <section class="section exp-hero" style="padding-bottom:0;">
    <div class="reveal">
      <div class="eyebrow">${esc(t(EXPERIENCE.eyebrow, lang))}</div>
      <h1 class="h1" style="font-size:36px; margin-top:10px;">${rich(t(EXPERIENCE.title, lang)).replace('class="script"', 'class="script" style="color:var(--blue);"')}</h1>
      <p style="font-size:15px; color:var(--text-body); margin-top:14px; max-width:560px;">${esc(t(EXPERIENCE.lead, lang))}</p>
    </div>
    <div class="exp-hero__stack" data-parallax aria-hidden="true">
      ${obj3d('cursor', { cls: 'floater floater--a', face: 'var(--blue)', side: '#1d4a94' })}
      ${obj3d('at', { cls: 'floater floater--b', face: 'var(--yellow)', side: '#b8961f' })}
      ${obj3d('play', { cls: 'floater floater--c', face: 'var(--navy)', side: '#000' })}
    </div>
  </section>

  <section class="section" data-timeline>
    <div class="timeline-line">
      ${EXPERIENCE.items.map(item).join('\n      ')}
    </div>
  </section>

  <section class="section" style="text-align:center;">
    <div class="reveal" data-magnet-zone>
      <h2 class="h2" style="font-size:24px;">${esc(t(EXPERIENCE.ctaTitle, lang))}</h2>
      <p style="font-size:14px; color:var(--text-body); margin-top:8px;">${esc(t(EXPERIENCE.ctaText, lang))}</p>
      <a class="cta magnet" style="margin-top:20px;" href="${href(SITE.cv)}" download>${esc(t(UI.cvDownload, lang))}</a>
    </div>
  </section>

</main>`;
  return layout(lang, 'experience', { title: t(EXPERIENCE.metaTitle, lang), description: t(EXPERIENCE.metaDesc, lang), body, bodyClass: 'page-experience', bodyStyle: 'background:var(--grey-bg);' });
}

// ---------- Projets ----------
function projectObject(kind) {
  if (kind === 'ring') return `<div class="p3d p3d--ring" aria-hidden="true">${Array.from({ length: 12 }, (_, i) => `<span style="--i:${i}"></span>`).join('')}<b>360°</b></div>`;
  if (kind === 'type') return `<div class="p3d p3d--type" aria-hidden="true" data-x3d-text="12"><span class="p3d__word">PUNCH</span></div>`;
  return `<div class="p3d p3d--eclipse" aria-hidden="true"><span class="eclipse__corona"></span><span class="eclipse__sun"></span><span class="eclipse__moon"></span></div>`;
}
function projects(lang) {
  const body = `${header(lang, 'projects', false)}
<main id="main" class="container">
  <section class="hero hero--compact">
    <div class="hero__glow" aria-hidden="true"></div>
    <div class="hero__text">
      <div class="pill reveal hero__pill">${esc(t(PROJECTS.eyebrow, lang))}</div>
      <h1 class="hero__title reveal" style="margin-top:20px; ${delay(0.1)}">${rich(t(PROJECTS.title, lang))}</h1>
      <p class="reveal hero__lead" style="${delay(0.2)}">${esc(t(PROJECTS.lead, lang))}</p>
    </div>
  </section>

  <section class="section projects">
    ${PROJECTS.items.map((p, i) => `<article class="project card reveal${i % 2 ? ' project--rev' : ''}" id="${p.id}" style="${delay(0.05)}">
      <div class="project__stage card--tilt" data-tilt data-tilt-max="12">${projectObject(p.object)}</div>
      <div class="project__copy">
        <div class="eyebrow">0${i + 1} · ${txt(t(p.tag, lang))}</div>
        <h2 class="h2 project__name">${esc(p.name)}</h2>
        <p class="project__pitch">${txt(t(p.pitch, lang))}</p>
        <p class="project__text">${txt(t(p.text, lang))}</p>
        <p class="project__role"><b>${esc(t(PROJECTS.roleLabel, lang))} :</b> ${txt(t(p.role, lang))}</p>
      </div>
    </article>`).join('\n    ')}
  </section>
</main>`;
  return layout(lang, 'projects', { title: t(PROJECTS.metaTitle, lang), description: t(PROJECTS.metaDesc, lang), body, bodyClass: 'page-projects' });
}

// ---------- Contact ----------
function contact(lang) {
  const C = CONTACT;
  const body = `${header(lang, 'contact', false)}
<main id="main" class="container">
  <section class="hero hero--contact">
    <div class="hero__glow" aria-hidden="true"></div>
    <div class="hero__text">
      <div class="pill reveal hero__pill"><span class="live-dot"></span>${esc(t(C.pill, lang))}</div>
      <h1 class="hero__title reveal" style="margin-top:20px; ${delay(0.1)}">${rich(t(C.title, lang))}</h1>
      <p class="reveal hero__lead" style="${delay(0.2)}">${esc(t(C.lead, lang))}</p>
    </div>
    <div class="contact-3d" data-parallax aria-hidden="true">
      <div class="pedestal"></div>
      ${obj3d('at', { cls: 'x3d--xl x3d--sway', depth: 26, face: 'var(--yellow)', side: '#b8961f' })}
    </div>
  </section>

  <section class="section contact-grid">
    <div class="contact-cards">
      <a class="card card--hoverable card--tilt contact-card reveal" data-tilt href="mailto:${SITE.email}">
        <span class="contact-card__icon">${icon('mail')}</span>
        <span><span class="eyebrow">${esc(t(C.cards.email, lang))}</span><span class="contact-card__value">${esc(SITE.email)}</span></span>
      </a>
      <a class="card card--hoverable card--tilt contact-card reveal" data-tilt ${linkedinAttrs} style="${delay(0.08)}">
        <span class="contact-card__icon">${icon('linkedin')}</span>
        <span><span class="eyebrow">${esc(t(C.cards.linkedin, lang))}</span><span class="contact-card__value">${esc(t(C.cards.linkedinText, lang))}</span></span>
      </a>
      <a class="card card--hoverable card--tilt contact-card contact-card--yellow reveal" data-tilt href="${href(SITE.cv)}" download style="${delay(0.16)}">
        <span class="contact-card__icon">${icon('download')}</span>
        <span><span class="eyebrow">${esc(t(C.cards.cv, lang))}</span><span class="contact-card__value">${esc(t(C.cards.cvText, lang))}</span></span>
      </a>
    </div>
    <form class="card contact-form reveal" data-contact-form data-email="${SITE.email}" style="${delay(0.1)}">
      <h2 class="h2" style="font-size:24px;">${esc(t(C.form.title, lang))}</h2>
      <div class="field-row">
        <label class="field"><span>${esc(t(C.form.name, lang))}</span><input name="name" autocomplete="name" required></label>
        <label class="field"><span>${esc(t(C.form.email, lang))}</span><input name="email" type="email" autocomplete="email" required></label>
      </div>
      <label class="field"><span>${esc(t(C.form.subject, lang))}</span><input name="subject" required></label>
      <label class="field"><span>${esc(t(C.form.message, lang))}</span><textarea name="message" rows="5" required></textarea></label>
      <div class="contact-form__foot" data-magnet-zone>
        <button class="cta magnet" type="submit">${esc(t(C.form.send, lang))} →</button>
        <small>${esc(t(C.form.note, lang))}</small>
      </div>
    </form>
  </section>
</main>`;
  return layout(lang, 'contact', { title: t(C.metaTitle, lang), description: t(C.metaDesc, lang), body, bodyClass: 'page-contact' });
}

// ---------- 404 ----------
function notFound(lang) {
  const body = `${header(lang, 'notfound', false)}
<main id="main" class="container">
  <section class="nf">
    <h1 class="nf__code" aria-label="404"><span aria-hidden="true">4</span><span class="nf__ball-wrap" aria-hidden="true"><span class="nf__ball">0</span><span class="nf__shadow"></span></span><span aria-hidden="true">4</span></h1>
    <p class="nf__text">${esc(t(NOTFOUND.text, lang))}</p>
    <div data-magnet-zone><a class="cta magnet" href="${url('home', lang)}">← ${esc(t(NOTFOUND.cta, lang))}</a></div>
  </section>
</main>`;
  return layout(lang, 'notfound', { title: t(NOTFOUND.metaTitle, lang), description: t(NOTFOUND.text, lang), body, bodyClass: 'page-404', noindex: true });
}

// ---------- Écriture ----------
function write(route, html) {
  const file = join(OUT, route.endsWith('/') ? route + 'index.html' : route);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
}

let count = 0;
for (const lang of LANGS) {
  const pages = {
    home: () => home(lang), about: () => about(lang), experience: () => experience(lang),
    projects: () => projects(lang), contact: () => contact(lang), notfound: () => notFound(lang),
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
