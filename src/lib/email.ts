import emailjs from "@emailjs/browser";
import type { BookingFormValues } from "./validation";
import { allGrades } from "@/data/grades";

// ----------------------------------------------------------------------------
// Email service abstraction (Dependency Inversion): the form depends on
// `sendBooking`, not on EmailJS directly. Swap the body for an API route later
// without touching any component.
// ----------------------------------------------------------------------------

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export function isEmailConfigured(): boolean {
  return Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);
}

export async function sendBooking(values: BookingFormValues): Promise<void> {
  if (!isEmailConfigured()) {
    throw new Error(
      "خدمة البريد غير مهيّأة. من فضلك أضف مفاتيح EmailJS في ملف .env.local",
    );
  }

  const gradeLabel =
    allGrades.find((g) => g.id === values.grade)?.label ?? values.grade;

  await emailjs.send(
    SERVICE_ID!,
    TEMPLATE_ID!,
    {
      student_name: values.studentName,
      student_phone: values.studentPhone,
      parent_phone: values.parentPhone,
      grade: gradeLabel,
    },
    { publicKey: PUBLIC_KEY! },
  );
}
