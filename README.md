# SandeepPortfolio

The personal portfolio website of **Sandeep Patro**. It's a single-page, responsive site built with plain HTML, CSS and JavaScript, with no frameworks and no build step. It's designed to be hosted for free on **GitHub Pages**.

- **Live site:** `https://<your-github-username>.github.io/SandeepPortfolio/` *(available after deployment; see below)*
- **LinkedIn:** [linkedin.com/in/sandeeppatro1990](https://www.linkedin.com/in/sandeeppatro1990)

---

## Features

- A single landing page (`index.html`) with these sections: **Hero, About, Experience, Skills, Projects, Education & Certifications, Contact**
- A classic, professional, resume-like design
- A responsive layout (mobile, tablet and desktop) with a hamburger menu on small screens
- A sticky header whose nav link highlights the section you're viewing
- Smooth scrolling and subtle fade-in of sections, turned off automatically for users who prefer reduced motion
- Accessibility: skip link, semantic HTML, visible focus outlines, ARIA on the mobile menu
- A print stylesheet, so printing the page (or saving it as PDF) gives a clean, resume-like layout
- Open Graph meta tags for good link previews when the site is shared on LinkedIn or WhatsApp

## Tech stack

| Layer      | Technology                                              |
|------------|---------------------------------------------------------|
| Markup     | HTML5                                                   |
| Styling    | CSS3 (custom properties, Flexbox, Grid, media queries)  |
| Scripting  | Vanilla JavaScript (ES6, IntersectionObserver)          |
| Fonts      | Google Fonts: Merriweather (headings), Source Sans 3 (body) |
| Hosting    | GitHub Pages                                            |

## Project structure

```
SandeepPortfolio/
├── index.html                  # Main landing page (all sections)
├── css/
│   └── style.css               # All styles; theme variables at the top
├── js/
│   └── main.js                 # Mobile nav, active link, scroll reveal, footer year
├── assets/
│   ├── images/
│   │   ├── favicon.svg          # Browser tab icon ("SP")
│   │   └── profile-placeholder.svg  # Replace with your photo
│   └── resume/
│       └── (Sandeep_Patro_Resume.pdf)  # Add your resume here
├── .nojekyll                   # Tells GitHub Pages to serve files as-is
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

## Updating content

All placeholder text is written in square brackets, like `[Your Professional Headline]`. Every section in `index.html` also starts with an `<!-- EDIT: ... -->` comment that explains what to change. Search the file for `EDIT:` or `[` to find everything.

| Section        | What to update                                                                 |
|----------------|--------------------------------------------------------------------------------|
| `<head>`       | Page title, meta description, Open Graph tags                                  |
| Hero           | Headline (use your LinkedIn headline) and one-line summary                     |
| About          | Summary paragraphs (from LinkedIn "About"), location, current role, years of experience |
| Experience     | Copy one `<article class="timeline-item">` block per role, most recent first  |
| Skills         | Rename the groups and add or remove `<li>` tags                                |
| Projects       | Copy one `<article class="card">` block per project and set the link `href`   |
| Education      | One `<div class="edu-item">` per degree or certification                       |
| Contact        | Replace `your.email@example.com` and `your-username` (GitHub)                  |

**Profile photo:** add a square image (for example `assets/images/profile.jpg`, at least 440×440 px). Then update the `src` of the `.about-photo` image and the `og:image` meta tag in `index.html`.

**Resume:** save your resume as `assets/resume/Sandeep_Patro_Resume.pdf`. The **Download Resume** button already links to this path.

## Customizing the look

All colors, fonts and layout sizes are CSS variables at the top of `css/style.css`:

```css
:root {
  --color-accent: #2f5d8a;      /* buttons, links, highlights */
  --color-heading: #1b2a41;     /* headings, footer */
  --font-heading: "Merriweather", Georgia, serif;
  --font-body: "Source Sans 3", "Segoe UI", Arial, sans-serif;
  --container-width: 1000px;
}
```

Change these values to re-theme the whole site.

## Deploying to GitHub Pages

1. Create a repository on GitHub (for example `SandeepPortfolio`).
2. Connect this local repo and push:
   ```bash
   git remote add origin https://github.com/<your-github-username>/SandeepPortfolio.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to *Deploy from a branch*, **Branch** to `main`, and the folder to `/ (root)`, then click **Save**.
5. After a minute or two, the site is live at `https://<your-github-username>.github.io/SandeepPortfolio/`.

Every later `git push` to `main` redeploys the site automatically.

> **Tip:** if you name the repository `<your-github-username>.github.io`, the site is served from the shorter URL `https://<your-github-username>.github.io/`.

### Custom domain (optional)

1. Buy a domain (for example `sandeeppatro.com`).
2. In **Settings → Pages → Custom domain**, enter the domain. GitHub adds a `CNAME` file to the repo.
3. At your domain registrar, add the DNS records GitHub shows (an `A` record for the apex domain and/or a `CNAME` for `www`).
4. Turn on **Enforce HTTPS** once the certificate is issued.

## Pre-launch checklist

- [ ] Every link in the nav scrolls to the correct section
- [ ] The site looks right at phone width (~375 px) with no horizontal scrolling
- [ ] Chrome DevTools **Lighthouse** scores ≥ 90 for Accessibility, Best Practices and SEO
- [ ] **Print preview** (Ctrl+P) looks clean
- [ ] The HTML passes the [W3C validator](https://validator.w3.org/)

## Roadmap / TODO

- [ ] Fill in content from the LinkedIn profile (headline, About, experience, education, skills)
- [ ] Add a profile photo
- [ ] Add a resume PDF
- [ ] Update the email address and GitHub username in the Contact section
- [ ] Add real projects with links
- [ ] Deploy to GitHub Pages
- [ ] (Optional) Set up a custom domain

## Author

**Sandeep Patro** — [LinkedIn](https://www.linkedin.com/in/sandeeppatro1990)

## License

© Sandeep Patro. All rights reserved. The code structure may be reused as a template, but the personal content (text, photos, resume) may not be reused without permission.
