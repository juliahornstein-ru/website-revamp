"use client";

import { useEffect, useState } from "react";

const STATS = [
  { value: 75000, label: "Students" },
  { value: 10000000, label: "Professionals" },
  { value: 500, label: "Clubs" },
];

function useCountUp(target: number, duration: number, delay: number) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start - delay;
      if (elapsed < 0) {
        requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(elapsed / duration, 1);
      const ease = Math.sin(progress * (Math.PI / 2));
      setCurrent(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(tick);
      else setCurrent(target);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [target, duration, delay]);

  return current;
}

function StatRow({ target, label, duration, delay, isLast }: { target: number; label: string; duration: number; delay: number; isLast?: boolean }) {
  const current = useCountUp(target, duration, delay);
  return (
    <div className={`px-5 py-3.5 border-[#e8e8e4] bg-white hover:bg-[#f9f9f9] transition-colors ${isLast ? "" : "border-b"}`}>
      <div className="font-serif text-[1.6rem] leading-none tracking-tight text-[#111] flex items-baseline gap-1">
        <span>{current.toLocaleString("en-US")}</span>
        <span className="font-serif text-[1rem] text-[#2563EB] opacity-70">+</span>
      </div>
      <div className="font-mono text-[0.47rem] tracking-[0.12em] uppercase text-[#8A8A8A] mt-1.5">{label}</div>
    </div>
  );
}

/**
 * HeroStats — Animated counter cards (Students, Professionals, Clubs).
 */
export default function HeroStats() {
  return (
    <div className="flex flex-col border border-[#e8e8e4] rounded-lg overflow-hidden shrink-0 w-full min-w-[240px] max-w-[340px]">
      {STATS.map((s, i) => (
        <StatRow
          key={s.label}
          target={s.value}
          label={s.label}
          duration={[2000, 2600, 1600][i] ?? 2000}
          delay={200 + i * 120}
          isLast={i === STATS.length - 1}
        />
      ))}
    </div>
  );
}
