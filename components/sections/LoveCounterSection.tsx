"use client";

import { motion } from "framer-motion";
import { HeartPulse } from "lucide-react";
import { relationshipStartDate } from "@/constants/love-story";
import { useLoveDuration } from "@/hooks/use-love-duration";
import { fadeUp, staggerContainer } from "@/utils/motion";
import { SectionShell } from "./SectionShell";

const labels = ["years", "months", "days", "hours", "minutes", "seconds"] as const;

export function LoveCounterSection() {
  const duration = useLoveDuration(relationshipStartDate);

  return (
    <SectionShell
      id="counter"
      eyebrow="The timer keeps glowing"
      title="Every second counts"
      description="A live little measure of how long this love has been becoming."
    >
      <motion.div className="counter-grid" variants={staggerContainer}>
        {labels.map((label) => (
          <motion.div key={label} className="counter-card" variants={fadeUp}>
            <HeartPulse className="h-5 w-5 text-rose-500" aria-hidden="true" />
            <span className="counter-number">{duration[label]}</span>
            <span className="counter-label">{label}</span>
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}
