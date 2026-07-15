import { Clock, MapPin } from "lucide-react";
import type { Schedule } from "@/data/types";

export function ScheduleItem({ schedule }: { schedule: Schedule }) {
  return (
    <div className="rounded-xl bg-white p-4 ring-1 ring-card-muted">
      <div className="flex items-start gap-2">
        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue" aria-hidden="true" />
        <div>
          <p className="font-bold text-navy">{schedule.locationName}</p>
          <p className="text-sm text-slate-500">{schedule.address}</p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {schedule.days.map((day) => (
          <span
            key={day}
            className="rounded-full bg-card px-3 py-1 text-xs font-semibold text-navy"
          >
            {day}
          </span>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-blue-600">
        <Clock className="h-4 w-4" aria-hidden="true" />
        <span className="font-latin" dir="ltr">
          {schedule.timeSlot}
        </span>
      </div>
    </div>
  );
}
