# Editing the website

Routine content edits are intentionally confined to a few files. You should not need to edit Astro page components.

## Edit profile and page text

Open `src/data/site-content.ts`. It contains:

- name, role, affiliation, email, Scholar, GitHub, website, CV, and portrait;
- browser/search metadata;
- navigation labels;
- homepage biography and research copy;
- Publications, Writing, and 404 page introductions;
- article and footer labels.

Edit only the text between quotes. Keep commas and surrounding property names intact.

The `home` block also contains two visibility switches:

- `showSupportingIntroduction` controls the second introductory paragraph.
- `showResearchSection` controls the standalone Research section.

Both are `false` by default. Change either value to `true` to show that content.

`writingLimit` controls how many of the latest published articles appear on
the homepage. It defaults to `3`; the full Writing page always lists every
article whose `draft` value is `false`.

Replace the portrait image in `public/images/` and update `profile.portrait` only when its filename changes.

## Add or edit publications

Open `src/data/publications.ts`. Every `{ ... }` block is one paper. Copy an existing block, place the newest paper first, and update its fields.

```ts
{
  id: 'short-unique-id',
  title: 'Paper title',
  authors: ['First Author', 'Second Author'],
  venue: 'Full Venue Name (ABBREVIATION)',
  year: 2026,
  url: 'https://paper-link.example',
  summary: 'One short plain-language description.',
  image: '/images/papers/figure.png', // optional
  selected: true,                    // optional: feature on homepage
  note: 'Accepted',                  // optional
},
```

Put paper images in `public/images/papers/`. The homepage, complete publications page, and structured metadata update automatically.

## Add or hide writing

Create a draft from the included template:

```bash
npm run new:post -- descriptive-post-title
```

Then edit `src/content/writing/descriptive-post-title.mdx`. Keep `draft: true` while writing and change it to `draft: false` to publish. Visible posts automatically appear in the homepage panel, Writing index, RSS feed, and sitemap. If no posts are visible, the Writing navigation and homepage section disappear.

Images for essays belong in `public/images/writing/`.

## Change the animation

Open `src/config/site.ts`. This file contains presentation and animation controls only; ordinary biography or publication edits do not belong there.

For the scaling-curves background, `scalingParetoFadeStart` controls where the
curves begin fading as they converge, while `scalingParetoOpacityFactor`
controls their relative opacity at and beyond the Pareto contact point. Smaller
values reduce the dense wedge without fading the separated upper trajectories.

## Check changes

```bash
npm run dev       # live local preview
npm run validate  # type-check, production build, and internal-link check
```
