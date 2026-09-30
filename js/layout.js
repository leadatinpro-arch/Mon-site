/* Éléments communs à toutes les pages : chargement, curseur, en-tête, menu, pied de page.
   Modifiez-les ici une seule fois, ils s'appliquent partout. */
(() => {
  const page = document.body.dataset.nav || document.body.dataset.page || "home";
  const S = window.SOCIAL || {};
  const links = [
    ["home", "index.html", "nav.home", "Accueil"],
    ["about", "about.html", "nav.about", "À propos"],
    ["projects", "projects.html", "nav.projects", "Projets"],
    ["contact", "contact.html", "nav.contact", "Contact"]
  ];

  const navLinks = (cls) => links.map(([id, href, key, label]) =>
    `<a href="${href}" class="${cls}${id === page ? " is-active" : ""}"${id === page ? ' aria-current="page"' : ""} data-i18n="${key}">${label}</a>`
  ).join("");

  const before = `
    <div class="loader" aria-hidden="true">
      <div class="loader__name">${[..."Léa Datin"].map((c) => `<span>${c === " " ? "&nbsp;" : c}</span>`).join("")}</div>
      <div class="loader__count"><span id="loader-num">0</span>%</div>
    </div>
    <div class="transition" aria-hidden="true"><span class="transition__logo">LD</span></div>
    <div class="cursor" aria-hidden="true"><span class="cursor__label"></span></div>
    <div class="cursor-dot" aria-hidden="true"></div>
    <div class="grain" aria-hidden="true"></div>
    <div class="toast" role="status" aria-live="polite"></div>

    <header class="header">
      <a href="index.html" class="logo" aria-label="Léa Datin — Accueil"><span class="logo__mark">LD</span></a>
      <nav class="nav" aria-label="Navigation">${navLinks("nav__link")}</nav>
      <div class="header__right">
        <button class="lang-switch" role="switch" aria-checked="false" aria-label="English version">
          <span class="lang-switch__label lang-switch__label--fr" aria-hidden="true">FR</span>
          <span class="lang-switch__track" aria-hidden="true"><span class="lang-switch__knob"></span></span>
          <span class="lang-switch__label lang-switch__label--en" aria-hidden="true">EN</span>
        </button>
        <button class="burger" aria-label="Menu" aria-expanded="false"><span></span><span></span></button>
      </div>
    </header>

    <div class="menu" aria-hidden="true">
      <nav class="menu__nav">${navLinks("menu__link")}</nav>
      <div class="menu__foot">
        <a href="mailto:${S.email}">${S.email}</a>
        <a href="${S.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
      </div>
    </div>`;

  const footer = `
    <footer class="footer">
      <div class="container footer__inner">
        <p>© <span class="js-year"></span> Léa Datin</p>
        <ul class="footer__social">
          <li><a href="${S.linkedin}" target="_blank" rel="noopener" class="hover-line">LinkedIn</a></li>
          <li><a href="${S.instagram}" target="_blank" rel="noopener" class="hover-line">Instagram</a></li>
          <li><a href="mailto:${S.email}" class="hover-line">Email</a></li>
        </ul>
        <a href="#top" class="footer__top hover-line" data-i18n="footer.top">Retour en haut ↑</a>
      </div>
    </footer>`;

  document.body.insertAdjacentHTML("afterbegin", before);
  document.body.insertAdjacentHTML("beforeend", footer);
  document.querySelectorAll(".js-year").forEach((el) => { el.textContent = new Date().getFullYear(); });
})();
