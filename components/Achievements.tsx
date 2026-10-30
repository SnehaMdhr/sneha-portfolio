import { achievements } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-10">
      <div className="relative">
        <SectionHeading title="Achievements" label="Recognition" tone="coral" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {achievements.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-line-soft bg-card p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-line hover:shadow-card-hover"
            >
              <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-tint text-[11px] font-bold text-accent-dim">
                ✓
              </span>
              <span className="text-[14.5px] font-medium leading-snug text-ink">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}