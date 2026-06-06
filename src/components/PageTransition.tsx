"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { Variants } from "framer-motion";

type PageTransitionProps = {
  children: React.ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  const contentVariants: Variants = prefersReducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.2 } },
        exit: { opacity: 0, transition: { duration: 0.2 } },
      }
    : {
        initial: { opacity: 0, y: 16, filter: "blur(6px)" },
        animate: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
        },
        exit: {
          opacity: 0,
          y: -8,
          filter: "blur(4px)",
          transition: { duration: 0.35, ease: "easeIn" },
        },
      };

  const overlayVariants: Variants = {
    initial: { scaleY: 1 },
    animate: {
      scaleY: 0,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
    exit: { scaleY: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="relative"
        variants={contentVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
        {!prefersReducedMotion ? (
          <motion.div
            className="pointer-events-none fixed inset-0 z-[60] origin-top bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),rgba(5,6,10,0.95))]"
            variants={overlayVariants}
          />
        ) : null}
      </motion.div>
    </AnimatePresence>
  );
}
