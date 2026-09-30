// Contenu bilingue du site. Chaque texte est une paire { fr, en }.
// Les textes FR des pages Accueil, À propos et Expérience reprennent la version validée par Léa.
// Les éléments entre [crochets] sont à compléter (ils apparaissent surlignés sur le site).

export const SITE = {
  baseUrl: 'https://lea-datin.com',
  name: 'Léa Datin',
  email: 'lea.datinpro@gmail.com',
  linkedin: '#', // [à compléter : URL du profil LinkedIn]
  cv: '/assets/cv/CV-Lea-Datin.pdf',
  // Mesure d'audience, chargée seulement après consentement.
  // provider : 'plausible' (id = domaine) ou 'ga4' (id = G-XXXX). id vide = aucun suivi.
  analytics: { provider: 'plausible', id: '' },
  // Modèle 3D optionnel (.glb) affiché dans le hero de l'accueil via <model-viewer>.
  // Ex. : '/assets/3d/laptop.glb' après l'avoir téléchargé (Poly Pizza, Sketchfab CC0…). Vide = objets 3D maison.
  model3d: '',
};

// 12 points lumineux du globe (section Expérience de l'accueil). Aucun nom n'est affiché sur le site.
// [à vérifier : remplacer par les 12 pays réels du projet PAM Line]
export const GLOBE = {
  hub: [48.90, 6.06], // Pont-à-Mousson
  points: [
    [48.86, 2.35], [40.42, -3.70], [38.72, -9.14], [41.90, 12.50], [52.52, 13.40], [51.51, -0.13],
    [50.85, 4.35], [52.37, 4.90], [46.95, 7.45], [48.21, 16.37], [52.23, 21.01], [50.08, 14.44],
  ],
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
  langSwitch: { fr: 'Changer de langue : English', en: 'Switch language: Français' },
  menuOpen: { fr: 'Ouvrir le menu', en: 'Open menu' },
  menuClose: { fr: 'Fermer le menu', en: 'Close menu' },
  cvDownload: { fr: 'Télécharger mon CV', en: 'Download my resume' },
  backToTop: { fr: 'Remonter en haut de page', en: 'Back to top' },
  cookieSettings: { fr: 'Cookies', en: 'Cookies' },
  cookie: {
    text: {
      fr: 'Ce site utilise un outil de mesure d’audience pour savoir quelles pages sont consultées. Rien n’est activé sans ton accord.',
      en: 'This site uses an audience measurement tool to see which pages are visited. Nothing runs without your consent.',
    },
    accept: { fr: 'Accepter', en: 'Accept' },
    refuse: { fr: 'Refuser', en: 'Decline' },
  },
  more: { fr: 'En savoir plus →', en: 'Learn more →' },
  projectsTeaser: {
    title: { fr: '360ID, PUNCH, Éclipse...', en: '360ID, PUNCH, Éclipse...' },
    text: { fr: 'Découvre ce que je construis en dehors du poste.', en: 'Discover what I build outside of my job.' },
    cta: { fr: 'Voir mes projets →', en: 'See my projects →' },
  },
};

export const PASSIONS = {
  art: {
    route: 'art',
    title: { fr: 'Art', en: 'Art' },
    script: { fr: 'L’art', en: 'Art' },
    card: { fr: 'Ce qui nourrit mon regard et ma créativité au quotidien.', en: 'What feeds my eye and my creativity every day.' },
    panel: {
      fr: 'Musique, dessin, sculpture, cinéma. Une source d’inspiration nourrie au fil des expositions.',
      en: 'Music, drawing, sculpture, cinema. A source of inspiration fed by every exhibition.',
    },
    gradient: 'linear-gradient(160deg, var(--blue-light), var(--blue))',
    border: 'var(--yellow)',
    heroTitle: { fr: 'L’art, <script>mon terrain de jeu.</script>', en: 'Art, <script>my playground.</script>' },
    heroText: {
      fr: 'Musique, dessin, sculpture, cinéma : l’art nourrit mon regard et ma créativité au quotidien.',
      en: 'Music, drawing, sculpture, cinema: art feeds my eye and my creativity every day.',
    },
    tags: [{ fr: 'Musique', en: 'Music' }, { fr: 'Dessin', en: 'Drawing' }, { fr: 'Sculpture', en: 'Sculpture' }, { fr: 'Cinéma', en: 'Cinema' }, { fr: 'Expositions', en: 'Exhibitions' }],
    story: {
      fr: 'L’art est une source d’inspiration que je nourris au fil des expositions. [Raconte ici une exposition, un film ou une œuvre qui t’a marquée, et ta propre pratique.]',
      en: 'Art is a source of inspiration I keep feeding through exhibitions. [Tell here about an exhibition, a film or a piece that moved you, and your own practice.]',
    },
    work: {
      fr: 'Composer une image, choisir une couleur, raconter une histoire sans mots : ce sont les mêmes réflexes que je mobilise pour créer un visuel de campagne ou une page web qui parle vraiment à son public.',
      en: 'Composing an image, picking a colour, telling a story without words: these are the same reflexes I use to design a campaign visual or a web page that truly speaks to its audience.',
    },
  },
  sport: {
    route: 'sport',
    title: { fr: 'Sport', en: 'Sport' },
    script: { fr: 'Le sport', en: 'Sport' },
    card: { fr: 'L’aviron et la discipline qui viennent avec.', en: 'Rowing, and the discipline that comes with it.' },
    panel: {
      fr: 'L’aviron : rigueur, persévérance, gestion de la pression. Un sport qui a forgé mon esprit d’équipe.',
      en: 'Rowing: rigour, perseverance, handling pressure. A sport that shaped my team spirit.',
    },
    gradient: 'linear-gradient(160deg, var(--blue), var(--navy))',
    border: 'var(--blue)',
    heroTitle: { fr: 'L’aviron, <script>ramer ensemble.</script>', en: 'Rowing, <script>pulling together.</script>' },
    heroText: {
      fr: 'Rigueur, persévérance, gestion de la pression : un sport qui a forgé mon esprit d’équipe.',
      en: 'Rigour, perseverance, handling pressure: a sport that shaped my team spirit.',
    },
    tags: [{ fr: 'Aviron', en: 'Rowing' }, { fr: 'Rigueur', en: 'Rigour' }, { fr: 'Persévérance', en: 'Perseverance' }, { fr: 'Esprit d’équipe', en: 'Team spirit' }],
    story: {
      fr: 'En aviron, un bateau n’avance vite que si tout l’équipage rame au même rythme. [Raconte ici ton parcours : club, années de pratique, compétitions, un souvenir marquant.]',
      en: 'In rowing, a boat only goes fast when the whole crew pulls in rhythm. [Tell your story here: club, years rowing, competitions, a memorable moment.]',
    },
    work: {
      fr: 'Tenir un planning, garder le rythme sur la durée, rester lucide sous pression et avancer ensemble vers un objectif commun : l’aviron m’a donné des réflexes que je retrouve chaque semaine en gestion de projet.',
      en: 'Sticking to a plan, keeping the pace over time, staying clear-headed under pressure and moving together towards a shared goal: rowing gave me reflexes I use every week in project management.',
    },
  },
  travel: {
    route: 'travel',
    title: { fr: 'Voyage', en: 'Travel' },
    script: { fr: 'Le voyage', en: 'Travel' },
    card: { fr: 'Albanie, Zagreb, Majorque... et la suite.', en: 'Albania, Zagreb, Mallorca... and what comes next.' },
    panel: {
      fr: 'Albanie, Croatie, Majorque. Découvrir des cultures différentes, une façon de rester ouverte au monde.',
      en: 'Albania, Croatia, Mallorca. Discovering different cultures, a way to stay open to the world.',
    },
    gradient: 'linear-gradient(160deg, var(--navy), var(--navy-soft))',
    border: 'var(--navy)',
    heroTitle: { fr: 'Le voyage, <script>rester ouverte.</script>', en: 'Travel, <script>staying open.</script>' },
    heroText: {
      fr: 'Albanie, Croatie, Majorque… Découvrir des cultures différentes, une façon de rester ouverte au monde.',
      en: 'Albania, Croatia, Mallorca… Discovering different cultures, a way to stay open to the world.',
    },
    tags: [{ fr: 'Albanie', en: 'Albania' }, { fr: 'Zagreb', en: 'Zagreb' }, { fr: 'Majorque', en: 'Mallorca' }, { fr: 'Et la suite…', en: 'What’s next…' }],
    story: {
      fr: 'Chaque destination m’ouvre à d’autres façons de vivre, de travailler et de voir le monde. [Raconte ici un moment fort de l’un de ces voyages, et ta prochaine destination rêvée.]',
      en: 'Every destination opens me up to other ways of living, working and seeing the world. [Tell here a highlight from one of these trips, and your next dream destination.]',
    },
    work: {
      fr: 'Coordonner un projet avec 12 pays européens demande curiosité et ouverture : comprendre les habitudes de chacun, adapter son discours, trouver un terrain d’entente. Le voyage m’y a préparée.',
      en: 'Coordinating a project across 12 European countries takes curiosity and openness: understanding everyone’s habits, adapting your message, finding common ground. Travelling prepared me for it.',
    },
  },
};

export const HOME = {
  metaTitle: { fr: 'Léa Datin — Cheffe de projet marketing digital', en: 'Léa Datin — Digital Marketing Project Manager' },
  metaDesc: {
    fr: 'Léa Datin, jeune diplômée de l’ICN Business School : 4 ans d’alternance, dont 2 ans comme cheffe de projet marketing digital sur 12 pays européens chez Saint-Gobain PAM.',
    en: 'Léa Datin, ICN Business School graduate: 4 years of work-study, including 2 years as a digital marketing project manager across 12 European countries at Saint-Gobain PAM.',
  },
  available: { fr: 'Disponible dès novembre 2026', en: 'Available from November 2026' },
  title: { fr: 'Le marketing qui <script>bouge</script> les lignes.', en: 'Marketing that <script>moves</script> the needle.' },
  lead: {
    fr: 'Jeune diplômée avec 4 ans d’expérience professionnelle en alternance, dont 2 ans comme cheffe de projet marketing digital sur 12 pays européens.',
    en: 'Recent graduate with 4 years of work-study experience, including 2 years as a digital marketing project manager across 12 European countries.',
  },
  contact: { fr: 'Me contacter', en: 'Get in touch' },
  journey: { fr: 'Voir mon parcours', en: 'See my journey' },
  photo: { fr: 'Photo — ta photo détourée ou en pied', en: 'Photo — cut-out or full-length portrait' },
  whoEyebrow: { fr: 'Qui je suis', en: 'Who I am' },
  whoTitle: { fr: 'Curieuse, mobile, et toujours prête à relever un nouveau défi.', en: 'Curious, mobile, and always ready for a new challenge.' },
  expEyebrow: { fr: 'Expérience', en: 'Experience' },
  expTitle: { fr: 'Deux ans à piloter du digital sur 12 pays.', en: 'Two years leading digital projects across 12 countries.' },
  expAll: { fr: 'Tout le parcours →', en: 'Full journey →' },
  globeHint: { fr: 'Fais tourner le globe', en: 'Spin the globe' },
  expCards: [
    {
      date: { fr: '2024 — 2026', en: '2024 — 2026' },
      title: { fr: 'Cheffe de projet marketing digital', en: 'Digital Marketing Project Manager' },
      text: { fr: 'Saint-Gobain PAM · Plateforme PAM Line sur 12 pays européens.', en: 'Saint-Gobain PAM · PAM Line platform across 12 European countries.' },
    },
    {
      date: { fr: '2022 — 2024', en: '2022 — 2024' },
      title: { fr: 'Alternances', en: 'Work-study roles' },
      text: { fr: 'Cora (retail) et Jacques Laveine Immo (community management).', en: 'Cora (retail) and Jacques Laveine Immo (community management).' },
    },
  ],
  moreTitle: { fr: 'Envie d’en voir plus ?', en: 'Want to see more?' },
  recoEyebrow: { fr: 'Ils en parlent mieux que moi', en: 'They say it better than I do' },
  recoTitle: { fr: 'Recommandations', en: 'Recommendations' },
};

export const TESTIMONIALS = [
  {
    name: 'Catherine Ficara',
    role: { fr: 'Digital Content Manager, Saint-Gobain PAM', en: 'Digital Content Manager, Saint-Gobain PAM' },
    quote: {
      fr: 'Autonome, rigoureuse et dotée d’un excellent sens de l’organisation. Léa a su s’adapter et s’imposer comme un membre à part entière de notre équipe sur un projet multilingue couvrant 12 pays européens.',
      en: 'Autonomous, rigorous and highly organised. Léa adapted quickly and became a full member of our team on a multilingual project covering 12 European countries.',
    },
  },
  {
    name: 'Lucas Dorval',
    role: { fr: 'Coordinateur, Entreprendre Pour Apprendre', en: 'Coordinator, Entreprendre Pour Apprendre' },
    quote: {
      fr: 'Dynamique, fiable et d’une implication sans faille. Un véritable atout pour l’entreprise qui lui fera confiance.',
      en: 'Energetic, reliable and unfailingly committed. A real asset for the company that puts its trust in her.',
    },
  },
];
export const TESTI_NOTE = {
  fr: '',
  en: 'Translated from French.',
};

export const ABOUT = {
  metaTitle: { fr: 'À propos — Léa Datin', en: 'About — Léa Datin' },
  metaDesc: {
    fr: 'Découvre la personnalité de Léa Datin, sa vision du travail et ce qui l’inspire : l’art, l’aviron et le voyage.',
    en: 'Discover Léa Datin’s personality, her vision of work and what inspires her: art, rowing and travel.',
  },
  pill: { fr: '✦ À propos', en: '✦ About' },
  title: { fr: 'Derrière le poste, <script>il y a moi.</script>', en: 'Behind the job title, <script>there’s me.</script>' },
  lead: {
    fr: 'Découvre ma personnalité, mes valeurs, et ce qui me motive au quotidien.',
    en: 'Discover my personality, my values, and what drives me every day.',
  },
  photo: { fr: 'Emplacement photo', en: 'Photo placeholder' },
  whoEyebrow: { fr: '01 · Qui je suis', en: '01 · Who I am' },
  who: {
    fr: 'Je suis une personne <b>dynamique et sociable</b>, qui aime créer du lien et partager des moments avec les autres. J’adore rire, échanger et découvrir de nouvelles perspectives. Curieuse par nature, je m’intéresse à tout ce qui peut élargir mes horizons, que ce soit à travers des discussions, des lectures ou des expériences inédites. J’aime les environnements où règnent la <b>bonne humeur et la créativité</b>, et je crois que chaque rencontre est une opportunité d’apprendre quelque chose de nouveau.',
    en: 'I am an <b>energetic and sociable</b> person who loves building connections and sharing moments with others. I love laughing, exchanging ideas and discovering new perspectives. Curious by nature, I’m interested in anything that can broaden my horizons, whether through conversations, reading or brand-new experiences. I thrive in environments full of <b>good mood and creativity</b>, and I believe every encounter is a chance to learn something new.',
  },
  visionEyebrow: { fr: '02 · Ma vision du travail', en: '02 · My vision of work' },
  visionTitle: {
    fr: 'Un leadership basé sur <mark>l’écoute</mark>, la motivation et la confiance.',
    en: 'Leadership built on <mark>listening</mark>, motivation and trust.',
  },
  vision: {
    fr: 'Mon objectif est de créer des environnements où chacun se sent impliqué et valorisé. Je suis convaincue que la diversité des idées est une force, et que la réussite d’un projet repose sur la capacité à travailler ensemble. J’aime les projets bien organisés, tout en laissant une place à la spontanéité et à la créativité.',
    en: 'My goal is to create environments where everyone feels involved and valued. I’m convinced that diversity of ideas is a strength, and that a project’s success relies on the ability to work together. I like well-organised projects that still leave room for spontaneity and creativity.',
  },
  inspireEyebrow: { fr: '03 · À découvrir', en: '03 · To discover' },
  inspireTitle: { fr: 'Ce qui m’inspire', en: 'What inspires me' },
  albumEyebrow: { fr: 'En images', en: 'In pictures' },
  albumTitle: { fr: 'Quelques instantanés', en: 'A few snapshots' },
  albumPrev: { fr: 'Photo précédente', en: 'Previous photo' },
  albumNext: { fr: 'Photo suivante', en: 'Next photo' },
  albumReset: { fr: 'Revenir à la première photo', en: 'Back to the first photo' },
  albumGoto: { fr: 'Aller à la photo', en: 'Go to photo' },
};

export const PASSION_PAGE = {
  back: { fr: '← Retour à « À propos »', en: '← Back to “About”' },
  storyEyebrow: { fr: '01 · Mon histoire', en: '01 · My story' },
  workEyebrow: { fr: '02 · Ce que ça m’apporte au travail', en: '02 · What it brings to my work' },
  galleryEyebrow: { fr: '03 · En images', en: '03 · In pictures' },
  galleryTitle: { fr: 'Quelques souvenirs', en: 'A few memories' },
  others: { fr: 'Mes autres sources d’inspiration', en: 'My other sources of inspiration' },
  metaDesc: { fr: 'Léa Datin et sa passion : ', en: 'Léa Datin and her passion: ' },
};

export const EXPERIENCE = {
  metaTitle: { fr: 'Expérience — Léa Datin', en: 'Experience — Léa Datin' },
  metaDesc: {
    fr: 'Parcours de Léa Datin : IUT Nancy Charlemagne, Jacques Laveine Immobilier, Carrefour, ICN Business School et Saint-Gobain PAM (projet PAM Line, 12 pays).',
    en: 'Léa Datin’s journey: IUT Nancy Charlemagne, Jacques Laveine Immobilier, Carrefour, ICN Business School and Saint-Gobain PAM (PAM Line project, 12 countries).',
  },
  eyebrow: { fr: 'Mon parcours', en: 'My journey' },
  title: { fr: 'Études et expériences, <script>réunies.</script>', en: 'Studies and experience, <script>together.</script>' },
  lead: {
    fr: 'Découvre mes expériences clés, les projets que j’ai menés et les compétences que j’ai développées au fil des années.',
    en: 'Discover my key experiences, the projects I’ve led and the skills I’ve built over the years.',
  },
  labels: {
    school: { fr: 'Études', en: 'Studies' },
    job: { fr: 'Alternance', en: 'Work-study' },
    why: { fr: 'Pourquoi c’est important :', en: 'Why it matters:' },
    resp: { fr: 'Responsabilités clés', en: 'Key responsibilities' },
  },
  ctaTitle: { fr: 'Envie d’en savoir plus ?', en: 'Want to know more?' },
  ctaText: { fr: 'Retrouve le détail complet de mon parcours dans mon CV.', en: 'Find the full details of my journey in my resume.' },
  items: [
    {
      kind: 'school', dark: false,
      org: 'IUT Nancy Charlemagne',
      title: { fr: 'BUT Techniques de commercialisation', en: 'Bachelor in Marketing & Sales (BUT TC)' },
      date: { fr: '2021 — 2024', en: '2021 — 2024' },
      body: { fr: 'Spécialisation marketing digital, entrepreneuriat et e-commerce.', en: 'Specialisation in digital marketing, entrepreneurship and e-commerce.' },
    },
    {
      kind: 'job', dark: true,
      org: 'Jacques Laveine Immobilier',
      title: { fr: 'Community Manager', en: 'Community Manager' },
      date: { fr: 'Sept. 2022 — Déc. 2022', en: 'Sept. 2022 — Dec. 2022' },
      context: {
        fr: 'Agence reconnue pour son expertise en vente et location de biens immobiliers. Travailler dans ce secteur m’a permis de développer mes compétences en communication digitale et création de contenu, dans un environnement où la visibilité en ligne est essentielle pour attirer et fidéliser les clients.',
        en: 'An agency recognised for its expertise in property sales and rentals. Working in this sector helped me develop my digital communication and content creation skills, in an environment where online visibility is key to attracting and retaining clients.',
      },
      why: {
        fr: 'secteur concurrentiel nécessitant d’optimiser la présence digitale pour se démarquer. Rôle créatif et stratégique : création de contenus visuels et rédactionnels pour les réseaux sociaux. Impact direct : chaque publication influence la notoriété et la génération de leads.',
        en: 'a competitive sector where digital presence must be optimised to stand out. A creative and strategic role: producing visual and written content for social media. Direct impact: every post influences brand awareness and lead generation.',
      },
      resp: [
        { fr: 'Création de contenus visuels et rédactionnels pour les réseaux sociaux (Facebook, Instagram)', en: 'Creating visual and written content for social media (Facebook, Instagram)' },
        { fr: 'Suivi et animation des pages locales : planification des publications, suivi des interactions', en: 'Running local pages: scheduling posts, monitoring interactions' },
        { fr: 'Collaboration avec les équipes commerciales pour mettre en avant les biens et services', en: 'Working with sales teams to showcase properties and services' },
      ],
    },
    {
      kind: 'job', dark: false,
      org: 'Carrefour (anciennement CORA)',
      title: { fr: 'Chargée de marketing et communication', en: 'Marketing & Communication Officer' },
      date: { fr: 'Avril 2023 — Août 2024', en: 'April 2023 — Aug. 2024' },
      context: {
        fr: 'Grande enseigne de distribution qui accueille des milliers de clients chaque jour. Travailler dans cet environnement dynamique m’a permis de développer des compétences clés en marketing opérationnel, communication et gestion de projets événementiels, tout en apprenant à gérer des deadlines serrées et des actions à fort impact.',
        en: 'A major retail chain welcoming thousands of customers every day. This fast-paced environment helped me build key skills in operational marketing, communication and event project management, while learning to handle tight deadlines and high-impact actions.',
      },
      why: {
        fr: 'environnement exigeant, forte affluence, diversité des publics, besoin d’actions rapides et efficaces. Rôle polyvalent : communication interne et externe, marketing digital, suivi logistique. Impact direct : chaque action influence la visibilité et l’expérience client en magasin.',
        en: 'a demanding environment with heavy footfall, diverse audiences and a need for fast, effective action. A versatile role: internal and external communication, digital marketing, logistics follow-up. Direct impact: every action shapes in-store visibility and customer experience.',
      },
      resp: [
        { fr: 'Gestion des campagnes marketing : conception et déploiement des actions promotionnelles (affiches, PLV, réseaux sociaux)', en: 'Managing marketing campaigns: designing and rolling out promotions (posters, POS, social media)' },
        { fr: 'Organisation d’événements : coordination des animations en magasin, partenariats locaux, suivi logistique', en: 'Organising events: coordinating in-store activities, local partnerships, logistics' },
        { fr: 'Création de supports visuels : flyers, affiches, présentations, contenus digitaux', en: 'Designing visual materials: flyers, posters, presentations, digital content' },
        { fr: 'Animation des réseaux sociaux : planification des publications, rédaction des posts, suivi des performances', en: 'Running social media: scheduling, writing posts, tracking performance' },
        { fr: 'Collaboration interservices avec les équipes commerciales et logistiques', en: 'Cross-department collaboration with sales and logistics teams' },
      ],
    },
    {
      kind: 'school', dark: false,
      org: 'ICN Business School',
      title: { fr: 'Master Programme Grande École', en: 'Master in Management (Grande École)' },
      date: { fr: '2024 — 2026', en: '2024 — 2026' },
      body: { fr: 'Spécialisation Marketing & Innovation Produit.', en: 'Specialisation in Marketing & Product Innovation.' },
    },
    {
      kind: 'job', dark: true, open: true,
      org: 'Saint-Gobain PAM',
      title: { fr: 'Cheffe de projet marketing digital', en: 'Digital Marketing Project Manager' },
      date: { fr: 'Sept. 2024 — Août 2026', en: 'Sept. 2024 — Aug. 2026' },
      context: {
        fr: 'Saint-Gobain PAM est une entreprise spécialisée dans les solutions de canalisation en fonte ductile pour le transport de l’eau. Filiale du groupe Saint-Gobain, elle est leader mondial dans son secteur et dispose d’un rayonnement international. Le projet PAM Line est une refonte stratégique du site web multilingue pour 12 pays, visant à moderniser l’image de marque, harmoniser la communication digitale et améliorer l’expérience utilisateur.',
        en: 'Saint-Gobain PAM specialises in ductile iron pipe solutions for water transport. A subsidiary of the Saint-Gobain group, it is a world leader in its field with an international reach. The PAM Line project is a strategic redesign of the multilingual website for 12 countries, aiming to modernise the brand image, harmonise digital communication and improve the user experience.',
      },
      why: {
        fr: 'un site vieillissant (ancien site sur Drupal 7, obsolète et peu ergonomique), une urgence technique (hébergement arrivant à échéance en novembre 2025, migration vers Drupal 10 indispensable), et un enjeu stratégique (améliorer la visibilité internationale, centraliser les contenus, renforcer la cohérence de marque).',
        en: 'an ageing website (the old site ran on an outdated, hard-to-use Drupal 7), a technical emergency (hosting expiring in November 2025, making the move to Drupal 10 essential), and a strategic stake (improving international visibility, centralising content, strengthening brand consistency).',
      },
      resp: [
        { fr: 'Coordination internationale : interface entre les pays, l’équipe centrale et les développeurs', en: 'International coordination: the link between countries, the central team and developers' },
        { fr: 'Organisation des workshops : analyse des besoins, définition des priorités', en: 'Running workshops: needs analysis, setting priorities' },
        { fr: 'Formation des équipes locales : sessions en ligne, guides pratiques, support continu', en: 'Training local teams: online sessions, how-to guides, ongoing support' },
        { fr: 'Gestion des contenus via back-office, contribution à deux autres sites', en: 'Managing content through the back office, contributing to two other sites' },
        { fr: 'Suivi technique : remontée des bugs via tickets, validation des composants UI', en: 'Technical follow-up: reporting bugs via tickets, validating UI components' },
        { fr: 'Planification et reporting : suivi des deadlines, mise à jour des plannings, reporting hebdomadaire', en: 'Planning and reporting: tracking deadlines, updating schedules, weekly reporting' },
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
  eyebrow: { fr: 'Projets perso', en: 'Side projects' },
  title: { fr: 'Ce que je construis <script>en dehors du poste.</script>', en: 'What I build <script>outside of work.</script>' },
  lead: {
    fr: 'Trois projets lancés par envie, menés avec la même énergie qu’en entreprise. Survole les cartes, elles réagissent.',
    en: 'Three projects started out of passion and run with the same energy as at work. Hover the cards, they react.',
  },
  roleLabel: { fr: 'Mon rôle', en: 'My role' },
  items: [
    {
      id: '360id', name: '360ID', object: 'ring',
      tag: { fr: '[Catégorie]', en: '[Category]' },
      pitch: { fr: '[Accroche du projet en une phrase.]', en: '[One-sentence project pitch.]' },
      text: { fr: '[Décris 360ID : le problème, l’idée, ce qui a été réalisé.]', en: '[Describe 360ID: the problem, the idea, what has been achieved.]' },
      role: { fr: '[Ton rôle]', en: '[Your role]' },
    },
    {
      id: 'punch', name: 'PUNCH', object: 'type',
      tag: { fr: '[Catégorie]', en: '[Category]' },
      pitch: { fr: '[Accroche du projet en une phrase.]', en: '[One-sentence project pitch.]' },
      text: { fr: '[Décris PUNCH : le problème, l’idée, ce qui a été réalisé.]', en: '[Describe PUNCH: the problem, the idea, what has been achieved.]' },
      role: { fr: '[Ton rôle]', en: '[Your role]' },
    },
    {
      id: 'eclipse', name: 'Éclipse', object: 'eclipse',
      tag: { fr: 'Événementiel · Musique électronique', en: 'Events · Electronic music' },
      pitch: { fr: 'Un événement de musique électronique à Nancy.', en: 'An electronic music event in Nancy.' },
      text: {
        fr: 'J’organise Éclipse, un événement de musique électronique à Nancy. [Précise : première édition, lieu, public, artistes, chiffres clés.]',
        en: 'I organise Éclipse, an electronic music event in Nancy. [Add details: first edition, venue, audience, artists, key figures.]',
      },
      role: { fr: 'Organisatrice', en: 'Organiser' },
    },
  ],
};

export const CONTACT = {
  metaTitle: { fr: 'Contact — Léa Datin', en: 'Contact — Léa Datin' },
  metaDesc: { fr: 'Contacter Léa Datin : e-mail, LinkedIn et CV à télécharger.', en: 'Contact Léa Datin: email, LinkedIn and downloadable resume.' },
  pill: { fr: 'Disponible dès novembre 2026', en: 'Available from November 2026' },
  title: { fr: 'Travaillons <script>ensemble.</script>', en: 'Let’s work <script>together.</script>' },
  lead: {
    fr: 'Une offre, une question ou un projet ? Écris-moi, je réponds avec plaisir.',
    en: 'A job offer, a question or a project? Write to me, I’ll be happy to reply.',
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
    note: { fr: 'Le bouton ouvre ta messagerie avec le message pré-rempli.', en: 'The button opens your email app with the message pre-filled.' },
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
