"use client";

import { motion } from "framer-motion";

export interface PillOption {
  key: string;
  label: string;
}

interface PillSelectorProps {
  options: PillOption[];
  activeKey: string;
  onChange: (key: string) => void;
  /** unique per instance so simultaneous selectors don't share the animated pill */
  layoutId: string;
  ariaLabel: string;
}

export function PillSelector({
  options,
  activeKey,
  onChange,
  layoutId,
  ariaLabel,
}: PillSelectorProps) {
  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className="flex flex-wrap justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm"
    >
      {options.map((opt) => {
        const isActive = opt.key === activeKey;
        return (
          <button
            key={opt.key}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(opt.key)}
            className={`relative rounded-xl px-4 py-2 text-sm font-bold transition-colors ${
              isActive ? "text-white" : "text-slate-300 hover:text-blue-400"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId={layoutId}
                className="absolute inset-0 rounded-xl bg-blue shadow-[0_0_16px_rgba(37,99,235,0.55)]"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative z-10">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
