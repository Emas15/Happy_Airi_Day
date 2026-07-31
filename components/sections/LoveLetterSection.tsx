"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { loveLetter } from "@/constants/love-story";
import { softEase } from "@/utils/motion";
import { SectionShell } from "./SectionShell";

export function LoveLetterSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [typedCount, setTypedCount] = useState(0);
  const reduceMotion = useReducedMotion();
  const letters = useMemo(() => loveLetter.body.split(""), []);
  const visibleLetterCount = reduceMotion && isOpen ? letters.length : typedCount;

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    if (reduceMotion) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setTypedCount((count) => {
        if (count >= letters.length) {
          window.clearInterval(interval);
          return count;
        }

        return count + 1;
      });
    }, 24);

    return () => window.clearInterval(interval);
  }, [isOpen, letters.length, reduceMotion]);

  return (
    <SectionShell
      id="letter"
      eyebrow="A letter, sealed softly"
      title="Open the envelope"
      description="A paper moment for the words you want her to keep."
    >
      <div className="letter-stage">
        <button
          type="button"
          className={`envelope ${isOpen ? "envelope-open" : ""}`}
          onClick={() => setIsOpen(true)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Love letter opened" : loveLetter.sealedTitle}
        >
          <span className="envelope-back" />
          <span className="envelope-letter-preview">
            <Mail className="h-7 w-7" aria-hidden="true" />
            {loveLetter.sealedTitle}
          </span>
          <span className="envelope-flap" />
          <span className="envelope-front" />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.article
              className="letter-paper"
              initial={{ opacity: 0, y: 80, rotate: -2, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: reduceMotion ? 0.2 : 0.8, ease: softEase }}
            >
              <Sparkles className="absolute right-5 top-5 h-5 w-5 text-amber-400" aria-hidden="true" />
              <h3>{loveLetter.title}</h3>
              <p>{letters.slice(0, visibleLetterCount).join("")}</p>
              <span>{loveLetter.signature}</span>
            </motion.article>
          )}
        </AnimatePresence>
      </div>
    </SectionShell>
  );
}
