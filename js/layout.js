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
  const P = window.PASSIONS || [];

  const navLinks = (cls) => links.map(([id, href, key, label]) =>
    `<a href="${href}" class="${cls}${id === page ? " is-active" : ""}"${id === page ? ' aria-current="page"' : ""} data-i18n="${key}">${label}</a>`
  ).join("");

  // Cartes « Passions » réutilisables : <div data-passions></div>
  const cards = () => `<div class="pcards">${P.map((x, i) => `
    <a href="${x.href}" class="pcard reveal-up" style="--d:${i * 0.12}s" data-cursor="view">
      <span class="pcard__stack">${x.imgs.map((src, k) => `<img class="pcard__img pcard__img--${k}" src="${src}" alt="" loading="lazy" />`).join("")}</span>
      <span class="pcard__num">0${i + 1}</span>
      <span class="pcard__body">
        <span class="pcard__title" data-i18n="${x.key}.title">${x.id}</span>
        <span class="pcard__text" data-i18n="${x.key}.teaser"></span>
        <span class="pcard__go"><span data-i18n="passions.discover">Découvrir</span> <i>→</i></span>
      </span>
    </a>`).join("")}</div>`;

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
        <a href="assets/cv-lea-datin.pdf" class="header-cv" data-cv download><span>CV</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg></a>
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
          ${S.instagram ? `<li><a href="${S.instagram}" target="_blank" rel="noopener" class="hover-line">Instagram</a></li>` : ""}
          <li><a href="mailto:${S.email}" class="hover-line">Email</a></li>
        </ul>
        <a href="#top" class="footer__top hover-line" data-i18n="footer.top">Retour en haut ↑</a>
      </div>
    </footer>`;

  document.body.insertAdjacentHTML("afterbegin", before);
  document.body.insertAdjacentHTML("beforeend", footer);
  // Formulaire en envoi direct : textes adaptés
  if ((window.SITE || {}).web3formsKey) {
    document.querySelectorAll('[data-i18n="contactPage.form.note"], [data-i18n="contactPage.form.okText"]').forEach((el) => { el.dataset.i18n += "Direct"; });
  }
  // Google Analytics : chargé seulement après accord du visiteur
  const GA = (window.SITE || {}).gaId;
  if (GA) {
    const store = { get() { try { return localStorage.getItem("ld-consent"); } catch (e) { return null; } }, set(v) { try { localStorage.setItem("ld-consent", v); } catch (e) {} } };
    const loadGA = () => {
      const sc = document.createElement("script");
      sc.async = true;
      sc.src = `https://www.googletagmanager.com/gtag/js?id=${GA}`;
      document.head.appendChild(sc);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag("js", new Date());
      window.gtag("config", GA, { anonymize_ip: true });
    };
    const choice = store.get();
    if (choice === "yes") loadGA();
    else if (choice !== "no") {
      document.body.insertAdjacentHTML("beforeend", `
        <div class="cookies" role="dialog" aria-live="polite">
          <p data-i18n="cookies.text">J'utilise Google Analytics pour savoir quelles pages vous intéressent.</p>
          <div class="cookies__btns"><button class="cookies__btn" data-c="no" data-i18n="cookies.refuse">Refuser</button><button class="cookies__btn cookies__btn--yes" data-c="yes" data-i18n="cookies.accept">Accepter</button></div>
        </div>`);
      const box = document.querySelector(".cookies");
      box.addEventListener("click", (e) => {
        const c = e.target.closest("[data-c]");
        if (!c) return;
        store.set(c.dataset.c);
        if (c.dataset.c === "yes") loadGA();
        box.classList.add("is-hidden");
        setTimeout(() => box.remove(), 600);
      });
    }
  }
  document.querySelectorAll("[data-passions]").forEach((el) => { el.innerHTML = cards(); });
  document.querySelectorAll(".js-year").forEach((el) => { el.textContent = new Date().getFullYear(); });
})();
