"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { compliments } from "@/constants/love-story";
import { fadeUp } from "@/utils/motion";
import { SectionShell } from "./SectionShell";

export function ComplimentGeneratorSection() {
  const [index, setIndex] = useState(0);

  const nextCompliment = () => {
    setIndex(
      (current) =>
        (current + 1 + Math.floor(Math.random() * (compliments.length - 1))) %
        compliments.length,
    );

    if ("vibrate" in navigator) {
      navigator.vibrate(10);
    }
  };

  return (
    <SectionShell
      id="compliments"
      eyebrow="A smile on demand"
      title="Compliment generator"
      description="A pocketful of sweetness for any moment that needs more light."
    >
      <motion.div className="compliment-box" variants={fadeUp}>
        <AnimatePresence mode="wait">
          <motion.p
            key={compliments[index]}
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
            transition={{ duration: 0.38 }}
          >
            {compliments[index]}
          </motion.p>
        </AnimatePresence>
        <button
          type="button"
          className="secondary-cta"
          onClick={nextCompliment}
        >
          <Sparkles className="h-5 w-5" aria-hidden="true" />
          <span>click koekbarr</span>
        </button>
      </motion.div>
    </SectionShell>
  );
}
