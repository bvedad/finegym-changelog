# Finegym Changelog (changelog.finegym.io)

## Quick Reference

- **Dev server**: `npm run dev`
- **Build**: `npm run build` (runs prebuild + next build + postbuild sitemap)
- **Lint**: `npm run lint`

## Tech Stack

- Next.js 15 with App Router (static export: `output: 'export'`)
- React 19 + TypeScript
- Tailwind CSS 4
- gray-matter + remark for Markdown processing
- next-sitemap for SEO
- Google Analytics via @next/third-parties

## Project Structure

```
content/
  changelog/          # Markdown changelog entries (YYYY-MM-DD-slug.md)
src/
  app/                # Next.js App Router
    posts/[slug]/     # Individual changelog post pages
  components/         # ChangelogEntry, ChangelogList, CategoryFilter, Header
  lib/changelog.ts    # Markdown processing logic
scripts/
  generate-latest-json.mjs  # Pre-build: generates public/latest.json
```

## Content Conventions

- File naming: `YYYY-MM-DD-slug-name.md`
- Frontmatter:
  ```yaml
  title: "Feature Title"
  date: "YYYY-MM-DD"
  categories: ["Admin", "Mobile", "Payments", "Scheduling", "Members", "Integrations", "Improvements", "i18n"]
  ```
- Body: Markdown with bold for emphasis, links to docs.finegym.io for details
- Site URL: https://changelog.finegym.io

## Build Pipeline

1. `prebuild`: Generates `public/latest.json` with most recent changelog date
2. `build`: Next.js static export to `/out`
3. `postbuild`: Generates sitemap.xml and robots.txt
