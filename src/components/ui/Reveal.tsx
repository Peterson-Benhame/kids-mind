import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { buildFadeInUp } from "../../lib/animations";
import usePrefersReducedMotion from "../../lib/usePrefersReducedMotion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={buildFadeInUp(Boolean(reducedMotion), delay)}
    >
      {children}
    </motion.div>
  );
}
