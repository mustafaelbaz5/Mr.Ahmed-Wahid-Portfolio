import { Clock, MapPin } from "lucide-react";
import type { Schedule } from "@/data/types";

export function ScheduleItem({ schedule }: { schedule: Schedule }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-start gap-2">
        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
        <div className="min-w-0">
          <p className="break-words font-bold text-white">{schedule.locationName}</p>
          <p className="break-words text-sm text-slate-400">{schedule.address}</p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {schedule.days.map((day) => (
          <span
            key={day}
            className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200"
          >
            {day}
          </span>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-blue-400">
        <Clock className="h-4 w-4" aria-hidden="true" />
        <span className="font-latin" dir="ltr">
          {schedule.timeSlot}
        </span>
      </div>
    </div>
  );
}
