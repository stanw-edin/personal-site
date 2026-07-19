# Personal Site

Built with [Astro](https://astro.build). Static site: Personal Landing Page.

## Structure

- `src/data/cv.ts` - CV content (single source, edit and both the page and PDF link update).
- `src/data/photos.ts` - photo gallery entries. Add real images to `public/photos/` and reference them here.
- `src/content/blog/*.md` - one markdown file per blog post. Frontmatter: `title`, `description`, `date`, `tags`, `draft`. The blog index shows a preview thumbnail automatically using the first image found in the post body - no separate cover-image field needed. Posts with no image just show text.
- `public/cv/cv.pdf` - drop a real CV PDF here; the "Download PDF" button on `/cv` already points at it.
- `src/layouts/Layout.astro` - shared nav, footer, and head.
- `src/styles/global.css` - colours, fonts, spacing. Change `--accent` in `:root` to re-theme.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview   # serve the built site locally.
```

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. In the repo settings, under **Pages**, set the source to **GitHub Actions**.
3. Edit `astro.config.mjs`:
   - `site`: `https://<your-github-username>.github.io`.
   - `base`: `/<repo-name>` - or remove `base` entirely if the repo is named `<username>.github.io`.
4. Push to `main` - `.github/workflows/deploy.yml` builds and deploys automatically.

## Adding Content

- **New Blog Post**: add a markdown file to `src/content/blog/` and copy the frontmatter from `welcome.md`.
- **New Photo**: drop the image in `public/photos/` and add an entry to `src/data/photos.ts`.
- **CV Update**: edit `src/data/cv.ts` directly.
