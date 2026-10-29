# Website Builder Foundation

A reusable Astro starter for lightweight, responsive websites. The development foundation provides five starter directions: company profile, landing page, trekking/adventure, small store, and blog.

## Project status

This is a development starter, not a complete visual no-code editor or a finished client website. Build validation runs through GitHub Actions. Review the development branch and pull request before merging into `main`.

## Requirements and local development

- Node.js 22 or another compatible supported Node.js release
- npm

```sh
npm install
npm run dev
```

Open the local URL printed by Astro.

## Production build

```sh
npm run build
npm run preview
```

The generated website is in `dist/`.

## Edit the content

- `src/content/site.ts`: website name, description, contact details, navigation, and template labels.
- `src/content/template-details.ts`: sample section headings, text, and calls to action for each template.
- `src/layouts/BaseLayout.astro`: shared page structure and metadata.
- `src/styles/global.css`: design tokens, layout, typography, and responsive styles.

Indonesian documentation:
- [Panduan Konten](docs/CONTENT-GUIDE-ID.md)
- [Template Brief Klien](docs/CLIENT-BRIEF-TEMPLATE-ID.md)

## Starter routes

- `/templates/company/` — company profile
- `/templates/landing/` — landing page
- `/templates/trekking/` — trekking and adventure
- `/templates/store/` — small store
- `/templates/blog/` — blog and journal
- `/404.html` — not-found page for static hosting

These routes contain editable example copy and section structures. They still need real client copy, approved images, working contact links, and final visual review.

## GitHub Actions and Pages

- `.github/workflows/ci.yml` runs a production build for pull requests into `main` and pushes to development branches matching `dev/**`.
- `.github/workflows/deploy.yml` builds and deploys from `main`.

Before first deployment, open **Settings → Pages** and select **GitHub Actions** as the publishing source. The site base path is configured for this repository's GitHub Pages URL. If this project is copied to a differently named repository or custom domain, review `astro.config.mjs` and update the site/base configuration.

## Not included yet

- Visual drag-and-drop editor or admin dashboard
- CMS or browser-based content editing
- Booking or contact forms that store and deliver submissions
- E-commerce cart, stock management, or payment processing
- Automatic sitemap, structured data, analytics, and Search Console integration
- Client-specific finished imagery or copy

## Release checklist

- [ ] Replace sample brand, copy, contact details, and calls to action
- [ ] Add optimized images and meaningful alt text
- [ ] Check all navigation and links on mobile and desktop
- [ ] Verify titles and descriptions per page
- [ ] Confirm any claims, prices, itineraries, and policies with the client
- [ ] Run the production build successfully
- [ ] Review accessibility and performance
- [ ] Configure GitHub Pages and verify the live URL
- [ ] Obtain client approval before launch
