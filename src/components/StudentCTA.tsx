import Link from "next/link";

/**
 * StudentCTA — Dark bottom section: "Your peers are already on the inside. Join them." + Create Your Profile.
 */
export default function StudentCTA() {
  return (
    <section className="bg-[var(--gray-900)] py-16 px-5 md:px-10">
      <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-14 items-center">
        <h2 className="font-serif text-[clamp(2.2rem,4vw,4.2rem)] font-normal leading-tight tracking-tight text-white">
          Your peers are already
          <br />
          on the inside.
          <br />
          <em className="italic text-white/30">Join them.</em>
        </h2>
        <div className="flex flex-col gap-2.5 min-w-[200px] md:min-w-[200px] w-full md:w-auto">
          <span className="font-mono text-[0.5rem] uppercase tracking-wider text-white/35">
            Free to join · No credit card
          </span>
          <Link
            href="#"
            className="font-mono text-[0.58rem] uppercase tracking-wider py-3 px-6 bg-white text-[var(--gray-900)] rounded-md text-center inline-block hover:bg-[var(--gray-100)] transition-colors"
          >
            Create Your Profile
          </Link>
        </div>
      </div>
    </section>
  );
}
