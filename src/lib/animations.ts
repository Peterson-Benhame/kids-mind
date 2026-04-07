import type { Variants } from "framer-motion";

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function buildFadeInUp(reducedMotion: boolean, delay = 0): Variants {
  if (reducedMotion) {
    return {
      hidden: { opacity: 1, y: 0 },
      visible: { opacity: 1, y: 0 },
    };
  }

  return {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: easing },
    },
  };
}

export function buildStagger(reducedMotion: boolean, stagger = 0.12): Variants {
  if (reducedMotion) {
    return {
      hidden: {},
      visible: { transition: { duration: 0 } },
    };
  }

  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: 0.08,
      },
    },
  };
}
