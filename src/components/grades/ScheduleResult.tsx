import { Clock, ExternalLink, MapPin } from "lucide-react";
import type { LocationInfo, WhatsAppDisplay } from "@/data/types";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import ElectricBorder from "@/components/effects/ElectricBorder";

interface ScheduleResultProps {
  subject: string;
  schedule: string;
  location: LocationInfo;
  whatsapp: WhatsAppDisplay;
}

export function ScheduleResult({
  subject,
  schedule,
  location,
  whatsapp,
}: ScheduleResultProps) {
  const scheduleLines = schedule.split("\n");

  return (
    <ElectricBorder color="#2563eb" speed={1} chaos={0.08} borderRadius={20}>
      <div className="flex flex-col gap-5 rounded-[20px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
        <span className="w-fit rounded-full bg-blue/15 px-3 py-1 text-xs font-bold text-blue-400">
          {subject}
        </span>

        {/* Location */}
        <div className="flex items-start gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue/15 text-blue-400">
            <MapPin className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="break-words font-bold text-white">{location.centerName}</p>
            {location.facebook && (
              <a
                href={location.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:underline"
              >
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                صفحة السنتر على فيسبوك
              </a>
            )}
          </div>
        </div>

        {/* Schedule */}
        <div className="flex items-start gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue/15 text-blue-400">
            <Clock className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="flex flex-col gap-1">
            {scheduleLines.map((line, i) => (
              <p key={i} className="break-words font-semibold text-slate-200">
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* WhatsApp CTAs */}
        <div className="mt-2 flex flex-wrap gap-3 border-t border-white/10 pt-5">
          {whatsapp.mode === "single" ? (
            <WhatsAppButton
              href={whatsapp.link}
              label="انضم لمجموعة واتساب"
              className="flex-1"
              pulse
            />
          ) : (
            <>
              <WhatsAppButton
                href={whatsapp.boys}
                label="مجموعة البنين"
                tone="boys"
                className="flex-1"
              />
              <WhatsAppButton
                href={whatsapp.girls}
                label="مجموعة البنات"
                tone="girls"
                className="flex-1"
              />
            </>
          )}
        </div>
      </div>
    </ElectricBorder>
  );
}
