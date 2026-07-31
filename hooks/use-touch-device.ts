"use client";

import { useEffect, useState } from "react";

export function useTouchDevice() {
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    const query = window.matchMedia("(pointer: coarse)");
    const update = () => setIsTouch(query.matches || "ontouchstart" in window);

    update();
    query.addEventListener("change", update);

    return () => query.removeEventListener("change", update);
  }, []);

  return isTouch;
}
