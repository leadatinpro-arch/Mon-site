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

| Demande du brief | Implémentation |
|---|---|
| Switch FR/EN façon iOS | Un seul curseur jaune qui glisse, puis ouvre la page équivalente dans l'autre langue (URL dédiées + `hreflang`) |
| Soulignement de la nav | Bleu sur fond clair, jaune sur fond sombre : l'en-tête détecte la section qu'il survole (`data-theme`) |
| Animations au scroll | `IntersectionObserver` : fondu, translation et flou, rejoués **à chaque** entrée dans l'écran |
| Menu mobile | Plein écran, cercle qui se déploie depuis le hamburger (`clip-path`) ; se ferme avec Échap |
| Bouton « Me contacter » | Effet magnétique qui suit le curseur (désactivé sur écran tactile) |
| Accroche animée | Mots qui défilent façon Magic UI « Word Rotate » |
| Expérience | Timeline en accordéon, un seul élément ouvert à la fois |
| À propos | Blobs, verre dépoli, alternance clair/sombre, eyebrows numérotés 01 à 04 ; panneaux Art/Sport/Voyage en accordéon au survol (titres verticaux), empilés sur mobile ; album photo avec retournement 3D, flèches, points et bouton « Recommencer » |
| 404 | Le « 0 » rebondit comme une balle (chute accélérée, écrasement à l'impact, ombre qui suit) |
| Remonter en haut | Apparition avec rebond après 600 px de scroll |
| Cookies et suivi | Bandeau de consentement ; le script de suivi (Plausible ou GA4) n'est chargé qu'après « Accepter » |
| SEO et partage | `og:image` 1200×630, `sitemap.xml`, `robots.txt`, balises canoniques |
| Accessibilité | Lien d'évitement, focus visibles, `aria-expanded`, respect de `prefers-reduced-motion` |

Effets inspirés de Magic UI, recodés en CSS/JS natif : Blur Fade, Word Rotate, Border Beam (portrait), Shine Border (cartes projets), Number Ticker (chiffres clés), Dot Pattern.

## À compléter par Léa

Sur le site, les textes provisoires apparaissent **surlignés en jaune entre [crochets]**.

1. **Recommandations** : coller le texte exact des recommandations de Catherine Ficara et Lucas Dorval (`TESTIMONIALS`).
2. **Projets 360ID et PUNCH** : catégorie, accroche, description, rôle. Pour Éclipse : détails de l'événement.
3. **Sous-pages Art, Sport, Voyage** : le paragraphe « Pourquoi ça compte pour moi ».
4. **Légendes de l'album photo** (`ABOUT.album`).
5. **Coordonnées** : `SITE.email` (actuellement `contact@lea-datin.com`) et `SITE.linkedin` (URL à vérifier).
6. **Photos** : remplacer les fichiers de `site/assets/img/` (portrait, about-portrait, album-1 à 5, art/sport/travel-1 à 4, *-cover, project-*, logo-art/sport/travel). Pour passer en JPG ou WebP, changer les extensions dans `build/build.mjs`.
7. **CV** : remplacer `site/assets/cv/CV-Lea-Datin.pdf` par le vrai CV. Le PDF actuel est une version provisoire générée à partir du brief.
8. **Police Cortado** : elle n'existe pas sur Google Fonts. Déposer `Cortado.woff2` dans `site/assets/fonts/`. En attendant, c'est Caveat qui s'affiche.
9. **Mesure d'audience** : renseigner `SITE.analytics.id` (domaine Plausible, ou `provider: 'ga4'` avec l'identifiant `G-…`).
10. Relancer `npm run build`. Relancer aussi `npm run assets` sur une machine avec accès internet, pour que l'image de partage utilise les vraies polices.

## Mise en ligne sur WordPress.com

Le brief prévoit WordPress.com, avec WPML ou Polylang. Deux options :

- **Hébergement du dossier `site/` tel quel** : GitHub Pages, Netlify, ou un plan WordPress.com Business/Commerce (SFTP). Le multilingue repose sur des URL dédiées FR et `/en/`, ce qui correspond au fonctionnement de Polylang.
- **Intégration dans WordPress** : sur un plan qui autorise les plugins (Business), installer Polylang et créer chaque page en FR et en EN. Reprendre ensuite `style.css` et `main.js` dans un thème enfant, et utiliser le HTML généré comme blocs « HTML personnalisé » ou comme compositions. Dans ce cas, Jetpack Stats peut remplacer l'outil de suivi, et le formulaire Jetpack remplacer le formulaire `mailto:`.
