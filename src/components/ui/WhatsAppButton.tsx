"use client";

import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  href: string;
  label: string; // e.g. "مجموعة البنين"
  /** subtle attention pulse */
  pulse?: boolean;
  size?: "sm" | "md";
  /** distinct color per audience, so boys/girls groups are visually distinguishable */
  tone?: "default" | "boys" | "girls";
  className?: string;
}

const toneClasses: Record<NonNullable<WhatsAppButtonProps["tone"]>, string> = {
  default: "bg-whatsapp hover:bg-whatsapp-dark",
  boys: "bg-whatsapp hover:bg-whatsapp-dark",
  girls: "bg-pink-500 hover:bg-pink-600",
};

export function WhatsAppButton({
  href,
  label,
  pulse,
  size = "md",
  tone = "default",
  className = "",
}: WhatsAppButtonProps) {
  const sizeClasses =
    size === "sm" ? "px-3 py-2 text-xs gap-1.5" : "px-4 py-2.5 text-sm gap-2";
  const iconClasses = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`فتح ${label} على واتساب`}
      className={`inline-flex items-center justify-center rounded-xl font-bold text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${toneClasses[tone]} ${sizeClasses} ${
        pulse ? "motion-safe:animate-[wa-pulse_2.4s_ease-in-out_infinite]" : ""
      } ${className}`}
    >
      <MessageCircle className={iconClasses} aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}
