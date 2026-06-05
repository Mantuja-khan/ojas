import { ReactNode } from "react";

interface MarqueeProps {
  items: ReactNode[];
  direction?: "left" | "right";
  speed?: number; // seconds for one full loop
  className?: string;
}

export function Marquee({ items, direction = "left", speed = 30, className = "" }: MarqueeProps) {
  // Duplicate items for seamless loop
  const doubled = [...items, ...items];
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <div
        className="flex w-max gap-8 md:gap-12 hover:[animation-play-state:paused] cursor-pointer"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((item, idx) => (
          <div key={idx} className="shrink-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
