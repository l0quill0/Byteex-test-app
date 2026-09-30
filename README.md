# Byteex — E-Commerce Product Landing Page

A high-fidelity, pixel-perfect e-commerce product landing page built from the official Figma design specifications.

---

## Tech Stack

- **React 19** with strict **TypeScript**
- **TailwindCSS v4** with **Vite 8**
- **TanStack React Query v5** (client-side data fetching, caching, and state management)
- **Sanity v6** (Headless CMS Studio & `@sanity/client`)
- **Oxlint** (high-performance linting)

---

## Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0

---

## Getting Started

### 1. Clone & Install Dependencies

Install root dependencies for the web application:
```bash
npm install
```

Install Sanity Studio dependencies:
```bash
cd sanity-studio && npm install && cd ..
```

### 2. Environment Configuration

The application is pre-configured to connect to the project's Sanity CMS dataset. Ensure a `.env` file exists in the root directory (see `.env.example`):

```env
VITE_SANITY_PROJECT_ID="wfp1afgy"
VITE_SANITY_DATASET="production"
```

### 3. Run the Development Server

Start the Vite development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Run Sanity Studio (CMS)

To explore or modify the content schemas in Sanity Studio:
```bash
npm run studio
```
Open [http://localhost:3333](http://localhost:3333) in your browser.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts Vite local development server on `http://localhost:5173` |
| `npm run build` | Compiles TypeScript and builds production bundles into `dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs Oxlint across all TypeScript and React files |
| `npx tsc --noEmit` | Runs strict TypeScript type-checking |
| `npm run studio` | Starts the Sanity Studio CMS on `http://localhost:3333` |
| `npm run studio:build` | Builds production bundle for Sanity Studio |

---

## Project Architecture & Directory Structure

```text
├── public/                       # Static public assets (favicons, fonts, images)
│   ├── figma-assets/             # Extracted vector badges, partner logos, and photos
│   └── favicon.svg               # Brand letter 'B' favicon
├── sanity-studio/                # Standalone Headless CMS Studio
│   ├── schemaTypes/
│   │   ├── index.ts              # Schema registry
│   │   └── productPage.ts        # Comprehensive Product Page schema
│   ├── sanity.config.ts          # Studio configuration & plugins
│   └── sanity.cli.ts             # Sanity CLI configuration
├── src/
│   ├── components/               # Modular, domain-driven UI components
│   │   ├── base/                 # Reusable UI primitives (Button, Wrapper)
│   │   ├── layout/               # Header, AnnouncementBar, Navbar
│   │   ├── hero/                 # Section 1: Hero, 3-card fan, Amy review card, partner carousel
│   │   ├── loungewear/           # Section 2: Loungewear pillars & product thumbnail showcase
│   │   ├── best-self/            # Section 3: Founder story, 3-card collage, UGC gallery
│   │   ├── comfort/              # Section 4: 3-step comfort grid & mobile step slider
│   │   ├── reviews/              # Section 5: Infinite review carousel with height transitions
│   │   ├── faq/                  # Section 6: Interactive accordion & multi-layer photo frame
│   │   ├── green-impact/         # Section 7: Sustainability metrics banner
│   │   ├── final-cta/            # Section 8: Final CTA, payment badges, and trust indicators
│   │   └── index.ts              # Root barrel export for all UI components
│   ├── hooks/                    # TanStack React Query hooks for Sanity data fetching
│   │   ├── useAnnouncementData.ts
│   │   ├── useHeroData.ts
│   │   ├── useLoungewearData.ts
│   │   ├── useBestSelfData.ts
│   │   ├── useComfortMadeEasyData.ts
│   │   ├── useReviewsData.ts
│   │   ├── useFAQData.ts
│   │   ├── useGreenImpactData.ts
│   │   ├── useFinalCtaData.ts
│   │   └── index.ts
│   ├── lib/
│   │   └── sanity.ts             # Configured Sanity client & image URL builder
│   ├── App.tsx                   # Main layout assembling all page sections
│   ├── main.tsx                  # App entry point with React Query client provider
│   └── index.css                 # Global TailwindCSS styles & font declarations
├── .env                          # Local environment variables
├── .env.example                  # Environment template
└── package.json
```

---

## Data Fetching & Dynamic CMS Integration

1. **React Query & GROQ**: Every section consumes a dedicated React Query hook (`use[Section]Data`) querying the Sanity CMS via GROQ queries.
2. **Defensive Fallback Mechanism**: Every hook provides fallback data matching the exact Figma specifications. This ensures 100% layout and visual fidelity both when connected to the live Sanity dataset and during offline evaluation.
3. **Optimized Image Resolving**: Sanity image assets are resolved using `@sanity/image-url` with hotspot support, gracefully falling back to local SVGs/PNGs when unseeded.

---

## Design Specifications & Responsiveness

- **Source of Truth**: Official Byteex Figma Design Mockups.
- **Breakpoints Tested**:
  - Mobile: `320px`, `360px`, `390px`
  - Tablet: `768px`, `1024px`
  - Desktop: `1200px`, `1440px`, `1920px+`
- **Typography**:
  - `Sofia Pro` (`font-sofia`): Section headings, titles, and body copy.
  - `Fira Mono` (`font-mono`): Large Hero headline and accent numbers.
  - `Suisse Int'l` (`font-suisse`): Micro-copy, captions, ratings, and announcement banner.
- **Color Palette**:
  - Primary Brand Blues: `#01005B`, `#15005B`, `#1C2E58`, `#2A2996`
  - Off-Whites & Beiges: `#FFFFFF`, `#F9F0E5`, `#F9F0E6`, `#F0EEEF`
  - Accent Green: `#1FAD40` ("Ships in 1-2 Days")
  - Neutrals: `#484848`, `#565656`, `#676869`, `#EAEAEA`, `#C4C4C4`
