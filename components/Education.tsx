import { education } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="relative py-10">
      <div className="relative">
        <SectionHeading title="Education" label="🎓 Where I studied" tone="mint" />
        <div className="space-y-4">
          {education.map((item) => (
            <article
              key={item.degree}
              className="group relative flex flex-col gap-3 rounded-3xl border border-line-soft bg-card p-5 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:border-line hover:shadow-card-hover sm:flex-row sm:items-center sm:gap-6 sm:p-6"
            >
              <div className="flex shrink-0 items-center gap-3 sm:w-36">
                <span className="rounded-full bg-tint px-3 py-1 font-mono text-[12.5px] font-medium tracking-[0.04em] text-accent-dim">
                  {item.date}
                </span>
                <span className="h-px flex-1 bg-line-soft sm:hidden" />
              </div>

              <div className="min-w-0 flex-1 sm:border-l sm:border-line-soft sm:pl-6">
                <h3 className="flex items-center gap-2 font-sans text-[16.5px] font-bold text-ink">
                  {item.degree}
                </h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-ink-muted">
                  {item.institution}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}