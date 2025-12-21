# Portfolio (SDH)

This is a minimal portfolio scaffold built with Vite, React and Tailwind CSS.

## Setup

Open PowerShell and run:

```powershell
cd "c:\Users\Godiano\OneDrive\Documents\portfoliosdh"
npm install
npm run dev
```

- `npm run dev` starts the dev server (Vite).
- `npm run build` builds a production bundle.

Tailwind is configured via `tailwind.config.cjs` and PostCSS.

If you want help customizing the layout, adding more projects, or deploying, tell me what you prefer (Netlify, Vercel, GitHub Pages, etc.).

## Deployment (GitHub Pages)

1. Push this repo to GitHub (default branch `main`).
2. The included GitHub Action ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) builds the app and publishes the `dist` folder to the `gh-pages` branch.
3. The workflow sets Vite's `base` to `/${{ github.event.repository.name }}/` so assets load correctly on GitHub Pages.

Local build and preview:

```bash
npm ci
npm run build
npm run preview
```

If your repo's default branch is not `main`, update `.github/workflows/deploy.yml` to match your branch.

If you'd like, I can enable the workflow branch name for you, create a small `gh-pages` branch, or set the repo Pages settings.
