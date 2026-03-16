import Image from "next/image";

import type { ClubCardItem } from "@/data/clubCards";

interface ClubCardProps {
  item: ClubCardItem;
}

const AVATAR_COLORS = ["#C8A882", "#9BB5C8", "#B8C8A0", "#C8A8B8", "#A8B8C8", "#C8B8A0", "#B0C8C0", "#C8C0A8"];
const AUTH_URL = "https://app.recruitu.com/authentication";

/**
 * ClubCard — Single card in the "Your clubs" horizontal scroll. Clicking goes to login.
 */
export default function ClubCard({ item }: ClubCardProps) {
  return (
    <a
      href={AUTH_URL}
      data-card
      className="shrink-0 w-[300px] bg-white border border-[#e4e4e0] rounded-md p-4 cursor-pointer flex flex-col hover:border-[#2563EB] hover:bg-[#fafbff] transition-colors group no-underline text-inherit"
    >
      <div className="flex items-center gap-2.5 mb-3">
        <div className="h-[34px] w-[34px] rounded-full overflow-hidden shrink-0 bg-[#f0efed] flex items-center justify-center">
          <Image
            src={item.logoUrl!}
            alt={item.name}
            width={34}
            height={34}
            className="object-contain w-full h-full"
          />
        </div>
  
        <div className="flex-1 min-w-0">
          <div className="font-sans text-[0.84rem] font-normal text-[#111] tracking-tight truncate">{item.name}</div>
          <div className="font-sans text-[0.71rem] text-[#888] mt-0.5 truncate">{item.school}</div>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-[#f0efed] pt-2.5 mt-2">
        <div className="flex items-center -space-x-1.5">
          {item.avatarSeeds.slice(0, 4).map((seed) => (
            <div
              key={seed}
              className="w-[22px] h-[22px] rounded-full border-2 border-white overflow-hidden shrink-0 bg-[#e8e8e4] flex items-center justify-center text-[0.5rem] font-medium text-[#555]"
              style={{ backgroundColor: AVATAR_COLORS[seed % AVATAR_COLORS.length] }}
            />
          ))}
          <span className="font-sans text-[0.68rem] text-[#999] ml-1.5">{item.memberCount}</span>
        </div>
        <span className="font-sans text-[0.71rem] font-normal text-[#2563EB]">
          View →
        </span>
      </div>
    </a>
  );
}
