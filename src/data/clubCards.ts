export interface ClubCardItem {
  logoUrl?: string;
  name: string;
  school: string;
  memberCount: string;
  avatarSeeds: number[];
}

export const clubCards: ClubCardItem[] = [
  { logoUrl: "/logos/harvardfac.jpeg", name: "Financial Analysts Club", school: "Harvard University", memberCount: "+64 members", avatarSeeds: [4, 5, 6, 7] },
  { logoUrl: "/logos/dukedsp.jpg", name: "Delta Sigma Pi", school: "Duke University", memberCount: "+70 members", avatarSeeds: [0, 1, 2, 3] },
  { logoUrl: "/logos/cornellakpsi.jpg", name: "Alpha Kappa Psi", school: "Cornell University", memberCount: "+77 members", avatarSeeds: [12, 13, 14, 15] },
  { logoUrl: "/logos/vandyinvestment.jpeg", name: "Investment Club", school: "Vanderbilt University", memberCount: "+85 members", avatarSeeds: [16, 17, 18, 19] },
  { logoUrl: "/logos/upenngrowthequity.jpeg", name: "Growth Equity Club", school: "University of Pennsylvania", memberCount: "+34 members", avatarSeeds: [20, 21, 22, 23] },
  { logoUrl: "/logos/michigan180dc.jpg", name: "180 Degrees Consulting", school: "University of Michigan", memberCount: "+43 members", avatarSeeds: [24, 25, 26, 27] },
  { logoUrl: "/logos/brownfinance.jpg", name: "Finance Club", school: "Brown University", memberCount: "+59 members", avatarSeeds: [32, 33, 34, 35] },
  { logoUrl: "/logos/columbiablackgen.jpg", name: "BlackGen Capital", school: "Columbia University", memberCount: "+40 members", avatarSeeds: [36, 37, 38, 39] },
  { logoUrl: "/logos/northwesternwib.jpg", name: "Women in Business", school: "Northwestern University", memberCount: "+88 members", avatarSeeds: [40, 41, 42, 43] },
  { logoUrl: "/logos/indianarealestate.jpg", name: "Real Estate Club", school: "Indiana University", memberCount: "+65 members", avatarSeeds: [44, 45, 46, 47] },
];

