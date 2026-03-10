"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * StudentCTA — Dark bottom section: "Your peers are already on the inside. Join them." + nav links.
 */
export default function StudentCTA() {
  const [joinHover, setJoinHover] = useState(false);

  const links = [
    { label: "For Enterprises", href: "/enterprise" },
    { label: "About Us", href: "/about" },
    { label: "Security Standards", href: "/security" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <section className="bg-[var(--gray-900)] py-16 px-5 md:px-10">
      <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left — Headline + "Join them." as CTA */}
        <div>
          <h2 className="font-serif text-[clamp(2.2rem,4vw,4.2rem)] font-normal leading-tight tracking-tight text-white">
            Your peers are already
            <br />
            on the inside.
          </h2>
          <div className="flex items-center gap-3 mt-0.5">
            <Link
              href="/signup"
              className="font-serif text-[clamp(2.2rem,4vw,4.2rem)] font-normal leading-tight tracking-tight italic transition-colors duration-300"
              style={{ color: joinHover ? "#fff" : "rgba(255,255,255,0.3)" }}
              onMouseEnter={() => setJoinHover(true)}
              onMouseLeave={() => setJoinHover(false)}
            >
              Join them.
            </Link>
            <span
              className="font-mono text-[0.58rem] uppercase tracking-wider whitespace-nowrap transition-colors duration-300"
              style={{ color: joinHover ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0)" }}
            >
              Free to join · No credit card
            </span>
          </div>
        </div>

        {/* Right — Stacked links with vertical accent line */}
        <nav className="flex flex-col gap-[0.1rem] border-l border-white/10 pl-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-[0.75rem] uppercase tracking-wider py-3 bg-transparent text-white/65 hover:text-white/95 transition-colors"
            >
              {link.label} →
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}

