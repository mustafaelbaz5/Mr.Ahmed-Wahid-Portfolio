"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { teacher } from "@/data/teacher";
import ElectricBorder from "@/components/effects/ElectricBorder";
import ProfileCard from "@/components/effects/ProfileCard";

export function HeroSection() {
  const scrollToBooking = () => {
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28"
    >
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-4 sm:px-6 md:flex-row md:justify-between">
        {/* Text */}
        <div className="max-w-xl text-center md:text-start">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-blue-400 backdrop-blur-sm"
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
            className="mt-4 text-lg font-semibold text-blue-400 sm:text-xl"
          >
            {teacher.title}
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

        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hero-profile-card"
        >
          <ElectricBorder color="#60A5FA" speed={1} chaos={0.1} borderRadius={30}>
            <ProfileCard
              name={teacher.name}
              title="أستاذ الفيزياء والعلوم"
              handle={teacher.handle}
              status={teacher.status}
              contactText="احجز الآن"
              avatarUrl={teacher.photoUrl}
              showUserInfo
              enableTilt
              behindGlowEnabled
              behindGlowColor="rgba(96, 165, 250, 0.55)"
              innerGradient="linear-gradient(145deg,#16294a8c 0%,#2563EB44 100%)"
              onContactClick={scrollToBooking}
            />
          </ElectricBorder>
        </motion.div>
      </div>
    </section>
  );
}
