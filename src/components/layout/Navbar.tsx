"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Atom, Menu, X } from "lucide-react";
import { teacher } from "@/data/teacher";

const navLinks = [
  { href: "#grades", label: "المراحل الدراسية" },
  { href: "#about", label: "من أنا" },
  { href: "#booking", label: "احجز الآن" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-navy/90 backdrop-blur-md shadow-[0_4px_20px_-8px_rgba(10,22,40,0.6)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo / name — on the right in RTL */}
        <a href="#top" className="flex items-center gap-2 text-white">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-blue text-white">
            <Atom className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-extrabold text-lg">{teacher.name}</span>
        </a>

        {/* Desktop links — on the left in RTL */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold text-slate-200 transition-colors hover:text-blue-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-lg text-white md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden bg-navy/95 backdrop-blur-md md:hidden"
          >
            {navLinks.map((link) => (
              <li key={link.href} className="border-t border-white/10">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 text-base font-semibold text-slate-100 hover:bg-white/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
