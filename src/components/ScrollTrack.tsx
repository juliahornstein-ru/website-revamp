"use client";

import { useRef, useState, useCallback, type ReactNode } from "react";

interface ScrollTrackProps {
  id: string;
  children: ReactNode;
  scrollButtons?: boolean;
}

/**
 * ScrollTrack — Horizontal scrollable row with optional prev/next buttons.
 */
export default function ScrollTrack({ id, children, scrollButtons = true }: ScrollTrackProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const scroll = useCallback(
    (dir: number) => {
      const track = trackRef.current;
      if (!track) return;
      const card = track.querySelector("[data-card]");
      const cardW = card ? (card as HTMLElement).offsetWidth + 12 : 300;
      track.scrollBy({ left: dir * cardW * 1.5, behavior: "smooth" });
      setTimeout(updateButtons, 350);
    },
    []
  );

  const updateButtons = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setAtStart(track.scrollLeft <= 2);
    setAtEnd(track.scrollLeft >= track.scrollWidth - track.clientWidth - 2);
  }, []);

  return (
    <div className="w-full">
      <div
        ref={trackRef}
        id={id}
        onScroll={updateButtons}
        className="flex gap-3 overflow-x-auto scrollbar-none pb-1 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
      {scrollButtons && (
        <div className="flex gap-0.5 mt-2 justify-end">
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
        </div>
      )}
    </div>
  );
}
