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
   ========================================================================== */

window.PROJECTS = [
  {
    id: "saint-gobain",
    type: "pro",
    featured: true,
    color: 1,
    shape: "circle",
    year: "2024 — 2026",
    image: "",
    title: { fr: "Saint-Gobain — Pilotage international", en: "Saint-Gobain — International project lead" },
    summary: {
      fr: "Cheffe de projet marketing digital : coordination de 12 équipes internationales autour d'une plateforme digitale.",
      en: "Digital marketing project manager: coordinating 12 international teams around a digital platform."
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
    type: "perso",
    featured: true,
    color: 2,
    shape: "square",
    year: { fr: "En cours", en: "Ongoing" },
    image: "",
    title: { fr: "Eclipse — Soirées techno à Nancy", en: "Eclipse — Techno nights in Nancy" },
    summary: {
      fr: "Co-organisatrice de concerts techno : gestion de projet de A à Z, communication et image de marque.",
      en: "Co-organiser of techno events: end-to-end project management, communication and brand identity."
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
    type: "perso",
    featured: true,
    color: 3,
    shape: "drop",
    year: "",
    image: "",
    title: { fr: "PUNCH — Start-up santé", en: "PUNCH — Health start-up" },
    summary: {
      fr: "Co-fondatrice : pilotage d'une start-up santé, conception d'une application mobile et stratégie marketing digital.",
      en: "Co-founder: leading a health start-up, designing a mobile app and building the digital marketing strategy."
    },
    context: {
      fr: "PUNCH est une start-up dans le domaine de la santé que j'ai co-fondée, avec pour ambition de proposer une application mobile.",
      en: "PUNCH is a health start-up I co-founded, with the ambition of launching a mobile app."
    },
    mission: {
      fr: "Pilotage du projet, conception de l'application mobile et définition de la stratégie marketing digital.",
      en: "Leading the project, designing the mobile app and defining the digital marketing strategy."
    },
    results: "",
    tags: [{ fr: "Entrepreneuriat", en: "Entrepreneurship" }, { fr: "App mobile", en: "Mobile app" }, { fr: "Stratégie digitale", en: "Digital strategy" }]
  },
  {
    id: "cora",
    type: "pro",
    featured: true,
    color: 4,
    shape: "leaf",
    year: "2023 — 2024",
    image: "",
    title: { fr: "Cora — Marketing & communication", en: "Cora — Marketing & communication" },
    summary: {
      fr: "Alternance : organisation d'événements internes et externes, création de supports de communication.",
      en: "Work-study: organising internal and external events, creating communication materials."
    },
    context: {
      fr: "Alternance au sein du service marketing et communication de Cora.",
      en: "Work-study position within Cora's marketing and communication department."
    },
    mission: {
      fr: "Organisation et gestion d'événements internes et externes. Création de supports de communication et de visuels marketing.",
      en: "Organising and managing internal and external events. Creating communication materials and marketing visuals."
    },
    results: "",
    tags: [{ fr: "Événementiel", en: "Events" }, "Communication", { fr: "Création visuelle", en: "Visual design" }]
  },
  {
    id: "jacques-laveine",
    type: "pro",
    featured: false,
    color: 2,
    shape: "circle",
    year: "2022",
    image: "",
    title: { fr: "Jacques Laveine Immo — Community management", en: "Jacques Laveine Immo — Community management" },
    summary: {
      fr: "Community manager : création de contenus digitaux et gestion des supports numériques.",
      en: "Community manager: creating digital content and managing digital channels."
    },
    context: {
      fr: "Mission de community management pour une agence immobilière.",
      en: "Community management role for a real estate agency."
    },
    mission: {
      fr: "Création de contenus digitaux (réseaux sociaux, newsletters). Gestion et suivi des supports numériques.",
      en: "Creating digital content (social media, newsletters). Managing and monitoring digital channels."
    },
    results: "",
    tags: ["Community management", { fr: "Réseaux sociaux", en: "Social media" }, "Newsletters"]
  },
  {
    id: "360idcom",
    type: "perso",
    featured: false,
    color: 1,
    shape: "square",
    year: "",
    image: "",
    title: { fr: "360idcom — Cheffe de projet", en: "360idcom — Project manager" },
    summary: {
      fr: "Gestion de projets étudiants, développement et mise en place de stratégies innovantes.",
      en: "Managing student projects, developing and implementing innovative strategies."
    },
    context: {
      fr: "Engagement étudiant en tant que cheffe de projet au sein de 360idcom.",
      en: "Student involvement as a project manager at 360idcom."
    },
    mission: {
      fr: "Gestion de projets étudiants, développement et mise en place de stratégies innovantes.",
      en: "Managing student projects, developing and implementing innovative strategies."
    },
    results: "",
    tags: [{ fr: "Gestion de projet", en: "Project management" }, { fr: "Stratégie", en: "Strategy" }]
  },
  {
    id: "aviron",
    type: "perso",
    featured: false,
    color: 4,
    shape: "drop",
    year: "",
    image: "",
    title: { fr: "Entraîneuse d'aviron", en: "Rowing coach" },
    summary: {
      fr: "Organisation d'événements sportifs et gestion d'équipe.",
      en: "Organising sports events and managing a team."
    },
    context: {
      fr: "Engagement associatif dans le sport que je pratique : l'aviron.",
      en: "Volunteering in the sport I practise: rowing."
    },
    mission: {
      fr: "Entraînement et gestion d'équipe, organisation d'événements sportifs.",
      en: "Coaching and managing a team, organising sports events."
    },
    results: "",
    tags: [{ fr: "Gestion d'équipe", en: "Team management" }, { fr: "Événementiel", en: "Events" }, { fr: "Sport", en: "Sport" }]
  }
];

/* Parcours (page À propos) — du plus récent au plus ancien.
   kind : "work" (expérience) ou "school" (formation) */
window.TIMELINE = [
  {
    kind: "work",
    period: "2024 — 2026",
    title: { fr: "Cheffe de projet marketing digital", en: "Digital marketing project manager" },
    place: "Saint-Gobain",
    text: {
      fr: "Pilotage de 12 équipes internationales, création des supports projet, reporting des KPIs par pays et validation des évolutions de la plateforme.",
      en: "Leading 12 international teams, creating project materials, country-level KPI reporting and validating platform changes."
    }
  },
  {
    kind: "school",
    period: "2024 — 2026",
    title: { fr: "Master Programme Grande École", en: "Master in Management (Grande École Programme)" },
    place: "ICN Business School",
    text: { fr: "Formation en alternance.", en: "Work-study programme." }
  },
  {
    kind: "work",
    period: "2023 — 2024",
    title: { fr: "Alternance Marketing & Communication", en: "Marketing & Communication (work-study)" },
    place: "Cora",
    text: {
      fr: "Organisation et gestion d'événements internes et externes, création de supports de communication et de visuels marketing.",
      en: "Organising internal and external events, creating communication materials and marketing visuals."
    }
  },
  {
    kind: "work",
    period: "2022",
    title: { fr: "Community Manager", en: "Community Manager" },
    place: "Jacques Laveine Immo",
    text: {
      fr: "Création de contenus digitaux (réseaux sociaux, newsletters), gestion et suivi des supports numériques.",
      en: "Creating digital content (social media, newsletters), managing and monitoring digital channels."
    }
  },
  {
    kind: "school",
    period: "2021 — 2024",
    title: { fr: "BUT Marketing Digital, E-commerce & Entrepreneuriat", en: "Bachelor in Digital Marketing, E-commerce & Entrepreneurship (BUT)" },
    place: "IUT Nancy-Charlemagne",
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
  linkedin: "https://www.linkedin.com/",
  instagram: "https://www.instagram.com/"
};
