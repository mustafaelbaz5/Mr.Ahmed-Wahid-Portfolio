import type { BookingFormValues } from "./validation";
import { allGrades } from "@/data/grades";

// ----------------------------------------------------------------------------
// Google Sheets service abstraction (Dependency Inversion): the form depends
// on `sendToSheet`, not on the transport. Backed by a Google Apps Script Web
// App — the standard way to write to a Sheet from a static site with no
// backend of its own. See README for the Apps Script setup + deployment steps.
// ----------------------------------------------------------------------------

const SHEET_WEBHOOK_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;

export function isSheetConfigured(): boolean {
  return Boolean(SHEET_WEBHOOK_URL);
}

export async function sendToSheet(values: BookingFormValues): Promise<void> {
  if (!isSheetConfigured()) {
    throw new Error(
      "خدمة الشيت غير مهيّأة. من فضلك أضف رابط Google Apps Script في ملف .env.local",
    );
  }

  const gradeLabel =
    allGrades.find((g) => g.id === values.grade)?.label ?? values.grade;

  // Apps Script Web Apps don't return CORS headers for cross-origin fetch,
  // so the response is opaque (mode: "no-cors") — we can't read success/error
  // from it, but the row still gets appended. Network-level failures (host
  // unreachable, etc.) still reject this promise as normal.
  await fetch(SHEET_WEBHOOK_URL!, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify({
      student_name: values.studentName,
      student_phone: values.studentPhone,
      parent_phone: values.parentPhone,
      grade: gradeLabel,
    }),
  });
}
