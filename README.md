# Mr. Ahmed Wahid — Physics & Integrated Sciences Platform

A single-page, RTL Arabic website for a physics and integrated sciences
teacher (Preparatory, Secondary, and Baccalaureate students in Egypt). It
replaces scattered WhatsApp images with a permanent hub for schedules,
center locations, and one-tap WhatsApp group links, plus a booking form
that emails the teacher directly.

The centerpiece is an **interactive Booking & Schedule Portal**: students
pick their grade (and, where relevant, their system and center), and the
site instantly renders the matching schedule, center info, and the correct
WhatsApp group link — including the gender-split boys/girls groups used at
the secondary level.

## Features

- **Schedule Portal** — stage → grade → system → center selector that
  resolves to the exact class schedule, center name/Facebook page, and
  WhatsApp group link(s) for that selection.
- **Booking form** — validated with Zod + React Hook Form, submits via
  EmailJS with no backend required.
- **Dark, animated UI** — an interactive canvas grid background
  (`ShapeGrid`), glowing card borders (`ElectricBorder`), and a tilting
  profile card, built on Framer Motion.
- **Fully responsive & accessible** — RTL throughout, mobile-first layout,
  keyboard-navigable, respects `prefers-reduced-motion`.
- **Data-driven content** — every grade, schedule, center, and link lives
  in `src/data/`, so content updates never require touching a component.

## Tech Stack

- **Framework** — Next.js 16 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS 4
- **Animation** — Framer Motion
- **Forms** — React Hook Form + Zod
- **Email** — EmailJS (client-side, no backend)
- **Icons** — Lucide React
- **Fonts** — Cairo (Arabic) / Inter (Latin), via `next/font`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Environment variables

Booking submissions are sent via [EmailJS](https://www.emailjs.com/). Copy
the example env file and fill in your own credentials:

```bash
cp .env.local.example .env.local
```

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

The EmailJS template should expect these variables: `student_name`,
`student_phone`, `parent_phone`, `grade`.

### Scripts

- `npm run dev` — start the dev server (Turbopack)
- `npm run build` — production build with type checking
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Project Structure

```text
src/
├── app/                    # Root layout, global styles, page entry
├── components/
│   ├── layout/              # Navbar, Footer
│   ├── sections/             # Hero, Grades, About, Booking sections
│   ├── grades/               # SchedulePortal + its selector/result pieces
│   ├── booking/              # BookingForm
│   ├── effects/              # ShapeGrid, ElectricBorder, ProfileCard, SiteBackground
│   └── ui/                   # Button, PillSelector, WhatsAppButton, etc.
├── data/                    # types.ts, teacher.ts, locations.ts, grades.ts
├── lib/                     # email.ts (EmailJS), validation.ts (Zod schemas)
└── hooks/                   # useScrollReveal
```

### Updating content

All teacher, center, and schedule content is data-driven — edit these
files only, no component changes required:

- `src/data/teacher.ts` — name, description, phone numbers, Facebook page.
- `src/data/locations.ts` — teaching centers and their Facebook pages.
- `src/data/grades.ts` — grades, schedules, and WhatsApp group links for
  both the Preparatory and Secondary/Baccalaureate stages.

## Deployment

This is a standard Next.js app and deploys cleanly to
[Vercel](https://vercel.com/new) or any Node-capable host. Run
`npm run build` to produce a production build; set the EmailJS environment
variables in your hosting provider before deploying.
