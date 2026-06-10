# Gold Bear Blog

Personal blog built with [Astro](https://astro.build) and the [astro-pure](https://github.com/cworld1/astro-theme-pure) theme.

Deployed via GitHub Actions to GitHub Pages at `/gold-bear-blog/`.

## Features

- Documentation-style blog with clean, fast interface
- Full-text search powered by Pagefind
- Dynamic GitHub repository cards via Web Components
- Sitemap & RSS feed
- Responsive design with dark mode

## Development

```bash
bun install
bun run dev
```

## Build

The CI pipeline runs:
```bash
node scripts/fetch-github-projects.mjs && astro check && astro build && node scripts/fix-base-path.mjs
```

Project data is fetched from the GitHub API at build time and stored in `src/data/`.