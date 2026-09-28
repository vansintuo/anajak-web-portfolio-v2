# Terravia — Rubber Road Engineering (Next.js)

A Next.js (App Router) rebuild of the Terravia marketing site: fixed left sidebar,
monochrome design system, and real client-side routing between pages.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

```
app/
  layout.jsx           Root layout — fonts, global CSS, sidebar + mobile nav shell
  globals.css           All site styles (design tokens, layout, components)
  page.jsx               Home ("/")
  products/
    page.jsx              Products listing ("/products")
    [slug]/page.jsx        Dynamic product detail page ("/products/asphalt-paver", etc.)
  solutions/page.jsx      Solutions ("/solutions")
  contact/page.jsx        Contact form ("/contact")

components/
  Sidebar.jsx           Desktop sidebar nav — highlights the active route automatically
  MobileNav.jsx         Mobile top bar + slide-down nav (React state, no manual DOM classList)
  Footer.jsx            Shared site footer
  RoadGraphics.jsx      Reusable inline-SVG road illustrations (hero, project cards, page heroes, map)

lib/
  products.js           Single source of truth for all 8 products — used by both the
                          listing page and the dynamic detail route
```

## Notes / next steps

- The contact form's `handleSubmit` just shows a confirmation message — wire it up to a real
  API route (e.g. `app/api/contact/route.js`) or a third-party form service to actually send
  submissions.
- All 8 products now have real detail pages via the `[slug]` dynamic route (previously only
  the Asphalt Paver had one in the static HTML version).
- Colors, spacing and type live in CSS custom properties at the top of `globals.css`
  (`--white`, `--off-white`, `--light-gray`, `--medium-gray`, `--charcoal`, `--sidebar-gray`) —
  adjust the palette from one place.
- Fonts (Space Grotesk, Inter) are loaded via a Google Fonts `<link>` in `app/layout.jsx`.
  Swap to `next/font/google` if you want them self-hosted and zero-layout-shift.
