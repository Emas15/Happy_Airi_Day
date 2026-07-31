"use client";

import confetti from "canvas-confetti";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, RotateCcw } from "lucide-react";
import { useState } from "react";
import { quiz } from "@/constants/love-story";
import { fadeUp } from "@/utils/motion";
import { SectionShell } from "./SectionShell";

export function LoveQuizSection() {
  const [answer, setAnswer] = useState<string | null>(null);
  const selected = quiz.options.find((option) => option.label === answer);

  const choose = (label: string, isCorrect: boolean) => {
    setAnswer(label);

    if (isCorrect) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.72 },
        colors: ["#ff7aa8", "#f7c948", "#c4a7ff", "#ffffff"],
      });
    }
  };

  return (
    <SectionShell
      id="quiz"
      eyebrow="A tiny test"
      title="Love quiz"
      description="There is only one answer with enough room for both hearts."
    >
      <motion.div className="quiz-card" variants={fadeUp}>
        <h3>{quiz.question}</h3>
        <div className="quiz-options">
          {quiz.options.map((option) => (
            <button
              key={option.label}
              type="button"
              className={`quiz-option ${answer === option.label ? "quiz-option-selected" : ""}`}
              onClick={() => choose(option.label, option.isCorrect)}
            >
              {option.label}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          {selected ? (
            <motion.div
              key={selected.label}
              className="quiz-result"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
            >
              {selected.isCorrect ? (
                <>
                  <Heart className="h-5 w-5 fill-rose-400 text-rose-400" aria-hidden="true" />
                  <span>{quiz.success}</span>
                </>
              ) : (
                <>
                  <RotateCcw className="h-5 w-5 text-rose-500" aria-hidden="true" />
                  <span>Try one more time.</span>
                </>
              )}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </SectionShell>
  );
}
