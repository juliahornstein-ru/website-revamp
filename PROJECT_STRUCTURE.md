# RecruitU Student Landing — Project Structure

This document explains **where everything lives** and **how the pieces fit together** so you can navigate the codebase and integrate with your existing site.

---

## High-level architecture

- **Next.js** handles routing and server/client rendering.
- **React** components live under `src/components/` and `src/app/`.
- **Tailwind CSS** is used for all styling (no separate CSS files except `globals.css`).
- The **single page** we built is the “For Students” landing. The “For Employers” tab from the HTML mockup is not included yet.

---

## Folder structure

```
Website Revamp/
├── src/
│   ├── app/                    # Next.js App Router (routes + layout)
│   │   ├── layout.tsx           # Root layout: fonts, <html>, <body>
│   │   ├── page.tsx             # Home page = Student landing (this is the only page)
│   │   └── globals.css          # Tailwind imports + a few CSS variables
│   │
│   ├── components/             # Reusable UI building blocks
│   │   ├── Nav.tsx
│   │   ├── Hero.tsx
│   │   ├── HeroOrb.tsx
│   │   ├── HeroStats.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── ScrollSection.tsx
│   │   ├── PeopleCard.tsx
│   │   ├── JobCard.tsx
│   │   ├── ClubCard.tsx
│   │   ├── SankeyCareerPaths.tsx
│   │   ├── StudentCTA.tsx
│   │   └── Footer.tsx
│   │
│   └── data/                   # Static data for cards (easy to replace with API later)
│       ├── peopleCards.ts
│       ├── jobCards.ts
│       └── clubCards.ts
│
├── tailwind.config.ts          # Tailwind theme (colors, fonts)
├── next.config.ts
├── tsconfig.json
├── package.json
└── PROJECT_STRUCTURE.md        # This file
```

---

## What each file does

### `src/app/layout.tsx`
- Wraps the whole app.
- Loads **Instrument Serif**, **Instrument Sans**, and **DM Mono** from Google Fonts and exposes them as CSS variables (`--font-instrument-serif`, etc.).
- Sets default metadata (title “RecruitU”).

### `src/app/page.tsx`
- The **only page** right now: the Student landing.
- Imports Nav, Hero, all sections (people, career paths, jobs, clubs), CTA, and Footer.
- Imports data from `src/data/*` and passes it into the card components.
- This is the single place that composes the full “For Students” experience.

### `src/app/globals.css`
- Imports Tailwind’s base, components, and utilities.
- Defines a few CSS variables (e.g. `--gray-900`, `--blue`) used in the design.
- Sets `scroll-behavior: smooth` and base body styles.

---

## Components (and where they’re used)

| Component | Purpose | Used in |
|-----------|--------|---------|
| **Nav** | Sticky header: logo, “For Students” tab, Log in, Join Free. Scroll state adds background/blur. | `page.tsx` |
| **Hero** | Top block: label, headline “Build your career through people”, subtext, Join Free / See how it works, and stats. | `page.tsx` |
| **HeroOrb** | Canvas background with animated gradient orbs (client-only). | `Hero.tsx` |
| **HeroStats** | Animated counters: 75K+ Students, 10M+ Professionals, 500+ Clubs. | `Hero.tsx` |
| **SectionHeading** | Reusable section header: kicker, title, optional subtitle, optional “actions” (e.g. scroll buttons). | Used inside `ScrollSection` and once for Career paths. |
| **ScrollSection** | Section that has a heading + horizontal scroll row. Manages scroll ref and prev/next buttons. | `page.tsx` for people, jobs, clubs. |
| **PeopleCard** | One card in “Your network”: avatar initials, name, role, company, badge, reason. | Rendered in a loop in `page.tsx` from `peopleCards`. |
| **JobCard** | One card in “Open roles”: title, pills, alumni count, Apply. Client component (onClick). | Rendered in a loop in `page.tsx` from `jobCards`. |
| **ClubCard** | One card in “Your clubs”: initials, name, school, member count, avatar row. | Rendered in a loop in `page.tsx` from `clubCards`. |
| **SankeyCareerPaths** | Canvas diagram: You → industries → firms with hover-to-highlight path. Client-only. | `page.tsx` in “Career paths” section. |
| **StudentCTA** | Dark strip: “Your peers are already on the inside. Join them.” + Create Your Profile. | `page.tsx` |
| **Footer** | Logo + © 2025 RecruitU, Inc. | `page.tsx` |

---

## Client vs server components

- **Server components (default):** `layout.tsx`, `page.tsx`, `Hero.tsx`, `SectionHeading.tsx`, `PeopleCard.tsx`, `ClubCard.tsx`, `StudentCTA.tsx`, `Footer.tsx`. No `"use client"`, no hooks, no browser APIs.
- **Client components (`"use client"`):** `Nav.tsx` (scroll state), `HeroOrb.tsx` (canvas animation), `HeroStats.tsx` (count-up animation), `ScrollSection.tsx` (scroll ref + buttons), `JobCard.tsx` (onClick on link), `SankeyCareerPaths.tsx` (canvas + mouse/reveal). These use `useState`, `useEffect`, `useRef`, or DOM events.

Next.js automatically sends client components to the browser and keeps server components on the server until they need to render client children.

---

## Data (`src/data/`)

- **peopleCards.ts** — Array of `{ initials, name, role, company, badge, badgeVariant?, reason }`.
- **jobCards.ts** — Array of `{ title, pills[], alumniCount }`.
- **clubCards.ts** — Array of `{ initials, name, school, memberCount, avatarSeeds[] }`.

To hook up a real backend later, you can replace these with `fetch()` or a data-fetching library in `page.tsx` (or in a server component that passes props down).

---

## Styling (Tailwind)

- **tailwind.config.ts** extends the theme with:
  - `fontFamily`: `serif`, `sans`, `mono` mapped to the Instrument Serif, Instrument Sans, and DM Mono variables.
  - `colors.recruitu`: gray scale and blue to match the mockup.
- Components use Tailwind utility classes and a few CSS variables from `globals.css` (e.g. `var(--gray-900)`, `var(--blue)`).
- No component-specific CSS files; everything is co-located in the component files.

---

## How to run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). You should see the Student landing only.

---

## How to integrate with your existing codebase

1. **Copy or merge**  
   - Copy `src/app/`, `src/components/`, and `src/data/` into your existing Next.js app, or merge the components into your structure.  
   - Ensure your app has Tailwind and the same (or compatible) font setup.

2. **Routing**  
   - Right now the Student landing is the **home page** (`src/app/page.tsx`).  
   - To make it a different route (e.g. `/students`), add `src/app/students/page.tsx` and move the current `page.tsx` content there (or import a shared `<StudentLanding />` component).

3. **Navigation and links**  
   - Replace `#` in Nav and CTA with your real paths (e.g. `/login`, `/signup`, `/join`).

4. **Data**  
   - Replace the arrays in `src/data/*` with API calls or your existing data layer, and pass the same shape into `PeopleCard`, `JobCard`, and `ClubCard`.

5. **Employer tab**  
   - When you’re ready to add “For Employers,” add a second route (e.g. `src/app/employers/page.tsx`) and in `Nav` add a link (or tab) that routes to `/employers` instead of toggling panels on the same page.

---

## Summary

- **Pages:** `src/app/page.tsx` is the single Student landing page.
- **Components:** `src/components/` holds Nav, Hero (with Orb + Stats), section headings, scroll sections, cards, Sankey, CTA, and Footer.
- **Data:** `src/data/` holds static arrays for people, jobs, and clubs; swap for your API when ready.
- **Styling:** Tailwind + `globals.css` and `tailwind.config.ts`; no separate CSS files per component.

If you want to “perfect” the Student tab, you can iterate on the components and data in this structure without touching the Employer flow until you add it.
