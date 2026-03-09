import Link from "next/link";
import HeroOrb from "./HeroOrb";
import HeroStats from "./HeroStats";

/**
 * Hero — Top section of the student landing: label, headline, subtext, CTAs, and stats.
 */
export default function Hero() {
  return (
    <section className="relative bg-white border-b border-[var(--gray-200)] pt-12 pb-9 px-5 md:px-10">
      <HeroOrb />
      <div className="relative z-10 max-w-[1120px] mx-auto">
        <div className="inline-flex items-center gap-2 font-mono text-[0.54rem] uppercase tracking-[0.2em] text-[var(--blue)] mb-5">
          <span className="w-5 h-px bg-[var(--blue)]" />
          Your career, built around people
        </div>

        <h1 className="font-serif text-[clamp(3rem,6vw,6.5rem)] font-normal leading-[0.98] tracking-[-0.035em] max-w-[900px] mb-0">
          <span className="block">Build your career</span>
          <span className="block">through <em className="italic text-[var(--gray-500)]">people.</em></span>
        </h1>

        <div className="w-full h-px bg-[var(--gray-200)] my-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14 items-start">
          <div>
            <p className="font-sans text-[0.92rem] leading-relaxed text-[var(--gray-700)] font-light max-w-[440px] mb-8">
              Careers aren&apos;t built by applying. They&apos;re built through the right people, at the right time. Your personal agent makes sure you&apos;re always in that position — wherever you are in your career.
            </p>
            <div className="flex gap-3 items-center flex-wrap">
              <Link
                href="#"
                className="font-mono text-[0.58rem] uppercase tracking-wider py-3 px-6 bg-[var(--blue)] text-white rounded-md inline-block hover:bg-[#0A2ACC] transition-colors"
              >
                Join Free
              </Link>
              <Link
                href="#"
                className="font-mono text-[0.58rem] uppercase tracking-wider py-3 bg-transparent text-[var(--gray-500)] hover:text-[var(--gray-900)] transition-colors"
              >
                See how it works →
              </Link>
            </div>
          </div>
          <HeroStats />
        </div>
      </div>
    </section>
  );
}
