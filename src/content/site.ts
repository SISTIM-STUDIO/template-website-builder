/**
 * Edit this file to change the starter website's brand and contact details.
 * Keep page layout and styling in src/layouts and src/styles.
 */
export const site = {
  name: "SISTIM Website Builder",
  tagline: "A practical starting point for your next website.",
  description:
    "A reusable, responsive Astro website foundation with starter page templates.",
  email: "hello@example.com",
  phone: "",
  navigation: [
    { label: "Home", href: "/" },
    { label: "Templates", href: "/templates/company/" },
    { label: "About", href: "/about/" },
  ],
};

export const templateOptions = [
  {
    slug: "company",
    name: "Company Profile",
    eyebrow: "For businesses and organizations",
    description: "Introduce your organization, services, strengths, and contact details.",
    cta: "Build your company profile",
  },
  {
    slug: "landing",
    name: "Landing Page",
    eyebrow: "For campaigns and launches",
    description: "Focus attention on one offer, one message, and one clear next step.",
    cta: "Launch a focused campaign",
  },
  {
    slug: "trekking",
    name: "Trekking & Adventure",
    eyebrow: "For outdoor experiences",
    description: "Present trips, highlights, preparation notes, and booking enquiries.",
    cta: "Share an adventure",
  },
  {
    slug: "store",
    name: "Small Store",
    eyebrow: "For products and local brands",
    description: "Introduce a product collection and direct customers to enquire or order.",
    cta: "Showcase your products",
  },
  {
    slug: "blog",
    name: "Blog & Journal",
    eyebrow: "For stories and updates",
    description: "Create a home for articles, field notes, announcements, and useful guides.",
    cta: "Start publishing stories",
  },
] as const;
