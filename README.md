# MIXED3MOTIONZ Artist Website

Production-ready static Astro site for Netlify, with structured content and Netlify Visual Editor configuration.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Netlify

- Connect this folder/repository to Netlify.
- Build command: `npm run build`
- Publish directory: `dist`
- Set the canonical domain in `astro.config.mjs` and `src/data/site.json`.

## Netlify Visual Editor

This project includes:

- `stackbit.config.ts` for Netlify Visual Editor / Git CMS.
- Editable structured content in `src/data/site.json`.
- Inline editing annotations with `data-sb-object-id` and `data-sb-field-path`.

After deployment, open Netlify dashboard -> Project configuration -> Visual Editor and enable the preview environment. Netlify's Visual Editor docs say Git CMS projects need `@stackbit/types`, `@stackbit/cms-git`, and a `stackbit.config.ts` file, all included here.

## Edit content

Most website copy, songs, quote cards, merch, wall examples, FAQs, links, and SEO fields live in `src/data/site.json`.
