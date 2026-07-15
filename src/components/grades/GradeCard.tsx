"use client";

import { useState } from "react";
import { GraduationCap } from "lucide-react";
import type { GradeInfo } from "@/data/types";
import { ScheduleItem } from "./ScheduleItem";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import ElectricBorder from "@/components/effects/ElectricBorder";

export function GradeCard({ grade }: { grade: GradeInfo }) {
  const [hovered, setHovered] = useState(false);

  const card = (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_20px_45px_-25px_rgba(37,99,235,0.5)] backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 sm:p-5">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue/15 text-blue-400">
          <GraduationCap className="h-6 w-6" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-lg font-extrabold text-white">{grade.label}</h3>
          <span className="mt-1 inline-block rounded-full bg-blue/15 px-3 py-0.5 text-xs font-bold text-blue-400">
            {grade.subject}
          </span>
        </div>
      </div>

      {/* Schedules — title, address and time shown directly, no toggle */}
      <div className="flex flex-col gap-3 px-4 pb-4 sm:px-5 sm:pb-5">
        {grade.schedules.map((schedule, i) => (
          <ScheduleItem key={i} schedule={schedule} />
        ))}
      </div>

      {/* WhatsApp CTAs — compact buttons */}
      <div className="mt-auto flex flex-wrap gap-2 border-t border-white/10 bg-black/10 p-4 sm:p-5">
        {grade.whatsapp.mode === "single" ? (
          <WhatsAppButton
            href={grade.whatsapp.link}
            label="انضم لمجموعة واتساب"
            size="sm"
            className="flex-1"
          />
        ) : (
          <>
            <WhatsAppButton
              href={grade.whatsapp.boys}
              label="مجموعة الأولاد"
              size="sm"
              className="flex-1"
            />
            <WhatsAppButton
              href={grade.whatsapp.girls}
              label="مجموعة البنات"
              size="sm"
              className="flex-1"
            />
          </>
        )}
      </div>
    </article>
  );

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className="h-full"
    >
      {hovered ? (
        <ElectricBorder color="#2563eb" speed={1.2} chaos={0.08} borderRadius={16}>
          {card}
        </ElectricBorder>
      ) : (
        card
      )}
    </div>
  );
}
