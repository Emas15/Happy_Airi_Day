"use client";

const petals = Array.from({ length: 22 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  delay: `${(index * 0.73) % 8}s`,
  duration: `${9 + (index % 7)}s`,
  scale: 0.55 + (index % 5) * 0.12,
}));

export function FallingPetals() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="falling-petal"
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            scale: String(petal.scale),
          }}
        />
      ))}
    </div>
  );
}
