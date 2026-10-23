# oussdsgn — portfolio (Next.js)

Built with Next.js 16 (App Router), React 19 and TypeScript. Smooth scrolling uses [Lenis](https://github.com/darkroomengineering/lenis); there are no other runtime dependencies.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Editing content

All text, links, projects, articles, stats and testimonials are in **`src/data/site.ts`**, so you rarely need to touch the components.

- **Images:** replace files in `src/assets/images/` with the originals, keeping the same filenames. Next.js resizes them, converts them to AVIF/WebP and generates the blur-up placeholders automatically.
- **Socials:** the `socials` list in `site.ts`.
- **Contact email:** `site.email` in `site.ts`. The form opens the visitor's mail app with the message already written.
- **Testimonials:** add entries to the `testimonials` array; the slider arrows appear automatically.
- **Projects:** add an entry to `projects`. Its tags feed the filter buttons on /projects.
- **Logo:** `src/components/Logo.tsx` (inline SVG) and `src/app/icon.svg` (favicon).
- **Colors and fonts:** CSS variables at the top of `src/app/globals.css`. The red accent is `--accent`.

## Structure

```
src/app/            routes: / /projects /about /assets-store /contact, plus 404
src/components/     Header, Footer, Hero, WorkGallery (+ Lightbox), Testimonials, ...
src/data/site.ts    all content
src/assets/images/  images
```

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com/new); it needs zero configuration.
