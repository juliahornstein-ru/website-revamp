"use client";

import type { JobCardItem } from "@/data/jobCards";

interface JobCardProps {
  item: JobCardItem;
}

/**
 * JobCard — Single card in the "Open roles" horizontal scroll.
 */
export default function JobCard({ item }: JobCardProps) {
  return (
    <a
      href="#"
      data-card
      className="shrink-0 w-[320px] bg-white border border-[#e4e4e0] rounded-md p-5 flex flex-col min-h-[150px] no-underline text-inherit hover:border-[#2563EB] hover:bg-[#fafbff] transition-colors group"
      onClick={(e) => {
        e.preventDefault();
        // TODO: open job auth modal or navigate to signup
      }}
    >
      <div className="font-sans text-[0.88rem] font-normal text-[#111] tracking-tight leading-snug mb-2.5">
        {item.title}
      </div>
      <div className="flex gap-1.5 flex-wrap mb-2.5">
        {item.pills.map((p) => (
          <span key={p} className="font-mono text-[0.48rem] uppercase tracking-wide text-[#555] bg-[#f2f1ee] py-0.5 px-2 rounded">
            {p}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-[#f0efed] pt-2.5 mt-auto">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#059669] shrink-0" />
          <span className="font-sans text-[0.72rem] text-[#666]">{item.alumniCount}</span>
        </div>
        <span className="font-sans text-[0.74rem] text-[#2563EB] flex items-center gap-0.5">
          Apply →
        </span>
      </div>
    </a>
  );
}
