# Mr. Ahmed Waheed — Physics Teacher Platform

## Project Overview

A single-page professional website for a physics & science teacher serving middle school (Preparatory) and high school (Secondary/Baccalaureate) students in Egypt. The site replaces scattered WhatsApp images with a clean, permanent hub for schedules, locations, WhatsApp group links, and student registration.

---

## Site Architecture (Single Page — 4 Sections)

```
┌─────────────────────────────────────────────┐
│  NAVBAR  (sticky, logo + nav links)         │
├─────────────────────────────────────────────┤
│  HERO                                       │
│  Teacher photo + name + tagline             │
│  CTA button → scrolls to booking form       │
├─────────────────────────────────────────────┤
│  GRADES SECTION                             │
│  Tab bar: Preparatory | Secondary           │
│  ┌─────────────────────────────────────┐    │
│  │ Grade Card (e.g. 3rd Secondary)     │    │
│  │  Subject label                      │    │
│  │  Location(s) — each with:           │    │
│  │    • Place name & address            │    │
│  │    • Days                            │    │
│  │    • Time slot                       │    │
│  │  WhatsApp buttons (Boys / Girls)     │    │
│  └─────────────────────────────────────┘    │
│  (repeat per grade)                         │
├─────────────────────────────────────────────┤
│  ABOUT ME                                   │
│  Bio text + experience highlights           │
├─────────────────────────────────────────────┤
│  BOOKING FORM                               │
│  Fields: Student Name, Student Phone,       │
│          Parent Phone, Grade (dropdown)      │
│  Submit → sends email via EmailJS           │
├─────────────────────────────────────────────┤
│  FOOTER                                     │
│  Contact phones, social links, address,     │
│  center name, copyright                     │
└─────────────────────────────────────────────┘
```

---

## Tech Stack

| Layer         | Choice              | Why                                                        |
| ------------- | ------------------- | ---------------------------------------------------------- |
| Framework     | **Next.js 14** (App Router, Static Export) | SEO for discoverability, SSG for speed, file-based routing |
| Language      | **TypeScript**       | Type safety, better DX, self-documenting code              |
| Styling       | **Tailwind CSS 3**   | Utility-first, responsive, fast iteration                  |
| Animation     | **Framer Motion**    | Declarative, performant, scroll-triggered animations       |
| Form          | **React Hook Form + Zod** | Lightweight validation, no re-renders                |
| Email         | **EmailJS**          | Client-side email delivery, no backend needed              |
| Icons         | **Lucide React**     | Clean, consistent icon set                                 |
| Fonts         | **Google Fonts** (Cairo for Arabic, Inter for English) | Native Arabic support  |
| Deployment    | **Vercel** or static export to any host | Zero-config deploys      |

---

## Data Model

All content is driven by a single typed data file (`src/data/grades.ts`) so the teacher can update schedules without touching components.

```ts
// src/data/types.ts

export type Stage = "preparatory" | "secondary";

export type Subject = "علوم" | "علوم متكاملة" | "فيزياء";

export interface Schedule {
  locationName: string;       // e.g. "سنتر المهندس — ميت العامل"
  address: string;            // full address text
  days: string[];             // e.g. ["السبت", "الاثنين", "الأربعاء"]
  timeSlot: string;           // e.g. "2:00 — 3:00"
}

export interface WhatsAppLinks {
  boys: string;               // full https://chat.whatsapp.com/... URL
  girls: string;
}

export interface GradeInfo {
  id: string;                 // unique key, e.g. "prep-1"
  stage: Stage;
  label: string;              // e.g. "الصف الأول الإعدادي"
  subject: Subject;
  schedules: Schedule[];      // one grade can appear at multiple locations
  whatsapp: WhatsAppLinks;
}

export interface TeacherProfile {
  name: string;
  title: string;
  bio: string;
  phone: string;
  photoUrl: string;
  socialLinks: {
    facebook?: string;
    youtube?: string;
    tiktok?: string;
  };
}
```

---

## Folder Structure

```
src/
├── app/
│   ├── layout.tsx            # root layout, fonts, metadata
│   ├── page.tsx              # single-page entry, composes all sections
│   └── globals.css           # Tailwind directives + custom CSS vars
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── GradesSection.tsx
│   │   ├── AboutSection.tsx
│   │   └── BookingSection.tsx
│   ├── grades/
│   │   ├── StageTabBar.tsx    # Preparatory / Secondary toggle
│   │   ├── GradeCard.tsx      # single grade with locations
│   │   └── ScheduleItem.tsx   # single location row inside a card
│   ├── booking/
│   │   └── BookingForm.tsx    # React Hook Form + Zod
│   └── ui/
│       ├── Button.tsx
│       ├── SectionHeading.tsx
│       ├── WhatsAppButton.tsx
│       └── AnimatedReveal.tsx # reusable scroll-triggered wrapper
├── data/
│   ├── types.ts
│   ├── grades.ts             # all grade/schedule data
│   └── teacher.ts            # teacher profile data
├── lib/
│   ├── email.ts              # EmailJS send helper
│   └── validation.ts         # Zod schemas
└── hooks/
    └── useScrollReveal.ts    # intersection observer hook
```

---

## SOLID Principles Applied

| Principle                 | How it's applied                                                                 |
| ------------------------- | -------------------------------------------------------------------------------- |
| **Single Responsibility** | Each component does one thing: `GradeCard` renders a grade, `BookingForm` handles form logic |
| **Open/Closed**           | New grades/locations are added to `grades.ts` data file — zero component changes |
| **Liskov Substitution**   | All UI primitives (`Button`, `WhatsAppButton`) share consistent prop interfaces  |
| **Interface Segregation** | Components receive only the props they need, not the full data object             |
| **Dependency Inversion**  | Email service is abstracted behind `lib/email.ts`; swap EmailJS for an API route without touching forms |

---

## Design Direction

- **Palette**: Dark navy (`#0A1628`) + electric blue (`#2563EB`) accent + white text + soft gray cards (`#F1F5F9`). The blue echoes the blue backgrounds in the existing WhatsApp images.
- **Typography**: Cairo (Arabic display + body) at weights 600/700 for headings, 400 for body. Inter for any English/numeric content.
- **Layout**: RTL throughout. Full-width hero, constrained content (max-w-6xl), generous whitespace.
- **Signature element**: Grade cards that flip/expand on click to reveal location details with a smooth Framer Motion `layoutId` animation.
- **Motion**: Staggered fade-up on scroll for cards (Framer `whileInView`), subtle parallax on hero photo, pulse on WhatsApp buttons.

---

## Implementation Phases

### Phase 1 — Project Setup & Layout Shell

**Goal**: Scaffolded project that builds, runs, and shows a skeleton page.

**Tasks**:
1. `npx create-next-app@latest` with TypeScript, Tailwind, App Router, ESLint
2. Install dependencies: `framer-motion`, `react-hook-form`, `@hookform/resolvers`, `zod`, `lucide-react`, `@emailjs/browser`
3. Configure `globals.css`: Tailwind directives, CSS variables for the palette, Arabic font import
4. Configure `layout.tsx`: RTL `dir="rtl"`, Cairo font, metadata (title, description, OG tags)
5. Build `Navbar.tsx`: sticky, logo/name on right, nav links (المراحل الدراسية, من أنا, احجز الآن) on left, mobile hamburger menu
6. Build `Footer.tsx`: contact info, phone numbers, center address, social icons, copyright
7. Build `page.tsx`: stack all section placeholders with IDs for scroll anchoring

**Test**: `npm run dev` → page loads RTL with navbar, empty sections, footer. Mobile responsive.

---

### Phase 2 — Hero Section

**Goal**: Polished hero with teacher identity and CTA.

**Tasks**:
1. Build `HeroSection.tsx`: full-width section with gradient overlay
2. Teacher photo (circular/rounded with border glow effect)
3. Name heading (large Cairo bold) + subtitle "أستاذ الفيزياء والعلوم"
4. Brief one-liner tagline
5. CTA button "احجز مكانك" → smooth scroll to booking form
6. Add entrance animations: photo scales in, text fades up, button slides up with delay

**Test**: Hero renders responsively. CTA scrolls to booking section. Animations play on load.

---

### Phase 3 — Data Layer & Grade Cards

**Goal**: All grade/schedule data rendered in interactive cards.

**Tasks**:
1. Create `data/types.ts` with all TypeScript interfaces
2. Create `data/grades.ts` with placeholder data for all 6 grades (3 prep + 3 secondary), each with 1-3 locations from the uploaded images
3. Create `data/teacher.ts` with profile data
4. Build `StageTabBar.tsx`: two tabs (إعدادي / ثانوي) with animated underline indicator
5. Build `ScheduleItem.tsx`: location name, days badges, time slot — clean row layout
6. Build `GradeCard.tsx`: grade label, subject tag, list of `ScheduleItem`, WhatsApp buttons (boys/girls) with WhatsApp icon
7. Build `WhatsAppButton.tsx`: green branded button with icon, opens link in new tab
8. Build `GradesSection.tsx`: section heading + `StageTabBar` + filtered grid of `GradeCard`
9. Add `AnimatedReveal.tsx`: reusable Framer wrapper using `whileInView` + stagger

**Test**: Switch tabs → cards filter correctly. Each card shows all locations. WhatsApp buttons link out. Cards animate on scroll. RTL layout correct. Mobile: cards stack single column.

---

### Phase 4 — About Section

**Goal**: Simple, clean bio section.

**Tasks**:
1. Build `AboutSection.tsx`: section heading "من أنا" + bio text from data
2. Optional: experience stats row (years of experience, number of students, etc.)
3. Fade-in animation on scroll

**Test**: Section renders. Text is readable. Animation fires on scroll.

---

### Phase 5 — Booking Form

**Goal**: Working contact form that sends email.

**Tasks**:
1. Create `lib/validation.ts`: Zod schema for booking (studentName: string min 3, studentPhone: string regex for Egyptian numbers, parentPhone: same, grade: enum of all grade IDs)
2. Build `BookingForm.tsx` with React Hook Form:
   - Text input: اسم الطالب
   - Text input: رقم الطالب
   - Text input: رقم ولي الأمر
   - Dropdown: الصف الدراسي (populated from grades data)
   - Submit button with loading state
   - Success/error toast messages
3. Create `lib/email.ts`: EmailJS integration helper (service ID, template ID, public key read from env vars)
4. Wire form submit → EmailJS send → show success message
5. Add `.env.local.example` with required EmailJS env var names

**Test**: Fill form → validation errors show in Arabic on invalid input. Valid submit → email received. Loading state shows during send. Success toast appears.

---

### Phase 6 — Animations & Polish

**Goal**: Professional motion design throughout.

**Tasks**:
1. Hero: parallax on teacher photo (subtle Y translate on scroll)
2. Grade cards: staggered `whileInView` fade-up (0.1s delay between cards)
3. Tab switch: `AnimatePresence` crossfade between prep/secondary card sets
4. Booking form: fields slide in sequentially on scroll
5. Navbar: background blur + shadow appears after scrolling past hero
6. WhatsApp buttons: subtle pulse animation to draw attention
7. Smooth scroll behavior for all anchor links
8. `prefers-reduced-motion` media query respected (disable animations)
9. Page load: orchestrated sequence — navbar slides down, hero content fades up

**Test**: All animations smooth at 60fps. Reduced motion respected. No layout shifts.

---

### Phase 7 — Responsive & Accessibility

**Goal**: Perfect on all devices, accessible.

**Tasks**:
1. Test and fix all breakpoints: mobile (375px), tablet (768px), desktop (1280px)
2. Navbar mobile menu (slide-in drawer or dropdown)
3. Grade cards: 1 column mobile, 2 columns tablet, 3 columns desktop
4. Form fields full-width on mobile
5. All interactive elements: visible focus rings
6. Semantic HTML: proper heading hierarchy, landmark regions, ARIA labels on icon buttons
7. Color contrast: verify WCAG AA on all text/background combos
8. Touch targets: minimum 44px on mobile

**Test**: Chrome DevTools responsive mode. Keyboard-only navigation works. Lighthouse accessibility score > 90.

---

### Phase 8 — SEO & Performance

**Goal**: Fast, discoverable.

**Tasks**:
1. Metadata in `layout.tsx`: title, description in Arabic, OG image
2. Static export (`output: 'export'` in `next.config.js`) if no server features needed
3. Image optimization: `next/image` for teacher photo, WebP format
4. Font loading: `next/font/google` with `display: swap`
5. Lighthouse audit: target 95+ on Performance, SEO, Best Practices

**Test**: `npm run build` succeeds. Lighthouse scores green. OG tags render in social previews.

---

## Environment Variables

```env
# .env.local
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## Commands Reference

```bash
# Install
npx create-next-app@latest mr-ahmed-physics --typescript --tailwind --app --eslint
cd mr-ahmed-physics
npm install framer-motion react-hook-form @hookform/resolvers zod lucide-react @emailjs/browser

# Dev
npm run dev

# Build
npm run build

# Lint
npm run lint
```

---

## Notes for Implementation Agent

- **RTL is critical**: Every layout decision must work right-to-left. Use Tailwind's `rtl:` variant where needed.
- **Arabic content**: All user-facing text is Arabic. Keep component prop names and code in English.
- **Data-driven**: Never hardcode grade/schedule info in components. Always read from `data/grades.ts`.
- **One phase at a time**: Complete each phase, test it, confirm it works, then move to the next.
- **The teacher will provide**: actual WhatsApp group links, EmailJS credentials, final bio text, and teacher photo. Use placeholders for now.
- **Animation library**: External animations the user may request mid-implementation should be added via Framer Motion — avoid mixing animation libraries.
