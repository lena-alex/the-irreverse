# The Irreverse — the-irreverse.zone

Static website (plain HTML + CSS, no build step).

- `index.html`, `about.html`, `research.html`, `talks.html`, `projects.html`, `contact.html` — the main pages
- `atlas.html`, `insurance-forms.html` — the two project pages (listed under Projects)
- `assets/atlas/` — Atlas images (cracks, poster, folder) and the book of abstracts PDF
- `assets/insurance/` — the full Insurance Forms text as a PDF
- `assets/research/` — the Journal of World Trade article PDF and its first-page preview
- `assets/talks/` — talk slides (PDF) and their title-slide previews
- `style.css` — all styling; colours are the tokens at the top (black and white for now)
- `assets/cracks.js` — draws the cracks that continue out of the home-page video (every line starts where a real crack meets the edge of the video)
- `assets/irreverse.mp4` — the home-page video (with `irreverse-poster.jpg` as its first frame)
- `favicon.ico`, `favicon-32.png`, `apple-touch-icon.png` — the IR logo as the browser-tab icon
- `CNAME` — tells GitHub Pages to serve the site on the-irreverse.zone

## Put it on GitHub Pages
1. Create a repository on your GitHub account and upload all these files to its root.
2. Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
3. Under "Custom domain" enter `the-irreverse.zone` (the CNAME file already sets it).
4. At World4You, point the domain's DNS at GitHub Pages: A records for `@` →
   185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153,
   and a CNAME record `www` → `<your-username>.github.io`.
5. Once the certificate is issued, tick "Enforce HTTPS".
