# Léa Datin — Portfolio

Site vitrine / portfolio en HTML, CSS et JavaScript (sans framework ni build).

## Lancer le site en local

Ouvrir `index.html` dans un navigateur, ou lancer un petit serveur :

```bash
python3 -m http.server 8000
# puis http://localhost:8000
```

## Structure

```
index.html      Page d'accueil
css/style.css   Styles et animations
js/i18n.js      Tous les textes FR / EN (à modifier ici)
js/main.js      Animations et changement de langue
```

## Modifier les textes

Tous les textes sont dans `js/i18n.js`, en français (`fr`) et en anglais (`en`).
La langue est détectée automatiquement et mémorisée quand on clique sur FR / EN.

## Pages à venir

- À propos
- Projets (expériences pro et projets perso)
- Contact
