"use client";

import { useState, useRef, useEffect } from "react";

const TRACKS = [
  { id: "finance", label: "Finance", active: true },
  { id: "quant", label: "Quant", soon: true },
  { id: "consulting", label: "Consulting", soon: true },
  { id: "technology", label: "Technology", soon: true },
  { id: "healthcare", label: "Healthcare", soon: true },
  { id: "public-sector", label: "Public Sector", soon: true },
] as const;

export default function TrackDropdown() {
  const [open, setOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<(typeof TRACKS)[number]>(TRACKS[0]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open]);

  return (
    <div className="relative inline-block shrink-0" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Select track"
        className="inline-flex items-center gap-1.5 font-mono text-[0.52rem] tracking-[.1em] uppercase bg-white border border-[#e4e4e0] rounded-full px-3.5 py-1.5 text-[#555] cursor-pointer shadow-sm hover:border-[#bbb] hover:shadow-md transition-all"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" />
        {selectedTrack.label} Track
        <span className={`text-[#999] text-[0.6rem] ml-0.5 transition-transform ${open ? "rotate-180" : ""}`}>▾</span>
      </button>
      <div
        role="listbox"
        aria-label="Track options"
        className={`absolute top-[calc(100%+6px)] right-0 bg-white border border-[#e4e4e0] rounded-xl p-1.5 min-w-[180px] shadow-xl z-10 ${open ? "block" : "hidden"}`}
      >
        {TRACKS.map((track) => {
          const isSelected = selectedTrack.id === track.id;
          const isSoon = "soon" in track && track.soon;
          return (
            <button
              key={track.id}
              type="button"
              role="option"
              aria-selected={isSelected}
              disabled={!!isSoon}
              onClick={() => {
                if (!isSoon) {
                  setSelectedTrack(track);
                  setOpen(false);
                }
              }}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-left text-[0.78rem] transition-colors ${
                isSoon
                  ? "text-[#bbb] cursor-not-allowed"
                  : isSelected
                    ? "font-medium text-[#111] bg-[#f5f5f3]"
                    : "text-[#555] hover:bg-[#f9f9f7] hover:text-[#111] cursor-pointer"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full shrink-0 ${isSelected ? "bg-[#2563EB]" : "bg-[#ddd]"}`}
              />
              {track.label}
              {isSoon && (
                <span className="ml-auto font-mono text-[0.42rem] tracking-[.08em] uppercase text-[#ccc]">
                  Soon
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
