# Brownstone Dredging & Infrastructure

Marketing website for **Brownstone Dredging & Infrastructure** (formerly known as **Kwan Sing Marine**) — a marine construction, dredging, and civil infrastructure company established in 1981, serving Asia and Micronesia.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Site Structure

| Route       | Description                                                                 |
| ----------- | --------------------------------------------------------------------------- |
| `/`         | Landing page: Hero, About teaser, Stats, Services, Process, Featured Projects, Why Choose Us, Testimonials, FAQ, Contact, CTA |
| `/about`    | About Us — story, vision, mission, services overview, leadership team       |
| `/projects` | Project Portfolio — filterable gallery of all projects                      |

"Our Services" and "Contact Us" live as anchored sections on the landing page (`/#services`, `/#contact`). Only **About** and **Projects** have their own routes.

## Where to Edit Things

All content lives in typed files under [`src/data/`](src/data/) so you can edit copy without touching components:

| File                     | Contents                                             |
| ------------------------ | ---------------------------------------------------- |
| `src/data/site.ts`       | Company name, contact info, vision/mission, nav links |
| `src/data/services.ts`   | The six services (title, description, icon)          |
| `src/data/projects.ts`   | All portfolio projects (title, location, category, image) |
| `src/data/team.ts`       | Leadership team members                              |
| `src/data/stats.ts`      | Animated counter stats                               |
| `src/data/faqs.ts`       | FAQ questions and answers                            |
| `src/data/testimonials.ts` | Client testimonials                               |

### Branding & Colors

The brand palette (drawn from the logo) is defined in [`tailwind.config.ts`](tailwind.config.ts):

- **Maroon** `#6E2932` (primary) / `#4A1B22` (dark)
- **Copper** `#C0895A` (secondary)
- **Sand** `#F5F0EA`, **Charcoal** `#1C1A19`

### Logo

The header/footer currently use a **text-based logo** in [`src/components/layout/Logo.tsx`](src/components/layout/Logo.tsx). To use the real logo image:

1. Save it to `public/logo.png`.
2. Follow the commented instructions in `Logo.tsx` to swap in a `next/image`.

### Images

Project and section images are **Unsplash placeholders** referenced by URL. Replace the `image` fields in `src/data/projects.ts` and `src/data/team.ts` (and hero images in the section components) with real photography. Remote image hosts are allow-listed in [`next.config.mjs`](next.config.mjs).

### Contact Form

The form posts to [`src/app/api/contact/route.ts`](src/app/api/contact/route.ts), which currently validates and logs the submission. **TODO:** wire in an email provider (Resend, SendGrid, Nodemailer) or CRM webhook — see the comment in that file.

## Notes

- Fully responsive and accessible (semantic HTML, keyboard nav, focus states, `prefers-reduced-motion` respected).
- SEO: per-page metadata, Open Graph tags, `sitemap.xml`, `robots.txt`, and JSON-LD `LocalBusiness` schema.
- Update the production domain (currently `brownstonedredging.com`) in `layout.tsx`, `sitemap.ts`, and `robots.ts`.
