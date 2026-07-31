import type { Variants } from "framer-motion";

export const softEase = [0.22, 1, 0.36, 1] as const;

export const viewportOnce = {
  once: true,
  margin: "-12% 0px -12% 0px",
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: softEase },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};
