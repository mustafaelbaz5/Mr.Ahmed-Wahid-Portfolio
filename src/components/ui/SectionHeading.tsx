import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "start";
  invert?: boolean; // for use on dark backgrounds
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  invert = false,
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-start";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="text-blue font-semibold text-sm tracking-wide">
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-extrabold leading-tight ${
          invert ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      <span
        className={`h-1 w-16 rounded-full bg-blue ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p
          className={`max-w-2xl text-base sm:text-lg mt-1 ${
            invert ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
