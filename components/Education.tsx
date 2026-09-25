import { education } from "@/lib/data";
import SectionHeading from "./SectionHeading";


export default function Education() {
  return (
    <section id="education" className="relative py-5">
      <div className="relative">
        <SectionHeading title="Education" />
        <div className="space-y-3">
          {education.map((item) => (
            <article
              key={item.degree}
              className="group relative flex flex-col gap-3 rounded-[18px] border border-line bg-card/60 p-5 backdrop-blur-sm transition-all duration-[250ms] ease-out hover:-translate-y-0.5 hover:border-accent-neon/45 hover:shadow-[0_0_28px_rgba(139,92,246,0.18)] sm:flex-row sm:items-center sm:gap-6 sm:p-6"
            >
              <div className="flex shrink-0 items-center gap-3 sm:w-32">
                <span className="font-mono text-[12.5px] tracking-[0.08em] text-accent-neon">
                  {item.date}
                </span>
                <span className="h-px flex-1 bg-line-soft sm:hidden" />
              </div>

              <div className="min-w-0 flex-1 sm:border-l sm:border-line-soft sm:pl-6">
                <h3 className="flex items-center gap-2 font-sans text-[15.5px] font-bold text-ink">
                  {item.degree}
                </h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-muted">
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
