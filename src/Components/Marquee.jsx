import React from "react";
import { twMerge } from "tailwind-merge";

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  return (
    <div
      {...props}
      className={twMerge(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
        vertical ? "flex-col" : "flex-row",
        "gap-[var(--gap)]",
        className
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={twMerge(
            "flex shrink-0 justify-around gap-[var(--gap)]",
            vertical ? "animate-marquee-vertical flex-col" : "animate-marquee flex-row",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
            reverse && "[animation-direction:reverse]"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
