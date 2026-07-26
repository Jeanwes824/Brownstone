# Image slots

Every image on the site is a file in this folder. To swap in real photography,
**replace the placeholder file with your own, keeping the exact same file name.**
No code changes are needed.

- **Photos:** JPG or WebP, keep each under ~300–500 KB.
- **Logos:** transparent PNG (or SVG). Off-ratio images get cropped to fit.

## Brand

| File | Size | Used in |
| ---- | ---- | ------- |
| `brand/logo.png` | 400 × 128 (transparent) | Header/footer on light backgrounds |
| `brand/logo-white.png` | 400 × 128 (transparent, white) | Header over hero + footer |

## Home landing page (`/`)

| File | Size | Aspect | Section |
| ---- | ---- | ------ | ------- |
| `hero-home.jpg` | 2400 × 1600 | 3:2 | Hero background |
| `about-main.jpg` | 1200 × 900 | 4:3 | "Who We Are" main photo |
| `about-inset.jpg` | 600 × 450 | 4:3 | "Who We Are" small inset |
| `why-choose-us-bg.jpg` | 1920 × 1080 | 16:9 | Why Choose Us background (shown faint) |
| `testimonials/testimonial-1.jpg` | 400 × 400 | 1:1 | Testimonial avatar |
| `testimonials/testimonial-2.jpg` | 400 × 400 | 1:1 | Testimonial avatar |
| `testimonials/testimonial-3.jpg` | 400 × 400 | 1:1 | Testimonial avatar |

## About page (`/about`)

| File | Size | Aspect | Section |
| ---- | ---- | ------ | ------- |
| `about-hero.jpg` | 2400 × 1200 | 2:1 | Page hero background |
| `about-story.jpg` | 1200 × 900 | 4:3 | "Our Story" photo |
| `team/rommel-zapanta.jpg` | 800 × 1000 | 4:5 | Leadership portrait |
| `team/francis-fok.jpg` | 800 × 1000 | 4:5 | Leadership portrait |
| `team/jean-philippe.jpg` | 800 × 1000 | 4:5 | Leadership portrait |

## Projects page (`/projects`)

| File | Size | Aspect | Section |
| ---- | ---- | ------ | ------- |
| `projects-hero.jpg` | 2400 × 1200 | 2:1 | Page hero background |
| `projects/<project-slug>.jpg` | 1200 × 900 | 4:3 | One photo per project card |

The project photo file names match each project's `slug` in
`src/data/projects.ts` (e.g. `projects/chek-lap-kok-airport.jpg`). The Featured
Projects strip on the home page reuses these same files.
