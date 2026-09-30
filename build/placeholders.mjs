// Génère des visuels SVG provisoires aux couleurs de la marque.
// À remplacer par les vraies photos (mêmes noms, ou mettre à jour les chemins dans build.mjs).
// Usage : node build/placeholders.mjs
import { writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'site', 'assets', 'img');
const C = { navy: '#03012A', blue: '#2E6ACB', light: '#759DD7', yellow: '#FBDE5A' };

const photo = (w, h, a, b, label) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <circle cx="${w * 0.78}" cy="${h * 0.22}" r="${Math.min(w, h) * 0.18}" fill="${C.yellow}" opacity=".55"/>
  <circle cx="${w * 0.18}" cy="${h * 0.85}" r="${Math.min(w, h) * 0.3}" fill="#fff" opacity=".08"/>
  <text x="50%" y="52%" text-anchor="middle" font-family="Arial, sans-serif" font-size="${Math.round(Math.min(w, h) / 14)}" font-weight="700" fill="#fff" opacity=".85">${label}</text>
</svg>`;

const files = {
  'favicon.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="${C.navy}"/><text x="50%" y="62%" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-size="30" font-weight="900" fill="${C.yellow}">LD</text></svg>`,
};
for (const [k, label] of [['art', 'Art'], ['sport', 'Sport'], ['travel', 'Voyage']]) {
  for (let i = 1; i <= 4; i++) files[`${k}-${i}.svg`] = photo(800, 600, i % 2 ? C.navy : C.blue, i % 2 ? C.light : C.navy, `${label} ${i}`);
}

let n = 0;
for (const [name, svg] of Object.entries(files)) {
  const p = join(DIR, name);
  if (existsSync(p) && !process.argv.includes('--force')) continue; // ne pas écraser une vraie image
  writeFileSync(p, svg); n++;
}
console.log(`✓ ${n} visuels provisoires écrits dans site/assets/img/`);
