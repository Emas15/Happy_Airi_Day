"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { polaroids } from "@/constants/love-story";
import type { PhotoMemory } from "@/types/story";
import { fadeUp, softEase, staggerContainer } from "@/utils/motion";
import { PhotoArt } from "./PhotoArt";
import { SectionShell } from "./SectionShell";

const rotations = [-8, 5, -3, 7, -6, 4];

export function PolaroidWallSection() {
  const [selected, setSelected] = useState<PhotoMemory | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell
      id="polaroids"
      eyebrow="Scattered like happy evidence"
      title="Polaroid wall"
      description="A wall of memories that lifts, glows, and opens closer."
    >
      <motion.div className="polaroid-grid" variants={staggerContainer}>
        {polaroids.map((photo, index) => (
          <motion.button
            key={photo.id}
            type="button"
            className="polaroid-card"
            style={{ rotate: `${rotations[index % rotations.length]}deg` }}
            variants={fadeUp}
            whileHover={reduceMotion ? undefined : { y: -10, rotate: 0, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelected(photo)}
            aria-label={`Open ${photo.title}`}
          >
            <PhotoArt photo={photo} className="aspect-square" />
            <span>{photo.title}</span>
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.article
              className="polaroid-modal"
              initial={{ opacity: 0, y: 28, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 28, scale: 0.92 }}
              transition={{ duration: reduceMotion ? 0.15 : 0.5, ease: softEase }}
              onClick={(event) => event.stopPropagation()}
            >
              <button type="button" className="modal-close" onClick={() => setSelected(null)} aria-label="Close photo">
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
              <PhotoArt photo={selected} className="aspect-[4/5]" />
              <div>
                <span>{selected.date}</span>
                <h3>{selected.title}</h3>
                <p>{selected.description}</p>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionShell>
  );
}
