import { Atom, MapPin, Phone } from "lucide-react";
import { teacher } from "@/data/teacher";

// Lucide dropped brand glyphs, so social marks are small inline SVGs to keep
// the icon set visually consistent.
type IconProps = { className?: string };

function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.6V3.6C16.9 3.6 16 3.5 15 3.5c-2.3 0-3.9 1.4-3.9 4v2.3H8.4V13h2.7v8h2.4z" />
    </svg>
  );
}

function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12s0-3.3-.4-4.8a2.5 2.5 0 0 0-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8C2 8.7 2 12 2 12s0 3.3.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.7 19 12 19 12 19s6.3 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8C22 15.3 22 12 22 12zM10 15V9l5.2 3-5.2 3z" />
    </svg>
  );
}

function TikTokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.5 3c.3 2 1.6 3.6 3.5 3.9v2.6c-1.3.1-2.5-.3-3.6-1v6.1a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v2.7a2.9 2.9 0 1 0 2 2.8V3h2.8z" />
    </svg>
  );
}

const socialIcons = [
  { key: "facebook", Icon: FacebookIcon, label: "فيسبوك" },
  { key: "youtube", Icon: YoutubeIcon, label: "يوتيوب" },
  { key: "tiktok", Icon: TikTokIcon, label: "تيك توك" },
] as const;

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
            {teacher.title} — منصة تجمع كل مواعيد وأماكن الحصص ومجموعات واتساب في
            مكان واحد.
          </p>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-white">تواصل معنا</h3>
          <a
            href={`tel:${teacher.phone}`}
            className="flex items-center gap-2 text-sm hover:text-blue-400"
          >
            <Phone className="h-4 w-4 text-blue-400" aria-hidden="true" />
            <span className="font-latin" dir="ltr">
              {teacher.phone}
            </span>
          </a>
          <p className="flex items-start gap-2 text-sm text-slate-400">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
            <span>سنتر المهندس — ميت العامل، وسنتر النخبة — وسط البلد، المحلة الكبرى</span>
          </p>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-white">تابعنا</h3>
          <div className="flex gap-3">
            {socialIcons.map(({ key, Icon, label }) => {
              const href = teacher.socialLinks[key];
              if (!href) return null;
              return (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-white transition-colors hover:bg-blue"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
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
