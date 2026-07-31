"use client";

import { navItems } from "@/constants/love-story";

export function FloatingNav() {
  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Story navigation"
      className="fixed inset-x-0 bottom-0 z-50 mx-auto flex w-full justify-center px-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)]"
    >
      <div className="glass-bar flex max-w-[28rem] items-center gap-1 rounded-full px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => goTo(item.id)}
              className="group grid min-h-11 min-w-11 place-items-center rounded-full px-3 text-[0.69rem] font-semibold text-rose-950/70 transition hover:bg-white/70 hover:text-rose-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400"
              aria-label={`Go to ${item.label}`}
            >
              <Icon className="h-4 w-4 transition group-hover:scale-110" aria-hidden="true" />
              <span className="sr-only">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
