"use client";

import { motion } from "framer-motion";
import { dreams } from "@/constants/love-story";
import { fadeUp, staggerContainer } from "@/utils/motion";
import { SectionShell } from "./SectionShell";

export function FutureDreamsSection() {
  return (
    <SectionShell
      id="dreams"
      eyebrow="Pages we have not lived yet"
      title="Future dreams"
      description="A soft little map of where the story can go next."
    >
      <motion.div className="dream-grid" variants={staggerContainer}>
        {dreams.map((dream) => {
          const Icon = dream.icon;

          return (
            <motion.article key={dream.title} className="dream-card" variants={fadeUp}>
              <Icon className="h-6 w-6 text-rose-500" aria-hidden="true" />
              <h3>{dream.title}</h3>
              <p>{dream.body}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </SectionShell>
  );
}
