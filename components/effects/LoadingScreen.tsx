"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { softEase } from "@/utils/motion";

type LoadingScreenProps = {
  onComplete: () => void;
};

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const duration = reduceMotion ? 500 : 1900;
    const started = performance.now();
    let frame = 0;

    const tick = (time: number) => {
      const percentage = Math.min(100, Math.round(((time - started) / duration) * 100));
      setProgress(percentage);

      if (percentage < 100) {
        frame = window.requestAnimationFrame(tick);
      } else {
        window.setTimeout(() => {
          setVisible(false);
          window.setTimeout(onComplete, reduceMotion ? 60 : 520);
        }, reduceMotion ? 80 : 260);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [onComplete, reduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#fff8f5]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03, filter: "blur(16px)" }}
          transition={{ duration: reduceMotion ? 0.12 : 0.7, ease: softEase }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,176,205,0.34),transparent_38%),linear-gradient(135deg,rgba(250,226,255,0.72),rgba(255,245,226,0.75))]" />
          <motion.div
            className="relative z-10 flex w-[min(20rem,86vw)] flex-col items-center gap-7 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="loading-heart"
              animate={reduceMotion ? undefined : { scale: [1, 1.08, 1], rotate: [0, -3, 3, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="h-14 w-14 fill-rose-400 text-rose-400" aria-hidden="true" />
            </motion.div>
            <div className="w-full">
              <div className="loading-meta">
                <span>Opening</span>
                <span>{progress}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/70 shadow-inner">
                <motion.div className="h-full rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-300 to-amber-200" style={{ width: `${progress}%` }} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
