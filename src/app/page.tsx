import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ScrollSection from "@/components/ScrollSection";
import PeopleCard from "@/components/PeopleCard";
import JobCard from "@/components/JobCard";
import ClubCard from "@/components/ClubCard";
import SankeyCareerPaths from "@/components/SankeyCareerPaths";
import TrackDropdown from "@/components/TrackDropdown";
import StudentCTA from "@/components/StudentCTA";
import Footer from "@/components/Footer";
import { peopleCards } from "@/data/peopleCards";
import { jobCards } from "@/data/jobCards";
import { clubCards } from "@/data/clubCards";

/**
 * Student Landing Page
 *
 * This is the single page we're building: the "For Students" experience only.
 * It composes: Nav → Hero → Your network (people) → Career paths (Sankey) → Open roles (jobs) → Your clubs → CTA → Footer.
 */
export default function Home() {
  return (
    <>
      <Nav />

      <main>
        <Hero />

        {/* Section 1: Your network — horizontal scroll of people cards */}
        <section className="py-10 md:py-12 border-b border-[#eeecea] bg-[#faf9f6] px-5 md:px-12">
          <div className="max-w-[1200px] mx-auto px-0 md:px-12">
            <ScrollSection
              id="track-people"
              kicker="Your network"
              title="Find the people that matter to you."
              subtitle={undefined}
            >
              {peopleCards.map((item) => (
                <PeopleCard key={item.name + item.company} item={item} />
              ))}
            </ScrollSection>
          </div>
        </section>

        {/* Section 2: Career paths — Sankey diagram */}
        <section className="py-9 pb-11 border-b border-[#eeecea] bg-white px-5 md:px-12">
          <div className="max-w-[1200px] mx-auto px-0 md:px-12">
            {/* Header: kicker + title row (title/subtitle left, Finance Track pill right) */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[#2563EB]">Career paths</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <h2 className="font-serif text-[clamp(1.9rem,2.6vw,2.6rem)] font-normal leading-tight tracking-tight text-[#111]">
                    See exactly how people like you got there.
                  </h2>
                  <p className="font-sans text-[0.84rem] leading-relaxed font-light mt-2 max-w-[440px] text-[#777]">
                    Your peers have already mapped the way. Explore the different paths taken to get to where you want to go.
                  </p>
                </div>
                <TrackDropdown />
              </div>
            </div>

            <SankeyCareerPaths />

            <div className="flex items-center justify-between mt-4 flex-wrap gap-3">
              <span className="font-sans text-[0.76rem] text-[#aaa]">
                Paths based on 50,000+ alumni across 800+ universities.
              </span>
              <button
                type="button"
                className="inline-flex items-center gap-2 font-mono text-[0.52rem] tracking-[.1em] uppercase px-5 py-2.5 rounded-md border border-[#111] bg-white text-[#111] hover:bg-[#111] hover:text-white transition-colors group"
              >
                Map your own path
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </button>
            </div>
          </div>
        </section>

        {/* Section 3: Open roles — horizontal scroll of job cards */}
        <section className="py-10 md:py-12 border-b border-[#eeecea] bg-[#faf9f6] px-5 md:px-12">
          <div className="max-w-[1200px] mx-auto px-0 md:px-12">
            <ScrollSection
              id="track-jobs"
              kicker="Open roles"
              title="Discover your next opportunity."
            >
              {jobCards.map((item) => (
                <JobCard key={item.title} item={item} />
              ))}
            </ScrollSection>
            <div className="flex items-center justify-end mt-4">
              <button
                type="button"
                className="inline-flex items-center gap-2 font-mono text-[0.52rem] tracking-[.1em] uppercase px-5 py-2.5 rounded-md border border-[#111] bg-white text-[#111] hover:bg-[#111] hover:text-white transition-colors group"
              >
                Explore all roles
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </button>
            </div>
          </div>
        </section>

        {/* Section 4: Your clubs — horizontal scroll of club cards */}
        <section className="py-10 md:py-12 border-b border-[#eeecea] bg-white px-5 md:px-12">
          <div className="max-w-[1200px] mx-auto px-0 md:px-12">
            <ScrollSection
              id="track-clubs"
              kicker="Your clubs"
              title="Join your organization."
              subtitle="Connect with current members, explore alumni paths, and see where your organization has placed — across every school and chapter."
            >
              {clubCards.map((item) => (
                <ClubCard key={item.name + item.school} item={item} />
              ))}
            </ScrollSection>
            <div className="flex items-center justify-end mt-4">
              <button
                type="button"
                className="inline-flex items-center gap-2 font-mono text-[0.52rem] tracking-[.1em] uppercase px-5 py-2.5 rounded-md border border-[#111] bg-white text-[#111] hover:bg-[#111] hover:text-white transition-colors group"
              >
                Explore all clubs
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </button>
            </div>
          </div>
        </section>

        <StudentCTA />
      </main>

      <Footer />
    </>
  );
}
