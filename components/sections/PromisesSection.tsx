"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { promises } from "@/constants/love-story";
import { fadeUp, staggerContainer } from "@/utils/motion";
import { SectionShell } from "./SectionShell";

export function PromisesSection() {
  return (
    <SectionShell
      id="promises"
      eyebrow="The gentle vows"
      title="Promises"
      description="Small promises with room to become lifelong habits."
    >
      <motion.div className="promise-list" variants={staggerContainer}>
        {promises.map((promise) => (
          <motion.article key={promise.title} className="promise-card" variants={fadeUp}>
            <span className="promise-check">
              <Check className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3>{promise.title}</h3>
              <p>{promise.body}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </SectionShell>
  );
}
