import { experience } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative py-10">
      <div className="relative">
        <SectionHeading title="Work Experience" label="Where I've worked" tone="lavender" />
        <div className="space-y-4">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="group relative flex flex-col gap-3 rounded-3xl border border-line-soft bg-card p-5 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:border-line hover:shadow-card-hover sm:flex-row sm:items-start sm:gap-6 sm:p-6"
            >
              <div className="flex shrink-0 items-center gap-3 sm:w-44">
                <span className="rounded-full bg-tint px-3 py-1 font-mono text-[12.5px] font-medium tracking-[0.04em] text-accent-dim">
                  {item.period}
                </span>
                <span className="h-px flex-1 bg-line-soft sm:hidden" />
              </div>

              <div className="min-w-0 flex-1 sm:border-l sm:border-line-soft sm:pl-6">
                <h3 className="font-sans text-[17px] font-bold text-ink">{item.role}</h3>
                <p className="mt-1 text-[14px] font-semibold text-accent">{item.company}</p>
                <ul className="mt-3 space-y-2">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-[14px] leading-relaxed text-ink-muted"
                    >
                      <span className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}