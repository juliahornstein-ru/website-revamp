import type { LegalContentItem, LegalSection, LegalTable } from "./legalSections";
import { legalSections } from "./legalSections";

const MAJOR_SECTION_IDS = ["privacy-policy", "terms-of-use"] as const;
function isMajorSection(id: string): boolean {
  return MAJOR_SECTION_IDS.includes(id as (typeof MAJOR_SECTION_IDS)[number]);
}

/** Subsections of "Information We Collect About You and How We Collect It" — smaller title style. */
const INFO_COLLECT_SUBSECTION_IDS = [
  "automatic-data-collection",
  "third-party-tracking",
  "how-we-use",
  "disclosure",
  "choices",
  "accessing-correcting",
  "state-privacy-rights",
  "data-security",
  "changes-policy",
] as const;
function isInfoCollectSubsection(id: string): boolean {
  return (INFO_COLLECT_SUBSECTION_IDS as readonly string[]).includes(id);
}

function isLegalBlock(item: LegalContentItem): item is { subheading: string; paragraphs: string[] } {
  return typeof item === "object" && item !== null && "subheading" in item;
}

function isLegalTable(item: LegalContentItem): item is LegalTable {
  return typeof item === "object" && item !== null && "rows" in item && "headerCol1" in item;
}

const paragraphClass = "font-sans text-[0.9375rem] leading-relaxed text-[var(--gray-700)]";
const subheadingClass = "font-sans text-[1rem] font-semibold text-[var(--gray-900)]";
const sectionTitleClass = "font-sans text-[1.125rem] font-semibold text-[var(--gray-900)]";

function SectionContent({ section, isFirst }: { section: LegalSection; isFirst: boolean }) {
  const major = isMajorSection(section.id);
  const isTermsOfUse = section.id === "terms-of-use";
  const isSubsection = isInfoCollectSubsection(section.id);

  const sectionMargin = isFirst
    ? "mt-0"
    : isSubsection
      ? "mt-8"
      : "mt-14";

  return (
    <>
      {isTermsOfUse && (
        <hr className="border-t border-[var(--gray-200)] mt-16 mb-0" aria-hidden />
      )}
      <section
        id={section.id}
        className={`scroll-mt-24 ${isTermsOfUse ? "pt-12" : ""} ${sectionMargin}`}
      >
        {isSubsection ? (
          <h3 className={`${subheadingClass} mb-4`}>{section.title}</h3>
        ) : (
          <h2
            className={
              major
                ? "font-serif text-[1.75rem] font-normal text-[var(--gray-900)] mb-5"
                : `${sectionTitleClass} mb-4`
            }
          >
            {section.title}
          </h2>
        )}
        <div className="space-y-4">
          {section.content.map((item, i) => {
            if (isLegalBlock(item)) {
              return (
                <div key={i} className="space-y-3">
                  <h3 className={subheadingClass}>{item.subheading}</h3>
                  {item.paragraphs.map((p, j) => (
                    <p key={j} className={paragraphClass}>
                      {p}
                    </p>
                  ))}
                </div>
              );
            }
            if (isLegalTable(item)) {
              return (
                <div key={i} className="my-6 overflow-x-auto">
                  <table className="w-full border-collapse border border-[var(--gray-300)] font-sans text-[0.9375rem]">
                    <thead>
                      <tr className="bg-[var(--gray-100)]">
                        <th className="border border-[var(--gray-300)] px-3 py-2.5 text-left font-semibold text-[var(--gray-900)]">
                          {item.headerCol1}
                        </th>
                        <th className="border border-[var(--gray-300)] px-3 py-2.5 text-left font-semibold text-[var(--gray-900)]">
                          {item.headerCol2}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.rows.map((row, j) => (
                        <tr key={j}>
                          <td className="border border-[var(--gray-300)] px-3 py-2.5 align-top text-[var(--gray-700)]">
                            <p className="font-semibold text-[var(--gray-900)] mb-1 last:mb-0">{row.category}</p>
                            {row.description && (
                              <p className="font-normal text-[var(--gray-700)] mb-0">{row.description}</p>
                            )}
                          </td>
                          <td className="border border-[var(--gray-300)] px-3 py-2.5 align-top text-[var(--gray-700)]">
                            <p className="mb-0">{row.disclosedTo}</p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }
            return (
              <p key={i} className={paragraphClass}>
                {item}
              </p>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default function LegalContent() {
  return (
    <div>
      {legalSections.map((section, index) => (
        <SectionContent key={section.id} section={section} isFirst={index === 0} />
      ))}
    </div>
  );
}
