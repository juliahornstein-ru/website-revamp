"use client";

import Link from "next/link";
import { useState } from "react";

/** Icons for email, Instagram, LinkedIn (outline style, 26px). */
const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

/**
 * StudentCTA — Dark bottom section: headline, nav links (open in new tab), and social icons.
 */
export default function StudentCTA() {
  const [joinHover, setJoinHover] = useState(false);

  const links = [
    { label: "For Enterprises", href: "/enterprise" },
    { label: "About Us", href: "/about" },
    { label: "Privacy", href: "/privacy" },
  ];

  const social = [
    { label: "Email", href: "mailto:support@recruitu.com", Icon: EmailIcon },
    { label: "Instagram", href: "https://www.instagram.com/recruituhq/", target: true, Icon: InstagramIcon },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/u-recruit/", target: true, Icon: LinkedInIcon },
  ];

  return (
    <section className="bg-[var(--gray-900)] py-16 px-5 md:px-10 relative">
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

        {/* Right — Nav links (new tab) */}
        <nav className="flex flex-col gap-[0.1rem] border-l border-white/10 pl-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.80rem] uppercase tracking-wider py-3 bg-transparent text-white/65 hover:text-white/95 transition-colors"
            >
              {link.label} →
            </Link>
          ))}
        </nav>
      </div>

      {/* Social icons — bottom right corner */}
      <div className="absolute bottom-5 right-5 md:right-10 flex items-center gap-4">
        {social.map(({ label, href, target, Icon }) => (
          <a
            key={label}
            href={href}
            target={target ? "_blank" : undefined}
            rel={target ? "noopener noreferrer" : undefined}
            aria-label={label}
            className="text-white/50 hover:text-white/90 transition-colors"
          >
            <Icon />
          </a>
        ))}
      </div>
    </section>
  );
}

