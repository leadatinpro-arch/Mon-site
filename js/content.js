/* ==========================================================================
   CONTENU DU SITE — à personnaliser
   --------------------------------------------------------------------------
   Chaque texte existe en français (fr) et en anglais (en).
   Pour ajouter un projet : copiez un bloc { ... } dans PROJECTS et modifiez-le.
   type : "pro" (expérience professionnelle) ou "perso" (projet personnel)
   color : 1 = bleu, 2 = jaune, 3 = bleu nuit, 4 = bleu clair
   image (facultatif) : chemin vers une image, ex. "assets/projets/campagne.jpg"
   ========================================================================== */

window.PROJECTS = [
  {
    id: "social-media",
    type: "pro",
    color: 1,
    shape: "circle",
    year: "2025",
    image: "",
    title: { fr: "Campagne social media", en: "Social media campaign" },
    summary: {
      fr: "Lancement produit, stratégie de contenu et gestion de communauté.",
      en: "Product launch, content strategy and community management."
    },
    context: {
      fr: "Accompagner le lancement d'un nouveau produit sur les réseaux sociaux et créer une communauté engagée autour de la marque.",
      en: "Supporting a new product launch on social media and building an engaged community around the brand."
    },
    mission: {
      fr: "Définition de la ligne éditoriale, calendrier de publication, création des visuels et vidéos courtes, animation de la communauté et campagne sponsorisée.",
      en: "Defining the editorial line, publishing calendar, creating visuals and short videos, community management and a paid campaign."
    },
    results: {
      fr: "Ajoutez ici vos résultats chiffrés (portée, engagement, abonnés gagnés…).",
      en: "Add your measurable results here (reach, engagement, followers gained…)."
    },
    tags: ["Instagram", "TikTok", "LinkedIn", "Meta Ads", "Canva"]
  },
  {
    id: "seo",
    type: "pro",
    color: 2,
    shape: "square",
    year: "2024",
    image: "",
    title: { fr: "Stratégie SEO", en: "SEO strategy" },
    summary: {
      fr: "Audit technique, contenus optimisés et suivi du trafic organique.",
      en: "Technical audit, optimised content and organic traffic tracking."
    },
    context: {
      fr: "Améliorer la visibilité d'un site sur Google et générer davantage de trafic qualifié sans dépendre de la publicité.",
      en: "Improving a website's visibility on Google and generating more qualified traffic without relying on ads."
    },
    mission: {
      fr: "Audit technique et sémantique, recherche de mots-clés, optimisation des pages existantes, rédaction d'articles de blog et suivi mensuel des positions.",
      en: "Technical and semantic audit, keyword research, optimisation of existing pages, blog writing and monthly ranking reports."
    },
    results: {
      fr: "Ajoutez ici vos résultats chiffrés (trafic, positions, conversions…).",
      en: "Add your measurable results here (traffic, rankings, conversions…)."
    },
    tags: ["SEO", "Google Search Console", "GA4", "WordPress"]
  },
  {
    id: "brand",
    type: "perso",
    color: 3,
    shape: "drop",
    year: "2025",
    image: "",
    title: { fr: "Identité de marque", en: "Brand identity" },
    summary: {
      fr: "Création d'une marque de A à Z : naming, logo, ton et univers visuel.",
      en: "Building a brand from scratch: naming, logo, tone of voice and visual world."
    },
    context: {
      fr: "Projet personnel pour imaginer une marque complète, de son positionnement jusqu'à ses premiers contenus.",
      en: "A personal project to imagine a complete brand, from its positioning to its very first content."
    },
    mission: {
      fr: "Étude de marché, personas, plateforme de marque, naming, direction artistique, charte graphique et maquettes de posts.",
      en: "Market research, personas, brand platform, naming, art direction, brand guidelines and post mock-ups."
    },
    results: {
      fr: "Décrivez ici ce que ce projet vous a apporté et ajoutez des visuels.",
      en: "Describe what this project taught you and add some visuals."
    },
    tags: ["Branding", "Figma", "Canva", "Brand strategy"]
  },
  {
    id: "emailing",
    type: "perso",
    color: 4,
    shape: "leaf",
    year: "2024",
    image: "",
    title: { fr: "Campagne emailing", en: "Email campaign" },
    summary: {
      fr: "Séquences automatisées, segmentation et optimisation des taux d'ouverture.",
      en: "Automated sequences, segmentation and open-rate optimisation."
    },
    context: {
      fr: "Concevoir un parcours email pour transformer de nouveaux inscrits en clients fidèles.",
      en: "Designing an email journey to turn new subscribers into loyal customers."
    },
    mission: {
      fr: "Segmentation de la base, écriture des séquences de bienvenue et de relance, design des templates et A/B tests sur les objets.",
      en: "Audience segmentation, writing welcome and follow-up sequences, template design and subject-line A/B tests."
    },
    results: {
      fr: "Ajoutez ici vos résultats chiffrés (taux d'ouverture, de clic, conversions…).",
      en: "Add your measurable results here (open rate, click rate, conversions…)."
    },
    tags: ["Brevo", "Mailchimp", "Automation", "A/B testing"]
  }
];

/* Parcours (page À propos) — du plus récent au plus ancien.
   kind : "work" (expérience) ou "school" (formation) */
window.TIMELINE = [
  {
    kind: "work",
    period: { fr: "20XX — Aujourd'hui", en: "20XX — Present" },
    title: { fr: "Intitulé du poste", en: "Job title" },
    place: "Nom de l'entreprise",
    text: {
      fr: "Décrivez en une ou deux phrases vos missions principales et ce que vous avez accompli.",
      en: "Describe your main responsibilities and achievements in one or two sentences."
    }
  },
  {
    kind: "work",
    period: { fr: "20XX — 20XX", en: "20XX — 20XX" },
    title: { fr: "Stage / Alternance en marketing digital", en: "Digital marketing internship" },
    place: "Nom de l'entreprise",
    text: {
      fr: "Décrivez en une ou deux phrases vos missions principales et ce que vous avez accompli.",
      en: "Describe your main responsibilities and achievements in one or two sentences."
    }
  },
  {
    kind: "school",
    period: { fr: "20XX — 20XX", en: "20XX — 20XX" },
    title: { fr: "Nom du diplôme", en: "Degree name" },
    place: "Nom de l'école",
    text: {
      fr: "Spécialisation, matières clés ou projets marquants.",
      en: "Specialisation, key subjects or notable projects."
    }
  }
];

/* Compétences & outils (page À propos)
   Un élément peut être un simple texte ou { fr: "...", en: "..." } */
window.SKILLS = [
  {
    title: { fr: "Stratégie", en: "Strategy" },
    items: [{ fr: "Stratégie digitale", en: "Digital strategy" }, "Personas", "Brand content", { fr: "Plan média", en: "Media planning" }, { fr: "Veille", en: "Market watch" }]
  },
  {
    title: { fr: "Acquisition", en: "Acquisition" },
    items: ["SEO", "Google Ads", "Meta Ads", "Emailing", "Marketing automation"]
  },
  {
    title: { fr: "Social & contenu", en: "Social & content" },
    items: ["Community management", "Copywriting", { fr: "Vidéo courte", en: "Short-form video" }, { fr: "Influence", en: "Influencer marketing" }, { fr: "Calendrier éditorial", en: "Editorial calendar" }]
  },
  {
    title: { fr: "Outils", en: "Tools" },
    items: ["Google Analytics 4", "Meta Business Suite", "Canva", "Figma", "Notion", "WordPress", "HubSpot"]
  }
];

/* Liens réseaux sociaux — remplacez par vos vrais profils */
window.SOCIAL = {
  email: "lea.datinpro@gmail.com",
  linkedin: "https://www.linkedin.com/",
  instagram: "https://www.instagram.com/"
};
