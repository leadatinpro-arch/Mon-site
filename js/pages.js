/* ==========================================================================
   PAGES PROJETS & PASSIONS — à personnaliser
   --------------------------------------------------------------------------
   Une entrée = une page (eclipse.html, punch.html, 360idcom.html,
   art.html, sport.html, voyage.html).

   IMAGES : déposez vos fichiers dans le dossier indiqué (ex. assets/eclipse/)
   en respectant les noms ci-dessous. Tant qu'une image n'existe pas,
   un emplacement « Photo à venir » s'affiche à sa place.
   Vous pouvez ajouter ou retirer des lignes dans les listes "items".

   LIENS : renseignez les "url". Un lien laissé vide ("") n'est pas affiché.
   ========================================================================== */

window.PAGES = {

  /* ------------------------------------------------------------------ */
  eclipse: {
    theme: "eclipse",
    eyebrow: { fr: "Projet perso · Événementiel", en: "Personal project · Events" },
    title: "ECLIPSE",
    tagline: {
      fr: "Des soirées électro-techno à Nancy, imaginées et organisées à trois. Je pilote le projet de A à Z, la communication et l'image de marque.",
      en: "Electro-techno nights in Nancy, dreamed up and organised by a team of three. I run the project from start to finish, plus all communication and branding."
    },
    facts: [
      { label: { fr: "Rôle", en: "Role" }, value: { fr: "Co-organisatrice · Cheffe de projet · Com'", en: "Co-organiser · Project lead · Comms" } },
      { label: { fr: "Équipe", en: "Team" }, value: { fr: "3 personnes", en: "3 people" } },
      { label: { fr: "Où", en: "Where" }, value: "Nancy" },
      { label: { fr: "Style", en: "Sound" }, value: "Techno · Hard techno · Raw" }
    ],
    heroMascot: "assets/eclipse/mascotte-2.png",
    walker: "assets/eclipse/mascotte-3.png",
    marquee: ["ECLIPSE", "TECHNO", "HARD TECHNO", "RAW", "NANCY", "DE A À Z"],
    intro: {
      title: { fr: "Le projet", en: "The project" },
      text: {
        fr: "Eclipse, ce sont des événements autour de la musique électro et techno que nous organisons à trois à Nancy, comme l'Eclipse Festival au Nirvana Club. Tout est fait maison, de l'idée jusqu'au jour J : organisation, communication et identité visuelle.",
        en: "Eclipse is a series of electro and techno events that the three of us organise in Nancy, such as Eclipse Festival at Nirvana Club. Everything is homemade, from the idea to the big night: organisation, communication and visual identity."
      }
    },
    event: {
      name: "Eclipse Festival",
      date: { fr: "11 septembre", en: "September 11" },
      venue: "Nirvana Club",
      address: "6 quai Claude Lorrain — Nancy",
      genres: "Techno / Hard techno / Raw",
      hours: { fr: "23h – 5h", en: "11pm – 5am" },
      poster: "assets/eclipse/affiche-1.jpg"
    },
    stats: [
      { value: "3", label: { fr: "organisateurs", en: "organisers" } },
      { value: "A → Z", label: { fr: "projet géré de bout en bout", en: "project run end to end" } },
      { value: "100%", label: { fr: "communication & image de marque", en: "communication & branding" } }
    ],
    role: {
      title: { fr: "Ma tracklist", en: "My tracklist" },
      subtitle: { fr: "Ce que je gère sur chaque événement", en: "What I handle for every event" },
      items: [
        { title: { fr: "Gestion de projet", en: "Project management" }, text: { fr: "Organisation, planning, coordination de l'équipe et suivi de chaque étape jusqu'au jour J.", en: "Organisation, planning, team coordination and following every step up to the big night." } },
        { title: { fr: "Communication", en: "Communication" }, text: { fr: "Stratégie et contenus sur les réseaux sociaux, annonces et teasing avant chaque événement, sans oublier les messages de prévention pour que chacun passe une soirée safe.", en: "Social media strategy and content, announcements and teasers before each event, plus prevention messages so everyone has a safe night." } },
        { title: { fr: "Image de marque", en: "Brand identity" }, text: { fr: "Création de l'identité d'Eclipse : univers, ton et visuels.", en: "Creating Eclipse's identity: universe, tone of voice and visuals." } },
        { title: { fr: "La mascotte", en: "The mascot" }, text: { fr: "Imaginée et créée pour incarner Eclipse et la rendre reconnaissable en un coup d'œil.", en: "Designed and created to embody Eclipse and make it recognisable at a glance." } }
      ]
    },
    mascot: {
      src: "assets/eclipse/mascotte.png",
      /* Chaque clic sur la mascotte passe à la pose suivante */
      poses: [
        { src: "assets/eclipse/mascotte.png", bubble: { fr: "Le son est lancé !", en: "The music is on!" } },
        { src: "assets/eclipse/mascotte-2.png", bubble: { fr: "On se voit à la prochaine ?", en: "See you at the next one?" } },
        { src: "assets/eclipse/mascotte-3.png", bubble: { fr: "Petite pause fraîcheur…", en: "Quick refreshment break…" } }
      ],
      title: { fr: "Voici la mascotte", en: "Meet the mascot" },
      text: {
        fr: "Je l'ai créée pour donner un visage à Eclipse. Elle apparaît sur les affiches, les réseaux sociaux et tous nos supports.",
        en: "I created it to give Eclipse a face. It shows up on posters, social media and all our materials."
      },
      bubble: { fr: "On se voit à la prochaine ?", en: "See you at the next one?" }
    },
    posters: {
      title: { fr: "Les visuels", en: "The visuals" },
      subtitle: { fr: "Affiches, prévention et mascotte · glissez pour parcourir, cliquez pour agrandir", en: "Posters, prevention and mascot · drag to browse, click to enlarge" },
      items: [
        { src: "assets/eclipse/affiche-1.jpg", alt: { fr: "Affiche de l'Eclipse Festival au Nirvana Club", en: "Eclipse Festival poster at Nirvana Club" } },
        { src: "assets/eclipse/mascotte.png", alt: { fr: "Mascotte Eclipse aux platines", en: "Eclipse mascot DJing" }, fit: "contain" },
        { src: "assets/eclipse/affiche-2.jpg", alt: { fr: "Visuel de prévention « Besoin d'aide ? »", en: "\"Need help?\" prevention visual" } },
        { src: "assets/eclipse/mascotte-2.png", alt: { fr: "Mascotte Eclipse à lunettes", en: "Eclipse mascot with sunglasses" }, fit: "contain" },
        { src: "assets/eclipse/mascotte-3.png", alt: { fr: "Mascotte Eclipse avec un jus", en: "Eclipse mascot with a drink" }, fit: "contain" }
      ]
    },
    gallery: {
      title: { fr: "Dans la fosse", en: "On the dancefloor" },
      subtitle: { fr: "Photos des événements · cliquez pour agrandir", en: "Event photos · click to enlarge" },
      items: [
        { src: "assets/eclipse/photo-1.jpg" },
        { src: "assets/eclipse/photo-2.jpg" },
        { src: "assets/eclipse/photo-3.jpg" },
        { src: "assets/eclipse/photo-4.jpg" },
        { src: "assets/eclipse/photo-5.jpg" },
        { src: "assets/eclipse/photo-6.jpg" },
        { src: "assets/eclipse/photo-7.jpg" },
        { src: "assets/eclipse/photo-8.jpg" }
      ]
    },
    links: [
      { label: "Instagram", url: "" },
      { label: "Shotgun", url: "" }
    ],
    cta: { fr: "Envie d'en parler ?", en: "Want to talk about it?" }
  },

  /* ------------------------------------------------------------------ */
  punch: {
    theme: "punch",
    eyebrow: { fr: "Projet perso · Mini-entreprise", en: "Personal project · Student company" },
    title: "PUNCH",
    tagline: {
      fr: "Une mini-entreprise engagée pour le bien-être mental.",
      en: "A student company committed to mental well-being."
    },
    logo: "assets/punch/logo.png",
    heroMascot: "assets/punch/mascotte-2.png",
    facts: [
      { label: { fr: "Rôle", en: "Role" }, value: { fr: "Co-fondatrice", en: "Co-founder" } },
      { label: { fr: "Création", en: "Founded" }, value: "2022" },
      { label: { fr: "Durée", en: "Duration" }, value: { fr: "1 an · à suivre", en: "1 year · to be continued" } },
      { label: { fr: "Programme", en: "Programme" }, value: "Entreprendre Pour Apprendre" },
      { label: { fr: "Récompense", en: "Award" }, value: { fr: "Médaille d'or ESS", en: "Gold medal, social economy" } }
    ],
    marquee: ["PUNCH", "SOUTIEN MENTAL", "MINI-ENTREPRISE", "MÉDAILLE D'OR", "ESS"],
    intro: {
      title: { fr: "L'origine", en: "How it started" },
      text: {
        fr: "PUNCH est né d'un projet scolaire ambitieux : créer une mini-entreprise dans le cadre du programme Entreprendre Pour Apprendre et participer au concours des mini-entreprises. La seule règle : concevoir un projet complet, réalisable et innovant. Après des semaines de réflexion et de débats, nous avons choisi de nous engager pour une cause sociale forte : le soutien mental.",
        en: "PUNCH was born from an ambitious school project: creating a student company as part of the Entreprendre Pour Apprendre programme and taking part in the student company competition. The only rule: design a complete, feasible and innovative project. After weeks of thinking and debating, we chose to commit to a strong social cause: mental health support."
      }
    },
    context: {
      title: { fr: "Contexte", en: "Context" },
      items: [
        { label: { fr: "Durée du projet", en: "Project length" }, value: { fr: "1 an", en: "1 year" } },
        {
          label: { fr: "Mission", en: "Mission" },
          value: { fr: "Créer une mini-entreprise de A à Z", en: "Build a student company from A to Z" },
          chips: [
            { fr: "Nom", en: "Name" }, "Logo", { fr: "Identité visuelle", en: "Visual identity" },
            "Communication", { fr: "Comptabilité", en: "Accounting" }, "Business plan"
          ]
        },
        { label: { fr: "Objectif final", en: "Final goal" }, value: { fr: "Présenter notre projet devant un jury, comme si nous étions face à des investisseurs.", en: "Pitch our project to a jury, as if we were in front of investors." } }
      ]
    },
    concept: {
      title: { fr: "Le concept PUNCH", en: "The PUNCH concept" },
      image: "assets/punch/mascotte-1.png",
      text: {
        fr: "PUNCH est une application de soutien mental dédiée aux personnes atteintes de troubles du comportement alimentaire, mais aussi à leurs proches. L'objectif : offrir un espace sécurisé, des ressources adaptées et un accompagnement pour améliorer le quotidien des utilisateurs.",
        en: "PUNCH is a mental health support app for people with eating disorders, and for their loved ones too. The goal: offer a safe space, tailored resources and support to improve users' everyday lives."
      },
      pillars: [
        { fr: "Un espace sécurisé", en: "A safe space" },
        { fr: "Des ressources adaptées", en: "Tailored resources" },
        { fr: "Un accompagnement", en: "Ongoing support" }
      ],
      photo: "assets/punch/photo-app.jpg"
    },
    role: {
      title: { fr: "Mes responsabilités et réalisations", en: "My responsibilities and achievements" },
      subtitle: { fr: "Ce que j'ai porté", en: "What I took on" },
      image: "assets/punch/lea-punch.jpg",
      items: [
        { title: { fr: "Définition du concept", en: "Defining the concept" }, text: { fr: "Analyse des besoins, proposition de valeur, étude de marché.", en: "Needs analysis, value proposition, market research." } },
        { title: { fr: "Identité visuelle", en: "Visual identity" }, text: { fr: "Logo, charte graphique, maquettes de l'application.", en: "Logo, brand guidelines, app mock-ups." } },
        { title: { fr: "Communication & marketing", en: "Communication & marketing" }, text: { fr: "Conception des supports pour le concours, stratégie digitale fictive.", en: "Designing materials for the competition, a mock digital strategy." } },
        { title: { fr: "Pitch final", en: "Final pitch" }, text: { fr: "Préparation et présentation devant le jury, avec un support visuel professionnel.", en: "Preparing and presenting to the jury, with a professional visual deck." } }
      ]
    },
    award: {
      title: { fr: "Un succès reconnu", en: "A recognised success" },
      badge: { fr: "Médaille d'or", en: "Gold medal" },
      prize: { fr: "Prix « Économie sociale et solidaire »", en: "“Social and solidarity economy” award" },
      text: {
        fr: "Après un an de travail, nous avons présenté PUNCH lors du concours des mini-entreprises et remporté la médaille d'or pour le prix « Économie sociale et solidaire ». Une reconnaissance qui confirme la pertinence et l'impact de notre projet.",
        en: "After a year of work, we presented PUNCH at the student company competition and won the gold medal for the “Social and solidarity economy” award. A recognition that confirms the relevance and impact of our project."
      },
      image: "assets/punch/photo-prix.jpg"
    },
    outro: {
      title: { fr: "Et après ?", en: "What's next?" },
      image: "assets/punch/mascotte-2.png",
      text: {
        fr: "Le concours est terminé, mais l'aventure continue. Cette expérience m'a tellement marquée que j'ai la volonté de reprendre PUNCH de mon côté, pour en faire non plus un projet fictif, mais une solution réelle. Parce que l'innovation sociale mérite de passer du concept à la réalité.",
        en: "The competition is over, but the adventure goes on. This experience left such a mark on me that I intend to take PUNCH forward on my own, turning it from a fictional project into a real solution. Because social innovation deserves to move from concept to reality."
      },
      badge: { fr: "Projet toujours d'actualité", en: "Still an active project" }
    },
    gallery: {
      title: { fr: "Galerie", en: "Gallery" },
      subtitle: { fr: "Le stand, le concours, l'équipe · cliquez pour agrandir", en: "The stand, the competition, the team · click to enlarge" },
      items: [
        { src: "assets/punch/photo-stand.jpg", caption: { fr: "L'équipe PUNCH sur le stand", en: "The PUNCH team at the stand" } },
        { src: "assets/punch/photo-prix.jpg", caption: { fr: "Remise du label Économie sociale et solidaire", en: "Social and solidarity economy award ceremony" } },
        { src: "assets/punch/photo-equipe.jpg", caption: { fr: "Sur le stand, avec la mascotte", en: "At the stand, with the mascot" } },
        { src: "assets/punch/photo-app.jpg", caption: { fr: "L'application PUNCH", en: "The PUNCH app" } },
        { src: "assets/punch/lea-punch.jpg", caption: { fr: "Le jour du concours", en: "Competition day" } }
      ]
    },
    links: [
      { label: "Instagram @punch.france", url: "https://www.instagram.com/punch.france/" }
    ],
    cta: { fr: "Un projet engagé à lancer ?", en: "A purpose-driven project to launch?" }
  },

  /* ------------------------------------------------------------------ */
  "360idcom": {
    theme: "idcom",
    eyebrow: { fr: "Engagement · Association étudiante", en: "Involvement · Student association" },
    title: "360 ID COM",
    tagline: {
      fr: "Communication, stratégie et solidarité.",
      en: "Communication, strategy and solidarity."
    },
    logo: "assets/360idcom/logo.jpg",
    facts: [
      { label: { fr: "Rôle", en: "Role" }, value: { fr: "Membre actif & cheffe de projet", en: "Active member & project manager" } },
      { label: { fr: "Équipe", en: "Team" }, value: { fr: "6 étudiants", en: "6 students" } },
      { label: { fr: "Durée", en: "Duration" }, value: { fr: "1 an", en: "1 year" } },
      { label: { fr: "Impact", en: "Impact" }, value: { fr: "Mission solidaire à Majorque", en: "Solidarity mission in Mallorca" } }
    ],
    marquee: ["360 ID COM", "COMMUNICATION", "STRATÉGIE", "SOLIDARITÉ", "IUT NANCY-CHARLEMAGNE"],
    intro: {
      title: { fr: "L'agence", en: "The agency" },
      text: {
        fr: "360 ID COM est une association étudiante créée en 2016 par l'IUT Nancy-Charlemagne. Chaque année, une nouvelle équipe d'étudiants prend le relais pour gérer l'agence, trouver des clients et réaliser des prestations professionnelles, tout en suivant les cours et en travaillant en entreprise. L'objectif : récolter des fonds pour financer un projet pédagogique ou humanitaire.",
        en: "360 ID COM is a student association created in 2016 by IUT Nancy-Charlemagne. Every year, a new team of students takes over to run the agency, find clients and deliver professional services, while attending classes and working in companies. The goal: raise funds to finance an educational or humanitarian project."
      }
    },
    context: {
      title: { fr: "Contexte", en: "Context" },
      items: [
        { label: { fr: "Durée du projet", en: "Project length" }, value: { fr: "1 an", en: "1 year" }, note: { fr: "En parallèle des études et de l'alternance", en: "Alongside studies and work-study" } },
        {
          label: { fr: "Mission", en: "Mission" },
          value: { fr: "Développer une activité réelle de communication et marketing pour des clients variés", en: "Run a real communication and marketing business for a variety of clients" },
          chips: ["Digital", { fr: "Événementiel", en: "Events" }, "Communication", "Marketing"]
        },
        { label: { fr: "Objectif final", en: "Final goal" }, value: { fr: "Financer une action solidaire grâce aux bénéfices générés.", en: "Fund a solidarity initiative with the profits generated." } }
      ]
    },
    services: {
      title: { fr: "Nos services", en: "Our services" },
      subtitle: { fr: "Ce que l'agence proposait à ses clients", en: "What the agency offered its clients" },
      image: "assets/360idcom/flyer.jpg",
      groups: [
        { name: "Digital", color: "#e04848", items: [{ fr: "Création de site web", en: "Website creation" }, { fr: "Fiche Google My Business", en: "Google Business Profile" }, { fr: "Référencement SEO", en: "SEO" }, { fr: "Référencement SEA", en: "SEA" }] },
        { name: { fr: "Événementiel", en: "Events" }, color: "#4fb8a8", items: [{ fr: "Organisation d'événements", en: "Event organisation" }, "Buzz marketing", { fr: "Street marketing & accueil", en: "Street marketing & hosting" }, { fr: "Distribution de flyers", en: "Flyer distribution" }] },
        { name: "Communication", color: "#f7c948", items: [{ fr: "Rédaction d'articles", en: "Article writing" }, { fr: "Photographie professionnelle", en: "Professional photography" }, { fr: "Charte graphique", en: "Brand guidelines" }, { fr: "Supports de communication", en: "Communication materials" }, "Community management"] },
        { name: "Marketing", color: "#f4f6fb", items: [{ fr: "Étude de satisfaction", en: "Satisfaction surveys" }, { fr: "Étude de marché", en: "Market research" }, "E-mailing"] }
      ]
    },
    role: {
      title: { fr: "Mes responsabilités et réalisations", en: "My responsibilities and achievements" },
      subtitle: { fr: "Cheffe de projet & responsable communication", en: "Project manager & head of communication" },
      image: "assets/360idcom/equipe.jpg",
      items: [
        { title: { fr: "Prospection et négociation", en: "Prospecting and negotiation" }, text: { fr: "Recherche de clients, élaboration de devis, présentation des offres.", en: "Finding clients, preparing quotes, presenting offers." } },
        { title: { fr: "Gestion de projets", en: "Project management" }, text: { fr: "Organisation des prestations, suivi des deadlines, coordination avec les équipes.", en: "Organising services, tracking deadlines, coordinating with the teams." } },
        { title: { fr: "Création graphique et digitale", en: "Graphic and digital design" }, text: { fr: "Conception de visuels, chartes graphiques, supports de communication.", en: "Designing visuals, brand guidelines and communication materials." } },
        { title: { fr: "Relation client", en: "Client relations" }, text: { fr: "Suivi des demandes, ajustements, validation des livrables.", en: "Following up on requests, adjustments, signing off deliverables." } }
      ]
    },
    impact: {
      title: { fr: "Impact solidaire", en: "Social impact" },
      text: {
        fr: "Le projet 360 ID COM ne s'est pas limité à des prestations de communication : il avait un objectif bien plus grand. Grâce aux contrats que nous avons décrochés, notamment avec des entreprises comme ENGIE, nous avons récolté des fonds significatifs. Ces bénéfices ont été utilisés pour financer une mission humanitaire à Majorque, en faveur d'un refuge pour animaux.",
        en: "The 360 ID COM project wasn't limited to communication services: it had a much bigger goal. Thanks to the contracts we won, notably with companies such as ENGIE, we raised significant funds. These profits were used to finance a humanitarian mission in Mallorca, supporting an animal shelter."
      },
      days: { value: "5", label: { fr: "jours de mission au refuge", en: "days at the shelter" } },
      place: { fr: "Majorque", en: "Mallorca" },
      actions: [
        { icon: "🐾", title: { fr: "Aidé sur place", en: "Helped on site" }, text: { fr: "Soins aux animaux (chiens et chats), nettoyage des espaces, organisation des repas.", en: "Caring for the animals (dogs and cats), cleaning the spaces, organising meals." } },
        { icon: "🤝", title: { fr: "Contribué financièrement", en: "Contributed financially" }, text: { fr: "Achat de nourriture, produits d'entretien et matériel pour améliorer le confort des animaux.", en: "Buying food, cleaning products and equipment to make the animals more comfortable." } }
      ],
      conclusion: {
        fr: "Cette expérience a été une leçon de solidarité et de travail d'équipe, qui a donné un sens concret à nos efforts tout au long de l'année. Elle illustre parfaitement la capacité à transformer des compétences professionnelles en actions utiles et humaines.",
        en: "This experience was a lesson in solidarity and teamwork that gave real meaning to our efforts throughout the year. It perfectly illustrates how professional skills can be turned into useful, human actions."
      },
      images: ["assets/360idcom/photo-3.jpg", "assets/360idcom/photo-2.jpg"]
    },
    gallery: {
      title: { fr: "Galerie", en: "Gallery" },
      subtitle: { fr: "L'équipe et la mission à Majorque · cliquez pour agrandir", en: "The team and the Mallorca mission · click to enlarge" },
      items: [
        { src: "assets/360idcom/photo-3.jpg", caption: { fr: "L'équipe au refuge, à Majorque", en: "The team at the shelter, in Mallorca" } },
        { src: "assets/360idcom/photo-1.jpg", caption: { fr: "Le tote bag 360 ID COM… et un nouvel ami", en: "The 360 ID COM tote bag… and a new friend" } },
        { src: "assets/360idcom/photo-2.jpg", caption: { fr: "Découverte du refuge", en: "Discovering the shelter" } },
        { src: "assets/360idcom/photo-4.jpg", caption: { fr: "Nettoyage des espaces", en: "Cleaning the grounds" } },
        { src: "assets/360idcom/equipe-poster.jpg", caption: { fr: "Notre équipe", en: "Our team" } },
        { src: "assets/360idcom/flyer.jpg", caption: { fr: "Le flyer de l'agence", en: "The agency flyer" } }
      ]
    },
    links: [],
    cta: { fr: "On en discute ?", en: "Shall we talk?" }
  },

  /* ------------------------------------------------------------------ */
  art: {
    theme: "interest",
    nav: "about",
    back: "about",
    eyebrow: { fr: "Ce qui m'inspire", en: "What inspires me" },
    title: "ART",
    heroImage: "assets/about/statue.png",
    tagline: {
      fr: "Musique, dessin, sculpture, cinéma : l'art est pour moi une source d'inspiration et de réflexion, qui nourrit ma créativité et mon ouverture d'esprit.",
      en: "Music, drawing, sculpture, film: art is a source of inspiration and reflection that feeds my creativity and open-mindedness."
    },
    highlights: [
      { title: { fr: "Musique", en: "Music" }, text: { fr: "J'écoute tous les genres et toutes les générations : une manière unique d'exprimer des émotions.", en: "I listen to every genre and every generation: a unique way to express emotions." } },
      { title: { fr: "Dessin, sculpture & cinéma", en: "Drawing, sculpture & film" }, text: { fr: "Chaque discipline est une façon fascinante de faire passer des idées, qui nourrit ma créativité.", en: "Each discipline is a fascinating way to convey ideas, and it feeds my creativity." } },
      { title: { fr: "Musées & expositions", en: "Museums & exhibitions" }, text: { fr: "J'en visite régulièrement pour découvrir de nouvelles œuvres, comprendre les courants artistiques et la diversité culturelle.", en: "I visit them regularly to discover new works and understand artistic movements and cultural diversity." } }
    ],
    gallery: {
      title: { fr: "Galerie", en: "Gallery" },
      subtitle: { fr: "Dessins, créations et coups de cœur · cliquez pour agrandir", en: "Drawings, creations and favourites · click to enlarge" },
      items: [
        { src: "assets/art/art-1.jpg" },
        { src: "assets/art/art-2.jpg" },
        { src: "assets/art/art-3.jpg" },
        { src: "assets/art/art-4.jpg" },
        { src: "assets/art/art-5.jpg" },
        { src: "assets/art/art-6.jpg" }
      ]
    },
    next: "sport"
  },

  /* ------------------------------------------------------------------ */
  sport: {
    theme: "interest",
    nav: "about",
    back: "about",
    eyebrow: { fr: "Ce qui m'inspire", en: "What inspires me" },
    title: "SPORT",
    heroImage: "assets/about/aviron.png",
    tagline: {
      fr: "Le sport a toujours été une passion, mais l'aviron a marqué un tournant : il a forgé mon esprit d'équipe et ma détermination.",
      en: "Sport has always been a passion, but rowing was a turning point: it shaped my team spirit and determination."
    },
    highlights: [
      { title: { fr: "Rigueur", en: "Rigour" }, text: { fr: "L'aviron est un sport exigeant, qui demande de la précision et de la régularité à chaque coup de rame.", en: "Rowing is a demanding sport that requires precision and consistency with every stroke." } },
      { title: { fr: "Persévérance & pression", en: "Perseverance & pressure" }, text: { fr: "Tenir dans l'effort et garder son calme en compétition : des réflexes que j'applique aussi au travail.", en: "Pushing through the effort and staying calm in competition: reflexes I also bring to work." } },
      { title: { fr: "Esprit d'équipe", en: "Team spirit" }, text: { fr: "Entraîneuse d'aviron, je sais qu'on va plus loin quand tout le monde rame dans le même sens.", en: "As a rowing coach, I know you go further when everyone rows in the same direction." } }
    ],
    gallery: {
      title: { fr: "Galerie", en: "Gallery" },
      subtitle: { fr: "Sur l'eau · cliquez pour agrandir", en: "On the water · click to enlarge" },
      items: [
        { src: "assets/sport/sport-1.jpg" },
        { src: "assets/sport/sport-2.jpg" },
        { src: "assets/sport/sport-3.jpg" },
        { src: "assets/sport/sport-4.jpg" },
        { src: "assets/sport/sport-5.jpg" },
        { src: "assets/sport/sport-6.jpg" }
      ]
    },
    next: "voyage"
  },

  /* ------------------------------------------------------------------ */
  voyage: {
    theme: "interest",
    nav: "about",
    back: "about",
    eyebrow: { fr: "Ce qui m'inspire", en: "What inspires me" },
    title: { fr: "VOYAGE", en: "TRAVEL" },
    heroImage: "assets/about/cavalier.png",
    tagline: {
      fr: "Voyager est pour moi bien plus qu'un loisir : c'est une manière de découvrir des paysages uniques et des cultures différentes.",
      en: "For me, travelling is much more than a hobby: it's a way to discover unique landscapes and different cultures."
    },
    highlights: [
      { title: { fr: "Albanie", en: "Albania" }, text: { fr: "Ses traditions et ses villes authentiques.", en: "Its traditions and authentic towns." } },
      { title: { fr: "Croatie", en: "Croatia" }, text: { fr: "Ses musées fascinants.", en: "Its fascinating museums." } },
      { title: { fr: "Majorque", en: "Mallorca" }, text: { fr: "Où j'ai contribué à des actions solidaires pour un refuge pour animaux, avec 360 ID COM.", en: "Where I took part in solidarity work for an animal shelter, with 360 ID COM." } }
    ],
    gallery: {
      title: { fr: "Carnet de voyage", en: "Travel journal" },
      subtitle: { fr: "Cliquez pour agrandir", en: "Click to enlarge" },
      items: [
        { src: "assets/voyage/voyage-1.jpg", caption: { fr: "Albanie", en: "Albania" } },
        { src: "assets/voyage/voyage-2.jpg", caption: { fr: "Albanie", en: "Albania" } },
        { src: "assets/voyage/voyage-3.jpg", caption: { fr: "Croatie", en: "Croatia" } },
        { src: "assets/voyage/voyage-4.jpg", caption: { fr: "Croatie", en: "Croatia" } },
        { src: "assets/360idcom/photo-3.jpg", caption: { fr: "Majorque", en: "Mallorca" } },
        { src: "assets/360idcom/photo-1.jpg", caption: { fr: "Majorque", en: "Mallorca" } }
      ]
    },
    next: "art"
  }
};
