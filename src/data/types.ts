export type Stage = "preparatory" | "secondary";

export type Subject = "علوم" | "علوم متكاملة" | "فيزياء";

export interface Schedule {
  locationName: string; // e.g. "سنتر المهندس — ميت العامل"
  address: string; // full address text
  days: string[]; // e.g. ["السبت", "الاثنين", "الأربعاء"]
  timeSlot: string; // e.g. "2:00 — 3:00"
}

export interface WhatsAppLinks {
  boys: string; // full https://chat.whatsapp.com/... URL
  girls: string;
}

export interface GradeInfo {
  id: string; // unique key, e.g. "prep-1"
  stage: Stage;
  label: string; // e.g. "الصف الأول الإعدادي"
  subject: Subject;
  schedules: Schedule[]; // one grade can appear at multiple locations
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

export interface ExperienceStat {
  label: string;
  value: string;
}
