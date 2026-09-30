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

const logo = (bg, fg, path) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <circle cx="32" cy="32" r="30" fill="${bg}"/>
  <g fill="none" stroke="${fg}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" transform="translate(14 14) scale(1.5)">${path}</g>
</svg>`;

const files = {
  'portrait.svg': photo(800, 1000, C.blue, C.navy, 'Portrait — photo à venir'),
  'about-portrait.svg': photo(800, 1000, C.light, C.blue, 'Photo à venir'),
  'logo-art.svg': logo(C.yellow, C.navy, '<path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.7-.8 1.7-1.7 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-.9.8-1.7 1.7-1.7H16a5 5 0 0 0 5-5c0-4-4-7.2-9-7.2z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/>'),
  'logo-sport.svg': logo(C.light, C.navy, '<circle cx="12" cy="12" r="9"/><path d="M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18M3 12h18"/>'),
  'logo-travel.svg': logo(C.navy, C.yellow, '<path d="M10.5 13.5 3 11l1.5-1.5 8 1 4-4.5a2.1 2.1 0 0 1 3 3l-4.5 4 1 8L15.5 22 13 14.5l-3 3v3L8.5 22 7 17l-5-1.5L3.5 14h3z"/>'),
  'art-cover.svg': photo(900, 1100, C.navy, C.blue, 'Art'),
  'sport-cover.svg': photo(900, 1100, C.blue, C.light, 'Sport'),
  'travel-cover.svg': photo(900, 1100, C.light, C.navy, 'Voyage'),
  'project-360id.svg': photo(1200, 900, C.navy, C.blue, '360ID'),
  'project-punch.svg': photo(1200, 900, C.blue, C.yellow, 'PUNCH'),
  'project-eclipse.svg': photo(1200, 900, '#000000', C.navy, 'Éclipse'),
  'favicon.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="${C.navy}"/><text x="50%" y="62%" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-size="30" font-weight="900" fill="${C.yellow}">LD</text></svg>`,
};
for (let i = 1; i <= 5; i++) files[`album-${i}.svg`] = photo(600, 750, [C.blue, C.navy, C.light, C.blue, C.navy][i - 1], [C.light, C.blue, C.navy, C.navy, C.light][i - 1], `Photo ${i}`);
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
