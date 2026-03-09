import { ReactNode } from "react";

interface SectionHeadingProps {
  kicker: string;
  title: string;
  subtitle?: string;
  /** Optional slot for scroll buttons or other actions (shown top-right on desktop) */
  actions?: ReactNode;
}

/**
 * SectionHeading — Reusable section header: kicker, title, optional subtitle and actions.
 */
export default function SectionHeading({ kicker, title, subtitle, actions }: SectionHeadingProps) {
  return (
    <div className="mb-6 relative">
      {actions && <div className="absolute bottom-0 right-0 flex gap-0.5">{actions}</div>}
      <div className="flex items-center mb-2">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[#2563EB]">{kicker}</span>
      </div>
      <h2 className="font-serif text-[clamp(1.9rem,2.6vw,2.6rem)] font-normal leading-tight tracking-tight text-[#111]">
        {title}
      </h2>
      {subtitle && <p className="font-sans text-[0.84rem] leading-relaxed font-light mt-2 max-w-[440px] text-[#777]">{subtitle}</p>}
    </div>
  );
}
