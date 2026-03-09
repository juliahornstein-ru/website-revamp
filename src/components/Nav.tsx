"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Nav — Sticky top bar with logo, "For Students" tab (active), and CTAs.
 * We only show the student experience; employer tab is hidden for now.
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        sticky top-0 z-[200] border-b transition-all duration-300
        ${scrolled ? "border-black/10 bg-[rgba(252,252,250,1)] shadow-[0_1px_0_rgba(0,0,0,0.06),0_4px_20px_rgba(0,0,0,0.07)] backdrop-blur-[24px]" : "border-transparent bg-transparent"}
      `}
    >
      <div className="flex h-[62px] items-center justify-between gap-8 px-5 md:px-10 relative">
        <Link href="#" className="flex items-center gap-2 overflow-hidden shrink-0">
          <div className="flex h-[26px] w-[26px] shrink-0 items-center justify-center border-[1.5px] border-[var(--gray-900)]">
            <svg width="11" height="12" viewBox="0 0 13 15" fill="none" className="shrink-0">
              <path d="M2 1.5h5a3.5 3.5 0 010 7H2M7 8.5l4 5" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span
            className={`
              font-mono text-[0.6rem] uppercase tracking-[0.16em] text-[var(--gray-900)] whitespace-nowrap transition-all duration-300
              ${scrolled ? "max-w-0 opacity-0 -translate-x-3 overflow-hidden" : "max-w-[120px] opacity-100 translate-x-0"}
            `}
          >
            RECRUITU
          </span>
        </Link>

        <div className="absolute left-1/2 top-0 flex h-full -translate-x-1/2 items-stretch">
          <button
            type="button"
            className="font-mono text-[0.57rem] uppercase tracking-wider px-5 md:px-6 border-b-2 border-[var(--blue)] text-[var(--blue)] mb-[-1px] transition-colors"
            aria-current="page"
          >
            For Students
          </button>
          {/* For Employers tab hidden for now — uncomment when you add that page */}
          {/* <button type="button" className="font-mono text-[0.57rem] uppercase tracking-wider px-5 text-[var(--gray-500)] border-b-2 border-transparent hover:text-[var(--gray-900)]">
            For Employers
          </button> */}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="#"
            className="font-mono text-[0.55rem] uppercase tracking-wider py-2 px-4 rounded-md bg-[#e8e8e6] text-[var(--gray-900)] hover:bg-[#c0c0be] transition-colors inline-block"
          >
            Log in
          </Link>
          <Link
            href="#"
            className="font-mono text-[0.55rem] uppercase tracking-wider py-2 px-4 rounded-md bg-[var(--blue)] text-white hover:bg-[#0A2ACC] transition-colors inline-block"
          >
            Join Free
          </Link>
        </div>
      </div>
    </nav>
  );
}
