"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, viewportOnce } from "@/utils/motion";

type SectionShellProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({ id, eyebrow, title, description, children, className = "" }: SectionShellProps) {
  return (
    <motion.section
      id={id}
      className={`story-section ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <motion.div className="section-heading" variants={fadeUp}>
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </motion.div>
      {children}
    </motion.section>
  );
}
