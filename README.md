# Santiago Cuervo — Research Website

This folder is a self-contained Astro repository ready for `tiagoCuervo.github.io`. Start with [EDITING.md](EDITING.md) for the short content-editing guide. The complete setup and publishing guide is in the [project README](../README.md).

Quick start:

```bash
npm ci
npm run dev
```

The three routine content locations are:

- `src/data/site-content.ts` — profile, biography, links, labels, and page copy;
- `src/data/publications.ts` — publication records and homepage selection;
- `src/content/writing/` — one Markdown/MDX file per essay.

Before publishing:

```bash
npm run sync:cv
npm run validate
```
