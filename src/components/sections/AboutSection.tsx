"use client";

import { motion } from "framer-motion";
import { teacher, experienceStats } from "@/data/teacher";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";

export function AboutSection() {
  return (
    <section id="about" className="bg-navy-700/40 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading eyebrow="تعرّف عليّ" title="من أنا" />

        <AnimatedReveal className="mt-10" delay={0.1}>
          <p className="text-center text-lg leading-loose text-slate-300">
            {teacher.bio}
          </p>
        </AnimatedReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {experienceStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm"
            >
              <p className="font-latin text-4xl font-extrabold text-blue-400" dir="ltr">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
