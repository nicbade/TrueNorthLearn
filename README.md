# TrueNorth Accessibility — Training Library

Standalone learning hub for TrueNorth Accessibility trainings.
Intended deploy: **https://learn.truenorth-accessibility.com** (Netlify).

Main marketing site remains at [truenorth-accessibility.com](https://truenorth-accessibility.com).

## Stack

- React 19 + Vite
- React Router
- Plain CSS (no Tailwind)
- Static build for Netlify

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  trainings.js          # Catalog config — add trainings here
  pages/
    HubPage.jsx         # /
    TrainingPage.jsx    # /training/:slug (iframe shell)
    NotFoundPage.jsx
  components/           # Header, Footer, cards, skip link
  index.css             # Global styles + a11y focus
public/
  modules/<slug>/       # Standalone training exports (iframe targets)
netlify.toml            # Build + SPA redirects
```

## Adding a new training

**Full walkthrough:** see [docs/HOW-TO-ADD-FIGMA-MAKE-TRAININGS.md](docs/HOW-TO-ADD-FIGMA-MAKE-TRAININGS.md)
for a step-by-step guide from Figma Make export → local folder → `trainings.js` → Netlify.

### Short version

1. Build the training in Figma Make and export it as a standalone HTML/React app.
2. Either:
   - Copy the export into `public/modules/<slug>/` so the entry file is
     `public/modules/<slug>/index.html`, **or**
   - Host the export on its own URL (another Netlify site, CDN, etc.).
3. Open `src/trainings.js` and append an object to the `trainings` array:

```js
{
  slug: 'my-new-training',
  title: 'My New Training',
  description: 'One or two sentences for the hub card.',
  duration: '45 min',
  difficulty: 'Beginner', // Beginner | Intermediate | Advanced
  embedUrl: '/modules/my-new-training/index.html',
  // or: embedUrl: 'https://modules.example.com/my-new-training/',
}
```

4. Redeploy. The hub card and `/training/my-new-training` route appear
   automatically — no layout changes required.

### Field reference

| Field | Purpose |
| --- | --- |
| `slug` | URL segment: `/training/<slug>` |
| `title` | Card heading and training bar label |
| `description` | Short hub summary |
| `duration` | Human-readable estimate |
| `difficulty` | Shown as a label on the card |
| `embedUrl` | `iframe` `src` (path or absolute URL) |

## Deploy to Netlify

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import an existing project**.
3. Build settings (also in `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy.

### Point `learn.truenorth-accessibility.com` at Netlify

1. In Netlify: **Domain management → Add domain** →
   `learn.truenorth-accessibility.com`.
2. At your DNS provider (Squarespace Domains or wherever the apex lives),
   add a **CNAME** record:

   | Type | Host / Name | Value |
   | --- | --- | --- |
   | CNAME | `learn` | `<your-site>.netlify.app` |

   Use the hostname Netlify shows (for example `truenorth-learn.netlify.app`).
3. Wait for DNS propagation, then confirm HTTPS is provisioned in Netlify.
4. Optional: set the site’s primary domain to
   `learn.truenorth-accessibility.com` in Netlify.

> Do **not** put an A record for `learn` pointing at GitHub Pages — this app
> is separate from the main site’s GitHub Pages deploy.

## Accessibility

- Skip link, landmark regions, heading hierarchy
- Visible dual-ring `:focus-visible` styles (≥ 3:1 contrast)
- Keyboard-operable navigation and cards
- Descriptive `iframe` `title` attributes
- `prefers-reduced-motion` respected
- No `localStorage` / `sessionStorage`

## Brand

Tokens match the main consulting site (cream ground, forest accent, navy mark,
Lora + Work Sans) so the library feels continuous with
truenorth-accessibility.com while remaining a separate deploy.
