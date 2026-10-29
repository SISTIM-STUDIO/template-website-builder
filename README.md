# Website Builder Foundation

A reusable Astro starter for lightweight, responsive websites. This foundation includes five starter directions: company profile, landing page, trekking/adventure, small store, and blog.

## Current status

This is the development foundation. Review and test changes on the `dev/website-builder-foundation` branch before merging into `main`. Sample brand details and copy are placeholders, not a finished client website.

## Requirements and local development

- Node.js 22 or another supported Node.js release
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

The generated website is in `dist/`. A successful build is required before release.

## Edit the sample content

Start with `src/content/site.ts` to update the website name, tagline, description, contact details, navigation, and starter-template descriptions.

- Shared page structure: `src/layouts/BaseLayout.astro`
- Global design and responsive styles: `src/styles/global.css`
- Homepage: `src/pages/index.astro`
- About page: `src/pages/about.astro`
- Five starter pages: `src/pages/templates/[template].astro`

## Starter templates

- `/templates/company/` — company profile
- `/templates/landing/` — landing page
- `/templates/trekking/` — trekking and adventure
- `/templates/store/` — small store
- `/templates/blog/` — blog and journal

These are working starter page directions, not yet full client-specific websites or a visual no-code editor.

## GitHub Pages

The included workflow builds and deploys changes pushed to `main`. Astro is configured to use the repository subpath `/template-website-builder` in GitHub Actions builds.

Before the first deployment, open **Settings → Pages** and select **GitHub Actions** as the publishing source. Development-branch changes are not deployed automatically; review and merge them into `main` only when ready.

## Release checklist

- [ ] Replace all placeholder brand and contact information
- [ ] Write unique page titles and descriptions
- [ ] Add original optimized images and useful alt text
- [ ] Test mobile and desktop layouts
- [ ] Verify navigation links and calls to action
- [ ] Run `npm run build` successfully
- [ ] Review accessibility and performance
- [ ] Configure GitHub Pages and verify the live URL
- [ ] Add sitemap, canonical URLs, structured data, and Search Console setup in a later iteration

## Next development stages

1. Add a clear client-brief and content workflow.
2. Expand each starter direction into complete section-based templates.
3. Add per-client image, SEO, and navigation configuration.
4. Add automated build checks for pull requests.
5. Document a no-code-friendly workflow for creating client websites.
