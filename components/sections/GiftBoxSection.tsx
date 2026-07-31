"use client";

import confetti from "canvas-confetti";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Gift } from "lucide-react";
import { useState } from "react";
import { giftBox } from "@/constants/love-story";
import { fadeUp } from "@/utils/motion";
import { SectionShell } from "./SectionShell";

export function GiftBoxSection() {
  const [opened, setOpened] = useState(false);
  const reduceMotion = useReducedMotion();

  const openGift = () => {
    setOpened(true);

    if (!reduceMotion) {
      confetti({
        particleCount: 160,
        spread: 100,
        origin: { y: 0.66 },
        colors: ["#ff7aa8", "#ffd166", "#cdb4ff", "#ffffff"],
      });
    }
  };

  return (
    <SectionShell
      id="gift"
      eyebrow="Ribbon, hush, surprise"
      title={giftBox.title}
      description="A small reveal with room for something tender and unexpected."
    >
      <motion.div className="gift-stage" variants={fadeUp}>
        <button type="button" className={`gift-box ${opened ? "gift-box-open" : ""}`} onClick={openGift} aria-expanded={opened}>
          <span className="gift-lid" />
          <span className="gift-ribbon-vertical" />
          <span className="gift-ribbon-horizontal" />
          <Gift className="relative z-10 h-12 w-12 text-white" aria-hidden="true" />
        </button>
        <AnimatePresence>
          {opened && (
            <motion.p
              className="gift-message"
              initial={{ opacity: 0, y: 24, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              {giftBox.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </SectionShell>
  );
}
