"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { CalendarCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { teacher } from "@/data/teacher";

export function HeroSection() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  // subtle parallax on the photo
  const photoY = useTransform(scrollY, [0, 400], [0, reduce ? 0 : 60]);

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy pt-28 pb-20 sm:pt-32 sm:pb-28"
    >
      {/* Decorative gradient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-blue/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-4 sm:px-6 md:flex-row md:justify-between">
        {/* Text */}
        <div className="max-w-xl text-center md:text-start">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-blue-400"
          >
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            الفيزياء ببساطة ومتعة
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            {teacher.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-xl font-semibold text-blue-400 sm:text-2xl"
          >
            أستاذ الفيزياء والعلوم
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            مواعيد الحصص، الأماكن، ومجموعات واتساب لكل صف — كل ما تحتاجه في مكان
            واحد. احجز مكانك اليوم وابدأ رحلتك نحو التفوق.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start"
          >
            <Button href="#booking" size="lg">
              <CalendarCheck className="h-5 w-5" aria-hidden="true" />
              احجز مكانك
            </Button>
            <Button href="#grades" variant="outline" size="lg" className="!border-white/30 !text-white hover:!bg-white hover:!text-navy">
              تصفّح المواعيد
            </Button>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          style={{ y: photoY }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-blue/30 blur-2xl" />
          <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-blue/40 shadow-[var(--shadow-glow)] sm:h-72 sm:w-72 lg:h-80 lg:w-80">
            <Image
              src={teacher.photoUrl}
              alt={`صورة ${teacher.name}`}
              fill
              priority
              sizes="(max-width: 640px) 14rem, 20rem"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
