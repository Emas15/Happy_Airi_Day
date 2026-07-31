"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useTouchDevice } from "@/hooks/use-touch-device";

export function CustomCursor() {
  const isTouch = useTouchDevice();
  const [visible, setVisible] = useState(false);
  const x = useSpring(0, { stiffness: 420, damping: 38, mass: 0.5 });
  const y = useSpring(0, { stiffness: 420, damping: 38, mass: 0.5 });
  const trailX = useSpring(0, { stiffness: 120, damping: 28, mass: 0.9 });
  const trailY = useSpring(0, { stiffness: 120, damping: 28, mass: 0.9 });

  useEffect(() => {
    if (isTouch) {
      return undefined;
    }

    const move = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      trailX.set(event.clientX);
      trailY.set(event.clientY);
      setVisible(true);
    };

    const leave = () => setVisible(false);

    window.addEventListener("pointermove", move);
    document.documentElement.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [isTouch, trailX, trailY, x, y]);

  if (isTouch) {
    return null;
  }

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[80] h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/80 bg-white/45 shadow-[0_0_28px_rgba(255,126,173,0.45)] mix-blend-screen"
        style={{ x, y, opacity: visible ? 1 : 0 }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[79] h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-300/20 blur-md mix-blend-multiply"
        style={{ x: trailX, y: trailY, opacity: visible ? 1 : 0 }}
      />
    </>
  );
}
