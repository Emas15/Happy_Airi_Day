import type { LucideIcon } from "lucide-react";

export type Gradient = {
  from: string;
  via: string;
  to: string;
};

export type HeroCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  cta: string;
};

export type AudioTrack = {
  title: string;
  src: string;
};

export type NavItem = {
  id: string;
  label: string;
  icon: LucideIcon;
};

export type PhotoMemory = {
  id: string;
  title: string;
  description: string;
  date: string;
  alt: string;
  src?: string;
  gradient: Gradient;
};

export type ScrapbookItem = {
  kind: "photo" | "note" | "sticker";
  text: string;
  src?: string;
  rotation: number;
  x: number;
  y: number;
  gradient?: Gradient;
};

export type ScrapbookPage = {
  id: string;
  title: string;
  caption: string;
  items: ScrapbookItem[];
};

export type TimelineEvent = {
  id: string;
  title: string;
  date: string;
  description: string;
  icon: string;
};

export type Reason = {
  title: string;
  reason: string;
};

export type LoveNote = {
  id: string;
  title: string;
  body: string;
  rotation: number;
  tone: "rose" | "peach" | "lavender" | "gold";
};

export type Dream = {
  title: string;
  body: string;
  icon: LucideIcon;
};

export type PromiseItem = {
  title: string;
  body: string;
};

export type QuizOption = {
  label: string;
  isCorrect: boolean;
};

export type Quiz = {
  question: string;
  options: QuizOption[];
  success: string;
};
