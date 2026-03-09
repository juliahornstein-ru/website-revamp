import type { PeopleCardItem } from "@/data/peopleCards";

interface PeopleCardProps {
  item: PeopleCardItem;
}

const badgeClass: Record<string, string> = {
  g: "bg-[#eff4ff] text-[#2563EB]",
  p: "bg-[#eff4ff] text-[#2563EB]",
  a: "bg-[#eff4ff] text-[#2563EB]",
  b: "bg-[#eff4ff] text-[#2563EB]",
};

/**
 * PeopleCard — Single card in the "Your network" horizontal scroll.
 * Initials use a circle with blue ring (outline).
 */
export default function PeopleCard({ item }: PeopleCardProps) {
  const variant = item.badgeVariant ?? "g";
  return (
    <div
      data-card
      className="group shrink-0 w-[300px] border border-[#e4e4e0] rounded-md p-4 bg-white cursor-pointer hover:border-[#2563EB] hover:bg-[#fafbff] transition-colors"
    >
      <div className="flex items-center gap-2.5 mb-3">
        <div
          className="w-[34px] h-[34px] rounded-full bg-[#f0efed] text-[#555] flex items-center justify-center font-sans text-[0.62rem] font-semibold shrink-0 relative outline-2 outline outline-offset-2"
          style={{ outlineColor: "rgba(37,99,235,0.35)" }}
        >
          {item.initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-sans text-[0.84rem] font-normal text-[#111] tracking-tight truncate">{item.name}</div>
          <div className="font-sans text-[0.71rem] text-[#888] mt-0.5 truncate">
            {item.role} · <span className="text-[#2563EB] font-normal">{item.company}</span>
          </div>
        </div>
        <span className={`font-mono text-[0.47rem] font-medium px-1.5 py-0.5 rounded uppercase tracking-wide shrink-0 ${badgeClass[variant] ?? "bg-[#f0efed] text-[#666]"}`}>
          {item.badge}
        </span>
      </div>
      <div className="font-sans text-[0.72rem] text-[#666] leading-snug border-t border-[#f0efed] pt-3 pb-3">
        {item.reason}
      </div>
      <div className="flex justify-end">
        <button type="button" className="font-sans text-[0.71rem] text-[#2563EB] py-0.5 px-1 rounded hover:underline">
          View profile →
        </button>
      </div>
    </div>
  );
}
