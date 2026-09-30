# SandeepPortfolio

The personal portfolio website of **Sandeep Patro**, Senior Product Manager (Enterprise Software, AI and Digital Transformation). It's a single-page, responsive site built with plain HTML, CSS and JavaScript, with no frameworks and no build step. It's hosted on **GitHub Pages**.

- **Live site:** https://sandeeppatro.github.io/SandeepPortfolio/
- **Repository:** https://github.com/SandeepPatro/SandeepPortfolio
- **LinkedIn:** [linkedin.com/in/sandeeppatro1990](https://www.linkedin.com/in/sandeeppatro1990)

---

## Features

- **One landing page** (`index.html`) with these sections:
  - **Hero:** headline, summary, and four highlight stats (14+ years, 35+ products, $20M+ savings, 90%+ CSAT)
  - **About:** summary and quick facts
  - **Experience:** a timeline covering Dell Technologies (two roles), Cognizant and Mphasis
  - **Case Studies & Key Achievements:** License Optimizer, Sales Assistant, Software Rationalization, Build vs Buy, Vendor RFPs, and Contact Reduction & Automation
  - **Skills & Tools:** six grouped tag lists
  - **Education & Certifications:** B.E. degree plus SAFe POPM, CSM, MCP and ITIL
  - **Contact:** email, phone, LinkedIn and GitHub
- **Light/dark mode switch** in the top-right corner. On the first visit it follows the device's system setting. After that it remembers the visitor's choice (in `localStorage`), and an inline script applies the theme before the page is drawn, so the wrong theme never flashes.
- **Responsive layout** for every screen size:

  | Screen            | Width        | Layout                                                          |
  |-------------------|--------------|-----------------------------------------------------------------|
  | Phone             | < 600px      | Single column, full-width buttons, 2×2 stats, hamburger menu    |
  | Large phone / small tablet | 600–767px | Inline buttons, wider gutters                         |
  | Tablet            | 768–1023px   | 2-column cards and skills, 4 stats in a row, photo beside About |
  | Laptop / desktop  | ≥ 1024px     | Full navigation bar, 3-column cards and skills                  |

  All buttons are 44px touch targets. The mobile menu closes when you tap a link, tap outside it, press Escape, or rotate the device to desktop width.
- **Sticky header** whose nav link highlights the section you're currently viewing.
- **Smooth scrolling** and a subtle fade-in of sections as they appear, both turned off automatically for users who prefer reduced motion.
- **Accessibility:** skip link, semantic HTML, visible focus outlines, and ARIA labels on the menu and theme buttons.
- **Print stylesheet:** printing the page (or saving it as PDF) always produces a clean, light, resume-like layout.
- **SEO and sharing:** a meta description, a `theme-color` that follows the active theme (it tints the mobile browser bar), and Open Graph tags (title, description, URL and photo) so links shared on LinkedIn and WhatsApp show a preview card with your picture.
- **Works without JavaScript:** all content stays visible. The theme and menu buttons, which need JS, are hidden.
- **Lightweight:** no frameworks and no build step. The page is one HTML file, one stylesheet (~17 KB), one script (~4 KB) and a 22 KB lazy-loaded photo, and it loads only the font weights it uses.

## Tech stack

| Layer      | Technology                                                   |
|------------|--------------------------------------------------------------|
| Markup     | HTML5                                                        |
| Styling    | CSS3 (custom properties, Flexbox, Grid, media queries)       |
| Scripting  | Vanilla JavaScript (ES6, IntersectionObserver, matchMedia)   |
| Fonts      | Google Fonts: Merriweather (headings), Source Sans 3 (body)  |
| Hosting    | GitHub Pages                                                 |

## Project structure

```
SandeepPortfolio/
├── index.html                      # Landing page (all sections) + inline theme script in <head>
├── css/
│   └── style.css                   # All styles; light & dark theme variables at the top
├── js/
│   └── main.js                     # Theme toggle, mobile nav, active link, scroll reveal, footer year
├── assets/
│   ├── images/
│   │   ├── favicon.svg             # Browser tab icon ("SP")
│   │   ├── profile.jpg             # About-section photo (440×440, 2× for sharp screens)
│   │   └── profile-og.jpg          # Link-preview image (600×600, used by og:image)
├── .nojekyll                       # Tells GitHub Pages to serve files as-is
└── README.md
```

## Running locally

No installation is required.

1. **Quickest:** double-click `index.html` to open it in your browser.
2. **Local server (recommended):** from the project folder, run:
   ```bash
   python -m http.server 8000
   ```
   Then open <http://localhost:8000>.
3. **VS Code:** install the *Live Server* extension, right-click `index.html`, and choose **Open with Live Server**. The page reloads automatically on every save.

To test different screen sizes, open DevTools (F12) and use the device toolbar (Ctrl+Shift+M).

## Updating content

All content lives in `index.html`, and each section is marked with a comment banner such as `<!-- ===== EXPERIENCE ===== -->`.

| Section        | How to update                                                                                  |
|----------------|------------------------------------------------------------------------------------------------|
| Hero           | Headline, tagline, summary, the four `.stats` items, and the resume link                      |
| About          | Summary paragraphs and the `.about-facts` list                                                 |
| Experience     | One `<article class="timeline-item">` per role, most recent first. Use bullets (`<ul>`) or tech tags (`<ul class="tag-list tag-list-small">`) |
| Case Studies   | One `<article class="card">` per case study: `.card-kicker` label, title, description, `.card-impact` result line, tags |
| Skills & Tools | One `.skill-group` per category; add or remove `<li>` tags                                     |
| Education      | One `<div class="edu-item">` per degree or certification                                       |
| Contact        | `mailto:`, `tel:`, LinkedIn and GitHub links                                                   |

**Profile photo:** the page uses `assets/images/profile.jpg` (440×440). Link previews use `assets/images/profile-og.jpg` (600×600), which the `og:image` tag points to by full URL, because LinkedIn and WhatsApp ignore relative paths and SVGs. To change the photo, replace both files with square JPGs of the same names and sizes. The page crops the photo to a circle.

**Resume:** the **View Resume** button opens a OneDrive share link in a new tab. To host the PDF with the site instead, add it to the repo (for example `assets/Sandeep_Patro_Resume.pdf`) and change the button's `href` to that path.

## Customizing the look

All colors, fonts and layout sizes are CSS variables at the top of `css/style.css`. Light-theme colors are defined on `:root`, and dark-theme colors on `:root[data-theme="dark"]`. When you change a color, update both blocks. If you change the page background, also update `THEME_COLORS` in `js/main.js`, which sets the mobile browser bar color.

```css
:root {
  --color-accent: #2f5d8a;      /* buttons, links, highlights (light) */
  --color-heading: #1b2a41;     /* headings */
  --font-heading: "Merriweather", Georgia, serif;
  --font-body: "Source Sans 3", "Segoe UI", Arial, sans-serif;
  --container-width: 1100px;
}

:root[data-theme="dark"] {
  --color-bg: #0f1620;
  --color-accent: #7fb0e0;      /* buttons, links, highlights (dark) */
}
```

Responsive breakpoints are at **600px**, **768px** and **1024px**. They're mobile-first `@media (width >= …)` queries near the bottom of `style.css`.

## Browser support

The site uses standard, modern features: CSS custom properties, Grid, media-query range syntax and IntersectionObserver. It works in the current versions of Chrome, Edge, Firefox and Safari (desktop and mobile), plus Safari 16.4+ on older iPhones and Macs.

## Validation & testing

The code was checked with these tools:

| Check                          | Tool                                           | Result |
|--------------------------------|------------------------------------------------|--------|
| HTML (`index.html`, SVG icons) | [html-validate](https://html-validate.org/) (recommended rules) | 0 problems |
| CSS                            | [Stylelint](https://stylelint.io/) (`stylelint-config-standard`) | 0 problems* |
| JavaScript                     | [ESLint](https://eslint.org/) (`@eslint/js` recommended, browser globals) | 0 problems |
| Links and assets               | Script checking every `#anchor`, local file, and CSS↔HTML class | No broken links, no unused classes |
| Behavior                       | Headless Edge (Puppeteer): 23 checks            | All pass |

\* The `no-descending-specificity` rule is turned off. It flags selectors that style different elements (such as `.primary-nav li` and `.tag-list li`), which never actually conflict.

The behavior checks cover:
- no horizontal scrolling at 320, 375, 414, 768, 820, 1024, 1366 and 1920px;
- the hamburger showing only below 1024px;
- the theme toggle switching colors, following the system setting, and remembering the choice after a reload;
- the menu opening, and closing on a link tap, an outside tap, Escape, or resize;
- every section revealing on scroll, and the active nav link updating;
- the page working with JavaScript disabled;
- no console errors.

To re-run the linters yourself (Node.js 18+):

```bash
npx html-validate index.html
npx stylelint css/style.css --config '{"extends":"stylelint-config-standard","rules":{"no-descending-specificity":null}}'
npx eslint js/main.js
```

The first run downloads each tool. Stylelint also needs `npm i -D stylelint-config-standard`, and ESLint needs an `eslint.config.mjs` that enables browser globals.

## Deploying to GitHub Pages

The repository is already connected to `https://github.com/SandeepPatro/SandeepPortfolio`.

1. On GitHub, open the repository and go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to *Deploy from a branch*, **Branch** to `main`, and the folder to `/ (root)`, then click **Save**.
3. After a minute or two, the site is live at https://sandeeppatro.github.io/SandeepPortfolio/.

Each later `git push` to `main` redeploys the site automatically:

```bash
git add -A
git commit -m "Describe your change"
git push
```

> **Tip:** if you rename the repository to `SandeepPatro.github.io`, the site is served from the shorter URL `https://sandeeppatro.github.io/`.

### Custom domain (optional)

1. Buy a domain (for example `sandeeppatro.com`).
2. In **Settings → Pages → Custom domain**, enter the domain. GitHub adds a `CNAME` file to the repo.
3. At your domain registrar, add the DNS records GitHub shows (an `A` record for the apex domain and/or a `CNAME` for `www`).
4. Turn on **Enforce HTTPS** once the certificate is issued.

## Pre-launch checklist

- [ ] Every link in the nav scrolls to the correct section
- [ ] The site looks right at phone (~375px), tablet (~820px) and desktop (≥1024px) widths with no horizontal scrolling
- [ ] The hamburger menu opens and closes on phones and tablets
- [ ] The light/dark toggle works, and the choice persists after a reload
- [ ] The **View Resume** link opens the resume
- [ ] The email and phone links open the mail app and dialer
- [ ] Chrome DevTools **Lighthouse** scores ≥ 90 for Accessibility, Best Practices and SEO
- [ ] **Print preview** (Ctrl+P) looks clean
- [ ] The HTML passes the [W3C validator](https://validator.w3.org/)

## Roadmap / TODO

- [x] Build the single-page layout and styling
- [x] Fill in content from the resume (headline, About, experience, case studies, skills, education)
- [x] Add contact details (email, phone, LinkedIn, GitHub)
- [x] Link the resume
- [x] Add a light/dark mode toggle
- [x] Make the layout work on mobile, tablet and desktop
- [x] Validate and optimize HTML, CSS and JS
- [x] Add a profile photo and link-preview image
- [ ] Confirm the Adobe Creative Cloud and Power BI savings figures, and add them to the Vendor RFPs card
- [x] Enable GitHub Pages
- [ ] (Optional) Set up a custom domain

## Changelog

### v1.3 — Profile photo
- Added Sandeep's profile photo to the About section. The 1.8 MB 1024px PNG became a 22 KB 440px JPG, lazy-loaded.
- Added a 600×600 link-preview image (`profile-og.jpg`). The checkerboard corners baked into the source photo are replaced with the site background.
- Added `og:url`, `og:image` and image size/alt tags so shared links show the photo.
- Removed the placeholder avatar (`profile-placeholder.svg`).

### v1.2 — Validation & optimization
- Restored the resume-based page after an editor saved an older copy of `index.html` over it.
- Validated all HTML, CSS and JS with html-validate, Stylelint and ESLint, all with 0 problems. Added headless-browser tests (23 checks, all passing).
- **Fixed:**
  - the phone number could wrap mid-number (now uses non-breaking spaces);
  - the mobile browser bar color followed the system theme instead of the toggle;
  - the theme and menu buttons showed but did nothing when JavaScript was off (now hidden).
- **Removed:**
  - the duplicated dark-mode color block in CSS;
  - an unused Merriweather font weight;
  - the Open Graph image tag (an SVG with a relative path, which LinkedIn and WhatsApp ignore);
  - the unused `assets/resume/` folder;
  - a no-op contact-link override, an empty `.edu-list` wrapper, and an unused `about-text` class;
  - an IntersectionObserver fallback that no current browser needs.
- **Simplified:**
  - mobile menu dividers now use `li + li` borders instead of override rules;
  - the menu's two click handlers are merged into one;
  - CSS uses modern notation (`rgb()` with `/` alpha, `width >=` media queries, short hex colors).

### v1.1 — Resume content, dark mode, responsive layout
- Replaced all placeholder text with content from the Senior Product Manager resume.
- Added highlight stats to the hero section.
- Renamed **Projects** to **Case Studies & Key Achievements**, with six impact-focused cards.
- Expanded **Skills** to **Skills & Tools** with six groups.
- Added the degree and four certifications.
- Added email, phone, LinkedIn and GitHub contact links.
- Added a light/dark mode toggle in the top-right corner. It follows the system setting, remembers the visitor's choice, and never flashes the wrong theme on load.
- Reworked the responsive layout with 600/768/1024px breakpoints and 44px touch targets. The hamburger menu is now used up to 1024px and closes on outside tap, Escape, or rotation.
- The **View Resume** button now opens the resume in a new tab, and **Contact Me** scrolls to the Contact section.
- Print output is always light and resume-like.

### v1.0 — First draft
- Initial single-page layout with placeholder content, classic professional styling, sticky navigation, scroll effects, and a print stylesheet.

## Author

**Sandeep Patro**, Bengaluru, India
[LinkedIn](https://www.linkedin.com/in/sandeeppatro1990) · [GitHub](https://github.com/SandeepPatro)

## License

© Sandeep Patro. All rights reserved. The code structure may be reused as a template, but the personal content (text, photos, resume) may not be reused without permission.
