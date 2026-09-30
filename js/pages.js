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
      { label: { fr: "Style", en: "Sound" }, value: "Électro · Techno" }
    ],
    marquee: ["ECLIPSE", "TECHNO", "NANCY", "ÉLECTRO", "DE A À Z"],
    intro: {
      title: { fr: "Le projet", en: "The project" },
      text: {
        fr: "Eclipse, ce sont des événements autour de la musique électro et techno que nous organisons à trois à Nancy. Tout est fait maison, de l'idée jusqu'au jour J : organisation, communication et identité visuelle.",
        en: "Eclipse is a series of electro and techno events that the three of us organise in Nancy. Everything is homemade, from the idea to the big night: organisation, communication and visual identity."
      }
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
        { title: { fr: "Communication", en: "Communication" }, text: { fr: "Stratégie et contenus sur les réseaux sociaux, annonces et teasing avant chaque événement.", en: "Social media strategy and content, announcements and teasers before each event." } },
        { title: { fr: "Image de marque", en: "Brand identity" }, text: { fr: "Création de l'identité d'Eclipse : univers, ton et visuels.", en: "Creating Eclipse's identity: universe, tone of voice and visuals." } },
        { title: { fr: "La mascotte", en: "The mascot" }, text: { fr: "Imaginée et créée pour incarner Eclipse et la rendre reconnaissable en un coup d'œil.", en: "Designed and created to embody Eclipse and make it recognisable at a glance." } }
      ]
    },
    mascot: {
      src: "assets/eclipse/mascotte.png",
      title: { fr: "Voici la mascotte", en: "Meet the mascot" },
      text: {
        fr: "Je l'ai créée pour donner un visage à Eclipse. Elle apparaît sur les affiches, les réseaux sociaux et tous nos supports.",
        en: "I created it to give Eclipse a face. It shows up on posters, social media and all our materials."
      },
      bubble: { fr: "On se voit à la prochaine ?", en: "See you at the next one?" }
    },
    posters: {
      title: { fr: "Les visuels", en: "The visuals" },
      subtitle: { fr: "Affiches et communication · glissez pour parcourir", en: "Posters and communication · drag to browse" },
      items: [
        { src: "assets/eclipse/affiche-1.jpg", alt: { fr: "Affiche Eclipse", en: "Eclipse poster" } },
        { src: "assets/eclipse/affiche-2.jpg", alt: { fr: "Affiche Eclipse", en: "Eclipse poster" } },
        { src: "assets/eclipse/affiche-3.jpg", alt: { fr: "Affiche Eclipse", en: "Eclipse poster" } },
        { src: "assets/eclipse/affiche-4.jpg", alt: { fr: "Affiche Eclipse", en: "Eclipse poster" } },
        { src: "assets/eclipse/affiche-5.jpg", alt: { fr: "Affiche Eclipse", en: "Eclipse poster" } }
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
    eyebrow: { fr: "Projet perso · Entrepreneuriat", en: "Personal project · Entrepreneurship" },
    title: "PUNCH",
    tagline: {
      fr: "La start-up santé que j'ai co-fondée : pilotage du projet, conception d'une application mobile et stratégie marketing digital.",
      en: "The health start-up I co-founded: project leadership, mobile app design and digital marketing strategy."
    },
    facts: [
      { label: { fr: "Rôle", en: "Role" }, value: { fr: "Co-fondatrice", en: "Co-founder" } },
      { label: { fr: "Secteur", en: "Sector" }, value: { fr: "Santé", en: "Health" } },
      { label: { fr: "Produit", en: "Product" }, value: { fr: "Application mobile", en: "Mobile app" } }
    ],
    phone: { src: "assets/punch/app-1.png" },
    intro: {
      title: { fr: "Le projet", en: "The project" },
      text: {
        fr: "PUNCH est une start-up dans le domaine de la santé, construite autour d'une application mobile. En tant que co-fondatrice, j'ai participé à toutes les étapes : de la vision du projet à la conception du produit, jusqu'à la stratégie pour le faire connaître.",
        en: "PUNCH is a health start-up built around a mobile app. As a co-founder, I took part in every stage: from the project vision to product design and the strategy to make it known."
      }
    },
    role: {
      title: { fr: "Mon rôle", en: "My role" },
      subtitle: { fr: "Trois casquettes, un même projet", en: "Three hats, one project" },
      items: [
        { title: { fr: "Pilotage de la start-up", en: "Leading the start-up" }, text: { fr: "Organisation du projet, priorités, planning et coordination entre les associés.", en: "Organising the project, priorities, planning and coordination between co-founders." } },
        { title: { fr: "Conception de l'app", en: "Designing the app" }, text: { fr: "Définition des besoins utilisateurs, des fonctionnalités et des parcours de l'application mobile.", en: "Defining user needs, features and user journeys for the mobile app." } },
        { title: { fr: "Stratégie marketing digital", en: "Digital marketing strategy" }, text: { fr: "Positionnement, cibles et plan de communication pour lancer et faire grandir PUNCH.", en: "Positioning, target audiences and communication plan to launch and grow PUNCH." } }
      ]
    },
    gallery: {
      title: { fr: "En images", en: "In pictures" },
      subtitle: { fr: "Maquettes, écrans et supports · cliquez pour agrandir", en: "Mock-ups, screens and materials · click to enlarge" },
      items: [
        { src: "assets/punch/visuel-1.jpg" },
        { src: "assets/punch/visuel-2.jpg" },
        { src: "assets/punch/visuel-3.jpg" },
        { src: "assets/punch/visuel-4.jpg" }
      ]
    },
    links: [
      { label: { fr: "Site web", en: "Website" }, url: "" },
      { label: "LinkedIn", url: "" }
    ],
    cta: { fr: "Un projet à lancer ?", en: "A project to launch?" }
  },

  /* ------------------------------------------------------------------ */
  "360idcom": {
    theme: "idcom",
    eyebrow: { fr: "Engagement · Gestion de projet", en: "Involvement · Project management" },
    title: "360idcom",
    tagline: {
      fr: "Cheffe de projet : gestion de projets étudiants, développement et mise en place de stratégies innovantes.",
      en: "Project manager: running student projects, developing and implementing innovative strategies."
    },
    facts: [
      { label: { fr: "Rôle", en: "Role" }, value: { fr: "Cheffe de projet", en: "Project manager" } },
      { label: { fr: "Cadre", en: "Setting" }, value: { fr: "Projets étudiants", en: "Student projects" } }
    ],
    intro: {
      title: { fr: "Le projet", en: "The project" },
      text: {
        fr: "Au sein de 360idcom, j'ai piloté des projets étudiants : cadrer les demandes, organiser les équipes et imaginer des stratégies innovantes, puis les mettre en place.",
        en: "At 360idcom, I led student projects: scoping requests, organising teams and coming up with innovative strategies, then putting them into action."
      }
    },
    role: {
      title: { fr: "Mon rôle", en: "My role" },
      subtitle: { fr: "Une vision à 360°", en: "A 360° view" },
      items: [
        { title: { fr: "Gestion de projets", en: "Project management" }, text: { fr: "Cadrage, planning, répartition des tâches et suivi jusqu'à la livraison.", en: "Scoping, planning, task allocation and follow-up through to delivery." } },
        { title: { fr: "Stratégies innovantes", en: "Innovative strategies" }, text: { fr: "Recherche d'idées nouvelles et développement de stratégies adaptées à chaque projet.", en: "Finding fresh ideas and developing strategies tailored to each project." } },
        { title: { fr: "Mise en place", en: "Implementation" }, text: { fr: "Passage de l'idée à l'action avec l'équipe, et suivi des résultats.", en: "Turning ideas into action with the team and tracking results." } }
      ]
    },
    gallery: {
      title: { fr: "En images", en: "In pictures" },
      subtitle: { fr: "Cliquez pour agrandir", en: "Click to enlarge" },
      items: [
        { src: "assets/360idcom/visuel-1.jpg" },
        { src: "assets/360idcom/visuel-2.jpg" },
        { src: "assets/360idcom/visuel-3.jpg" }
      ]
    },
    links: [
      { label: { fr: "Site web", en: "Website" }, url: "" }
    ],
    cta: { fr: "On en discute ?", en: "Shall we talk?" }
  },

  /* ------------------------------------------------------------------ */
  art: {
    theme: "interest",
    nav: "about",
    back: "about",
    eyebrow: { fr: "Passion", en: "Passion" },
    title: "ART",
    tagline: {
      fr: "Dessin, expositions, design : l'art nourrit ma créativité et mon regard sur l'image des marques.",
      en: "Drawing, exhibitions, design: art feeds my creativity and the way I look at brand image."
    },
    highlights: [
      { title: { fr: "Dessin", en: "Drawing" }, text: { fr: "Un crayon, une idée : le dessin reste ma façon préférée de réfléchir en images.", en: "A pencil and an idea: drawing is still my favourite way to think in pictures." } },
      { title: { fr: "Expositions", en: "Exhibitions" }, text: { fr: "Musées, galeries, expos : j'aime découvrir des univers et des artistes.", en: "Museums, galleries, shows: I love discovering new worlds and artists." } },
      { title: { fr: "Design", en: "Design" }, text: { fr: "Couleurs, typographies, compositions : une sensibilité que je retrouve dans mon travail.", en: "Colours, typefaces, layouts: a sensitivity I bring into my work." } }
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
    eyebrow: { fr: "Passion", en: "Passion" },
    title: "SPORT",
    tagline: {
      fr: "Aviron et randonnée : le goût de l'effort, de l'équipe et du grand air.",
      en: "Rowing and hiking: a taste for effort, teamwork and the great outdoors."
    },
    highlights: [
      { title: { fr: "Aviron", en: "Rowing" }, text: { fr: "Pratiquante et entraîneuse : j'encadre une équipe et j'organise des événements sportifs.", en: "Rower and coach: I lead a team and organise sports events." } },
      { title: { fr: "Randonnée", en: "Hiking" }, text: { fr: "Marcher, prendre de la hauteur et se vider la tête au milieu des paysages.", en: "Walking, gaining height and clearing my head surrounded by landscapes." } },
      { title: { fr: "Esprit d'équipe", en: "Team spirit" }, text: { fr: "Sur l'eau comme au travail, on avance plus loin quand tout le monde rame dans le même sens.", en: "On the water as at work, you go further when everyone rows in the same direction." } }
    ],
    gallery: {
      title: { fr: "Galerie", en: "Gallery" },
      subtitle: { fr: "Sur l'eau et sur les sentiers · cliquez pour agrandir", en: "On the water and on the trails · click to enlarge" },
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
    eyebrow: { fr: "Passion", en: "Passion" },
    title: { fr: "VOYAGE", en: "TRAVEL" },
    tagline: {
      fr: "Partir, découvrir d'autres cultures et revenir avec de nouvelles idées.",
      en: "Setting off, discovering other cultures and coming back with new ideas."
    },
    highlights: [
      { title: { fr: "Curiosité", en: "Curiosity" }, text: { fr: "Chaque voyage est une occasion d'apprendre et de voir les choses autrement.", en: "Every trip is a chance to learn and see things differently." } },
      { title: { fr: "Ouverture", en: "Open-mindedness" }, text: { fr: "Rencontrer d'autres cultures, un vrai atout pour travailler à l'international.", en: "Meeting other cultures, a real asset for working internationally." } },
      { title: { fr: "Inspiration", en: "Inspiration" }, text: { fr: "Paysages, villes, couleurs : je reviens toujours avec des idées plein la tête.", en: "Landscapes, cities, colours: I always come back full of ideas." } }
    ],
    gallery: {
      title: { fr: "Carnet de voyage", en: "Travel journal" },
      subtitle: { fr: "Cliquez pour agrandir", en: "Click to enlarge" },
      items: [
        { src: "assets/voyage/voyage-1.jpg", caption: { fr: "Destination", en: "Destination" } },
        { src: "assets/voyage/voyage-2.jpg", caption: { fr: "Destination", en: "Destination" } },
        { src: "assets/voyage/voyage-3.jpg", caption: { fr: "Destination", en: "Destination" } },
        { src: "assets/voyage/voyage-4.jpg", caption: { fr: "Destination", en: "Destination" } },
        { src: "assets/voyage/voyage-5.jpg", caption: { fr: "Destination", en: "Destination" } },
        { src: "assets/voyage/voyage-6.jpg", caption: { fr: "Destination", en: "Destination" } }
      ]
    },
    next: "art"
  }
};
