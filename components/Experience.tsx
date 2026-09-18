import { experienceCards } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-line py-20">
      <div className="relative">
        <SectionHeading title="Work Experience" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {experienceCards.map((card) => (
            <div
              key={card.title}
              className="group relative overflow-hidden rounded-2xl border border-line bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent-neon/45 hover:bg-card-hover/80 card-hover"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-accent/[0.06] opacity-0 blur-[40px] transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex items-start gap-4">
                <div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-lg"
                  style={{ backgroundColor: `${card.iconBg}18`, border: `1px solid ${card.iconBg}30` }}
                >
                  {card.iconEmoji}
                </div>
                <div>
                  <h3 className="mb-1 font-sans text-[15px] font-semibold text-ink">
                    {card.title}
                  </h3>
                  <p className="font-sans text-[13px] text-ink-muted">{card.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
