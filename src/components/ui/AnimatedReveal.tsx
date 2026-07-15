"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedRevealProps {
  children: ReactNode;
  /** Stagger delay in seconds (e.g. index * 0.1 for a list) */
  delay?: number;
  /** Direction the element travels from */
  from?: "up" | "down" | "right" | "left";
  className?: string;
  as?: "div" | "li" | "section";
}

const offset = 24;

const directions = {
  up: { y: offset, x: 0 },
  down: { y: -offset, x: 0 },
  right: { x: offset, y: 0 },
  left: { x: -offset, y: 0 },
};

/**
 * Reusable scroll-triggered wrapper. Fades + slides its children into view the
 * first time they enter the viewport. Respects reduced-motion automatically via
 * Framer Motion's `useReducedMotion` fallbacks in the variants.
 */
export function AnimatedReveal({
  children,
  delay = 0,
  from = "up",
  className,
  as = "div",
}: AnimatedRevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, ...directions[from] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </MotionTag>
  );
}
