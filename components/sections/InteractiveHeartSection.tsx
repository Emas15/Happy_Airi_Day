"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Heart } from "lucide-react";
import { useState } from "react";
import { fadeUp } from "@/utils/motion";
import { SectionShell } from "./SectionShell";

export function InteractiveHeartSection() {
  const [taps, setTaps] = useState(0);
  const reduceMotion = useReducedMotion();
  const intensity = Math.min(taps, 8);

  const tapHeart = () => {
    setTaps((current) => current + 1);
    if ("vibrate" in navigator) {
      navigator.vibrate(8 + Math.min(taps, 6) * 2);
    }
  };

  return (
    <SectionShell
      id="heartbeat"
      eyebrow="click koekbarr"
      title="Sheam er heart(belongs to youu)"
      description="it shows j tumi amake touch korle amar heart er obostha ki hoy"
    >
      <motion.div className="heart-playground" variants={fadeUp}>
        <motion.button
          type="button"
          className="interactive-heart"
          onClick={tapHeart}
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1, 1 + intensity * 0.025, 1],
                  filter: `drop-shadow(0 0 ${18 + intensity * 8}px rgba(255, 81, 135, ${0.35 + intensity * 0.05}))`,
                }
          }
          transition={{
            duration: Math.max(0.36, 0.9 - intensity * 0.06),
            repeat: Infinity,
            ease: "easeInOut",
          }}
          aria-label="Tap the heart"
        >
          <Heart
            className="h-28 w-28 fill-rose-400 text-rose-500 sm:h-36 sm:w-36"
            aria-hidden="true"
          />
        </motion.button>
        <AnimatePresence>
          {taps >= 7 && (
            <motion.div
              className="heart-burst"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-hidden="true"
            >
              {Array.from({ length: 16 }, (_, index) => (
                <span
                  key={`${taps}-${index}`}
                  style={{ "--i": index } as React.CSSProperties}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </SectionShell>
  );
}
