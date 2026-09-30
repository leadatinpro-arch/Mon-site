// Contenu bilingue du site. Chaque texte est une paire { fr, en }.
// Les éléments entre [crochets] sont à compléter par Léa (voir README).

export const SITE = {
  baseUrl: 'https://lea-datin.com',
  name: 'Léa Datin',
  email: 'contact@lea-datin.com', // [à remplacer par l'adresse de contact réelle]
  linkedin: 'https://www.linkedin.com/in/lea-datin/', // [à vérifier : URL LinkedIn réelle]
  cv: '/assets/cv/CV-Lea-Datin.pdf',
  // Identifiant de mesure d'audience (GA4 « G-XXXX » ou domaine Plausible).
  // Laisser vide = aucun script de suivi chargé.
  analytics: { provider: 'plausible', id: '' },
};

export const ROUTES = {
  home: { fr: '/', en: '/en/' },
  about: { fr: '/a-propos/', en: '/en/about/' },
  experience: { fr: '/experience/', en: '/en/experience/' },
  projects: { fr: '/projets/', en: '/en/projects/' },
  contact: { fr: '/contact/', en: '/en/contact/' },
  art: { fr: '/a-propos/art/', en: '/en/about/art/' },
  sport: { fr: '/a-propos/sport/', en: '/en/about/sport/' },
  travel: { fr: '/a-propos/voyage/', en: '/en/about/travel/' },
  notfound: { fr: '/404.html', en: '/en/404.html' },
};

export const UI = {
  nav: {
    home: { fr: 'Accueil', en: 'Home' },
    about: { fr: 'À propos', en: 'About' },
    experience: { fr: 'Expérience', en: 'Experience' },
    projects: { fr: 'Projets', en: 'Projects' },
    cv: { fr: 'CV', en: 'Resume' },
    contact: { fr: 'Contact', en: 'Contact' },
  },
  navLabel: { fr: 'Navigation principale', en: 'Main navigation' },
  skip: { fr: 'Aller au contenu', en: 'Skip to content' },
  langSwitch: { fr: 'Switch to English', en: 'Passer en français' },
  menuOpen: { fr: 'Ouvrir le menu', en: 'Open menu' },
  menuClose: { fr: 'Fermer le menu', en: 'Close menu' },
  cvDownload: { fr: 'Télécharger mon CV', en: 'Download my resume' },
  contactMe: { fr: 'Me contacter', en: 'Get in touch' },
  backToTop: { fr: 'Remonter en haut de page', en: 'Back to top' },
  footerTag: {
    fr: 'Marketing digital, gestion de projet & bonne humeur.',
    en: 'Digital marketing, project management & good vibes.',
  },
  footerWrite: { fr: 'Écris-moi', en: 'Write to me' },
  rights: { fr: 'Tous droits réservés.', en: 'All rights reserved.' },
  cookieSettings: { fr: 'Gérer les cookies', en: 'Cookie settings' },
  cookie: {
    text: {
      fr: 'Ce site utilise un outil de mesure d’audience pour savoir quelles pages sont consultées. Rien n’est activé sans ton accord.',
      en: 'This site uses an audience measurement tool to see which pages are visited. Nothing runs without your consent.',
    },
    accept: { fr: 'Accepter', en: 'Accept' },
    refuse: { fr: 'Refuser', en: 'Decline' },
  },
  todo: { fr: 'À compléter', en: 'Coming soon' },
};

export const PASSIONS = {
  art: {
    route: 'art',
    icon: 'palette',
    color: 'yellow',
    title: { fr: 'Art', en: 'Art' },
    teaser: {
      fr: 'Là où je laisse parler ma créativité et où je cultive mon regard.',
      en: 'Where I let my creativity speak and keep training my eye.',
    },
    intro: {
      fr: 'L’art est mon espace de liberté : un endroit où j’expérimente, où je regarde autrement et où je nourris l’œil que je mets ensuite au service de mes projets marketing.',
      en: 'Art is my space of freedom: a place to experiment, to look at things differently and to sharpen the eye I then bring to my marketing projects.',
    },
    why: {
      fr: '[Raconte ici ta pratique : ce que tu crées, depuis quand, les artistes ou mouvements qui t’inspirent.]',
      en: '[Tell your practice here: what you create, since when, the artists or movements that inspire you.]',
    },
    work: {
      fr: 'Composer une image, choisir une couleur, raconter quelque chose sans mots : ce sont les mêmes réflexes que je mobilise pour créer un visuel de campagne ou une page web qui parle vraiment à son public.',
      en: 'Composing an image, picking a colour, telling a story without words: these are the same reflexes I use to design a campaign visual or a web page that truly speaks to its audience.',
    },
  },
  sport: {
    route: 'sport',
    icon: 'sport',
    color: 'blue',
    title: { fr: 'Sport', en: 'Sport' },
    teaser: {
      fr: 'Mon énergie, mon goût de l’effort et de l’esprit d’équipe.',
      en: 'My energy, my taste for effort and team spirit.',
    },
    intro: {
      fr: 'Le sport, c’est ce qui me recharge. Il m’apprend la régularité, le dépassement de soi et le plaisir d’avancer ensemble vers un objectif commun.',
      en: 'Sport is what recharges me. It teaches me consistency, pushing my limits and the joy of moving together towards a shared goal.',
    },
    why: {
      fr: '[Raconte ici tes sports : lesquels, à quel rythme, en club ou en solo, un souvenir marquant.]',
      en: '[Tell your sports here: which ones, how often, in a club or solo, a memorable moment.]',
    },
    work: {
      fr: 'Tenir un planning, garder le rythme sur la durée, encourager les autres quand ça coince : le sport m’a donné des habitudes que je retrouve chaque semaine dans la gestion de projet.',
      en: 'Sticking to a schedule, keeping the pace over time, cheering others on when things get tough: sport gave me habits I use every week in project management.',
    },
  },
  travel: {
    route: 'travel',
    icon: 'plane',
    color: 'light',
    title: { fr: 'Voyage', en: 'Travel' },
    teaser: {
      fr: 'Découvrir de nouvelles cultures et de nouvelles perspectives.',
      en: 'Discovering new cultures and new perspectives.',
    },
    intro: {
      fr: 'Voyager, c’est accepter d’être surprise. Chaque destination m’ouvre à d’autres façons de vivre, de travailler et de voir le monde.',
      en: 'Travelling means accepting to be surprised. Every destination opens me up to other ways of living, working and seeing the world.',
    },
    why: {
      fr: '[Raconte ici tes voyages : destinations marquantes, façon de voyager, prochaine destination rêvée.]',
      en: '[Tell your travels here: memorable destinations, the way you travel, your next dream destination.]',
    },
    work: {
      fr: 'Coordonner un projet avec 12 pays européens demande curiosité et ouverture : comprendre les habitudes de chacun, adapter son discours, trouver un terrain d’entente. Le voyage m’y a préparée.',
      en: 'Coordinating a project across 12 European countries takes curiosity and openness: understanding everyone’s habits, adapting your message, finding common ground. Travelling prepared me for it.',
    },
  },
};

export const HOME = {
  metaTitle: {
    fr: 'Léa Datin — Cheffe de projet marketing digital',
    en: 'Léa Datin — Digital Marketing Project Manager',
  },
  metaDesc: {
    fr: 'Portfolio de Léa Datin, diplômée du PGE de l’ICN Business School. Deux ans de gestion de projet marketing digital chez Saint-Gobain PAM, sur 12 pays européens.',
    en: 'Portfolio of Léa Datin, ICN Business School Master’s graduate. Two years managing digital marketing projects at Saint-Gobain PAM across 12 European countries.',
  },
  hello: { fr: 'Bonjour, moi c’est', en: 'Hi, I’m' },
  rolePrefix: { fr: 'J’aime', en: 'I love' },
  roles: {
    fr: ['le marketing digital', 'piloter des projets', 'fédérer des équipes internationales', 'créer du contenu'],
    en: ['digital marketing', 'leading projects', 'bringing international teams together', 'creating content'],
  },
  lead: {
    fr: 'Jeune diplômée de l’ICN Business School, j’ai passé deux ans à piloter la refonte d’un site web déployé dans 12 pays européens chez Saint-Gobain PAM. Je cherche aujourd’hui mon prochain terrain de jeu.',
    en: 'A recent ICN Business School graduate, I spent two years leading the redesign of a website rolled out across 12 European countries at Saint-Gobain PAM. I’m now looking for my next playground.',
  },
  stats: [
    { value: 12, label: { fr: 'pays coordonnés', en: 'countries coordinated' } },
    { value: 3, label: { fr: 'alternances', en: 'work-study roles' } },
    { value: 3, label: { fr: 'projets perso', en: 'side projects' } },
  ],
  whoEyebrow: { fr: 'Qui je suis', en: 'Who I am' },
  whoTitle: {
    fr: 'Dynamique, sociable et curieuse.',
    en: 'Energetic, sociable and curious.',
  },
  whoText: {
    fr: 'J’aime créer du lien, découvrir de nouvelles perspectives et travailler dans la bonne humeur. Trois passions nourrissent tout ce que je fais :',
    en: 'I love connecting people, discovering new perspectives and working in a good mood. Three passions feed everything I do:',
  },
  whoMore: { fr: 'En savoir plus sur moi', en: 'More about me' },
  expEyebrow: { fr: 'Expérience', en: 'Experience' },
  expTitle: {
    fr: 'Deux ans aux commandes de PAM Line.',
    en: 'Two years at the helm of PAM Line.',
  },
  expText: {
    fr: 'Chez Saint-Gobain PAM, j’ai piloté la refonte stratégique d’un site multilingue : migration de Drupal 7 vers Drupal 10, coordination entre 12 pays, l’équipe centrale et les développeurs, workshops et formation des équipes locales.',
    en: 'At Saint-Gobain PAM, I led the strategic redesign of a multilingual website: migrating from Drupal 7 to Drupal 10, coordinating 12 countries, the central team and developers, running workshops and training local teams.',
  },
  expCta: { fr: 'Voir tout mon parcours', en: 'See my full journey' },
  expStats: [
    { value: 12, label: { fr: 'pays', en: 'countries' } },
    { value: 10, prefix: 'D7 → D', label: { fr: 'migration Drupal', en: 'Drupal migration' } },
    { value: 2, label: { fr: 'ans de pilotage', en: 'years leading' } },
  ],
  projEyebrow: { fr: 'Projets', en: 'Projects' },
  projTitle: { fr: 'Ce que je construis à côté.', en: 'What I build on the side.' },
  projCta: { fr: 'Découvrir mes projets', en: 'Discover my projects' },
  testiEyebrow: { fr: 'Ils parlent de moi', en: 'Kind words' },
  testiTitle: { fr: 'Recommandations', en: 'Recommendations' },
};

export const TESTIMONIALS = [
  {
    name: 'Catherine Ficara',
    role: { fr: 'Digital Content Manager, Saint-Gobain PAM', en: 'Digital Content Manager, Saint-Gobain PAM' },
    quote: {
      fr: '[Coller ici le texte exact de la recommandation LinkedIn de Catherine Ficara.]',
      en: '[Paste the exact text of Catherine Ficara’s LinkedIn recommendation here.]',
    },
  },
  {
    name: 'Lucas Dorval',
    role: { fr: 'Coordinateur, Entreprendre Pour Apprendre', en: 'Coordinator, Entreprendre Pour Apprendre' },
    quote: {
      fr: '[Coller ici le texte exact de la recommandation LinkedIn de Lucas Dorval.]',
      en: '[Paste the exact text of Lucas Dorval’s LinkedIn recommendation here.]',
    },
  },
];

export const ABOUT = {
  metaTitle: { fr: 'À propos — Léa Datin', en: 'About — Léa Datin' },
  metaDesc: {
    fr: 'Qui est Léa Datin : sa personnalité, sa vision du travail et ce qui l’inspire (art, sport, voyage).',
    en: 'Who Léa Datin is: her personality, her vision of work and what inspires her (art, sport, travel).',
  },
  heroEyebrow: { fr: 'À propos', en: 'About' },
  heroTitle: { fr: 'Un peu plus sur moi', en: 'A bit more about me' },
  heroScript: { fr: 'enchantée !', en: 'nice to meet you!' },
  heroText: {
    fr: 'Au-delà du CV, voici ce qui me fait avancer, la façon dont j’aime travailler et les passions qui me ressourcent.',
    en: 'Beyond the resume, here is what drives me, how I like to work and the passions that recharge me.',
  },
  whoTitle: { fr: 'Qui je suis', en: 'Who I am' },
  whoText: {
    fr: 'Je suis quelqu’un de dynamique, sociable et curieuse. J’aime créer du lien avec les gens qui m’entourent et découvrir de nouvelles perspectives, que ce soit au travail ou en dehors. Je m’épanouis dans les environnements où règnent la bonne humeur et la créativité.',
    en: 'I am energetic, sociable and curious. I love building connections with the people around me and discovering new perspectives, at work and beyond. I thrive in environments full of good mood and creativity.',
  },
  traits: [
    { fr: 'Dynamique', en: 'Energetic' },
    { fr: 'Sociable', en: 'Sociable' },
    { fr: 'Curieuse', en: 'Curious' },
  ],
  visionTitle: { fr: 'Ma vision du travail', en: 'My vision of work' },
  visionIntro: {
    fr: 'Pour moi, un bon projet se construit avec les autres.',
    en: 'To me, a good project is built with others.',
  },
  vision: [
    {
      title: { fr: 'Un leadership d’écoute', en: 'Listening-based leadership' },
      text: {
        fr: 'Je crois à un leadership basé sur l’écoute, la motivation et la confiance : on avance mieux quand chacun se sent entendu.',
        en: 'I believe in leadership built on listening, motivation and trust: we move forward better when everyone feels heard.',
      },
    },
    {
      title: { fr: 'La diversité comme force', en: 'Diversity as a strength' },
      text: {
        fr: 'La diversité des idées est une force. Confronter les points de vue, c’est souvent là que naissent les meilleures solutions.',
        en: 'Diversity of ideas is a strength. Comparing viewpoints is often where the best solutions are born.',
      },
    },
    {
      title: { fr: 'Organisé, mais spontané', en: 'Organised, yet spontaneous' },
      text: {
        fr: 'J’aime les projets bien organisés, qui laissent tout de même une place à la spontanéité et aux bonnes surprises.',
        en: 'I like well-organised projects that still leave room for spontaneity and good surprises.',
      },
    },
  ],
  inspireTitle: { fr: 'Ce qui m’inspire', en: 'What inspires me' },
  inspireText: {
    fr: 'Trois univers qui me ressourcent et qui se retrouvent, d’une façon ou d’une autre, dans ma façon de travailler.',
    en: 'Three worlds that recharge me and that show up, one way or another, in the way I work.',
  },
  discover: { fr: 'Découvrir', en: 'Discover' },
  albumTitle: { fr: 'Album photo', en: 'Photo album' },
  albumText: {
    fr: 'Quelques moments choisis. Clique sur une photo ou utilise les flèches pour tourner les pages.',
    en: 'A few hand-picked moments. Click a photo or use the arrows to turn the pages.',
  },
  albumPrev: { fr: 'Photo précédente', en: 'Previous photo' },
  albumNext: { fr: 'Photo suivante', en: 'Next photo' },
  albumReset: { fr: 'Recommencer', en: 'Start over' },
  albumGoto: { fr: 'Aller à la photo', en: 'Go to photo' },
  album: [
    { fr: '[Légende photo 1]', en: '[Photo caption 1]' },
    { fr: '[Légende photo 2]', en: '[Photo caption 2]' },
    { fr: '[Légende photo 3]', en: '[Photo caption 3]' },
    { fr: '[Légende photo 4]', en: '[Photo caption 4]' },
    { fr: '[Légende photo 5]', en: '[Photo caption 5]' },
  ],
};

export const PASSION_PAGE = {
  back: { fr: 'Retour à « À propos »', en: 'Back to “About”' },
  whyTitle: { fr: 'Pourquoi ça compte pour moi', en: 'Why it matters to me' },
  workTitle: { fr: 'Ce que ça m’apporte au travail', en: 'What it brings to my work' },
  galleryTitle: { fr: 'En images', en: 'In pictures' },
  others: { fr: 'Mes autres sources d’inspiration', en: 'My other sources of inspiration' },
  metaDesc: {
    fr: 'Léa Datin et sa passion : ',
    en: 'Léa Datin and her passion: ',
  },
};

export const EXPERIENCE = {
  metaTitle: { fr: 'Expérience — Léa Datin', en: 'Experience — Léa Datin' },
  metaDesc: {
    fr: 'Parcours académique et professionnel de Léa Datin : IUT Nancy Charlemagne, Carrefour, ICN Business School, Saint-Gobain PAM.',
    en: 'Léa Datin’s academic and professional journey: IUT Nancy Charlemagne, Carrefour, ICN Business School, Saint-Gobain PAM.',
  },
  heroEyebrow: { fr: 'Expérience', en: 'Experience' },
  heroTitle: { fr: 'Mon parcours', en: 'My journey' },
  heroText: {
    fr: 'Formations et alternances, dans l’ordre chronologique. Clique sur une étape pour la déplier.',
    en: 'Studies and work-study placements, in chronological order. Click a step to expand it.',
  },
  labels: {
    context: { fr: 'Le contexte', en: 'Context' },
    why: { fr: 'Pourquoi c’est important', en: 'Why it matters' },
    resp: { fr: 'Responsabilités clés', en: 'Key responsibilities' },
    school: { fr: 'Formation', en: 'Education' },
    job: { fr: 'Alternance', en: 'Work-study' },
  },
  cta: { fr: 'Envie d’en parler ?', en: 'Want to talk about it?' },
  items: [
    {
      kind: 'school',
      org: 'IUT Nancy Charlemagne',
      title: { fr: 'BUT Techniques de commercialisation', en: 'Bachelor in Marketing & Sales (BUT TC)' },
      date: { fr: '2021 – 2024', en: '2021 – 2024' },
      summary: {
        fr: 'Spécialisation marketing digital, entrepreneuriat et e-commerce.',
        en: 'Specialisation in digital marketing, entrepreneurship and e-commerce.',
      },
    },
    {
      kind: 'job',
      org: 'Jacques Laveine Immobilier',
      title: { fr: 'Community Manager', en: 'Community Manager' },
      date: { fr: 'Sept. – Déc. 2022', en: 'Sept. – Dec. 2022' },
      summary: {
        fr: 'Contenus réseaux sociaux pour une agence immobilière.',
        en: 'Social media content for a real estate agency.',
      },
      context: {
        fr: 'Agence immobilière qui s’appuie sur les réseaux sociaux pour rester visible auprès de sa clientèle locale.',
        en: 'A real estate agency relying on social media to stay visible to its local clientele.',
      },
      why: {
        fr: 'Ma première expérience de communication digitale sur le terrain : produire des contenus réguliers pour une cible locale, en lien direct avec les équipes commerciales.',
        en: 'My first hands-on digital communication experience: producing regular content for a local audience, working directly with the sales teams.',
      },
      resp: [
        { fr: 'Création de contenus visuels et rédactionnels pour Facebook et Instagram', en: 'Creating visual and written content for Facebook and Instagram' },
        { fr: 'Animation des pages locales de l’agence', en: 'Running the agency’s local pages' },
        { fr: 'Collaboration avec les équipes commerciales', en: 'Working closely with the sales teams' },
      ],
    },
    {
      kind: 'job',
      org: 'Carrefour (ex-CORA)',
      title: { fr: 'Chargée de marketing et communication', en: 'Marketing & Communication Officer' },
      date: { fr: 'Avril 2023 – Août 2024', en: 'April 2023 – Aug. 2024' },
      summary: {
        fr: 'Campagnes, événements et supports en magasin.',
        en: 'Campaigns, events and in-store materials.',
      },
      context: {
        fr: 'Grande enseigne de distribution, avec un magasin où le marketing se joue autant en rayon que sur les réseaux sociaux.',
        en: 'A major retail chain, with a store where marketing happens as much on the shelves as on social media.',
      },
      why: {
        fr: 'J’y ai appris à mener des campagnes de bout en bout, du print au digital, et à faire travailler ensemble des services aux priorités très différentes.',
        en: 'I learned to run campaigns end to end, from print to digital, and to get departments with very different priorities working together.',
      },
      resp: [
        { fr: 'Gestion de campagnes marketing (affiches, PLV, réseaux sociaux)', en: 'Managing marketing campaigns (posters, POS materials, social media)' },
        { fr: 'Organisation d’événements en magasin', en: 'Organising in-store events' },
        { fr: 'Création de supports visuels', en: 'Designing visual materials' },
        { fr: 'Animation des réseaux sociaux', en: 'Running social media accounts' },
        { fr: 'Collaboration interservices', en: 'Cross-department collaboration' },
      ],
    },
    {
      kind: 'school',
      org: 'ICN Business School',
      title: { fr: 'Master Programme Grande École', en: 'Master in Management (Grande École)' },
      date: { fr: '2024 – 2026', en: '2024 – 2026' },
      summary: {
        fr: 'Spécialisation Marketing & Innovation Produit.',
        en: 'Specialisation in Marketing & Product Innovation.',
      },
    },
    {
      kind: 'job',
      org: 'Saint-Gobain PAM',
      title: { fr: 'Cheffe de projet marketing digital', en: 'Digital Marketing Project Manager' },
      date: { fr: 'Sept. 2024 – Août 2026', en: 'Sept. 2024 – Aug. 2026' },
      summary: {
        fr: 'Pilotage du projet PAM Line : un site multilingue pour 12 pays.',
        en: 'Leading the PAM Line project: a multilingual website for 12 countries.',
      },
      context: {
        fr: 'Refonte stratégique d’un site web multilingue déployé dans 12 pays. L’ancien site tournait sous Drupal 7, devenu obsolète, et son hébergement arrivait à échéance : il fallait migrer vers Drupal 10.',
        en: 'Strategic redesign of a multilingual website rolled out in 12 countries. The old site ran on an outdated Drupal 7 and its hosting was about to expire: it had to be migrated to Drupal 10.',
      },
      why: {
        fr: 'Un projet international à fort enjeu, où j’ai fait le lien entre les pays, l’équipe centrale et les développeurs, avec des délais imposés par la fin de l’hébergement.',
        en: 'A high-stakes international project where I connected the countries, the central team and the developers, under deadlines set by the end of the hosting contract.',
      },
      resp: [
        { fr: 'Coordination internationale entre les pays, l’équipe centrale et les développeurs', en: 'International coordination between countries, the central team and developers' },
        { fr: 'Organisation de workshops', en: 'Running workshops' },
        { fr: 'Formation des équipes locales', en: 'Training local teams' },
        { fr: 'Gestion de contenus via le back-office de plusieurs sites', en: 'Managing content through the back office of several sites' },
        { fr: 'Suivi technique : remontée de bugs, validation de composants UI', en: 'Technical follow-up: bug reporting, UI component validation' },
        { fr: 'Planification et reporting hebdomadaire', en: 'Planning and weekly reporting' },
      ],
    },
  ],
};

export const PROJECTS = {
  metaTitle: { fr: 'Projets — Léa Datin', en: 'Projects — Léa Datin' },
  metaDesc: {
    fr: 'Les projets personnels de Léa Datin : 360ID, PUNCH et Éclipse, un événement de musique électronique à Nancy.',
    en: 'Léa Datin’s side projects: 360ID, PUNCH and Éclipse, an electronic music event in Nancy.',
  },
  heroEyebrow: { fr: 'Projets', en: 'Projects' },
  heroTitle: { fr: 'Mes projets perso', en: 'My side projects' },
  heroText: {
    fr: 'Ce que je lance et fais grandir en dehors des cours et de l’entreprise.',
    en: 'What I launch and grow outside of school and work.',
  },
  roleLabel: { fr: 'Mon rôle', en: 'My role' },
  items: [
    {
      id: '360id',
      name: '360ID',
      tag: { fr: '[Catégorie]', en: '[Category]' },
      pitch: { fr: '[Accroche du projet en une phrase.]', en: '[One-sentence project pitch.]' },
      text: {
        fr: '[Décris 360ID : le problème, l’idée, ce qui a été réalisé.]',
        en: '[Describe 360ID: the problem, the idea, what has been achieved.]',
      },
      role: { fr: '[Ton rôle dans le projet]', en: '[Your role in the project]' },
    },
    {
      id: 'punch',
      name: 'PUNCH',
      tag: { fr: '[Catégorie]', en: '[Category]' },
      pitch: { fr: '[Accroche du projet en une phrase.]', en: '[One-sentence project pitch.]' },
      text: {
        fr: '[Décris PUNCH : le problème, l’idée, ce qui a été réalisé.]',
        en: '[Describe PUNCH: the problem, the idea, what has been achieved.]',
      },
      role: { fr: '[Ton rôle dans le projet]', en: '[Your role in the project]' },
    },
    {
      id: 'eclipse',
      name: 'Éclipse',
      tag: { fr: 'Événementiel · Musique électronique', en: 'Events · Electronic music' },
      pitch: {
        fr: 'Un événement de musique électronique à Nancy.',
        en: 'An electronic music event in Nancy.',
      },
      text: {
        fr: 'J’organise Éclipse, un événement de musique électronique à Nancy. [Précise ici : première édition, lieu, public, artistes, chiffres clés.]',
        en: 'I organise Éclipse, an electronic music event in Nancy. [Add details: first edition, venue, audience, artists, key figures.]',
      },
      role: { fr: 'Organisatrice', en: 'Organiser' },
    },
  ],
};

export const CONTACT = {
  metaTitle: { fr: 'Contact — Léa Datin', en: 'Contact — Léa Datin' },
  metaDesc: {
    fr: 'Contacter Léa Datin : e-mail, LinkedIn et CV à télécharger.',
    en: 'Contact Léa Datin: email, LinkedIn and downloadable resume.',
  },
  heroEyebrow: { fr: 'Contact', en: 'Contact' },
  heroTitle: { fr: 'Parlons-en !', en: 'Let’s talk!' },
  heroScript: { fr: 'à très vite', en: 'talk soon' },
  heroText: {
    fr: 'Une offre, une question, un projet ou juste envie d’échanger ? Je réponds avec plaisir.',
    en: 'A job offer, a question, a project or just want to chat? I’ll be happy to reply.',
  },
  cards: {
    email: { fr: 'E-mail', en: 'Email' },
    linkedin: { fr: 'LinkedIn', en: 'LinkedIn' },
    linkedinText: { fr: 'Voir mon profil', en: 'See my profile' },
    cv: { fr: 'CV', en: 'Resume' },
    cvText: { fr: 'Télécharger le PDF', en: 'Download the PDF' },
  },
  form: {
    title: { fr: 'M’écrire directement', en: 'Write to me directly' },
    name: { fr: 'Ton nom', en: 'Your name' },
    email: { fr: 'Ton e-mail', en: 'Your email' },
    subject: { fr: 'Sujet', en: 'Subject' },
    message: { fr: 'Ton message', en: 'Your message' },
    send: { fr: 'Envoyer', en: 'Send' },
    note: {
      fr: 'Le bouton ouvre ta messagerie avec le message pré-rempli.',
      en: 'The button opens your email app with the message pre-filled.',
    },
  },
};

export const NOTFOUND = {
  metaTitle: { fr: 'Page introuvable — Léa Datin', en: 'Page not found — Léa Datin' },
  text: {
    fr: 'Oups, on dirait que cette page n’existe pas. Pas de panique, ça arrive. Reviens à l’accueil pour repartir sur de bonnes bases.',
    en: 'Oops, looks like this page doesn’t exist. Don’t worry, it happens. Head back home to start again on the right foot.',
  },
  cta: { fr: 'Retour à l’accueil', en: 'Back to home' },
};
