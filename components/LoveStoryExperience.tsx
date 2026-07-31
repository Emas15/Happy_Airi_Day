"use client";

import { useCallback, useState } from "react";
import { ClickMagic } from "@/components/effects/ClickMagic";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { FallingPetals } from "@/components/effects/FallingPetals";
import { LoadingScreen } from "@/components/effects/LoadingScreen";
import { MagicalBackground } from "@/components/effects/MagicalBackground";
import { FloatingNav } from "@/components/layout/FloatingNav";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { MusicPlayer } from "@/components/layout/MusicPlayer";
import { ComplimentGeneratorSection } from "@/components/sections/ComplimentGeneratorSection";
import { FinaleSection } from "@/components/sections/FinaleSection";
import { FutureDreamsSection } from "@/components/sections/FutureDreamsSection";
//import { GiftBoxSection } from "@/components/sections/GiftBoxSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { InteractiveHeartSection } from "@/components/sections/InteractiveHeartSection";
import { LoveCounterSection } from "@/components/sections/LoveCounterSection";
import { LoveLetterSection } from "@/components/sections/LoveLetterSection";
import { LoveNotesSection } from "@/components/sections/LoveNotesSection";
import { LoveQuizSection } from "@/components/sections/LoveQuizSection";
import { MemoryAlbumSection } from "@/components/sections/MemoryAlbumSection";
import { PolaroidWallSection } from "@/components/sections/PolaroidWallSection";
//import { PromisesSection } from "@/components/sections/PromisesSection";
//import { QuoteCarouselSection } from "@/components/sections/QuoteCarouselSection";
import { ReasonsSection } from "@/components/sections/ReasonsSection";
import { ScrapbookSection } from "@/components/sections/ScrapbookSection";
import { SecretMessageSection } from "@/components/sections/SecretMessageSection";
//import { TimelineSection } from "@/components/sections/TimelineSection";
import { WishSection } from "@/components/sections/WishSection";

export function LoveStoryExperience() {
  const [loaded, setLoaded] = useState(false);
  const completeLoading = useCallback(() => setLoaded(true), []);

  return (
    <LenisProvider>
      <MagicalBackground />
      <FallingPetals />
      <ClickMagic />
      <CustomCursor />
      <MusicPlayer />
      <FloatingNav />
      <LoadingScreen onComplete={completeLoading} />

      <main
        className={`relative z-10 transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <HeroSection />
        <LoveCounterSection />
        <LoveLetterSection />
        <MemoryAlbumSection />
        <ScrapbookSection />

        <PolaroidWallSection />
        <ReasonsSection />
        <LoveNotesSection />
        <SecretMessageSection />
        <FutureDreamsSection />

        <ComplimentGeneratorSection />
        <LoveQuizSection />

        <InteractiveHeartSection />
        <WishSection />

        <FinaleSection />
      </main>
    </LenisProvider>
  );
}
