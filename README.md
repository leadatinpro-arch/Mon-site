# Léa Datin — Portfolio

Site portfolio bilingue (FR / EN) en HTML, CSS et JavaScript, sans framework ni installation.

## Pages

| Fichier         | Page                                              |
| --------------- | ------------------------------------------------- |
| `index.html`    | Accueil                                           |
| `about.html`    | À propos : histoire, valeurs, parcours, compétences |
| `projects.html` | Projets avec filtres (pro / perso) et fiche détaillée |
| `contact.html`  | Formulaire de contact                             |
| `eclipse.html`, `punch.html`, `360idcom.html` | Pages projets détaillées |
| `art.html`, `sport.html`, `voyage.html` | Pages passions              |
| `404.html`      | Page introuvable                                  |

## Mettre le site en ligne (gratuit, GitHub Pages)

1. Sur GitHub, ouvrez le dépôt puis **Settings → Pages**.
2. Dans **Build and deployment**, choisissez **Source : Deploy from a branch**.
3. Sélectionnez la branche **main** et le dossier **/ (root)**, puis **Save**.
4. Après une à deux minutes, le site est disponible à l'adresse affichée en haut de la page
   (du type `https://<votre-compte>.github.io/mon-site/`).

Chaque modification poussée sur `main` met le site à jour automatiquement.

## Modifier le contenu

| Je veux changer…                                  | Fichier            |
| ------------------------------------------------- | ------------------ |
| Mes projets, mon parcours, mes compétences, mes liens LinkedIn / Instagram | `js/content.js` |
| Les textes des pages (FR et EN)                   | `js/i18n.js`       |
| Les pages Eclipse, PUNCH, 360idcom, Art, Sport, Voyage (textes, images, liens Instagram / Shotgun) | `js/pages.js` |
| Les couleurs                                      | haut de `css/style.css` |
| Le menu, le pied de page                          | `js/layout.js`     |

### Ajouter ma photo et mon CV

Déposez dans le dossier `assets/` :

- `lea.png` : votre photo (déjà en place ; remplacez le fichier pour la changer) ;
- `cv-lea-datin.pdf` : votre CV (le bouton « Télécharger mon CV » apparaît automatiquement).

### Photos des pages projets et passions

Voir la liste des noms de fichiers attendus dans `assets/README.md`.

### Images de projets

Ajoutez vos images dans `assets/projets/` puis renseignez le champ `image` du projet dans `js/content.js`,
par exemple `image: "assets/projets/campagne.jpg"`.

## Formulaire de contact

Sans réglage, le formulaire ouvre la messagerie du visiteur avec le message déjà rédigé et adressé à
`lea.datinpro@gmail.com`.

Pour un envoi direct : créer un compte gratuit sur https://web3forms.com avec cette adresse, puis coller
la clé d'accès dans `window.SITE.web3formsKey` (`js/content.js`). En cas d'échec de l'envoi, le
formulaire repasse automatiquement par la messagerie.

## Statistiques (Google Analytics 4)

L'identifiant Google Analytics est réglé dans `window.SITE.gaId` (`js/content.js`). Un bandeau cookies
s'affiche ; Google Analytics n'est chargé que si le visiteur accepte. (`window.SITE.gtmId` permet
d'utiliser Google Tag Manager à la place ; ne pas activer les deux, sinon les visites sont comptées en double.)

## Nom de domaine (lea-datin.com)

Les balises de partage, `sitemap.xml` et `robots.txt` utilisent déjà `https://lea-datin.com/`.
Pour brancher le domaine sur GitHub Pages :
1. Chez le registraire du domaine, créer 4 enregistrements A vers 185.199.108.153, 185.199.109.153,
   185.199.110.153 et 185.199.111.153, et un CNAME `www` vers `leadatinpro-arch.github.io`.
2. Dans GitHub, Settings → Pages → Custom domain : saisir `lea-datin.com`, puis cocher « Enforce HTTPS ».

## Tester en local

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## SEO : pré-rendu du contenu

Le contenu des pages projets/passions, du parcours (À propos) et de la grille de projets est généré en
JavaScript à partir de `js/content.js` et `js/pages.js`. Pour que Google le lise directement, il est aussi
écrit dans le HTML. **Après chaque modification de ces fichiers**, relancer :

```bash
python3 -m http.server 8765   # dans un autre terminal, à la racine du site
node tools/prerender.js
```

Chaque page contient aussi des données structurées (JSON-LD : Person, WebSite, fil d'Ariane, type de page).
