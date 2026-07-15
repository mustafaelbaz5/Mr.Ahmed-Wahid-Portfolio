import type { GradeInfo } from "./types";

// ----------------------------------------------------------------------------
// جميع بيانات الصفوف والمواعيد. عدّل هنا فقط لتحديث المحتوى — بدون لمس المكونات.
// روابط واتساب أدناه هي روابط مؤقتة (placeholder) ريثما يوفّر المعلّم الروابط النهائية.
// ----------------------------------------------------------------------------

const PLACEHOLDER_WA = "https://chat.whatsapp.com/PLACEHOLDER";

export const grades: GradeInfo[] = [
  {
    id: "prep-1",
    stage: "preparatory",
    label: "الصف الأول الإعدادي",
    subject: "علوم",
    schedules: [
      {
        locationName: "سنتر المهندس — ميت العامل",
        address: "شارع المحطة، ميت العامل، المحلة الكبرى",
        days: ["السبت", "الثلاثاء"],
        timeSlot: "2:00 — 3:30",
      },
    ],
    whatsapp: { boys: PLACEHOLDER_WA, girls: PLACEHOLDER_WA },
  },
  {
    id: "prep-2",
    stage: "preparatory",
    label: "الصف الثاني الإعدادي",
    subject: "علوم",
    schedules: [
      {
        locationName: "سنتر المهندس — ميت العامل",
        address: "شارع المحطة، ميت العامل، المحلة الكبرى",
        days: ["الأحد", "الأربعاء"],
        timeSlot: "3:30 — 5:00",
      },
    ],
    whatsapp: { boys: PLACEHOLDER_WA, girls: PLACEHOLDER_WA },
  },
  {
    id: "prep-3",
    stage: "preparatory",
    label: "الصف الثالث الإعدادي",
    subject: "علوم متكاملة",
    schedules: [
      {
        locationName: "سنتر المهندس — ميت العامل",
        address: "شارع المحطة، ميت العامل، المحلة الكبرى",
        days: ["الاثنين", "الخميس"],
        timeSlot: "5:00 — 6:30",
      },
      {
        locationName: "سنتر النخبة — وسط البلد",
        address: "شارع البحر، وسط المدينة، المحلة الكبرى",
        days: ["الجمعة"],
        timeSlot: "11:00 — 12:30",
      },
    ],
    whatsapp: { boys: PLACEHOLDER_WA, girls: PLACEHOLDER_WA },
  },
  {
    id: "sec-1",
    stage: "secondary",
    label: "الصف الأول الثانوي",
    subject: "فيزياء",
    schedules: [
      {
        locationName: "سنتر النخبة — وسط البلد",
        address: "شارع البحر، وسط المدينة، المحلة الكبرى",
        days: ["السبت", "الأربعاء"],
        timeSlot: "6:30 — 8:00",
      },
    ],
    whatsapp: { boys: PLACEHOLDER_WA, girls: PLACEHOLDER_WA },
  },
  {
    id: "sec-2",
    stage: "secondary",
    label: "الصف الثاني الثانوي",
    subject: "فيزياء",
    schedules: [
      {
        locationName: "سنتر النخبة — وسط البلد",
        address: "شارع البحر، وسط المدينة، المحلة الكبرى",
        days: ["الأحد", "الخميس"],
        timeSlot: "8:00 — 9:30",
      },
    ],
    whatsapp: { boys: PLACEHOLDER_WA, girls: PLACEHOLDER_WA },
  },
  {
    id: "sec-3",
    stage: "secondary",
    label: "الصف الثالث الثانوي",
    subject: "فيزياء",
    schedules: [
      {
        locationName: "سنتر النخبة — وسط البلد",
        address: "شارع البحر، وسط المدينة، المحلة الكبرى",
        days: ["السبت", "الاثنين", "الأربعاء"],
        timeSlot: "4:00 — 6:00",
      },
      {
        locationName: "سنتر المهندس — ميت العامل",
        address: "شارع المحطة، ميت العامل، المحلة الكبرى",
        days: ["الثلاثاء", "الخميس"],
        timeSlot: "6:00 — 8:00",
      },
    ],
    whatsapp: { boys: PLACEHOLDER_WA, girls: PLACEHOLDER_WA },
  },
];

export const gradesByStage = (stage: GradeInfo["stage"]) =>
  grades.filter((g) => g.stage === stage);
