"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Stage } from "@/data/types";
import { gradesByStage } from "@/data/grades";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StageTabBar } from "@/components/grades/StageTabBar";
import { GradeCard } from "@/components/grades/GradeCard";

export function GradesSection() {
  const [stage, setStage] = useState<Stage>("preparatory");
  const visibleGrades = gradesByStage(stage);

  return (
    <section id="grades" className="bg-navy-800/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="المواعيد والأماكن"
          title="المراحل الدراسية"
          subtitle="اختر مرحلتك لتصفّح مواعيد الحصص وأماكنها والانضمام إلى مجموعة واتساب الخاصة بصفك."
        />

        <div className="mt-10">
          <StageTabBar active={stage} onChange={setStage} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={stage}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visibleGrades.map((grade, i) => (
              <motion.div
                key={grade.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GradeCard grade={grade} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
