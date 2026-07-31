"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useState } from "react";
import { reasons } from "@/constants/love-story";
import { fadeUp, staggerContainer } from "@/utils/motion";
import { SectionShell } from "./SectionShell";

export function ReasonsSection() {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenIndexes((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <SectionShell
      id="reasons"
      eyebrow="Twenty small truths"
      title="Reasons I love you"
      description="Each card has a little turn, like a secret being handed over."
    >
      <motion.div className="reasons-grid" variants={staggerContainer}>
        {reasons.map((item, index) => {
          const flipped = openIndexes.has(index);

          return (
            <motion.button
              key={item.title}
              type="button"
              className={`reason-card ${flipped ? "reason-card-flipped" : ""}`}
              variants={fadeUp}
              onClick={() => toggle(index)}
              aria-pressed={flipped}
            >
              <span className="reason-face reason-front">
                <Heart className="h-6 w-6 fill-rose-400 text-rose-400" aria-hidden="true" />
                <strong>{item.title}</strong>
              </span>
              <span className="reason-face reason-back">
                <span>{item.reason}</span>
              </span>
            </motion.button>
          );
        })}
      </motion.div>
    </SectionShell>
  );
}
