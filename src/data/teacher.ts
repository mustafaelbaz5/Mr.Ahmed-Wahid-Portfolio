import type { ExperienceStat, TeacherProfile } from "./types";

export const teacher: TeacherProfile = {
  name: "أ. أحمد وحيد",
  title: "مدرس الفيزياء والعلوم",
  bio:
    "مدرس فيزياء وعلوم بخبرة تتجاوز خمسة عشر عامًا في تدريس طلاب المرحلتين الإعدادية والثانوية. " +
    "أؤمن بأن الفيزياء لغة نفهم بها العالم من حولنا، ولذلك أحرص على تبسيط المفاهيم وربطها بالحياة اليومية. " +
    "أسلوبي يعتمد على الشرح المتدرّج، وحل المسائل خطوة بخطوة، والمتابعة المستمرة لكل طالب حتى يتقن المادة ويثق في قدراته.",
  phone: "+201000000000",
  photoUrl: "/teacher.svg",
  socialLinks: {
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
    tiktok: "https://tiktok.com/",
  },
};

export const experienceStats: ExperienceStat[] = [
  { label: "سنوات الخبرة", value: "+15" },
  { label: "طالب وطالبة", value: "+5000" },
  { label: "نسبة التفوق", value: "%95" },
];
