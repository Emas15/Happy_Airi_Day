"use client";

import confetti from "canvas-confetti";
import { motion, useReducedMotion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { celebration, finalMessage, photos } from "@/constants/love-story";
import { softEase } from "@/utils/motion";
import { PhotoArt } from "./PhotoArt";

type FireParticle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
};

const fireworkColors = ["#ff7aa8", "#ffd166", "#cdb4ff", "#ffffff", "#ffc6d9"];

export function FinaleSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<FireParticle[]>([]);
  const [celebrating, setCelebrating] = useState(false);
  const reduceMotion = useReducedMotion();

  const launch = useCallback(() => {
    if (!reduceMotion) {
      confetti({
        particleCount: 180,
        spread: 120,
        origin: { y: 0.72 },
        colors: fireworkColors,
      });
    }

    setCelebrating(true);
    const width = window.innerWidth;
    const height = window.innerHeight;

    particles.current = Array.from({ length: 120 }, () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1 + Math.random() * 4.2;

      return {
        x: width * (0.18 + Math.random() * 0.64),
        y: height * (0.18 + Math.random() * 0.34),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        color: fireworkColors[Math.floor(Math.random() * fireworkColors.length)],
      };
    });

    window.setTimeout(() => setCelebrating(false), 3400);
  }, [reduceMotion]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context || reduceMotion) {
      return undefined;
    }

    let frame = 0;
    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * ratio);
      canvas.height = Math.floor(window.innerHeight * ratio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      if (celebrating) {
        particles.current = particles.current
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            vy: particle.vy + 0.035,
            alpha: particle.alpha - 0.012,
          }))
          .filter((particle) => particle.alpha > 0);

        for (const particle of particles.current) {
          context.globalAlpha = particle.alpha;
          context.fillStyle = particle.color;
          context.beginPath();
          context.arc(particle.x, particle.y, 2.2, 0, Math.PI * 2);
          context.fill();
        }

        context.globalAlpha = 1;
      }

      frame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [celebrating, reduceMotion]);

  return (
    <section id="finale" className="finale-section">
      <canvas ref={canvasRef} className="finale-fireworks" aria-hidden="true" />
      <div className="finale-stars" aria-hidden="true" />
      <motion.div
        className="finale-content"
        initial={{ opacity: 0, y: 36, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
        transition={{ duration: reduceMotion ? 0.2 : 1.1, ease: softEase }}
      >
        <motion.div
          className="finale-photo"
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.16, duration: reduceMotion ? 0.2 : 0.8 }}
        >
          <PhotoArt photo={{ ...photos[0], alt: finalMessage.imageAlt }} className="aspect-[4/5]" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.8 }}
        >
          {finalMessage.lineOne}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55, duration: 0.8 }}
        >
          {finalMessage.lineTwo}
        </motion.h2>
        <motion.div
          className="finale-heartline"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.72, duration: 0.7 }}
        >
          <Heart className="h-8 w-8 fill-rose-400 text-rose-400" aria-hidden="true" />
          <span>{finalMessage.lineThree}</span>
        </motion.div>
        <button type="button" className="primary-cta" onClick={launch}>
          <Sparkles className="h-5 w-5" aria-hidden="true" />
          <span>{celebration.cta}</span>
        </button>
      </motion.div>
    </section>
  );
}
