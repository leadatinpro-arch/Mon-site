# Léa Datin — Portfolio

Site portfolio bilingue (FR / EN) en HTML, CSS et JavaScript, sans framework ni installation.

## Pages

| Fichier         | Page                                              |
| --------------- | ------------------------------------------------- |
| `index.html`    | Accueil                                           |
| `about.html`    | À propos : histoire, valeurs, parcours, compétences |
| `projects.html` | Projets avec filtres (pro / perso) et fiche détaillée |
| `contact.html`  | Formulaire de contact                             |
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
| Les couleurs                                      | haut de `css/style.css` |
| Le menu, le pied de page                          | `js/layout.js`     |

### Ajouter ma photo et mon CV

Déposez dans le dossier `assets/` :

- `lea.jpg` : votre photo (elle remplace automatiquement le bloc « LD » de la page À propos) ;
- `cv-lea-datin.pdf` : votre CV (le bouton « Télécharger mon CV » apparaît automatiquement).

### Images de projets

Ajoutez vos images dans `assets/projets/` puis renseignez le champ `image` du projet dans `js/content.js`,
par exemple `image: "assets/projets/campagne.jpg"`.

## Formulaire de contact

Le formulaire ouvre la messagerie du visiteur avec le message déjà rédigé et adressé à
`lea.datinpro@gmail.com`. Aucun service externe n'est nécessaire.

## Tester en local

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```
