"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Flower2,
  Gift,
  Heart,
  MessageCircle,
  Phone,
  Star,
} from "lucide-react";
import { timelineEvents } from "@/constants/love-story";
import { fadeUp, staggerContainer } from "@/utils/motion";
import { SectionShell } from "./SectionShell";

const icons = {
  heart: Heart,
  message: MessageCircle,
  phone: Phone,
  flower: Flower2,
  gift: Gift,
  camera: Camera,
  star: Star,
};

export function TimelineSection() {
  return (
    <SectionShell
      id="timeline"
      eyebrow="The way the story unfolded"
      title="Our timeline"
      description="Every milestone gets its own little glow."
    >
      <motion.ol className="timeline-list" variants={staggerContainer}>
        {timelineEvents.map((event, index) => {
          const Icon = icons[event.icon as keyof typeof icons] ?? Heart;

          return (
            <motion.li
              key={event.id}
              className="timeline-item"
              variants={fadeUp}
            >
              <div className="timeline-marker">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <article className="timeline-card">
                <span>
                  {String(index + 1).padStart(2, "0")} / {event.date}
                </span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </article>
            </motion.li>
          );
        })}
      </motion.ol>
    </SectionShell>
  );
}
