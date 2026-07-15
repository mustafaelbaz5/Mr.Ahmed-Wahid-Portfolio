import { z } from "zod";
import { allGrades } from "@/data/grades";

// Egyptian mobile numbers: 010/011/012/015 + 8 digits (optionally +20 / 0020).
const egyptianPhone = /^(?:\+?20|0)?1[0125]\d{8}$/;

const gradeIds = allGrades.map((g) => g.id) as [string, ...string[]];

export const bookingSchema = z.object({
  studentName: z
    .string()
    .trim()
    .min(3, { message: "الاسم يجب أن يكون 3 أحرف على الأقل" })
    .max(60, { message: "الاسم طويل جدًا" }),
  studentPhone: z
    .string()
    .trim()
    .regex(egyptianPhone, { message: "أدخل رقم موبايل مصري صحيح" }),
  parentPhone: z
    .string()
    .trim()
    .regex(egyptianPhone, { message: "أدخل رقم موبايل مصري صحيح" }),
  grade: z.enum(gradeIds, {
    message: "من فضلك اختر الصف الدراسي",
  }),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;
