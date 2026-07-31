"use client";

import { useEffect } from "react";

function addParticle(x: number, y: number, burst = false) {
  const particle = document.createElement("span");
  const size = burst ? 18 + Math.random() * 18 : 10 + Math.random() * 14;
  const angle = Math.random() * Math.PI * 2;
  const distance = burst ? 80 + Math.random() * 96 : 28 + Math.random() * 44;

  particle.className = burst ? "click-particle click-particle-burst" : "click-particle";
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.setProperty("--float-x", `${Math.cos(angle) * distance}px`);
  particle.style.setProperty("--float-y", `${Math.sin(angle) * distance - 48}px`);
  particle.style.setProperty("--spin", `${Math.random() * 160 - 80}deg`);

  document.body.appendChild(particle);
  particle.addEventListener("animationend", () => particle.remove(), { once: true });
}

export function ClickMagic() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lastTap = 0;

    const handlePointerUp = (event: PointerEvent) => {
      if (reduceMotion || event.button !== 0) {
        return;
      }

      const now = Date.now();
      const isDoubleTap = now - lastTap < 310;
      lastTap = now;

      const count = isDoubleTap ? 16 : 6;
      for (let index = 0; index < count; index += 1) {
        addParticle(event.clientX, event.clientY, isDoubleTap);
      }

      if (isDoubleTap && "vibrate" in navigator) {
        navigator.vibrate(18);
      }
    };

    window.addEventListener("pointerup", handlePointerUp);

    return () => window.removeEventListener("pointerup", handlePointerUp);
  }, []);

  return null;
}
