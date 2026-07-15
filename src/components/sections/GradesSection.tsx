import { SectionHeading } from "@/components/ui/SectionHeading";
import { SchedulePortal } from "@/components/grades/SchedulePortal";

export function GradesSection() {
  return (
    <section id="grades" className="bg-navy-800/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="المواعيد والأماكن"
          title="المراحل الدراسية"
          subtitle="اختر صفك — وعند الحاجة النظام والمركز — لتظهر لك مواعيد حصتك ومكانها ومجموعة واتساب الخاصة بك فورًا."
        />

        <div className="mt-10">
          <SchedulePortal />
        </div>
      </div>
    </section>
  );
}
