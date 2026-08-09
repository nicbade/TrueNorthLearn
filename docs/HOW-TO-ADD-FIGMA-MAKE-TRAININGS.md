# How to Add a Figma Make Training to the Learning Library

This guide walks through taking a training built in **Figma Make** and publishing it on **learn.truenorth-accessibility.com** (this Netlify site).

You only need to touch two things for most updates:

1. The exported training files (placed under `public/modules/`)
2. One new entry in `src/trainings.js`

You do **not** need to change the hub layout, React pages, or CSS.

---

## Overview

```
Figma Make training
        │
        ▼
Export / download standalone build
        │
        ▼
Put files in public/modules/<slug>/
        │
        ▼
Add entry in src/trainings.js
        │
        ▼
Commit → push → Netlify deploys
        │
        ▼
Live at /training/<slug>
```

The hub reads the `trainings` array and builds cards automatically.  
Opening a card loads `/training/<slug>`, which shows your export inside a full-height iframe.

---

## Before you start

- The training is finished (or ready enough) in Figma Make
- You have this repo cloned locally
- You can run `npm run dev` to preview locally
- Netlify is connected to this GitHub repo (after the first deploy)

Pick a **slug** now — a short, URL-safe name with only lowercase letters, numbers, and hyphens.

Examples:


| Training title           | Slug                 |
| ------------------------ | -------------------- |
| Introduction to WCAG 2.2 | `intro-to-wcag`      |
| Keyboard Access & Focus  | `keyboard-and-focus` |
| Forms & Error Messages   | `forms-and-errors`   |


The public URL will be:

`https://learn.truenorth-accessibility.com/training/<slug>`

---

## Step 1 — Export the training from Figma Make

1. Open the training project in **Figma Make**.
2. Use Make’s **export / download / publish** option for a **standalone** web build
  (HTML + assets that can run on their own — not a design file only).
3. Download the zip (or folder) to your computer.
4. Unzip it if needed.

### What you should see

A folder that typically includes something like:

- `index.html` (required entry point)
- `assets/` (JS, CSS, images — names vary)

If there is **no** `index.html` at the top level, look one folder deeper (some exports nest the site under `dist/` or `build/`). Use the folder that contains the real `index.html`.

### Tip

Open that `index.html` in a browser by double-clicking it. If the training loads (even with minor path warnings), the export is usable. If nothing loads, the export is incomplete — re-export from Figma Make.

---

## Step 2 — Copy the export into this project

1. In this repo, go to:
  ```
   public/modules/
  ```
2. Create a new folder named exactly your **slug**:
  ```
   public/modules/<slug>/
  ```
   Example:
  ```
   public/modules/forms-and-errors/
  ```
3. Copy **all** files from the Figma Make export into that folder so that this path exists:
  ```
   public/modules/<slug>/index.html
  ```
4. Keep relative asset folders intact (for example `assets/` next to `index.html`).

### Example result

```
public/
  modules/
    intro-to-wcag/
      index.html
      assets/
        ...
    forms-and-errors/          ← new
      index.html
      assets/
        ...
```

### If the training is hosted somewhere else

You can skip copying files into `public/modules/` and instead point `embedUrl` at a full URL (another Netlify site, CDN, etc.). See Step 3.

---

## Step 3 — Register the training in `src/trainings.js`

1. Open:
  ```
   src/trainings.js
  ```
2. Add a new object to the `trainings` array (copy an existing entry and edit it).

```js
{
  slug: 'forms-and-errors',
  title: 'Forms & Error Messages',
  description:
    'Learn how to write accessible form labels, error text, and validation patterns that work with assistive tech.',
  duration: '60 min',
  difficulty: 'Intermediate', // Beginner | Intermediate | Advanced
  embedUrl: '/modules/forms-and-errors/index.html',
},
```

### Field meanings


| Field         | What to put                                     |
| ------------- | ----------------------------------------------- |
| `slug`        | Same as the folder name; used in the URL        |
| `title`       | Shown on the hub card and the training bar      |
| `description` | Short summary on the hub card (1–2 sentences)   |
| `duration`    | Human-readable estimate (`45 min`, `1.5 hours`) |
| `difficulty`  | `Beginner`, `Intermediate`, or `Advanced`       |
| `embedUrl`    | Path or URL loaded in the iframe                |


### Local module (most common)

```js
embedUrl: '/modules/forms-and-errors/index.html',
```

### Externally hosted module

```js
embedUrl: 'https://my-training-module.netlify.app/',
```

3. Save the file.

**Do not** hardcode the training into React layout components. The hub picks up new array entries automatically.

---

## Step 4 — Preview locally

```bash
cd /path/to/trueNorthLearn
npm install          # first time only
npm run dev
```

1. Open the local URL Vite prints (often `http://localhost:5173`).
2. Confirm the new card appears on the hub.
3. Click **Start training**.
4. Confirm:
  - The URL is `/training/<slug>`
  - “Back to Library” works
  - The iframe shows your Figma Make content
  - Keyboard focus and basic navigation feel OK

### If the iframe is blank

- Check that `public/modules/<slug>/index.html` exists
- Check that `embedUrl` matches that path exactly
- Check the browser console for 404s on JS/CSS assets (paths may be wrong inside the export)
- Try opening `http://localhost:5173/modules/<slug>/index.html` directly

### If assets 404 inside the iframe

Some exports assume they are hosted at the **site root** (`/`), not under `/modules/<slug>/`. Fixes:

1. Prefer exports that use **relative** asset paths (`./assets/...`), or
2. Host that module as its **own** Netlify site and set `embedUrl` to that site’s URL, or
3. Adjust the export’s base path if Figma Make / Vite allows setting `base` before export

---

## Step 5 — Commit and push

```bash
git add public/modules/<slug> src/trainings.js
git commit -m "Add <training title> to the learning library."
git push
```

If Netlify is connected to GitHub, it will build and deploy automatically.

---

## Step 6 — Verify production

1. Wait for the Netlify deploy to finish (Netlify dashboard → Deploys).
2. Open:
  `https://learn.truenorth-accessibility.com/`
3. Confirm the new card.
4. Open:
  `https://learn.truenorth-accessibility.com/training/<slug>`
5. Spot-check with keyboard and, if possible, a screen reader.

---

## Updating an existing training

1. Re-export from Figma Make.
2. Replace the contents of `public/modules/<slug>/` (keep the same slug).
3. Update title/description/duration/difficulty in `src/trainings.js` if needed.
4. Commit, push, and verify production.

You usually **do not** change the slug, so existing links keep working.

---

## Removing a training

1. Delete (or comment out) its object in `src/trainings.js`.
2. Optionally delete `public/modules/<slug>/`.
3. Commit and push.

---

## First-time Netlify + subdomain setup (reference)

Only needed once per environment.

### Connect the repo

1. Push this project to GitHub.
2. Netlify → **Add new site** → import the repo.
3. Build settings (also in `netlify.toml`):
  - Build command: `npm run build`
  - Publish directory: `dist`

### Point the subdomain

1. Netlify → **Domain management** → add `learn.truenorth-accessibility.com`
   and make it the primary domain. Add **only** the subdomain here.
2. At whichever provider is authoritative for the zone, create:

  | Type  | Name    | Value                     |
  | ----- | ------- | ------------------------- |
  | CNAME | `learn` | `<your-site>.netlify.app` |

   On Netlify DNS (nameservers `dns1–4.p02.nsone.net`) this record is created
   for you when the subdomain is added to the site.
3. Wait for DNS + HTTPS to become active in Netlify.

The **apex** site (`truenorth-accessibility.com`) stays on GitHub Pages. This learning app is separate.

> **Do not add the apex to this Netlify site.** Attaching
> `truenorth-accessibility.com` here pulls the marketing site away from GitHub
> Pages and takes it offline. If that happens, remove the apex and `www` from
> the Netlify site's domains, then restore the GitHub Pages A/AAAA/CNAME
> records listed in the README.

---

## Quick checklist (copy for each new training)

- Chose a slug
- Exported standalone build from Figma Make
- Copied files to `public/modules/<slug>/` with `index.html` at the top
- Added entry to `src/trainings.js`
- Previewed hub card + iframe locally
- Committed and pushed
- Verified on learn.truenorth-accessibility.com

---

## Troubleshooting


| Problem                         | Likely cause                                | What to do                                                 |
| ------------------------------- | ------------------------------------------- | ---------------------------------------------------------- |
| Card missing on hub             | Entry not in `trainings.js` or syntax error | Check the array; run `npm run dev` and watch the terminal  |
| 404 on `/training/...`          | Wrong slug or deploy not finished           | Match slug; wait for Netlify                               |
| Blank iframe                    | Missing `index.html` or bad `embedUrl`      | Open `/modules/<slug>/index.html` directly                 |
| Broken CSS/JS in module         | Absolute paths assuming site root           | Use relative paths or host module separately               |
| Refresh on `/training/...` 404s | SPA redirect missing                        | Confirm `netlify.toml` has the `/* → /index.html` redirect |


---

## Need help?

Contact: **[truenorth.accessibilityllc@gmail.com](mailto:truenorth.accessibilityllc@gmail.com)**
