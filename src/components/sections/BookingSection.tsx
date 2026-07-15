import { CalendarCheck, MessageSquareText, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { BookingForm } from "@/components/booking/BookingForm";

const perks = [
  {
    Icon: CalendarCheck,
    title: "حجز سريع",
    text: "املأ البيانات في أقل من دقيقة ونؤكد لك مكانك.",
  },
  {
    Icon: MessageSquareText,
    title: "متابعة مستمرة",
    text: "تواصل مباشر عبر مجموعات واتساب لكل صف.",
  },
  {
    Icon: ShieldCheck,
    title: "بياناتك آمنة",
    text: "نستخدم بياناتك للتواصل بخصوص الحجز فقط.",
  },
];

export function BookingSection() {
  return (
    <section id="booking" className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="ابدأ الآن"
          title="احجز مكانك"
          subtitle="سجّل بياناتك وسنتواصل معك لتأكيد الحجز وتحديد أقرب موعد يناسبك."
        />

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-2">
          {/* Perks */}
          <AnimatedReveal from="right" className="flex flex-col gap-6">
            {perks.map(({ Icon, title, text }) => (
              <div key={title} className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue/10 text-blue">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-extrabold text-navy">{title}</h3>
                  <p className="mt-1 text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </AnimatedReveal>

          {/* Form */}
          <AnimatedReveal from="left">
            <BookingForm />
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
