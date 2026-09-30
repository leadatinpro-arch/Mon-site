// Génère l'image de partage (og-image.png, 1200×630) et le CV PDF via Playwright/Chromium.
// Usage : node build/render-assets.cjs
const { join } = require('node:path');
const { pathToFileURL } = require('node:url');
let chromium;
try { ({ chromium } = require('playwright')); }
catch { ({ chromium } = require('/opt/node22/lib/node_modules/playwright')); }

const ROOT = join(__dirname, '..');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });

  await page.goto(pathToFileURL(join(__dirname, 'og.html')).href);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: join(ROOT, 'site/assets/img/og-image.png') });
  console.log('✓ site/assets/img/og-image.png');

  await page.goto(pathToFileURL(join(__dirname, 'cv.html')).href);
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: join(ROOT, 'site/assets/cv/CV-Lea-Datin.pdf'), format: 'A4', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
  console.log('✓ site/assets/cv/CV-Lea-Datin.pdf');

  await browser.close();
})();
