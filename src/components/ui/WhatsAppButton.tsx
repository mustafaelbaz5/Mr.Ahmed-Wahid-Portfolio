"use client";

import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  href: string;
  label: string; // e.g. "مجموعة الأولاد"
  /** subtle attention pulse */
  pulse?: boolean;
  size?: "sm" | "md";
  className?: string;
}

export function WhatsAppButton({
  href,
  label,
  pulse,
  size = "md",
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
      className={`inline-flex items-center justify-center rounded-xl bg-whatsapp font-bold text-white transition-all duration-200 hover:bg-whatsapp-dark hover:-translate-y-0.5 active:translate-y-0 ${sizeClasses} ${
        pulse ? "motion-safe:animate-[wa-pulse_2.4s_ease-in-out_infinite]" : ""
      } ${className}`}
    >
      <MessageCircle className={iconClasses} aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}
