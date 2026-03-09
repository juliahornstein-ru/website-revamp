export interface PeopleCardItem {
  initials: string;
  name: string;
  role: string;
  company: string;
  badge: string;
  badgeVariant?: "g" | "p" | "a" | "b";
  reason: string;
}

export const peopleCards: PeopleCardItem[] = [
  { initials: "AL", name: "Alex L.", role: "VP, PE", company: "Blackstone", badge: "Just joined", badgeVariant: "g", reason: "From your finance club — moved into the PE group you're targeting." },
  { initials: "JM", name: "Jamie M.", role: "Associate", company: "Bain & Co.", badge: "Open to calls", badgeVariant: "p", reason: "Michigan alum. Has 3 coffee chat slots available this week." },
  { initials: "DK", name: "David K.", role: "Principal", company: "KKR", badge: "2 shared", badgeVariant: "a", reason: "Hired 4 analysts from your school in the last 2 years." },
  { initials: "MR", name: "Maya R.", role: "Analyst", company: "Goldman IBD", badge: "Same school", badgeVariant: "b", reason: "Class of '23. Went through the same recruiting cycle as you." },
  { initials: "ET", name: "Ethan T.", role: "Analyst", company: "Blackstone", badge: "Same school", badgeVariant: "b", reason: "Vanderbilt '24. Actively recruits back to campus each cycle." },
  { initials: "JH", name: "James H.", role: "MD", company: "Warburg Pincus", badge: "Recruiter", badgeVariant: "a", reason: "Active recruiter at Warburg. Sourced 6 analysts from your school this cycle." },
  { initials: "AS", name: "Aisha S.", role: "Associate", company: "McKinsey", badge: "Open to calls", badgeVariant: "p", reason: "MBB offer after junior summer. Happy to walk through her recruiting timeline." },
  { initials: "BN", name: "Ben N.", role: "Analyst", company: "Evercore ISI", badge: "Same school", badgeVariant: "b", reason: "Duke '24. Broke into restructuring — one of 3 from your school at Evercore." },
];
