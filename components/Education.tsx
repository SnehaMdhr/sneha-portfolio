import { education } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="relative py-5">
      <div className="relative">
        <SectionHeading title="Education" />
        <div className="space-y-4">
          {education.map((item) => (
            <div
              key={item.degree}
              className="rounded-xl border border-line bg-card/50 p-6 backdrop-blur-sm"
            >
              <div className="mb-1 font-mono text-xs text-accent/70">{item.date}</div>
              <h3 className="mb-1 font-sans text-base font-semibold text-ink">{item.degree}</h3>
              <p className="text-sm text-ink-muted">{item.institution}</p>
            </div>
          ))}
        </div>
       
      </div>
    </section>
  );
}
