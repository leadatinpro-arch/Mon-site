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
      { label: { fr: "Durée", en: "Duration" }, value: { fr: "1 an", en: "1 year" } },
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
        fr: "Cette expérience nous a tellement marqués que nous envisageons de concrétiser PUNCH, non plus comme un projet fictif, mais comme une solution réelle. Parce que l'innovation sociale mérite de passer du concept à la réalité.",
        en: "This experience left such a mark on us that we are considering turning PUNCH into reality, no longer as a fictional project but as a real solution. Because social innovation deserves to move from concept to reality."
      }
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
