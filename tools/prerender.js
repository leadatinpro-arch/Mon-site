/* Pré-rendu SEO : écrit dans le HTML le contenu normalement généré en JavaScript
   (pages projets/passions, parcours, compétences, grille de projets), pour que
   les moteurs de recherche le lisent sans exécuter le JS. Le JS le régénère ensuite
   à l'identique (et en anglais si besoin).
   Usage : python3 -m http.server 8765 (à la racine), puis
           node tools/prerender.js   (Playwright requis)                        */
const path = require("path");
const fs = require("fs");
const { chromium } = require(require("child_process").execSync("npm root -g").toString().trim() + "/playwright");
const ROOT = path.join(__dirname, "..");
const BASE = "http://localhost:8765/";
const STORIES = ["eclipse", "punch", "360idcom", "saint-gobain", "cora", "jacques-laveine", "art", "sport", "voyage"];
const LISTS = { "about.html": ["data-schools", "data-timeline", "data-skills"], "projects.html": ["data-projects-grid"] };

const clean = (h) => h.replace(/ is-visible/g, "").replace(/ class=""/g, "");
function inject(file, attr, inner) {
  const p = path.join(ROOT, file);
  let s = fs.readFileSync(p, "utf8");
  const open = s.search(new RegExp(`<[a-z]+[^>]*\\s${attr}[\\s>=]`));
  if (open < 0) throw new Error(attr + " absent de " + file);
  const tag = s.slice(open + 1).match(/^[a-z]+/)[0];
  const startInner = s.indexOf(">", open) + 1;
  // trouve la balise fermante correspondante (en comptant l'imbrication)
  let depth = 1, i = startInner, rx = new RegExp(`<(/?)${tag}[\\s>]`, "g");
  rx.lastIndex = startInner;
  let m;
  while ((m = rx.exec(s))) { depth += m[1] ? -1 : 1; if (!depth) { i = m.index; break; } }
  s = s.slice(0, startInner) + "\n" + inner + "\n" + s.slice(i);
  fs.writeFileSync(p, s);
}

(async () => {
  const b = await chromium.launch();
  for (const id of STORIES) {
    const p = await b.newPage();
    await p.route(/js\/main\.js/, (r) => r.fulfill({ status: 200, contentType: "text/javascript", body: "" }));
    await p.goto(BASE + id + ".html");
    const html = await p.evaluate(() => {
      const T = window.TRANSLATIONS.fr;
      window.renderStory("fr", (k) => T[k]);
      return document.querySelector("[data-story-root]").innerHTML;
    });
    inject(id + ".html", "data-story-root", clean(html).trim());
    console.log("story", id, html.length);
    await p.close();
  }
  for (const [file, attrs] of Object.entries(LISTS)) {
    const p = await b.newPage();
    await p.goto(BASE + file);
    await p.waitForTimeout(1500);
    for (const a of attrs) {
      const html = await p.evaluate((a) => document.querySelector(`[${a}]`).innerHTML, a);
      inject(file, a, clean(html).trim());
      console.log(file, a, html.length);
    }
    await p.close();
  }
  await b.close();
})();
