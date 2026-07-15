# Mr. Ahmed Wahid — Physics & Integrated Sciences Platform

A single-page, RTL Arabic website for a physics and integrated sciences
teacher (Preparatory, Secondary, and Baccalaureate students in Egypt). It
replaces scattered WhatsApp images with a permanent hub for schedules,
center locations, and one-tap WhatsApp group links, plus a booking form
that logs every submission as a row in a Google Sheet.

The centerpiece is an **interactive Booking & Schedule Portal**: students
pick their grade (and, where relevant, their system and center), and the
site instantly renders the matching schedule, center info, and the correct
WhatsApp group link — including the gender-split boys/girls groups used at
the secondary level.

## Features

- **Schedule Portal** — stage → grade → system → center selector that
  resolves to the exact class schedule, center name/Facebook page, and
  WhatsApp group link(s) for that selection.
- **Booking form** — validated with Zod + React Hook Form, submits straight
  into a Google Sheet via a Google Apps Script Web App — no backend required.
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
- **Submissions** — Google Sheets, via a Google Apps Script Web App
- **Icons** — Lucide React
- **Fonts** — Cairo (Arabic) / Inter (Latin), via `next/font`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Environment variables

```bash
cp .env.local.example .env.local
```

#### Booking submissions → Google Sheet

The form posts each submission to a Google Apps Script Web App bound to a
Google Sheet — no backend of your own required.

1. Create a Google Sheet. Add a header row:
   `Timestamp | اسم الطالب | رقم الطالب | رقم ولي الأمر | الصف الدراسي`
2. In the Sheet, open **Extensions → Apps Script** and replace the default
   code with:

   ```js
   function doPost(e) {
     const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     const data = JSON.parse(e.postData.contents);

     sheet.appendRow([
       new Date(),
       data.student_name || "",
       data.student_phone || "",
       data.parent_phone || "",
       data.grade || "",
     ]);

     return ContentService
       .createTextOutput(JSON.stringify({ result: "success" }))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```

3. Click **Deploy → New deployment → Web app**. Set **Execute as: Me** and
   **Who has access: Anyone**, then deploy and copy the generated URL
   (ends in `/exec`).
4. Paste it into `.env.local`:

   ```env
   NEXT_PUBLIC_GOOGLE_SHEET_URL=https://script.google.com/macros/s/XXXXX/exec
   ```

5. Restart the dev server (env vars are only read on startup).

Every submission appends a new row to the Sheet in real time.

#### Email (optional, currently unused)

`src/lib/email.ts` still has a working [EmailJS](https://www.emailjs.com/)
integration if you ever want email notifications again — `BookingForm`
just isn't calling it right now. Its env vars (`NEXT_PUBLIC_EMAILJS_*`)
are documented in `.env.local.example`.

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
├── lib/                     # sheet.ts (Google Sheet), email.ts (EmailJS, unused), validation.ts
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
`npm run build` to produce a production build; set
`NEXT_PUBLIC_GOOGLE_SHEET_URL` in your hosting provider's environment
variables before deploying.
