# lea-datin.com — site personnel de Léa Datin

Portfolio bilingue FR/EN : Accueil, À propos (et ses sous-pages Art, Sport et Voyage), Expérience, Projets, Contact, 404.
Le site est statique (HTML, CSS et JavaScript sans dépendance). Il est généré à partir d'un seul fichier de contenu.

```
build/content.mjs       ← TOUS les textes FR/EN, e-mail, LinkedIn, id de suivi
build/build.mjs         ← gabarits des pages → génère site/**/index.html
build/placeholders.mjs  ← visuels SVG provisoires (n'écrase jamais une image existante)
build/render-assets.cjs ← og-image.png + CV PDF provisoire (Playwright)
site/                   ← le site prêt à publier
  assets/css/style.css  ← design (couleurs, typos, animations)
  assets/js/main.js     ← interactions
```

## Commandes

```bash
npm run build    # régénère les 18 pages (9 FR à la racine, 9 EN sous /en/)
npm run serve    # aperçu sur http://localhost:8080
npm run assets   # régénère og-image.png et le CV provisoire (nécessite Playwright)
```

## Ce qui est en place

Les pages **Accueil, À propos et Expérience** reprennent la maquette validée (structure, CSS, textes). Les pages **Projets, Contact, Art, Sport, Voyage et 404** sont construites dans le même style.

| Élément | Implémentation |
|---|---|
| Switch FR/EN | Interrupteur rond à curseur jaune. Il glisse puis ouvre la même page dans l'autre langue (URL dédiées, `hreflang`) |
| Soulignement de la nav | Bleu sur fond clair, jaune sur fond sombre (`navlink--on-light` / `navlink--on-dark`) |
| Animations au scroll | `.reveal` rejoué à chaque entrée dans l'écran (`IntersectionObserver`) |
| Menu mobile | Plein écran, cercle qui se déploie depuis le hamburger |
| Expérience | Accordéon : un seul élément ouvert à la fois |
| À propos | Panneaux au survol (titres verticaux), empilés sur mobile ; album avec flèches ←/→, points cliquables et bouton ↺ |
| Extras | Bouton « remonter en haut » (rebond), bandeau cookies, suivi d'audience après consentement, `og:image`, sitemap, 404 avec « 0 » qui rebondit |

### Objets 3D (thème digital)

Tout est en code maison, sans bibliothèque externe.

- **Globe 3D interactif** (accueil, section Expérience) : sphère de points, 12 pays reliés à Pont-à-Mousson par des arcs animés. On peut le faire tourner à la souris ou au doigt.
- **Icônes 3D extrudées** : curseur, cœur « like », @, bouton play, palette, avirons, avion en papier. Elles flottent dans le hero et suivent la souris.
- **Sol en grille 3D** animé dans les en-têtes sombres, **anneaux gyroscopiques** derrière « Ma vision du travail », icônes **en orbite** autour de la photo « À propos ».
- **Page Projets** : sphère 360° pour 360ID, titre en relief pour PUNCH, éclipse animée pour Éclipse.
- **Cartes inclinables** : elles s'inclinent en 3D avec un reflet lumineux au survol.
- **Modèle 3D réel (optionnel)** : télécharger un `.glb` gratuit (par ex. un ordinateur portable sur [Poly Pizza](https://poly.pizza/search/Smartphone) ou [Sketchfab](https://sketchfab.com/3d-models/low-poly-laptop-a9c2e21a123542fdaf8edfdac4c22869), en licence CC0), le déposer dans `site/assets/3d/` et renseigner `SITE.model3d`. Il remplace alors les icônes flottantes du hero, affiché avec `<model-viewer>` de Google.

## À compléter par Léa

Sur le site, les textes provisoires apparaissent **surlignés en jaune entre [crochets]**.

1. **LinkedIn** : `SITE.linkedin` dans `build/content.mjs`. Le lien est désactivé tant qu'il vaut `#`.
2. **Projets 360ID et PUNCH** : catégorie, accroche, description, rôle. Pour Éclipse : détails de l'événement.
3. **Sous-pages Art, Sport, Voyage** : le paragraphe « Mon histoire ».
4. **Globe** : remplacer les 12 coordonnées de `GLOBE.points` par les 12 pays réels de PAM Line (aucun nom n'est affiché).
5. **Photos** : portrait de l'accueil et de « À propos », album, galeries `site/assets/img/{art,sport,travel}-1…4.svg`.
6. **CV** : remplacer `site/assets/cv/CV-Lea-Datin.pdf` (version provisoire générée à partir du contenu du site).
7. **Police Cortado** : si Google Fonts ne la fournit pas, déposer `Cortado.woff2` dans `site/assets/fonts/`. En attendant, c'est Caveat qui s'affiche.
8. **Mesure d'audience** : `SITE.analytics.id`.
9. Relancer `npm run build`.

## Mise en ligne sur WordPress.com

Le brief prévoit WordPress.com, avec WPML ou Polylang. Deux options :

- **Hébergement du dossier `site/` tel quel** : GitHub Pages, Netlify, ou un plan WordPress.com Business/Commerce (SFTP). Le multilingue repose sur des URL dédiées FR et `/en/`, ce qui correspond au fonctionnement de Polylang.
- **Intégration dans WordPress** : sur un plan qui autorise les plugins (Business), installer Polylang et créer chaque page en FR et en EN. Reprendre ensuite `style.css` et `main.js` dans un thème enfant, et utiliser le HTML généré comme blocs « HTML personnalisé » ou comme compositions. Dans ce cas, Jetpack Stats peut remplacer l'outil de suivi, et le formulaire Jetpack remplacer le formulaire `mailto:`.
