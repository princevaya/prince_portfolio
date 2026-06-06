"use client";

import { motion, type MotionProps } from "framer-motion";
import { fadeUp } from "@/animations/motion";

type RevealProps = MotionProps & {
  children: React.ReactNode;
  className?: string;
};

export function Reveal({ children, className, ...props }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      {...props}
    >
      {children}
    </motion.div>
  );
}
