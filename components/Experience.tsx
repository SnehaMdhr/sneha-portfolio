import { experience } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative py-5">
      <div className="relative">
        <SectionHeading title="Work Experience" />
        <div className="space-y-3">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="group relative flex flex-col gap-3 rounded-[18px] border border-line bg-card/60 p-5 backdrop-blur-sm transition-all duration-[250ms] ease-out hover:-translate-y-0.5 hover:border-accent-neon/45 hover:shadow-[0_0_28px_rgba(139,92,246,0.18)] sm:flex-row sm:items-start sm:gap-6 sm:p-6"
            >
              <div className="flex shrink-0 items-center gap-3 sm:w-40">
                <span className="font-mono text-[12.5px] tracking-[0.08em] text-accent-neon">
                  {item.period}
                </span>
                <span className="h-px flex-1 bg-line-soft sm:hidden" />
              </div>

              <div className="min-w-0 flex-1 sm:border-l sm:border-line-soft sm:pl-6">
                <h3 className="font-sans text-[15.5px] font-bold text-ink">{item.role}</h3>
                <p className="mt-1 text-[13.5px] text-accent-neon/90">{item.company}</p>
                <ul className="mt-3 space-y-2">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-ink-muted"
                    >
                      <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-accent-neon/70" />
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
