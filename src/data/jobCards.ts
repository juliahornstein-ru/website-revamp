export interface JobCardItem {
  title: string;
  pills: string[];
  alumniCount: string;
}

export const jobCards: JobCardItem[] = [
  { title: "Investment Banking Summer Analyst", pills: ["New York", "Summer 2026", "IB"], alumniCount: "12 alumni from your school" },
  { title: "Summer Analyst, Private Equity", pills: ["New York", "Summer 2026", "PE"], alumniCount: "6 alumni from your school" },
  { title: "Asset & Wealth Management", pills: ["New York", "Full-time", "AWM"], alumniCount: "9 alumni from your school" },
  { title: "Business Analyst, Strategy", pills: ["Chicago", "Full-time", "Consulting"], alumniCount: "8 alumni from your school" },
  { title: "PE Associate, Buyouts", pills: ["New York", "2026 Class", "PE"], alumniCount: "5 alumni from your school" },
  { title: "Sales & Trading", pills: ["New York", "Summer 2026", "S&T"], alumniCount: "7 alumni from your school" },
  { title: "Quantitative Analyst", pills: ["New York", "Full-time", "Quant"], alumniCount: "4 alumni from your school" },
  { title: "Business Analyst, Consulting", pills: ["Boston", "Full-time", "Consulting"], alumniCount: "11 alumni from your school" },
];
