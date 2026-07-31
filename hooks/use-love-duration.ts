"use client";

import { useEffect, useState } from "react";
import { getLoveDuration, type LoveDuration } from "@/utils/time";

export function useLoveDuration(startDate: string): LoveDuration {
  const [duration, setDuration] = useState<LoveDuration>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tick = () => {
      setDuration(getLoveDuration(startDate));
    };

    tick();

    const interval = window.setInterval(tick, 1000);

    return () => window.clearInterval(interval);
  }, [startDate]);

  return duration;
}
