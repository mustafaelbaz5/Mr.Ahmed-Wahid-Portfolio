import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "start";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-start";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="text-blue-400 font-semibold text-sm tracking-wide">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white">
        {title}
      </h2>
      <span
        className={`h-1 w-16 rounded-full bg-blue shadow-[0_0_12px_rgba(37,99,235,0.8)] ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p className="max-w-2xl text-base sm:text-lg mt-1 text-slate-300">
          {subtitle}
        </p>
      )}
    </div>
  );
}
