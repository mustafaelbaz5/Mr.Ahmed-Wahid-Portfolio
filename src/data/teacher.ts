import type { ExperienceStat, TeacherProfile } from "./types";
import { prepGrades, secondaryGrades } from "./grades";
import { locations } from "./locations";

export const teacher: TeacherProfile = {
  name: "مستر أحمد وحيد",
  title:
    "أستاذ الفيزياء والعلوم المتكاملة للمرحلة الإعدادية والثانوية والبكالوريا",
  bio:
    "أستاذ الفيزياء والعلوم المتكاملة للمرحلة الإعدادية والثانوية والبكالوريا. " +
    "أحرص على تبسيط المفاهيم وحل المسائل خطوة بخطوة، مع متابعة كل طالب عبر مجموعة " +
    "واتساب مخصّصة لصفه ومركزه.",
  handle: "ahmed_wahid",
  status: "متاح لحجز مواعيد جديدة",
  phones: {
    primary: "01515131852",
    secondary: "01127492304",
  },
  photoUrl: "/teacher.svg",
  facebookPage: "https://www.facebook.com/share/1BbL7msVrR/",
};

// Derived from the actual schedule data rather than invented numbers.
export const experienceStats: ExperienceStat[] = [
  { value: String(Object.keys(locations).length), label: "مراكز تدريس" },
  {
    value: String(prepGrades.length + secondaryGrades.length),
    label: "صفوف دراسية",
  },
  { value: "٢", label: "مرحلتين دراسيتين" },
];
