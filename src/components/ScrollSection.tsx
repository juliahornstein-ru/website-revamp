"use client";

import { useRef, useState, useCallback, useEffect, type ReactNode } from "react";
import SectionHeading from "./SectionHeading";

interface ScrollSectionProps {
  id: string;
  kicker: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

/**
 * ScrollSection — Section with a heading and a horizontal scroll track (e.g. people cards, job cards).
 * Renders scroll prev/next buttons in the heading and syncs them with the track.
 */
export default function ScrollSection({ id, kicker, title, subtitle, children }: ScrollSectionProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateButtons = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    setAtStart(track.scrollLeft <= 2);
    setAtEnd(maxScroll <= 2 || track.scrollLeft >= maxScroll - 2);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const run = () => {
      updateButtons();
    };
    run();
    requestAnimationFrame(run);
    const ro = new ResizeObserver(run);
    ro.observe(track);
    return () => ro.disconnect();
  }, [updateButtons]);

  const scroll = useCallback((dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]");
    const cardW = card ? (card as HTMLElement).offsetWidth + 12 : 300;
    track.scrollBy({ left: dir * cardW * 1.5, behavior: "smooth" });
    setTimeout(updateButtons, 350);
  }, [updateButtons]);

  const scrollButtons = (
    <>
      <button
        type="button"
        onClick={() => scroll(-1)}
        disabled={atStart}
        className="h-6 w-6 rounded border border-[#e0e0dc] bg-white flex items-center justify-center hover:border-[#bbb] hover:bg-[#f5f5f3] disabled:opacity-25 disabled:pointer-events-none transition-colors"
        aria-label="Scroll left"
      >
        <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[9px] h-[9px]">
          <polyline points="9,2 4,7 9,12" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => scroll(1)}
        disabled={atEnd}
        className="h-6 w-6 rounded border border-[#e0e0dc] bg-white flex items-center justify-center hover:border-[#bbb] hover:bg-[#f5f5f3] disabled:opacity-25 disabled:pointer-events-none transition-colors"
        aria-label="Scroll right"
      >
        <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[9px] h-[9px]">
          <polyline points="5,2 10,7 5,12" />
        </svg>
      </button>
    </>
  );

  return (
    <div className="w-full min-w-0">
      <SectionHeading kicker={kicker} title={title} subtitle={subtitle} actions={scrollButtons} />
      <div
        ref={trackRef}
        id={id}
        onScroll={updateButtons}
        className="flex gap-3 overflow-x-auto overflow-y-hidden scrollbar-none pb-1 scroll-smooth min-w-0 w-full [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
    </div>
  );
}
