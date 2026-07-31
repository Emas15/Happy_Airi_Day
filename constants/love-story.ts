import {
  Camera,
  Clock3,
  Heart,
  Home,
  Map,
  Moon,
  Music2,
  Plane,
  Sparkles,
  Star,
  Sun,
  Utensils,
} from "lucide-react";
import type {
  AudioTrack,
  Dream,
  HeroCopy,
  LoveNote,
  NavItem,
  PhotoMemory,
  PromiseItem,
  Quiz,
  Reason,
  ScrapbookPage,
  TimelineEvent,
} from "@/types/story";

// Customize the relationship start date for the live love counter.
export const relationshipStartDate = "2024-04-16T00:00:00";

// Customize the opening hero text.
export const heroCopy: HeroCopy = {
  eyebrow: "from your sheeam:",
  title: "Happy Girlfriend Day Pakhi",
  subtitle: "Amar chotto norom adorer baccha",
  cta: "Open My Hearttt",
};

// Customize the optional music file. Put your mp3 in /public/music and update this path.
export const audioTrack: AudioTrack = {
  title: "Our song",
  src: "/music/music.mp3",
};

// Customize the floating bottom navigation labels and destinations.
export const navItems: NavItem[] = [
  { id: "hero", label: "Open", icon: Heart },
  { id: "letter", label: "Letter", icon: Music2 },
  { id: "album", label: "Album", icon: Camera },

  { id: "finale", label: "Finale", icon: Sparkles },
];

// Customize the letter that appears after the envelope opens.
export const loveLetter = {
  sealedTitle: "Tap the envelope",
  title: "Hie amar chotto pakhi",
  body: "You know i love writting letters for you, onekgula achena ekhon tomar kache? apnar valo lage pakhi amar ei letter likha??",
  signature: "Apnar sheeam",
};

// Customize these album cards with your own photos and captions.
export const photos: PhotoMemory[] = [
  {
    id: "memory-01",
    title: "Love to click shelfies with my baby",
    description: "i miss your comfort re",
    date: "Amraa-01",
    src: "/images/img1.jpeg",
    alt: "A romantic memory scene",
    gradient: { from: "#ffd1dc", via: "#f7e1ff", to: "#fff8ef" },
  },
  {
    id: "memory-02",
    title: "tomar daat ber kora hashi onnek shundor",
    description: "but amar daat shudhu tomar shamnei ber hobe",
    date: "Amraa-02",
    src: "/images/img2.jpeg",
    alt: "A warm peach memory scene",
    gradient: { from: "#ffe2c9", via: "#fff1d6", to: "#f7d6ff" },
  },
  {
    id: "memory-03",
    title: "My fev cafee",
    description: "Always love to have some sweet moments with you in northEnd",
    date: "Amrra-03",
    src: "/images/img3.jpeg",
    alt: "A dreamy lavender memory scene",
    gradient: { from: "#dfd5ff", via: "#ffe3ef", to: "#fffaf0" },
  },
  {
    id: "memory-04",
    title: "You in pinkiee",
    description:
      "Dekhoo ami always flex kori cause i have the prettiest wifeyy",
    date: "Amraa-04",
    src: "/images/img4.jpeg",
    alt: "A champagne memory scene",
    gradient: { from: "#ffefbd", via: "#ffd1d9", to: "#e6ddff" },
  },
  {
    id: "memory-05",
    title: "Remember this one?",
    description:
      "Tomar shathe hatte ghurte onek moja lage but tomar pa chile jay 😭",
    date: "Amraa-05",
    src: "/images/img5.jpeg",
    alt: "A rose memory scene",
    gradient: { from: "#ffc4df", via: "#fff0f6", to: "#dcd6ff" },
  },
];

// Customize scrapbook pages with notes, stickers, and photos.
// Customize scrapbook pages with notes, stickers, and photos.
export const scrapbookPages: ScrapbookPage[] = [
  {
    id: "scrap-01",
    title: "Page one",
    caption: "over your head shelfiee",
    items: [
      {
        kind: "photo",
        text: "Favorite photo",
        src: "/images/img6.jpeg", // 👈 Photo type-এ src থাকবে
        rotation: -6,
        x: 8,
        y: 14,
        gradient: photos[0].gradient,
      },
      {
        kind: "note",
        text: "tomar pashe glow e korte parina",
        rotation: 5,
        x: 48,
        y: 18,
      },
      { kind: "sticker", text: "shundori amar", rotation: -10, x: 58, y: 58 },
    ],
  },
  {
    id: "scrap-02",
    title: "Page two",
    caption: "red-pinkish",
    items: [
      {
        kind: "note",
        text: "Onnnek vallage ei chobita ❤️.",
        rotation: -4,
        x: 8,
        y: 18,
      },
      {
        kind: "photo",
        text: "A tiny scene",
        src: "/images/img7.jpeg", // 👈 Photo type-এ src যোগ করা হয়েছে
        rotation: 7,
        x: 44,
        y: 16,
        gradient: photos[2].gradient,
      },
      {
        kind: "sticker",
        text: "lal tuktuke bou amar",
        rotation: 8,
        x: 30,
        y: 62,
      },
    ],
  },
  {
    id: "scrap-03",
    title: "Page three",
    caption: "danish chickennn",
    items: [
      {
        kind: "photo",
        text: "Soft memory",
        src: "/images/img8.jpeg", // 👈 Photo type-এ src যোগ করা হয়েছে
        rotation: 4,
        x: 9,
        y: 12,
        gradient: photos[4].gradient,
      },
      {
        kind: "note",
        text: "ei short time er date ta mone ache? ek dour diye danish chicken kheye ashchilam rojar moddhe",
        rotation: -7,
        x: 49,
        y: 24,
      },
      { kind: "sticker", text: "hehe", rotation: 12, x: 55, y: 62 },
    ],
  },
];

// Customize the milestone timeline.
export const timelineEvents: TimelineEvent[] = [
  {
    id: "met",
    title: "We Met",
    date: "31st july",
    description: "The chapter started quietly, then changed everything.",
    icon: "heart",
  },
  {
    id: "chat",
    title: "First Chat",
    date: "First spark",
    description: "A simple conversation that kept becoming more special.",
    icon: "message",
  },
  {
    id: "call",
    title: "First Call",
    date: "Soft signal",
    description: "The voice I did not want to stop hearing.",
    icon: "phone",
  },
  {
    id: "date",
    title: "First Date",
    date: "Bloom",
    description: "A day that still feels warm when I think about it.",
    icon: "flower",
  },
  {
    id: "gift",
    title: "First Gift",
    date: "Wrapped joy",
    description: "A small thing carrying a very big feeling.",
    icon: "gift",
  },
  {
    id: "memories",
    title: "Our Memories",
    date: "Always",
    description: "All the tiny pieces that built our favorite story.",
    icon: "camera",
  },
  {
    id: "today",
    title: "Today",
    date: "Now",
    description: "Another reason to choose each other, softly and fully.",
    icon: "star",
  },
];

// Customize the scattered polaroid wall.
// Customize the scattered polaroid wall with distinct photos & text.
export const polaroids: PhotoMemory[] = [
  {
    id: "polaroid-1",
    title: "khushiiii",
    description: "after our jhograss",
    date: "Date 1",
    src: "/images/img9.jpeg", // 👈 আলাদা ছবির ফাইল দিন
    alt: "Polaroid scene 1",
    gradient: { from: "#ffd1dc", via: "#f7e1ff", to: "#fff8ef" },
  },
  {
    id: "polaroid-2",
    title: "abaro khushiiii",
    description: "no more jhogra",
    date: "Date 2",
    src: "/images/img10.jpeg", // 👈 আলাদা ছবির ফাইল দিন
    alt: "Polaroid scene 2",
    gradient: { from: "#ffe2c9", via: "#fff1d6", to: "#f7d6ff" },
  },
  {
    id: "polaroid-3",
    title: "ummm yelloww dresss",
    description: "chokh e shorena tomar theke",
    date: "Date 3",
    src: "/images/img11.jpeg", // 👈 আলাদা ছবির ফাইল দিন
    alt: "Polaroid scene 3",
    gradient: { from: "#dfd5ff", via: "#ffe3ef", to: "#fffaf0" },
  },
  {
    id: "polaroid-4",
    title: "fev flower for my fhul",
    description: "abar kine dibo insha'Allah",
    date: "Date 3",
    src: "/images/img12.jpeg", // 👈 আলাদা ছবির ফাইল দিন
    alt: "Polaroid scene 3",
    gradient: { from: "#dfd5ff", via: "#ffe3ef", to: "#fffaf0" },
  },
  {
    id: "polaroid-5",
    title: "tumiiii",
    description: "puraa bouu amar",
    date: "Date 3",
    src: "/images/img13.jpeg", // 👈 আলাদা ছবির ফাইল দিন
    alt: "Polaroid scene 3",
    gradient: { from: "#dfd5ff", via: "#ffe3ef", to: "#fffaf0" },
  },
  // প্রয়োজন মতো আরও পোলারয়েড অবজেক্ট যোগ করতে পারেন...
];

// Customize all 20 reasons.
export const reasons: Reason[] = [
  {
    title: "no reason 1",
    reason:
      "reason nai kono, reason keno lagbe, paba na reason, scroll down koren",
  },
  {
    title: "no reason 2",
    reason: "ahha bollam to reason nai",
  },
  {
    title: "no reason 3",
    reason: "ei dekho abar reason dekho",
  },
  {
    title: "no reason 4",
    reason: "ektao reason paba na bole dilam 😜",
  },
  {
    title: "no reason 5",
    reason: "still searching? amaro kono reason lagena tomake valobashte ❤️",
  },
];

// Customize the sticky love notes.
export const loveNotes: LoveNote[] = [
  {
    id: "note-01",
    title: "reminder 1",
    body: "beshi beshi pani khaba.. sheeam boleche",
    rotation: -5,
    tone: "rose",
  },
  {
    id: "note-02",
    title: "goal 1",
    body: "dui doctor engineer mile world tour dite hobee...",
    rotation: 4,
    tone: "peach",
  },
  {
    id: "note-03",
    title: "Confession",
    body: "I used to kiss on your chobis before our relations(valobeshe)",
    rotation: -2,
    tone: "lavender",
  },
  {
    id: "note-04",
    title: "goal 2",
    body: "duijon e fit thakbo for our babies",
    rotation: 6,
    tone: "gold",
  },
  {
    id: "note-05",
    title: "reminder 2",
    body: "talk to yourself when things get hard okay?",
    rotation: -8,
    tone: "peach",
  },
  {
    id: "note-06",
    title: "wish",
    body: "tomar banano daab er pudding khabo",
    rotation: 5,
    tone: "rose",
  },
];

// Customize the hidden secret message.
export const secretMessage = {
  lockedTitle: "unlock koro",
  unlockedTitle: "Unlocked",
  body: "okay so, here is the thing... Get ready to be my wifey sooonnn... Girlfriend -> sheeam er bou",
};

// Customize future dream cards.
export const dreams: Dream[] = [
  {
    title: "Travel Together",
    body: "etato musttt.",
    icon: Plane,
  },
  {
    title: "Watch aurora",
    body: "insha'Allah dekhbo.",
    icon: Star,
  },
  {
    title: "Late Night Drives",
    body: "and it would be longgg and wildddd",
    icon: Moon,
  },
  {
    title: "Movies",
    body: "you know the plannn 😉😜",
    icon: Star,
  },
  {
    title: "Cooking Together",
    body: "eta genuinly chaiii... amader team work bujhte parbo",
    icon: Utensils,
  },
  {
    title: "A big beautyfull Home",
    body: "onek shundor kore tomar mon moto banabo insha'Allah.",
    icon: Home,
  },
  {
    title: "Growing Old",
    body: "tomar aage ami morbo jodio",
    icon: Map,
  },
];

// Customize promise cards.
export const promises: PromiseItem[] = [
  {
    title: "I promise to listen",
    body: "Even when the words are quiet or tangled.",
  },
  {
    title: "I promise to notice",
    body: "The small things, the big feelings, and the in-between.",
  },
  {
    title: "I promise to celebrate you",
    body: "In public, in private, in ordinary moments.",
  },
  {
    title: "I promise to protect our peace",
    body: "With patience, honesty, and care.",
  },
  {
    title: "I promise to keep learning you",
    body: "Because loving you should never become lazy.",
  },
  { title: "I promise to stay soft", body: "Especially when life is not." },
];

// Customize compliments for the random generator.
export const compliments = [
  "i lovee tomar kajol wala chokh",
  "tomake laal sharite shob theke beshi shundor lage, nothing beats it",
  "as always, tomar eyebrows, hariline, kopal r chokh etar theke best combo allah banay e nai r",
  "you know, i love the fact that you always smell soo damn good no matter what, and i love smelling your hair",
];
// Customize the quiz question, answers, and success message.
export const quiz: Quiz = {
  question: "Who loves more?",
  options: [
    { label: "Me", isCorrect: false },
    { label: "You", isCorrect: false },
    { label: "Both", isCorrect: true },
  ],
  success: "Correct. It is absolutely both.",
};

// Customize the gift reveal.
export const giftBox = {
  title: "One more little gift",
  message:
    "A surprise can live here: a clue, a promise, or the next sweet plan.",
};

// Customize rotating quotes.
export const quotes = [
  "In every version of my favorite day, you are there.",
  "Some people feel like a place to rest. You are mine.",
  "Love is the small ordinary thing, repeated beautifully.",
  "You make the future feel less far away.",
  "My favorite story is still becoming us.",
];

// Customize the final emotional section.
export const finalMessage = {
  imageAlt: "A final favorite photo",
  lineOne: "Tumi amar shob theke priyo manush re pakhi amar",
  lineTwo:
    "I love you soo muchhh alwaysss ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️.",
  lineThree: "Happy Girlfriend Day",
};

// Customize the final celebration button.
export const celebration = {
  cta: "Celebrate Us",
};

// Customize the wish interaction.
export const wishMoment = {
  title: "Wish upon a star",
  body: "Tap a star and leave a wish for the next chapter.",
  revealed:
    "Amar just ektai wish, jate tumi happy thako, r ami tomar happiness a ektu vaag boshaite pari, komaite chaina tomar happiness amar jonno",
};
