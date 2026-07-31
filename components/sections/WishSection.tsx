"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";
import { wishMoment } from "@/constants/love-story";
import { fadeUp } from "@/utils/motion";
import { SectionShell } from "./SectionShell";

const stars = Array.from({ length: 13 }, (_, index) => ({
  id: index,
  left: `${8 + ((index * 19) % 78)}%`,
  top: `${12 + ((index * 29) % 64)}%`,
  delay: index * 0.08,
}));

export function WishSection() {
  const [revealed, setRevealed] = useState(false);
  const reduceMotion = useReducedMotion();

  const reveal = () => {
    setRevealed(true);
    if ("vibrate" in navigator) {
      navigator.vibrate(12);
    }
  };

  return (
    <SectionShell id="wish" eyebrow="A small sky for us" title={wishMoment.title} description={wishMoment.body}>
      <motion.div className="wish-sky" variants={fadeUp}>
        {stars.map((star) => (
          <motion.button
            key={star.id}
            type="button"
            className="wish-star"
            style={{ left: star.left, top: star.top }}
            onClick={reveal}
            aria-label="Make a wish"
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: star.delay, duration: reduceMotion ? 0.1 : 0.45 }}
          >
            <Star className="h-5 w-5 fill-amber-200 text-amber-200" aria-hidden="true" />
          </motion.button>
        ))}
        <AnimatePresence>
          {revealed && (
            <motion.p
              className="wish-message"
              initial={{ opacity: 0, y: 18, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              {wishMoment.revealed}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </SectionShell>
  );
}
