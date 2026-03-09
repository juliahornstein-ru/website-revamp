import Link from "next/link";

/**
 * Footer — Logo and copyright.
 */
export default function Footer() {
  return (
    <footer className="flex items-center justify-between py-6 px-5 md:px-10 border-t border-[var(--gray-200)] bg-white">
      <Link href="#" className="flex items-center gap-2 no-underline text-inherit">
        <div className="flex h-5 w-5 items-center justify-center border-[1.5px] border-[var(--gray-900)]">
          <svg width="9" height="10" viewBox="0 0 13 15" fill="none">
            <path d="M2 1.5h5a3.5 3.5 0 010 7H2M7 8.5l4 5" stroke="#111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span className="font-mono text-[0.5rem] uppercase tracking-[0.16em] text-[var(--gray-900)]">RECRUITU</span>
      </Link>
      <span className="font-mono text-[0.48rem] uppercase tracking-wider text-[var(--gray-500)]">© 2025 RecruitU, Inc.</span>
    </footer>
  );
}
