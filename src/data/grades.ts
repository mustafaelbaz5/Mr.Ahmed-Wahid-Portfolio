import type { PrepGrade, SecondaryGrade } from "./types";

// ----------------------------------------------------------------------------
// جميع بيانات الصفوف والمواعيد والمجموعات. عدّل هنا فقط لتحديث المحتوى.
//
// المرحلة الإعدادية: مجموعة واحدة مشتركة (بدون فصل بنين/بنات) في منشأة الأخوة فقط.
// المرحلة الثانوية: مجموعتان منفصلتان (بنين/بنات) لكل مركز.
//   - الصف الأول: يُدرّس في برج النور فقط.
//   - الصف الثاني: نظامان (عام / بكالوريا)، ولكل نظام مركزان.
//   - الصف الثالث: مركزان (برج النور فيه مجموعتان بمواعيد مختلفة).
// ----------------------------------------------------------------------------

export const prepGrades: PrepGrade[] = [
  {
    id: "prep-1",
    name: "الصف الأول الإعدادي",
    subject: "علوم",
    offering: {
      schedule: "السبت - الاثنين - الأربعاء (الساعة 5:00 مساءً)",
      whatsappLink: "https://chat.whatsapp.com/Kq767AHU6EtE49cAt97Xnq",
    },
  },
  {
    id: "prep-2",
    name: "الصف الثاني الإعدادي",
    subject: "علوم",
    offering: {
      schedule: "السبت - الاثنين - الأربعاء (الساعة 4:00 مساءً)",
      whatsappLink: "https://chat.whatsapp.com/H09Q7NfJ38QGeBwGlku6xQ",
    },
  },
  {
    id: "prep-3",
    name: "الصف الثالث الإعدادي",
    subject: "علوم",
    offering: {
      schedule: "الأحد - الثلاثاء - الخميس (الساعة 1:00 ظهراً)",
      whatsappLink: "https://chat.whatsapp.com/ISl5srIslCfAmxsLuWnOBr",
    },
  },
];

export const secondaryGrades: SecondaryGrade[] = [
  {
    id: "sec-1",
    name: "الصف الأول الثانوي",
    subject: "العلوم المتكاملة",
    locations: [
      {
        locationKey: "borg_el_noor",
        schedule: "الأحد - الثلاثاء - الخميس (الساعة 2:00 ظهراً)",
        whatsappBoys: "https://chat.whatsapp.com/HZzvgH2Cb7rCJtyby3OC3W",
        whatsappGirls: "https://chat.whatsapp.com/Hmnmr8uyksE8qvRBpdKWcm",
      },
    ],
  },
  {
    id: "sec-2",
    name: "الصف الثاني الثانوي",
    subject: "فيزياء",
    systems: [
      {
        key: "general",
        name: "النظام العام",
        locations: [
          {
            locationKey: "borg_el_noor",
            schedule: "الأحد - الثلاثاء - الخميس (الساعة 3:00 عصراً)",
            whatsappBoys: "https://chat.whatsapp.com/ClcY2Lu3uzaGbgH1nKEic4",
            whatsappGirls: "https://chat.whatsapp.com/ClcY2Lu3uzaGbgH1nKEic4",
          },
          {
            locationKey: "mit_el_amel",
            schedule: "سيتم تحديده قريباً (يرجى مراجعة السنتر أو الجروب)",
            whatsappBoys: "https://chat.whatsapp.com/ClcY2Lu3uzaGbgH1nKEic4",
            whatsappGirls: "https://chat.whatsapp.com/ClcY2Lu3uzaGbgH1nKEic4",
          },
        ],
      },
      {
        key: "baccalaureate",
        name: "نظام البكالوريا",
        locations: [
          {
            locationKey: "borg_el_noor",
            schedule: "الأحد - الثلاثاء - الخميس (الساعة 4:00 عصراً)",
            whatsappBoys: "https://chat.whatsapp.com/IOUstsvLqLvKM8DRWSmypT",
            whatsappGirls: "https://chat.whatsapp.com/CCECusBXGBaArKfQaVjIXE",
          },
          {
            locationKey: "mit_el_amel",
            schedule: "السبت - الاثنين - الأربعاء (الساعة 2:00 ظهراً)",
            whatsappBoys: "https://chat.whatsapp.com/HXMVFzOyBXs0baFMzy49j4",
            whatsappGirls: "https://chat.whatsapp.com/I8zkICTIFAXFpCLCGBraCs",
          },
        ],
      },
    ],
  },
  {
    id: "sec-3",
    name: "الصف الثالث الثانوي",
    subject: "فيزياء",
    locations: [
      {
        locationKey: "borg_el_noor",
        schedule:
          "مجموعة (1): السبت - الاثنين - الأربعاء (الساعة 10:00 صباحاً)\nمجموعة (2): الأحد - الثلاثاء - الخميس (الساعة 5:00 مساءً)",
        whatsappBoys: "https://chat.whatsapp.com/K7SePyjjtOY1DiFj8qBK1j",
        whatsappGirls: "https://chat.whatsapp.com/Hgu1A2rcYcGCxrmd8wl1O0",
      },
      {
        locationKey: "mit_el_amel",
        schedule: "السبت - الاثنين - الأربعاء (الساعة 12:00 ظهراً)",
        whatsappBoys: "https://chat.whatsapp.com/CTmV5U5Po0gLGk5Bz6mLP7",
        whatsappGirls: "https://chat.whatsapp.com/E4Og940yppA1WP5shm0Xqv",
      },
    ],
  },
];

// Flat id/label list for simple consumers (booking form dropdown, email
// summary, validation) that don't need the full system/location structure.
export const allGrades: { id: string; label: string }[] = [
  ...prepGrades.map((g) => ({ id: g.id, label: g.name })),
  ...secondaryGrades.map((g) => ({ id: g.id, label: g.name })),
];
