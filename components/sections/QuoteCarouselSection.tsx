"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { quotes } from "@/constants/love-story";
import { fadeUp } from "@/utils/motion";
import { SectionShell } from "./SectionShell";

export function QuoteCarouselSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % quotes.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [paused]);

  return (
    <SectionShell
      id="quotes"
      eyebrow="A sentence to hold"
      title="Quote carousel"
      description="Soft lines that fade in like a thought arriving."
    >
      <motion.div className="quote-carousel" variants={fadeUp} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <Quote className="h-8 w-8 text-rose-400" aria-hidden="true" />
        <AnimatePresence mode="wait">
          <motion.p
            key={quotes[index]}
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
            transition={{ duration: 0.52 }}
          >
            {quotes[index]}
          </motion.p>
        </AnimatePresence>
      </motion.div>
    </SectionShell>
  );
}
