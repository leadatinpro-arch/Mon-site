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
      fr: "Des soirées techno à Nancy, nées d'un projet étudiant et devenues un rendez-vous. J'ai créé l'identité visuelle et la communication, et je fais aujourd'hui partie des trois organisateurs.",
      en: "Techno nights in Nancy, born from a student project and now a local fixture. I created the visual identity and communication, and I'm now one of the three organisers."
    },
    facts: [
      { label: { fr: "Rôle", en: "Role" }, value: { fr: "DA, com' & co-organisation", en: "Art direction, comms & co-organisation" } },
      { label: { fr: "Équipe", en: "Team" }, value: { fr: "3 à 100 % + bénévoles", en: "3 full-time + volunteers" } },
      { label: { fr: "Lieu", en: "Venue" }, value: "Nirvana Club · Nancy" },
      { label: { fr: "Son", en: "Sound" }, value: "Techno · Hard techno · Raw" }
    ],
    heroMascot: "assets/eclipse/mascotte-2.png",
    walker: "assets/eclipse/mascotte-3.png",
    marquee: ["ECLIPSE", "TECHNO", "HARD TECHNO", "RAW", "NIRVANA CLUB", "NANCY", "HÉLIOS"],
    intro: {
      title: { fr: "L'histoire", en: "The story" },
      text: {
        fr: "Tout commence par un projet scolaire : deux amis décident d'organiser une soirée techno avec leur classe, en réunissant des artistes de la scène électro locale. Il leur manque des visuels : ils m'appellent. Je crée avec eux l'identité d'Eclipse, les premières affiches et toute la communication sur les réseaux, et je viens leur prêter main-forte le soir même. Salle comble. Une deuxième date suit en septembre, puis l'aventure devient la nôtre : nous sommes désormais trois à porter Eclipse à 100 %.",
        en: "It all starts with a school project: two friends decide to throw a techno night with their class, bringing together artists from the local electronic scene. They need visuals, so they call me. Together we create Eclipse's identity, the first posters and all the social media communication, and I come to help out on the night itself. Sold out. A second date follows in September, then the adventure becomes ours: there are now three of us running Eclipse full-time."
      }
    },
    stats: [
      { value: "2", label: { fr: "éditions, toutes deux réussies", en: "editions, both a success" } },
      { value: "10", label: { fr: "artistes programmés", en: "artists booked" } },
      { value: "~200", label: { fr: "personnes à chaque soirée, salle comble", en: "people every night, full house" } }
    ],
    editions: {
      title: { fr: "Les éditions", en: "The editions" },
      subtitle: { fr: "Une identité, une couleur par saison", en: "One identity, one colour per season" },
      items: [
        {
          num: "01",
          color: "#ff8a1f",
          color2: "#ffd23f",
          season: { fr: "Juin 2026", en: "June 2026" },
          date: { fr: "5 juin", en: "June 5" },
          hours: "22h – 5h",
          genres: "Reggae / Dub · Techno · Hard techno · Raw",
          price: { fr: "6 €", en: "€6" },
          crowd: { fr: "Salle comble", en: "Full house" },
          story: {
            fr: "La première. Organisée avec la classe de mes deux amis, elle réunit des artistes de la scène locale autour d'une tête d'affiche venue d'ailleurs : Vicø. Billetterie en ligne sur Shotgun et sur place, et une salle pleine jusqu'à 5 h.",
            en: "The first one. Organised with my two friends' class, it brought local artists together around a headliner from further afield: Vicø. Online ticketing on Shotgun plus door sales, and a packed room until 5am."
          },
          lineup: [
            { name: "Meltek", time: "22h – 23h30" },
            { name: "Kyrb", time: "23h30 – 01h" },
            { name: "Double Paced", time: "01h – 02h" },
            { name: "SLMT", time: "02h – 03h" },
            { name: "Vicø", time: "03h – 04h", headliner: true },
            { name: "Blueharder", time: "04h – 05h" }
          ],
          posters: [
            { src: "assets/eclipse/juin-affiche.jpg", alt: { fr: "Affiche Eclipse Festival, 5 juin", en: "Eclipse Festival poster, June 5" } },
            { src: "assets/eclipse/juin-lineup.jpg", alt: { fr: "Line-up du 5 juin", en: "June 5 line-up" } },
            { src: "assets/eclipse/juin-timetable.jpg", alt: { fr: "Timetable du 5 juin", en: "June 5 timetable" } },
            { src: "assets/eclipse/juin-logo.jpg", alt: { fr: "Visuel logo Eclipse Festival", en: "Eclipse Festival logo visual" } }
          ]
        },
        {
          num: "02",
          color: "#2f6bff",
          color2: "#5b9bff",
          season: { fr: "Septembre 2026", en: "September 2026" },
          date: { fr: "11 septembre", en: "September 11" },
          hours: "23h – 5h",
          genres: "Techno · Hard techno · Raw",
          price: { fr: "8 € sur place", en: "€8 at the door" },
          crowd: { fr: "180 à 220 personnes", en: "180 to 220 people" },
          story: {
            fr: "Le retour. Même charte graphique, nouvelle couleur : le bleu. Quatre artistes, une soirée encore une fois réussie et beaucoup de retours enthousiastes, de gens curieux de ce qu'on faisait : à Nancy, il n'existait pas vraiment de soirées comme celles-ci portées par des organisateurs locaux.",
            en: "The comeback. Same visual identity, new colour: blue. Four artists, another successful night and lots of enthusiastic feedback from people curious about what we were doing: in Nancy, there weren't really nights like these run by local organisers."
          },
          lineup: [
            { name: "Antara" },
            { name: "Gigi Acid" },
            { name: "Noisyneighbors" },
            { name: "Purificator" }
          ],
          posters: [
            { src: "assets/eclipse/sept-affiche.jpg", alt: { fr: "Affiche Eclipse Festival, 11 septembre", en: "Eclipse Festival poster, September 11" } },
            { src: "assets/eclipse/sept-lineup.jpg", alt: { fr: "Line-up du 11 septembre", en: "September 11 line-up" } },
            { src: "assets/eclipse/sept-billetterie.jpg", alt: { fr: "Visuel « La billetterie est ouverte »", en: "“Ticketing is open” visual" } }
          ]
        }
      ],
      next: {
        num: "03",
        color: "#7a3cff",
        color2: "#c08bff",
        title: { fr: "La prochaine éclipse…", en: "The next eclipse…" },
        text: { fr: "Une troisième édition se prépare, dans une nouvelle couleur. Restez à l'écoute.", en: "A third edition is in the works, in a brand-new colour. Stay tuned." },
        badge: { fr: "Bientôt", en: "Coming soon" },
        image: "assets/eclipse/helios-ou.jpg"
      }
    },
    role: {
      title: { fr: "Ma tracklist", en: "My tracklist" },
      subtitle: { fr: "Ce que j'apporte à Eclipse", en: "What I bring to Eclipse" },
      items: [
        { title: { fr: "Identité visuelle", en: "Visual identity" }, text: { fr: "Création de la charte d'Eclipse et de toutes les affiches : une même identité, déclinée dans une couleur par édition.", en: "Creating Eclipse's brand guidelines and every poster: one identity, with a new colour for each edition." } },
        { title: { fr: "Réseaux sociaux", en: "Social media" }, text: { fr: "Annonces, line-up, timetable, ouverture de la billetterie : toute la communication Instagram, du teasing au récap.", en: "Announcements, line-up, timetable, ticket launches: all the Instagram communication, from teasers to recaps." } },
        { title: { fr: "Vidéos", en: "Videos" }, text: { fr: "Teasers, préparation de la scène, récaps de soirée : des formats courts pour faire vivre l'événement avant, pendant et après.", en: "Teasers, stage set-up, night recaps: short formats that bring the event to life before, during and after." } },
        { title: { fr: "Hélios, la mascotte", en: "Hélios, the mascot" }, text: { fr: "Imaginée et dessinée pour incarner Eclipse et porter la communication des prochaines éditions.", en: "Designed and drawn to embody Eclipse and front the communication for upcoming editions." } },
        { title: { fr: "Organisation & jour J", en: "Organisation & the big night" }, text: { fr: "Aujourd'hui l'une des trois organisateurs à 100 % : préparation des soirées, coordination des bénévoles et présence le soir même.", en: "Now one of the three full-time organisers: preparing the nights, coordinating volunteers and being there on the night." } }
      ]
    },
    mascot: {
      src: "assets/eclipse/mascotte-2.png",
      poses: [
        { src: "assets/eclipse/mascotte-2.png", bubble: { fr: "Salut, moi c'est Hélios !", en: "Hi, I'm Hélios!" } },
        { src: "assets/eclipse/mascotte.png", bubble: { fr: "Le son est lancé !", en: "The music is on!" } },
        { src: "assets/eclipse/mascotte-3.png", bubble: { fr: "Petite pause fraîcheur…", en: "Quick refreshment break…" } }
      ],
      title: { fr: "Voici Hélios", en: "Meet Hélios" },
      text: {
        fr: "Hélios, c'est une éclipse personnifiée : la lune devant, le soleil qui dépasse derrière, des lunettes et le casque toujours sur les oreilles. Je l'ai créé pour donner un visage à Eclipse : il porte désormais nos affiches, nos réseaux et nos goodies.",
        en: "Hélios is an eclipse brought to life: the moon in front, the sun peeking out behind, sunglasses on and headphones always on. I created him to give Eclipse a face: he now fronts our posters, social media and merch."
      },
      bubble: { fr: "Salut, moi c'est Hélios !", en: "Hi, I'm Hélios!" },
      faq: [
        { q: { fr: "Qui est Hélios ?", en: "Who is Hélios?" }, a: { fr: "La mascotte d'Eclipse : une éclipse personnifiée, fan de techno, de hard techno et de raw.", en: "Eclipse's mascot: an eclipse brought to life, into techno, hard techno and raw." }, img: "assets/eclipse/mascotte-3.png" },
        { q: { fr: "Sa mission ?", en: "His mission?" }, a: { fr: "Mettre l'ambiance, annoncer les prochaines dates et rappeler à chacun de passer une soirée safe.", en: "Setting the mood, announcing upcoming dates and reminding everyone to have a safe night." }, img: "assets/eclipse/mascotte.png" },
        { q: { fr: "Où le retrouver ?", en: "Where to find him?" }, a: { fr: "Sur nos affiches, nos réseaux, nos stickers… et bientôt en soirée.", en: "On our posters, social media, stickers… and soon at our nights." }, img: "assets/eclipse/mascotte-2.png" }
      ]
    },
    posters: {
      title: { fr: "Le mur des visuels", en: "The visuals wall" },
      subtitle: { fr: "Affiches, réseaux et goodies · glissez pour parcourir, cliquez pour agrandir", en: "Posters, social posts and merch · drag to browse, click to enlarge" },
      items: [
        { src: "assets/eclipse/helios-annonce.jpg", alt: { fr: "Annonce d'Hélios, la mascotte", en: "Hélios mascot announcement" } },
        { src: "assets/eclipse/helios-qui.jpg", alt: { fr: "Slide « Qui est Hélios ? »", en: "“Who is Hélios?” slide" } },
        { src: "assets/eclipse/helios-mission.jpg", alt: { fr: "Slide « Sa mission ? »", en: "“His mission?” slide" } },
        { src: "assets/eclipse/juin-affiche.jpg", alt: { fr: "Affiche du 5 juin", en: "June 5 poster" } },
        { src: "assets/eclipse/sept-affiche.jpg", alt: { fr: "Affiche du 11 septembre", en: "September 11 poster" } },
        { src: "assets/eclipse/affiche-2.jpg", alt: { fr: "Visuel de prévention « Besoin d'aide ? »", en: "“Need help?” prevention visual" } },
        { src: "assets/eclipse/helios-sticker.jpg", alt: { fr: "Sticker Hélios", en: "Hélios sticker" }, wide: true }
      ]
    },
    gallery: {
      title: { fr: "Dans la fosse", en: "On the dancefloor" },
      subtitle: { fr: "Photos des soirées · cliquez pour agrandir", en: "Event photos · click to enlarge" },
      items: [
        { src: "assets/eclipse/photo-1.jpg" },
        { src: "assets/eclipse/photo-2.jpg" },
        { src: "assets/eclipse/photo-3.jpg" },
        { src: "assets/eclipse/photo-4.jpg" },
        { src: "assets/eclipse/photo-5.jpg" },
        { src: "assets/eclipse/photo-6.jpg" }
      ]
    },
    links: [
      { label: "Instagram @eclipsefestival_ncy", url: "https://www.instagram.com/eclipsefestival_ncy" },
      { label: { fr: "Billetterie Shotgun", en: "Shotgun tickets" }, url: "https://shotgun.live/fr/venues/event-nancy" }
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
  "jacques-laveine": {
    theme: "jli",
    eyebrow: { fr: "Expérience pro · Community management", en: "Professional experience · Community management" },
    title: "JACQUES LAVEINE",
    tagline: {
      fr: "Community Manager pour une agence immobilière de Metz : contenus, réseaux sociaux et visibilité des annonces.",
      en: "Community Manager for a real estate agency in Metz: content, social media and listing visibility."
    },
    logo: "assets/jacques-laveine/logo.png",
    facts: [
      { label: { fr: "Rôle", en: "Role" }, value: "Community Manager" },
      { label: { fr: "Période", en: "Period" }, value: { fr: "Sept. – déc. 2022", en: "Sept – Dec 2022" } },
      { label: { fr: "Réseaux", en: "Channels" }, value: "Facebook · Instagram" },
      { label: { fr: "Secteur", en: "Sector" }, value: { fr: "Immobilier", en: "Real estate" } }
    ],
    marquee: ["JACQUES LAVEINE IMMOBILIER", "COMMUNITY MANAGEMENT", "FACEBOOK", "INSTAGRAM", "SEO", "METZ"],
    intro: {
      title: { fr: "L'agence", en: "The agency" },
      text: {
        fr: "Jacques Laveine Immobilier est une agence reconnue pour son expertise dans la vente et la location de biens immobiliers. Travailler dans ce secteur m'a permis de développer des compétences en communication digitale et en création de contenu, dans un environnement où la visibilité en ligne est essentielle pour attirer et fidéliser les clients.",
        en: "Jacques Laveine Immobilier is an agency known for its expertise in selling and renting property. Working in this sector helped me develop skills in digital communication and content creation, in an environment where online visibility is key to attracting and retaining clients."
      }
    },
    context: {
      title: { fr: "Pourquoi cette expérience compte", en: "Why this experience matters" },
      items: [
        { label: { fr: "Un secteur concurrentiel", en: "A competitive sector" }, value: { fr: "Optimiser la présence digitale pour se démarquer.", en: "Optimising the digital presence to stand out." } },
        { label: { fr: "Un rôle créatif et stratégique", en: "A creative and strategic role" }, value: { fr: "Création de contenus visuels et rédactionnels pour les réseaux sociaux.", en: "Creating visual and written content for social media." } },
        { label: { fr: "Un impact direct", en: "A direct impact" }, value: { fr: "Chaque publication influence la notoriété et la génération de leads.", en: "Every post influences brand awareness and lead generation." } }
      ]
    },
    role: {
      title: { fr: "Mes responsabilités clés", en: "My key responsibilities" },
      subtitle: { fr: "Community Manager", en: "Community Manager" },
      items: [
        { title: { fr: "Création de contenus", en: "Content creation" }, text: { fr: "Contenus visuels et rédactionnels pour les réseaux sociaux (Facebook, Instagram).", en: "Visual and written content for social media (Facebook, Instagram)." } },
        { title: { fr: "Animation des pages", en: "Page management" }, text: { fr: "Planification des publications et suivi des interactions.", en: "Scheduling posts and monitoring interactions." } },
        { title: { fr: "Optimisation SEO", en: "SEO optimisation" }, text: { fr: "Améliorer la visibilité des annonces immobilières.", en: "Improving the visibility of property listings." } },
        { title: { fr: "Collaboration commerciale", en: "Working with sales" }, text: { fr: "Avec les équipes commerciales, pour mettre en avant les biens et les services.", en: "With the sales teams, to showcase properties and services." } }
      ]
    },
    showcase: {
      title: { fr: "Réalisations", en: "Selected work" },
      subtitle: { fr: "Quelques contenus créés pour l'agence", en: "Some content created for the agency" },
      items: [
        {
          src: "assets/jacques-laveine/bonne-nouvelle.png",
          tag: { fr: "Post réseaux sociaux", en: "Social media post" },
          title: { fr: "« Bonne nouvelle » : les taux d'usure", en: "“Good news”: usury rates" },
          text: { fr: "Un visuel pédagogique et percutant pour annoncer la hausse des taux d'usure au 1er octobre 2022, une info clé pour les futurs acheteurs.", en: "An informative, eye-catching visual announcing the rise in usury rates on 1 October 2022, key news for future buyers." }
        },
        {
          src: "assets/jacques-laveine/concours-photos.png",
          tag: { fr: "Campagne & print", en: "Campaign & print" },
          title: { fr: "Concours photos & calendrier 2022", en: "Photo contest & 2022 calendar" },
          text: { fr: "Un concours photos valorisant le pays messin, avec 12 lauréats récompensés et leurs clichés réunis dans le calendrier de l'agence.", en: "A photo contest showcasing the Metz area, with 12 winners rewarded and their shots gathered in the agency's calendar." }
        }
      ]
    },
    links: [],
    cta: { fr: "Besoin d'une community manager ?", en: "Need a community manager?" }
  },

  cora: {
    theme: "cora",
    eyebrow: { fr: "Expérience pro · Alternance", en: "Professional experience · Work-study" },
    title: "CORA",
    tagline: {
      fr: "Chargée de marketing et communication chez Carrefour (anciennement Cora) : campagnes, événements en magasin et réseaux sociaux.",
      en: "Marketing and communication officer at Carrefour (formerly Cora): campaigns, in-store events and social media."
    },
    heroPhotos: ["assets/cora/brioches.jpg", "assets/cora/pommes-amour.jpg", "assets/cora/cora-rose.jpg"],
    facts: [
      { label: { fr: "Rôle", en: "Role" }, value: { fr: "Chargée de marketing & communication", en: "Marketing & communication officer" } },
      { label: { fr: "Période", en: "Period" }, value: { fr: "Avril 2023 – août 2024", en: "April 2023 – August 2024" } },
      { label: { fr: "Enseigne", en: "Retailer" }, value: { fr: "Carrefour (anciennement Cora)", en: "Carrefour (formerly Cora)" } },
      { label: { fr: "Statut", en: "Status" }, value: { fr: "Alternance", en: "Work-study" } }
    ],
    marquee: ["CORA", "CARREFOUR", "MARKETING OPÉRATIONNEL", "ÉVÉNEMENTIEL", "PLV", "RÉSEAUX SOCIAUX"],
    intro: {
      title: { fr: "L'enseigne", en: "The retailer" },
      text: {
        fr: "Carrefour est une grande enseigne de distribution qui accueille des milliers de clients chaque jour. Travailler dans cet environnement dynamique m'a permis de développer des compétences clés en marketing opérationnel, communication et gestion de projets événementiels, tout en apprenant à gérer des deadlines serrées et des actions à fort impact.",
        en: "Carrefour is a major retailer welcoming thousands of customers every day. Working in this fast-paced environment helped me build key skills in operational marketing, communication and event project management, while learning to handle tight deadlines and high-impact actions."
      }
    },
    context: {
      title: { fr: "Pourquoi cette expérience compte", en: "Why this experience matters" },
      items: [
        { label: { fr: "Un environnement exigeant", en: "A demanding environment" }, value: { fr: "Forte affluence, diversité des publics, besoin d'actions rapides et efficaces.", en: "High footfall, diverse audiences, a need for fast and effective actions." } },
        { label: { fr: "Un rôle polyvalent", en: "A versatile role" }, value: { fr: "Communication interne et externe, marketing digital, organisation d'événements.", en: "Internal and external communication, digital marketing, event organisation." } },
        { label: { fr: "Un impact direct", en: "A direct impact" }, value: { fr: "Chaque action influence la visibilité et l'expérience client en magasin.", en: "Every action shapes visibility and the in-store customer experience." } }
      ]
    },
    role: {
      title: { fr: "Mes responsabilités clés", en: "My key responsibilities" },
      subtitle: { fr: "Chargée de marketing & communication", en: "Marketing & communication officer" },
      items: [
        { title: { fr: "Campagnes marketing", en: "Marketing campaigns" }, text: { fr: "Conception et déploiement des actions promotionnelles : affiches, PLV, réseaux sociaux.", en: "Designing and rolling out promotional actions: posters, POS displays, social media." } },
        { title: { fr: "Organisation d'événements", en: "Event organisation" }, text: { fr: "Coordination des animations en magasin, partenariats locaux, suivi logistique.", en: "Coordinating in-store activities, local partnerships, logistics follow-up." } },
        { title: { fr: "Supports visuels", en: "Visual materials" }, text: { fr: "Flyers, affiches, présentations et contenus digitaux pour les réseaux sociaux.", en: "Flyers, posters, presentations and digital content for social media." } },
        { title: { fr: "Réseaux sociaux", en: "Social media" }, text: { fr: "Planification des publications, rédaction des posts, suivi des performances.", en: "Scheduling posts, writing content, tracking performance." } },
        { title: { fr: "Collaboration interservices", en: "Cross-team collaboration" }, text: { fr: "Échanges avec les équipes commerciales et logistiques pour assurer la cohérence des actions.", en: "Working with sales and logistics teams to keep actions consistent." } }
      ]
    },
    gallery: {
      title: { fr: "Sur le terrain", en: "In the field" },
      subtitle: { fr: "Animations et événements · cliquez pour agrandir", en: "Activities and events · click to enlarge" },
      items: [
        { src: "assets/cora/pommes-amour.jpg", caption: { fr: "Animation pommes d'amour en magasin", en: "In-store candy apple activity" } },
        { src: "assets/cora/brioches.jpg", caption: { fr: "« Le tour de France des brioches »", en: "“The Tour de France of brioches”" } },
        { src: "assets/cora/cora-rose.jpg", caption: { fr: "La course Cora Rose", en: "The Cora Rose run" } }
      ]
    },
    links: [],
    cta: { fr: "Un projet marketing à lancer ?", en: "A marketing project to launch?" }
  },

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
