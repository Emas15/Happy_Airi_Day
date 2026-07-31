"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { HeartHandshake, Lock, Unlock } from "lucide-react";
import { useState } from "react";
import { secretMessage } from "@/constants/love-story";
import { fadeUp } from "@/utils/motion";
import { SectionShell } from "./SectionShell";

export function SecretMessageSection() {
  const [unlocked, setUnlocked] = useState(false);
  const reduceMotion = useReducedMotion();

  const unlock = () => {
    setUnlocked(true);
    if ("vibrate" in navigator) {
      navigator.vibrate([12, 24, 12]);
    }
  };

  return (
    <SectionShell
      id="secret"
      eyebrow="A hidden room"
      title="Secret message"
      description="One gentle lock, one glowing reveal."
    >
      <motion.div className={`secret-box ${unlocked ? "secret-box-open" : ""}`} variants={fadeUp}>
        <AnimatePresence mode="wait">
          {!unlocked ? (
            <motion.div
              key="locked"
              className="secret-state"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
            >
              <Lock className="h-11 w-11 text-rose-500" aria-hidden="true" />
              <h3>{secretMessage.lockedTitle}</h3>
              <button type="button" className="secondary-cta" onClick={unlock}>
                <Unlock className="h-5 w-5" aria-hidden="true" />
                <span>Unlock</span>
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="unlocked"
              className="secret-state"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <HeartHandshake className="h-11 w-11 text-rose-500" aria-hidden="true" />
              <h3>{secretMessage.unlockedTitle}</h3>
              <p>{secretMessage.body}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </SectionShell>
  );
}
