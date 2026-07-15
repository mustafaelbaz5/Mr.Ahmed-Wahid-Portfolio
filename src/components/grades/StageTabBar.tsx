"use client";

import { motion } from "framer-motion";
import type { Stage } from "@/data/types";

const tabs: { stage: Stage; label: string }[] = [
  { stage: "preparatory", label: "المرحلة الإعدادية" },
  { stage: "secondary", label: "المرحلة الثانوية" },
];

interface StageTabBarProps {
  active: Stage;
  onChange: (stage: Stage) => void;
}

export function StageTabBar({ active, onChange }: StageTabBarProps) {
  return (
    <div
      role="tablist"
      aria-label="المراحل الدراسية"
      className="mx-auto flex w-full max-w-md rounded-2xl bg-card p-1.5 ring-1 ring-card-muted"
    >
      {tabs.map((tab) => {
        const isActive = tab.stage === active;
        return (
          <button
            key={tab.stage}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.stage)}
            className={`relative flex-1 rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${
              isActive ? "text-white" : "text-navy hover:text-blue"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="stage-pill"
                className="absolute inset-0 rounded-xl bg-blue"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
