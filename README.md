# Karthik — personal site

Static personal site (data engineering + AI): home, resume, and writing links. Built with [Astro](https://astro.build) and hosted free on [GitHub Pages](https://pages.github.com/).

**Live (public):** https://karthikrajashekaran.github.io/karthik/  
**Repo:** public (required for GitHub Free + Pages). See [SETUP.md](./SETUP.md).  
**New machine / URL options:** see [SETUP.md](./SETUP.md).

## Live URL

`https://karthikrajashekaran.github.io/karthik/`

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:4321/karthik/ (base path matches production).

## Customize

| File | What to change |
|------|----------------|
| `astro.config.mjs` | `site` URL if your GitHub username differs |
| `src/data/site.ts` | Name, links (GitHub, Medium, email) |
| `src/data/skills.ts` | Skill groups on home |
| `src/data/posts.ts` | Medium post list |
| `public/resume.doc` | Word resume (download link on home + resume page) |
| `src/pages/resume.astro` | Online resume summary |

## Deploy to GitHub Pages

1. Create a **public** repo named `karthik` on GitHub.
2. Push this project to `main`.
3. Repo **Settings → Pages → Build and deployment**: Source **GitHub Actions**.
4. After the workflow runs, the site is live at the URL above.

## Project structure

- `/` — Home, bio, skills, external links
- `/resume/` — Public resume (sanitized for web)
- `/writing/` — Curated Medium links
