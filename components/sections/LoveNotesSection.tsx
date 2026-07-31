"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { loveNotes } from "@/constants/love-story";
import type { LoveNote } from "@/types/story";
import { fadeUp, staggerContainer } from "@/utils/motion";
import { SectionShell } from "./SectionShell";

export function LoveNotesSection() {
  const [selected, setSelected] = useState<LoveNote | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell
      id="notes"
      eyebrow="Pinned to the heart"
      title="Love notes"
      description="A board of tiny messages waiting to be unfolded."
    >
      <motion.div className="notes-board" variants={staggerContainer}>
        {loveNotes.map((note) => (
          <motion.button
            key={note.id}
            type="button"
            className={`sticky-note note-${note.tone}`}
            style={{ rotate: `${note.rotation}deg` }}
            variants={fadeUp}
            whileHover={reduceMotion ? undefined : { y: -8, rotate: 0 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelected(note)}
          >
            <strong>{note.title}</strong>
            <span>{note.body}</span>
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence>
        {selected && (
          <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <motion.article
              className={`note-modal note-${selected.tone}`}
              initial={{ opacity: 0, y: 24, rotate: -2, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.94 }}
              transition={{ duration: reduceMotion ? 0.15 : 0.45 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button type="button" className="modal-close" onClick={() => setSelected(null)} aria-label="Close note">
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
              <h3>{selected.title}</h3>
              <p>{selected.body}</p>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionShell>
  );
}
