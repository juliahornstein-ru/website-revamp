import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LegalContent from "./LegalContent";

const SIDEBAR_LINKS = [
  { label: "Privacy Policy", href: "#privacy-policy" },
  { label: "Terms and Conditions", href: "#terms-of-use" },
] as const;

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="min-h-[60vh] py-16 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row gap-10 md:gap-14">
          <aside className="md:w-[180px] shrink-0">
            <div className="sticky top-[78px]">
              <Link
                href="/"
                className="font-mono text-[0.75rem] uppercase tracking-wider text-[var(--gray-500)] hover:text-[var(--gray-900)] transition-colors inline-block mb-6"
              >
                ← Back
              </Link>
              <nav aria-label="Page sections">
                <ul className="flex md:flex-col gap-1">
                  {SIDEBAR_LINKS.map(({ label, href }) => (
                    <li key={href}>
                      <a
                        href={href}
                        className="font-sans text-[0.9rem] text-[var(--gray-700)] hover:text-[var(--gray-900)] transition-colors py-1.5 block border-l-2 border-transparent hover:border-[var(--gray-300)] pl-3 -ml-px"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>
          <div className="min-w-0 flex-1">
            <LegalContent />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
