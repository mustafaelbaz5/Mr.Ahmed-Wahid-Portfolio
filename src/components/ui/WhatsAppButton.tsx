"use client";

import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  href: string;
  label: string; // e.g. "مجموعة الأولاد"
  /** subtle attention pulse */
  pulse?: boolean;
}

export function WhatsAppButton({ href, label, pulse }: WhatsAppButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`فتح ${label} على واتساب`}
      className={`inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:bg-whatsapp-dark hover:-translate-y-0.5 active:translate-y-0 ${
        pulse ? "motion-safe:animate-[wa-pulse_2.4s_ease-in-out_infinite]" : ""
      }`}
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}
