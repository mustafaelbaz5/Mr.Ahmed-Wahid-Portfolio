"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, GraduationCap } from "lucide-react";
import type { GradeInfo } from "@/data/types";
import { ScheduleItem } from "./ScheduleItem";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import ElectricBorder from "@/components/effects/ElectricBorder";

export function GradeCard({ grade }: { grade: GradeInfo }) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const panelId = `grade-panel-${grade.id}`;

  const card = (
    <motion.article
      layout
      className="flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-card)] ring-1 ring-card-muted"
    >
      {/* Header — toggles the schedule panel */}
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-controls={panelId}
        className="flex items-center justify-between gap-3 p-5 text-start"
      >
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue/10 text-blue">
            <GraduationCap className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-lg font-extrabold text-navy">{grade.label}</h3>
            <span className="mt-1 inline-block rounded-full bg-blue/10 px-3 py-0.5 text-xs font-bold text-blue">
              {grade.subject}
            </span>
          </div>
        </div>
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-slate-400"
        >
          <ChevronDown className="h-5 w-5" aria-hidden="true" />
        </motion.span>
      </button>

      {/* Expandable schedules */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id={panelId}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-3 px-5 pb-5">
              {grade.schedules.map((schedule, i) => (
                <ScheduleItem key={i} schedule={schedule} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp CTAs pinned to the bottom */}
      <div className="mt-auto flex gap-3 border-t border-card-muted bg-white/60 p-5">
        <WhatsAppButton href={grade.whatsapp.boys} label="مجموعة الأولاد" />
        <WhatsAppButton href={grade.whatsapp.girls} label="مجموعة البنات" />
      </div>
    </motion.article>
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
