"use client";

import { Music2, Pause, Play, Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { audioTrack } from "@/constants/love-story";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.55);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // 🎵 "Open My Hearttt" বাটনে ক্লিক করলে অডিও অটো-প্লে হওয়ার লিসেনার
  useEffect(() => {
    const handlePlayMusic = async () => {
      if (audioRef.current && audioRef.current.paused) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (err) {
          console.log("Audio playback failed:", err);
        }
      }
    };

    window.addEventListener("play-bg-music", handlePlayMusic);
    return () => {
      window.removeEventListener("play-bg-music", handlePlayMusic);
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    try {
      if (audio.paused) {
        await audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed right-4 top-[calc(env(safe-area-inset-top)+1rem)] z-50 flex items-center gap-2">
      {/* preload="auto" দেওয়া হয়েছে যেন আগেই ফাইল প্রস্তুত থাকে */}
      <audio
        ref={audioRef}
        src={audioTrack.src}
        preload="auto"
        loop
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />
      <div className={`music-dock ${expanded ? "music-dock-expanded" : ""}`}>
        <button
          type="button"
          className="icon-button"
          onClick={() => setExpanded((current) => !current)}
          aria-label="Open music controls"
        >
          <Music2 className="h-4 w-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="icon-button"
          onClick={toggle}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Play className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
        <label className="music-volume">
          <Volume2 className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only">Music volume</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={(event) => setVolume(Number(event.target.value))}
            aria-label="Music volume"
          />
        </label>
      </div>
    </div>
  );
}
