import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="min-h-[60vh] py-16 px-5 md:px-10">
        <div className="max-w-[720px] mx-auto">
          <Link
            href="/"
            className="font-mono text-[0.75rem] uppercase tracking-wider text-[var(--gray-500)] hover:text-[var(--gray-900)] transition-colors inline-block mb-8"
          >
            ← Back
          </Link>
          <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal text-[var(--gray-900)]">
            Privacy
          </h1>
          <p className="font-sans text-[1rem] text-[var(--gray-700)] mt-4">
            Content coming soon.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
