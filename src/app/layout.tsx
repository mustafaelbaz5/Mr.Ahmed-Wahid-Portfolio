import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";
import { teacher } from "@/data/teacher";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${teacher.name} — ${teacher.title}`,
  description:
    "منصة الأستاذ أحمد وحيد لتدريس الفيزياء والعلوم لطلاب المرحلتين الإعدادية والثانوية — المواعيد، الأماكن، مجموعات واتساب، وحجز مكانك.",
  keywords: [
    "فيزياء",
    "علوم",
    "دروس خصوصية",
    "أحمد وحيد",
    "المرحلة الإعدادية",
    "المرحلة الثانوية",
    "المحلة الكبرى",
  ],
  openGraph: {
    title: `${teacher.name} — ${teacher.title}`,
    description:
      "المواعيد والأماكن ومجموعات واتساب وحجز مكانك في حصص الفيزياء والعلوم.",
    type: "website",
    locale: "ar_EG",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-navy">
        {children}
      </body>
    </html>
  );
}
