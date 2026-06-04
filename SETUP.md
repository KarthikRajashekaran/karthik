# Setup guide — personal site (`karthik`)

## What runs where

| Thing | Visibility | URL / location |
|-------|------------|----------------|
| **Live site** | **Public** (anyone on the internet) | https://karthikrajashekaran.github.io/karthik/ |
| **GitHub repo** | **Public** (required on GitHub Free for Pages) | https://github.com/KarthikRajashekaran/karthik |
| **Local project** | On your laptop only | Clone + `npm run dev` |

Pushing to `main` triggers **GitHub Actions** → builds and publishes the **public** site.

> **Important:** On **GitHub Free**, **private repos cannot use GitHub Pages**. Making the repo private removed the site (404). The repo is **public** again so Pages works. The **website** is still only promoted via your link; the **source code** is visible on GitHub. For private code + public site you need **GitHub Pro** (~$4/mo) or host on Cloudflare Pages / Netlify.

---

## New laptop — one-time setup

### 1. Install

- [Git](https://git-scm.com)
- [Node.js 22+](https://nodejs.org) (matches `package.json` `engines`)
- Optional: [GitHub CLI](https://cli.github.com) — `brew install gh && gh auth login`

### 2. Clone

```bash
mkdir -p ~/karu-github && cd ~/karu-github
git clone git@github.com:KarthikRajashekaran/karthik.git
cd karthik
npm install
npm run dev
```

Preview: **http://localhost:4321/karthik/**

### 3. GitHub authentication (for push)

```bash
# SSH (recommended): add key in GitHub → Settings → SSH and GPG keys
ssh -T git@github.com

# Or HTTPS + gh
gh auth login
```

### 4. Before editing on another machine

```bash
git pull origin main
```

---

## Edit → publish workflow

```bash
cd ~/karu-github/karthik
git pull origin main

# edit files (see table below)
npm run dev          # optional preview
npm run build        # optional sanity check

git add .
git commit -m "chore: describe your change"
git push origin main
```

- Check deploy: **GitHub → Actions → “Deploy to GitHub Pages”** (green = live in ~1–2 min)
- Live site: https://karthikrajashekaran.github.io/karthik/

### Files you change most

| What | Path |
|------|------|
| Skills | `src/data/skills.ts` |
| Bio, email, links | `src/data/site.ts` |
| Medium posts | `src/data/posts.ts` |
| Word resume download | `public/resume.doc` (see `site.ts` → `resume`) |
| Web resume text | `src/pages/resume.astro` |

**Update resume file:**

```bash
cp ~/Downloads/Resume/Karthik_Rajashekaran_SeniorDataEngineer.docx public/resume.doc
# or .docx — update src/data/site.ts resume.file + downloadName if name changes
git add public/ src/data/site.ts && git commit -m "chore: update resume" && git push
```

---

## Repo visibility vs live site

| GitHub plan | Private repo + Pages |
|-------------|----------------------|
| **Free** | **Not supported** — Pages disabled → site 404 |
| **Pro** | Supported — private repo, **public** Pages URL |

If the site shows **404 There isn't a GitHub Pages site here**:

1. Repo → **Settings → Pages** — ensure **GitHub Actions** is the source.
2. **Actions** — last **Deploy to GitHub Pages** must be green.
3. On Free plan, repo must be **public** (Settings → General → Change visibility).

Do **not** put secrets in the repo; built HTML is public either way.

---

## Shorter URL options

Your site today:

```text
https://karthikrajashekaran.github.io/karthik/
```

GitHub does **not** allow `https://karthik.github.io/karthik/` unless your **account username** is exactly `karthik`.

### Option A — Username `karthik` (shortest `*.github.io`)

1. Check availability: GitHub → **Settings → Account → Change username** → try `karthik`.
2. If renamed to `karthik`, either:
   - **User site:** create repo `karthik.github.io` → live at **https://karthik.github.io/** (move this project there, set Astro `base: '/'`), or
   - **Project site:** keep repo `karthik` → **https://karthik.github.io/karthik/** (still has `/karthik/` path).

Renaming your account changes all repo URLs; update remotes and `astro.config.mjs` `site` after a rename.

### Option B — Custom domain (recommended if you want `karthik.dev` style)

1. Buy a domain (e.g. `karthik.dev`) from a registrar.
2. **Repo → Settings → Pages → Custom domain** → enter domain.
3. Add DNS records GitHub shows (usually `CNAME` `www` → `KarthikRajashekaran.github.io` or apex `A` records).
4. In `astro.config.mjs`, set `site: 'https://karthik.dev'` (your real domain); keep `base: '/karthik/'` unless you move to user site with `base: '/'`.

Custom domain works with a **private** repo; the site stays public.

### Option C — Keep current URL (no change)

Shortest option **without** renaming account or paying for a domain:

```text
https://karthikrajashekaran.github.io/karthik/
```

Use this in LinkedIn, resume, and email signature.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `Permission denied` on clone/push | Fix SSH key or `gh auth login`; confirm you own the private repo |
| `npm run dev` 404 on `/` | Open **http://localhost:4321/karthik/** (base path) |
| Push ok but site old | Wait 2 min; check **Actions**; hard-refresh browser |
| `npm run build` fails | `rm -rf node_modules && npm install` |
| Pages 404 after rename | Update `site` + `base` in `astro.config.mjs` and redeploy |

---

## Checklist — new laptop

- [ ] Git + Node 22+ installed  
- [ ] `git clone` succeeds (GitHub auth works)  
- [ ] `npm install` && `npm run dev` — home page loads  
- [ ] `git pull` before edits when switching machines  
- [ ] After push, Actions green and live URL loads  
