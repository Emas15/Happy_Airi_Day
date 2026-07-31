"use client";

import { Sparkles } from "lucide-react";
import Image from "next/image";
import type { PhotoMemory } from "@/types/story";

type PhotoArtProps = {
  photo: Pick<PhotoMemory, "title" | "alt" | "src" | "gradient">;
  className?: string;
  children?: React.ReactNode;
};

export function PhotoArt({ photo, className = "", children }: PhotoArtProps) {
  const background = `linear-gradient(135deg, ${photo.gradient.from}, ${photo.gradient.via}, ${photo.gradient.to})`;

  return (
    <div className={`photo-art ${className}`} style={{ background }}>
      {photo.src ? (
        // Customize by placing a real image path in the related content array.
        <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 768px) 92vw, 32vw" />
      ) : (
        <div className="photo-placeholder" role="img" aria-label={photo.alt}>
          <Sparkles className="h-10 w-10 text-white/80" aria-hidden="true" />
        </div>
      )}
      <div className="photo-gloss" />
      {children}
    </div>
  );
}
