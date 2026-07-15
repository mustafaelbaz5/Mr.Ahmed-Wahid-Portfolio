"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Stage } from "@/data/types";
import { prepGrades, secondaryGrades } from "@/data/grades";
import { locations, PREP_LOCATION_KEY } from "@/data/locations";
import { StageTabBar } from "./StageTabBar";
import { PillSelector } from "@/components/ui/PillSelector";
import { ScheduleResult } from "./ScheduleResult";

export function SchedulePortal() {
  const [stage, setStage] = useState<Stage>("preparatory");

  const [prepGradeId, setPrepGradeId] = useState(prepGrades[0].id);

  const [secGradeId, setSecGradeId] = useState(secondaryGrades[0].id);
  const [systemOverride, setSystemOverride] = useState<string | null>(null);
  const [locationOverride, setLocationOverride] = useState<string | null>(null);

  const prepGrade = prepGrades.find((g) => g.id === prepGradeId)!;

  const secondaryGrade =
    secondaryGrades.find((g) => g.id === secGradeId) ?? secondaryGrades[0];
  const hasSystems = !!secondaryGrade.systems;
  const activeSystem = hasSystems
    ? (secondaryGrade.systems!.find((s) => s.key === systemOverride) ??
      secondaryGrade.systems![0])
    : null;
  const availableLocations = hasSystems
    ? activeSystem!.locations
    : secondaryGrade.locations!;
  const activeLocation =
    availableLocations.find((l) => l.locationKey === locationOverride) ??
    availableLocations[0];

  const selectSecondaryGrade = (id: string) => {
    setSecGradeId(id);
    setSystemOverride(null);
    setLocationOverride(null);
  };

  const selectSystem = (key: string) => {
    setSystemOverride(key);
    setLocationOverride(null);
  };

  const resultKey = `${secGradeId}-${activeSystem?.key ?? "none"}-${activeLocation.locationKey}`;

  return (
    <div className="flex flex-col items-center gap-8">
      <StageTabBar active={stage} onChange={setStage} />

      <AnimatePresence mode="wait">
        {stage === "preparatory" ? (
          <motion.div
            key="prep"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="flex w-full flex-col items-center gap-8"
          >
            <PillSelector
              ariaLabel="اختر الصف الدراسي"
              layoutId="prep-grade-pill"
              activeKey={prepGradeId}
              onChange={setPrepGradeId}
              options={prepGrades.map((g) => ({ key: g.id, label: g.name }))}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={prepGradeId}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="w-full max-w-xl"
              >
                <ScheduleResult
                  subject={prepGrade.subject}
                  schedule={prepGrade.offering.schedule}
                  location={locations[PREP_LOCATION_KEY]}
                  whatsapp={{ mode: "single", link: prepGrade.offering.whatsappLink }}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            key="secondary"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="flex w-full flex-col items-center gap-6"
          >
            <PillSelector
              ariaLabel="اختر الصف الدراسي"
              layoutId="sec-grade-pill"
              activeKey={secGradeId}
              onChange={selectSecondaryGrade}
              options={secondaryGrades.map((g) => ({ key: g.id, label: g.name }))}
            />

            {hasSystems && (
              <PillSelector
                ariaLabel="اختر النظام الدراسي"
                layoutId="sec-system-pill"
                activeKey={activeSystem!.key}
                onChange={selectSystem}
                options={secondaryGrade.systems!.map((s) => ({
                  key: s.key,
                  label: s.name,
                }))}
              />
            )}

            {availableLocations.length > 1 && (
              <PillSelector
                ariaLabel="اختر المركز"
                layoutId="sec-location-pill"
                activeKey={activeLocation.locationKey}
                onChange={setLocationOverride}
                options={availableLocations.map((l) => ({
                  key: l.locationKey,
                  label: locations[l.locationKey].name,
                }))}
              />
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={resultKey}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="w-full max-w-xl"
              >
                <ScheduleResult
                  subject={secondaryGrade.subject}
                  schedule={activeLocation.schedule}
                  location={locations[activeLocation.locationKey]}
                  whatsapp={{
                    mode: "split",
                    boys: activeLocation.whatsappBoys,
                    girls: activeLocation.whatsappGirls,
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
