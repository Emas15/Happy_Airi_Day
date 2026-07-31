"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { useState } from "react";
import { heroCopy } from "@/constants/love-story";
import { softEase } from "@/utils/motion";

export function HeroSection() {
  const [revealing, setRevealing] = useState(false);
  const reduceMotion = useReducedMotion();

  const openHeart = () => {
    setRevealing(true);

    if ("vibrate" in navigator) {
      navigator.vibrate(18);
    }

    window.setTimeout(
      () => document.getElementById("counter")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" }),
      reduceMotion ? 80 : 760,
    );
    window.setTimeout(() => setRevealing(false), reduceMotion ? 220 : 1500);
  };

  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 py-24 text-center">
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/70 to-transparent" aria-hidden="true" />
      <motion.div
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center"
        initial={{ opacity: 0, y: 22, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: reduceMotion ? 0.2 : 1, ease: softEase }}
      >
        <motion.p
          className="hero-eyebrow"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {heroCopy.eyebrow}
        </motion.p>
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.85, ease: softEase }}
        >
          {heroCopy.title}
          <Heart className="mx-auto mt-3 h-11 w-11 fill-rose-400 text-rose-400 sm:inline sm:ml-4 sm:mt-0 sm:h-14 sm:w-14" aria-hidden="true" />
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-balance text-lg leading-8 text-rose-950/68 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48, duration: 0.72 }}
        >
          {heroCopy.subtitle}
        </motion.p>
        <motion.button
          type="button"
          className="primary-cta mt-10"
          onClick={openHeart}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={reduceMotion ? undefined : { scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Sparkles className="h-5 w-5" aria-hidden="true" />
          <span>{heroCopy.cta}</span>
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {revealing && (
          <motion.div
            className="heart-reveal"
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: [0, 1, 1, 0], scale: [0.3, 1.4, 18, 24] }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.15 : 1.35, ease: softEase }}
          >
            <Heart className="h-full w-full fill-white text-white" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
