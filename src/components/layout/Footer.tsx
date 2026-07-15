import { Atom, MapPin, Phone } from "lucide-react";
import { teacher } from "@/data/teacher";

// Lucide dropped brand glyphs, so the Facebook mark is a small inline SVG to
// keep the icon set visually consistent.
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.6V3.6C16.9 3.6 16 3.5 15 3.5c-2.3 0-3.9 1.4-3.9 4v2.3H8.4V13h2.7v8h2.4z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-navy text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-white">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-blue">
              <Atom className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-lg font-extrabold">{teacher.name}</span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-slate-400">
            {teacher.title}
          </p>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-white">تواصل معنا</h3>
          <a
            href={`tel:${teacher.phones.primary}`}
            className="flex items-center gap-2 text-sm hover:text-blue-400"
          >
            <Phone className="h-4 w-4 text-blue-400" aria-hidden="true" />
            <span className="font-latin" dir="ltr">
              {teacher.phones.primary}
            </span>
          </a>
          <a
            href={`tel:${teacher.phones.secondary}`}
            className="flex items-center gap-2 text-sm hover:text-blue-400"
          >
            <Phone className="h-4 w-4 text-blue-400" aria-hidden="true" />
            <span className="font-latin" dir="ltr">
              {teacher.phones.secondary}
            </span>
          </a>
          <p className="flex items-start gap-2 text-sm text-slate-400">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
            <span>منشأة الأخوة، برج النور، وميت العامل — المحلة الكبرى</span>
          </p>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-white">تابعنا</h3>
          {teacher.facebookPage && (
            <a
              href={teacher.facebookPage}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="صفحة فيسبوك"
              className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-white transition-colors hover:bg-blue"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-slate-500 sm:px-6">
          © {year} {teacher.name}. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
