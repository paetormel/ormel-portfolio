import { useReducedMotion } from "motion/react";

export const EASE = [0.33, 1, 0.68, 1];

export function useMotionConfig() {
  const reduced = useReducedMotion();

  const fadeUp = (delay = 0) =>
    reduced
      ? {}
      : {
          initial: { y: 40, opacity: 0 },
          whileInView: { y: 0, opacity: 1 },
          viewport: { once: true },
          transition: { duration: 0.8, delay, ease: EASE },
        };

  const fadeIn = (delay = 0) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay, ease: EASE },
        };

  return { reduced, fadeUp, fadeIn };
}
