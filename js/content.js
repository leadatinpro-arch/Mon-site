/* ==========================================================================
   CONTENU DU SITE — à personnaliser
   --------------------------------------------------------------------------
   Chaque texte existe en français (fr) et en anglais (en).
   Pour ajouter un projet : copiez un bloc { ... } dans PROJECTS et modifiez-le.
   type : "pro" (expérience professionnelle) ou "perso" (projet personnel / engagement)
   featured : true = affiché sur la page d'accueil
   color : 1 = bleu, 2 = jaune, 3 = bleu nuit, 4 = bleu clair
   shape : circle, square, drop, leaf
   image (facultatif) : chemin vers une image, ex. "assets/projets/eclipse.jpg"
   results : laissez "" pour masquer la rubrique « Points clés »
   page (facultatif) : le projet ouvre sa propre page au lieu de la fiche
   ========================================================================== */

window.PROJECTS = [
  {
    id: "saint-gobain",
    page: "saint-gobain.html",
    type: "pro",
    featured: true,
    color: 1,
    shape: "circle",
    year: "2024 — 2026",
    image: "assets/saint-gobain/pamline-mockup.webp",
    title: { fr: "Saint-Gobain PAM — Projet PAMLINE", en: "Saint-Gobain PAM — PAMLINE project" },
    summary: {
      fr: "Cheffe de projet marketing digital : référente de 12 pays pour la refonte de 12 sites pays multilingues (Drupal 10).",
      en: "Digital marketing project manager: lead contact for 12 countries on the overhaul of 12 multilingual country sites (Drupal 10)."
    },
    context: {
      fr: "En alternance chez Saint-Gobain, j'ai accompagné le déploiement et l'adoption d'une plateforme digitale dans de nombreux pays, avec des équipes, des besoins et des contraintes propres à chaque marché.",
      en: "As a work-study project manager at Saint-Gobain, I supported the rollout and adoption of a digital platform across many countries, each with its own teams, needs and constraints."
    },
    mission: {
      fr: "Pilotage et suivi personnalisé de 12 équipes internationales (kick-off, points réguliers, hebdomadaires en période critique) et gestion des priorités pays par pays. Création de l'ensemble des supports projet : guides, formations, documents de cadrage et calendriers adaptés à chaque marché. Suivi et reporting des KPIs par pays (Google Analytics, tableaux de bord Excel). Validation des évolutions de la plateforme : analyse des besoins, vérification de la compatibilité avec chaque pays, collecte des retours et arbitrage final.",
      en: "Tailored leadership and follow-up of 12 international teams (kick-offs, regular check-ins, weekly during critical phases) and country-by-country prioritisation. Creation of all project materials: guides, training, scoping documents and calendars adapted to each market. KPI tracking and reporting by country (Google Analytics, Excel dashboards). Validation of platform changes: needs analysis, compatibility checks for each country, feedback collection and final decisions."
    },
    results: {
      fr: "12 équipes internationales coordonnées, des supports adaptés à chaque marché et un reporting par pays pour mesurer l'avancement et l'adoption de la plateforme.",
      en: "12 international teams coordinated, materials adapted to each market and country-level reporting to measure progress and platform adoption."
    },
    tags: [{ fr: "Gestion de projet", en: "Project management" }, "International", "Google Analytics", "Excel", "Reporting"]
  },
  {
    id: "eclipse",
    page: "eclipse.html",
    type: "perso",
    featured: true,
    color: 2,
    shape: "square",
    year: "2026",
    image: "assets/eclipse/juin-affiche.jpg",
    title: { fr: "Eclipse — Soirées techno à Nancy", en: "Eclipse — Techno nights in Nancy" },
    summary: {
      fr: "Soirées techno à Nancy : identité visuelle, communication, vidéos et mascotte Hélios. 2 éditions, ~200 personnes à chaque fois.",
      en: "Techno nights in Nancy: visual identity, communication, videos and the Hélios mascot. 2 editions, ~200 people each time."
    },
    context: {
      fr: "Eclipse, ce sont des concerts de musique techno que nous organisons à Nancy, à seulement trois. Un projet qui demande autant de rigueur que de créativité.",
      en: "Eclipse is a series of techno music events we organise in Nancy, as a team of just three. A project that requires as much rigour as creativity."
    },
    mission: {
      fr: "Je m'occupe de toute la gestion de projet, de A à Z : organisation, planning, coordination et suivi de chaque événement. Je gère également l'ensemble de la communication et j'ai créé l'image de marque d'Eclipse : identité visuelle, ton et univers.",
      en: "I handle all project management from start to finish: organisation, planning, coordination and follow-up for every event. I also run all communication and created Eclipse's brand identity: visual identity, tone of voice and overall universe."
    },
    results: "",
    tags: [{ fr: "Événementiel", en: "Events" }, { fr: "Gestion de projet", en: "Project management" }, "Branding", { fr: "Réseaux sociaux", en: "Social media" }]
  },
  {
    id: "punch",
    page: "punch.html",
    type: "perso",
    featured: true,
    color: 3,
    shape: "drop",
    year: "",
    image: "assets/punch/photo-stand.jpg",
    title: { fr: "PUNCH — Mini-entreprise", en: "PUNCH — Student company" },
    summary: {
      fr: "Co-fondatrice d'une mini-entreprise engagée pour le bien-être mental. Médaille d'or du prix Économie sociale et solidaire.",
      en: "Co-founder of a student company committed to mental well-being. Gold medal, Social and solidarity economy award."
    },
    context: {
      fr: "Projet d'un an dans le cadre du programme Entreprendre Pour Apprendre.",
      en: "A one-year project as part of the Entreprendre Pour Apprendre programme."
    },
    mission: {
      fr: "Concept, identité visuelle, communication et pitch final d'une application de soutien mental.",
      en: "Concept, visual identity, communication and final pitch for a mental health support app."
    },
    results: {
      fr: "Médaille d'or du prix « Économie sociale et solidaire » au concours des mini-entreprises.",
      en: "Gold medal for the “Social and solidarity economy” award at the student company competition."
    },
    tags: [{ fr: "Entrepreneuriat", en: "Entrepreneurship" }, { fr: "Identité visuelle", en: "Visual identity" }, "Pitch", "ESS"]
  },
  {
    id: "cora",
    page: "cora.html",
    type: "pro",
    featured: true,
    color: 4,
    shape: "leaf",
    year: "2023 — 2024",
    image: "assets/cora/brioches.jpg",
    title: { fr: "Carrefour (ex-Cora) — Marketing & communication", en: "Carrefour (ex-Cora) — Marketing & communication" },
    summary: {
      fr: "Alternance (avril 2023 – août 2024) : campagnes promotionnelles, événements en magasin, supports visuels et réseaux sociaux.",
      en: "Work-study (April 2023 – August 2024): promotional campaigns, in-store events, visual materials and social media."
    },
    context: { fr: "Grande enseigne de distribution.", en: "Major retailer." },
    mission: { fr: "Campagnes, événements, supports visuels, réseaux sociaux.", en: "Campaigns, events, visual materials, social media." },
    results: "",
    tags: [{ fr: "Marketing opérationnel", en: "Operational marketing" }, { fr: "Événementiel", en: "Events" }, "PLV", { fr: "Réseaux sociaux", en: "Social media" }]
  },
  {
    id: "jacques-laveine",
    page: "jacques-laveine.html",
    type: "pro",
    featured: true,
    color: 2,
    shape: "circle",
    year: "2022",
    image: "assets/jacques-laveine/bonne-nouvelle.webp",
    title: { fr: "Jacques Laveine Immobilier — Community Manager", en: "Jacques Laveine Immobilier — Community Manager" },
    summary: {
      fr: "Community Manager (sept. – déc. 2022) : contenus Facebook et Instagram, animation des pages, SEO des annonces.",
      en: "Community Manager (Sept – Dec 2022): Facebook and Instagram content, page management, listing SEO."
    },
    context: { fr: "Agence immobilière de vente et de location.", en: "Real estate sales and rental agency." },
    mission: { fr: "Création de contenus, animation des réseaux, SEO, collaboration avec les commerciaux.", en: "Content creation, social media, SEO, working with sales." },
    results: "",
    tags: ["Community management", "Facebook", "Instagram", "SEO"]
  },
  {
    id: "360idcom",
    page: "360idcom.html",
    type: "perso",
    featured: true,
    color: 1,
    shape: "square",
    year: "",
    image: "assets/360idcom/photo-3.jpg",
    title: { fr: "360 ID COM — Agence étudiante", en: "360 ID COM — Student agency" },
    summary: {
      fr: "Cheffe de projet d'une agence étudiante : clients réels (dont ENGIE) et bénéfices reversés à une mission solidaire à Majorque.",
      en: "Project manager at a student agency: real clients (including ENGIE) and profits funding a solidarity mission in Mallorca."
    },
    context: { fr: "Association étudiante de l'IUT Nancy-Charlemagne.", en: "Student association at IUT Nancy-Charlemagne." },
    mission: { fr: "Prospection, gestion de projets, création graphique et relation client.", en: "Prospecting, project management, graphic design and client relations." },
    results: { fr: "Mission humanitaire de 5 jours dans un refuge pour animaux à Majorque.", en: "5-day humanitarian mission at an animal shelter in Mallorca." },
    tags: ["Communication", { fr: "Prospection", en: "Prospecting" }, { fr: "Solidarité", en: "Solidarity" }]
  }
];

/* Parcours (page À propos) — du plus récent au plus ancien.
   kind : "work" (expérience) ou "school" (formation) */
window.TIMELINE = [
  {
    kind: "work",
    period: { fr: "Sept. 2024 — août 2026", en: "Sept 2024 — Aug 2026" },
    title: { fr: "Cheffe de projet marketing digital (alternance)", en: "Digital marketing project manager (work-study)" },
    place: "Saint-Gobain PAM",
    text: {
      fr: "Pilotage de 12 équipes internationales, création des supports projet, reporting des KPIs par pays et validation des évolutions de la plateforme.",
      en: "Leading 12 international teams, creating project materials, country-level KPI reporting and validating platform changes."
    }
  },
  {
    kind: "school",
    period: "2024 — 2026",
    logo: "assets/about/icn.png",
    title: { fr: "Master Programme Grande École", en: "Master in Management (Grande École Programme)" },
    place: "ICN Business School",
    spec: { fr: "Marketing & Innovation Produit", en: "Marketing & Product Innovation" },
    text: { fr: "Formation en alternance.", en: "Work-study programme." }
  },

  {
    kind: "work",
    period: { fr: "Avr. 2023 — août 2024", en: "Apr 2023 — Aug 2024" },
    title: { fr: "Chargée de marketing et communication (alternance)", en: "Marketing & communication officer (work-study)" },
    place: "Carrefour (anciennement Cora)",
    text: {
      fr: "Campagnes promotionnelles, organisation d'événements en magasin, supports visuels et animation des réseaux sociaux.",
      en: "Promotional campaigns, in-store event organisation, visual materials and social media management."
    }
  },
  {
    kind: "work",
    period: { fr: "Sept. — déc. 2022", en: "Sept — Dec 2022" },
    title: { fr: "Community Manager", en: "Community Manager" },
    place: "Jacques Laveine Immobilier",
    text: {
      fr: "Création de contenus digitaux (réseaux sociaux, newsletters), gestion et suivi des supports numériques.",
      en: "Creating digital content (social media, newsletters), managing and monitoring digital channels."
    }
  },
  {
    kind: "school",
    period: "2021 — 2024",
    logo: "assets/about/iut.png",
    title: { fr: "BUT Techniques de commercialisation", en: "Bachelor in Marketing & Sales (BUT TC)" },
    place: "IUT Nancy-Charlemagne",
    spec: { fr: "Marketing digital, entrepreneuriat et e-commerce", en: "Digital marketing, entrepreneurship and e-commerce" },
    text: { fr: "Bachelor universitaire de technologie, en trois ans.", en: "Three-year university bachelor of technology." }
  }
];

/* Compétences & outils (page À propos)
   Un élément peut être un simple texte ou { fr: "...", en: "..." } */
window.SKILLS = [
  {
    title: { fr: "Gestion de projet", en: "Project management" },
    items: [
      { fr: "Pilotage d'équipes internationales", en: "Leading international teams" },
      { fr: "Cadrage", en: "Scoping" },
      { fr: "Planning & priorisation", en: "Planning & prioritisation" },
      { fr: "Kick-off & suivi", en: "Kick-offs & follow-up" },
      { fr: "Arbitrage", en: "Decision-making" },
      "Jira",
      "Confluence"
    ]
  },
  {
    title: { fr: "Analyse & reporting", en: "Analytics & reporting" },
    items: [
      "Google Analytics",
      "Tag Manager",
      "HubSpot",
      { fr: "Suivi des KPIs", en: "KPI tracking" },
      { fr: "Tableaux de bord Excel", en: "Excel dashboards" }
    ]
  },
  {
    title: { fr: "Communication & création", en: "Communication & design" },
    items: [
      "Adobe Illustrator",
      "Photoshop",
      "Canva",
      { fr: "Image de marque", en: "Branding" },
      "Community management",
      "Newsletters",
      { fr: "Événementiel", en: "Events" }
    ]
  },
  {
    title: { fr: "Outils", en: "Tools" },
    items: ["Word", "Excel", "PowerPoint", "CMS"]
  }
];

/* Liens réseaux sociaux — remplacez par vos vrais profils */
window.SOCIAL = {
  email: "lea.datinpro@gmail.com",
  phone: "06 49 46 94 96",
  linkedin: "https://www.linkedin.com/in/lea-datin",
  instagram: "" // mettre l'adresse complète du profil pour afficher le lien
};

/* Réglages du site. Coller ici les identifiants quand ils sont prêts :
   - web3formsKey : clé d'accès Web3Forms (formulaire envoyé directement par e-mail) ;
   - gtmId : conteneur Google Tag Manager (GTM-XXXXXXX), qui charge Google Analytics ;
   - gaId : identifiant Google Analytics 4 (G-XXXXXXXXXX), seulement si on n'utilise pas Tag Manager.
   Les deux ne sont chargés que si le visiteur accepte les cookies. */
window.SITE = {
  web3formsKey: "e10a25d7-dce8-4783-bd8d-7738b3e1fe78",
  gtmId: "",
  gaId: "G-VXMH0L38C4"
};

/* Roue 3D « Mon parcours en 360° » (page d'accueil) */
window.JOURNEY = [
  { href: "saint-gobain.html", img: "assets/saint-gobain/pamline-mockup.webp", fit: "contain", year: "2024 — 2026", title: "Saint-Gobain PAM", role: { fr: "Cheffe de projet marketing digital", en: "Digital marketing project manager" } },
  { href: "about.html", img: "assets/about/icn.png", fit: "logo", year: "2024 — 2026", title: "ICN Business School", role: { fr: "Master Programme Grande École", en: "Master in Management" } },
  { href: "eclipse.html", img: "assets/eclipse/photo-3.jpg", year: "2026", title: "Eclipse", role: { fr: "DA, com' & co-organisation", en: "Art direction, comms & co-organisation" } },
  { href: "cora.html", img: "assets/cora/brioches.jpg", year: "2023 — 2024", title: "Carrefour (ex-Cora)", role: { fr: "Chargée de marketing & communication", en: "Marketing & communication officer" } },
  { href: "360idcom.html", img: "assets/360idcom/photo-3.jpg", year: "", title: "360 ID COM", role: { fr: "Cheffe de projet", en: "Project manager" } },
  { href: "jacques-laveine.html", img: "assets/jacques-laveine/bonne-nouvelle.webp", fit: "contain", year: "2022", title: "Jacques Laveine", role: { fr: "Community Manager", en: "Community Manager" } },
  { href: "punch.html", img: "assets/punch/photo-stand.jpg", year: "2022", title: "PUNCH", role: { fr: "Co-fondatrice", en: "Co-founder" } },
  { href: "about.html", img: "assets/about/iut.png", fit: "logo", year: "2021 — 2024", title: "IUT Nancy-Charlemagne", role: { fr: "BUT Techniques de commercialisation", en: "Bachelor in Marketing & Sales" } }
];

/* Passions : menu « Passions », cartes d'À propos et de Projets. 3 photos par passion, la première sert de vignette. */
window.PASSIONS = [
  { id: "art", href: "art.html", key: "passions.art", imgs: ["assets/art/expo-obey.jpg", "assets/art/aquarelle.jpg", "assets/art/gravure.jpg"] },
  { id: "sport", href: "sport.html", key: "passions.sport", imgs: ["assets/sport/equipe-medailles.jpg", "assets/sport/g-quatre.jpg", "assets/sport/podium.jpg"] },
  { id: "voyage", href: "voyage.html", key: "passions.voyage", imgs: ["assets/voyage/albanie-vlora-palmiers.jpg", "assets/voyage/berlin-spree.jpg", "assets/voyage/jura-coucher-2.jpg"] }
];
