"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  spin: number;
  kind: "heart" | "spark" | "star";
  hue: number;
};

function drawHeart(context: CanvasRenderingContext2D, size: number) {
  context.beginPath();
  context.moveTo(0, size * 0.28);
  context.bezierCurveTo(-size * 0.58, -size * 0.28, -size, size * 0.34, 0, size);
  context.bezierCurveTo(size, size * 0.34, size * 0.58, -size * 0.28, 0, size * 0.28);
  context.closePath();
}

export function MagicalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) {
      return undefined;
    }

    let width = 0;
    let height = 0;
    let frame = 0;
    let animationFrame = 0;
    let particles: Particle[] = [];

    const createParticles = () => {
      const isSmall = width < 520;
      const count = reduceMotion ? 24 : isSmall ? 54 : 92;

      particles = Array.from({ length: count }, (_, index) => {
        const kind = index % 9 === 0 ? "heart" : index % 5 === 0 ? "star" : "spark";

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.18,
          vy: -0.12 - Math.random() * 0.28,
          size: kind === "heart" ? 6 + Math.random() * 9 : 1.3 + Math.random() * 3.6,
          alpha: 0.22 + Math.random() * 0.48,
          spin: Math.random() * Math.PI * 2,
          kind,
          hue: 330 + Math.random() * 50,
        };
      });
    };

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      createParticles();
    };

    const drawAurora = () => {
      const time = frame * 0.004;
      const gradient = context.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "rgba(255, 220, 232, 0.18)");
      gradient.addColorStop(0.42, "rgba(205, 188, 255, 0.16)");
      gradient.addColorStop(0.72, "rgba(255, 230, 181, 0.13)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0.04)");
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      context.save();
      context.globalAlpha = 0.26;
      context.translate(Math.sin(time) * 22, Math.cos(time * 0.7) * 12);
      context.rotate(-0.12);
      const ribbon = context.createLinearGradient(0, height * 0.16, width, height * 0.88);
      ribbon.addColorStop(0, "rgba(255, 174, 206, 0)");
      ribbon.addColorStop(0.36, "rgba(255, 174, 206, 0.26)");
      ribbon.addColorStop(0.58, "rgba(199, 184, 255, 0.24)");
      ribbon.addColorStop(1, "rgba(255, 241, 199, 0)");
      context.fillStyle = ribbon;
      context.fillRect(-width * 0.12, height * 0.1, width * 1.25, height * 0.5);
      context.restore();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      drawAurora();

      for (const particle of particles) {
        context.save();
        context.translate(particle.x, particle.y);
        context.rotate(particle.spin + frame * 0.004);
        context.globalAlpha = particle.alpha;

        if (particle.kind === "heart") {
          context.fillStyle = `hsla(${particle.hue}, 80%, 72%, 0.75)`;
          drawHeart(context, particle.size);
          context.fill();
        } else if (particle.kind === "star") {
          context.strokeStyle = "rgba(255, 239, 190, 0.78)";
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(-particle.size * 1.7, 0);
          context.lineTo(particle.size * 1.7, 0);
          context.moveTo(0, -particle.size * 1.7);
          context.lineTo(0, particle.size * 1.7);
          context.stroke();
        } else {
          context.fillStyle = "rgba(255, 255, 255, 0.76)";
          context.beginPath();
          context.arc(0, 0, particle.size, 0, Math.PI * 2);
          context.fill();
        }

        context.restore();

        if (!reduceMotion) {
          particle.x += particle.vx + Math.sin(frame * 0.006 + particle.y) * 0.05;
          particle.y += particle.vy;
          particle.spin += 0.002;

          if (particle.y < -24) {
            particle.y = height + 24;
            particle.x = Math.random() * width;
          }

          if (particle.x < -24) {
            particle.x = width + 24;
          } else if (particle.x > width + 24) {
            particle.x = -24;
          }
        }
      }

      frame += 1;

      if (!reduceMotion) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [reduceMotion]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[radial-gradient(circle_at_top_left,#fff5f8_0,#f8f0ff_34%,#fff8ee_64%,#fff_100%)]">
      <canvas ref={canvasRef} className="absolute inset-0" aria-hidden="true" />
      <div className="aurora-veil aurora-veil-one" />
      <div className="aurora-veil aurora-veil-two" />
      <div className="noise-layer" />
    </div>
  );
}
