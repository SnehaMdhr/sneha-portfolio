
import Image from "next/image";
import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";

/* Screenshot placeholders for projects without images */
function ProjectScreenshot({ index }: { index: number }) {
  const layouts = [
    <div key="dash" className="relative flex h-full w-full flex-col gap-3 p-5">
      <div className="flex items-center gap-2">
        <div className="h-2.5 w-2.5 rounded-full bg-[#A855F7]/40" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#FCA5A5]/50" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#34D399]/40" />
        <div className="ml-2 h-2 flex-1 rounded-full bg-[#7C3AED]/10" />
      </div>

      <div className="flex flex-1 gap-3">
        <div className="w-1/4 space-y-2 rounded-lg bg-[#7C3AED]/[0.06] p-2">
          <div className="h-2 w-full rounded bg-[#7C3AED]/15" />
          <div className="h-2 w-3/4 rounded bg-[#7C3AED]/10" />
          <div className="h-2 w-1/2 rounded bg-[#7C3AED]/10" />
        </div>

        <div className="flex-1 space-y-2 rounded-lg bg-[#7C3AED]/[0.06] p-3">
          <div className="h-3 w-1/3 rounded bg-[#7C3AED]/15" />
          <div className="grid flex-1 grid-cols-3 gap-2">
            <div className="rounded bg-[#7C3AED]/10" />
            <div className="rounded bg-[#FCA5A5]/20" />
            <div className="rounded bg-[#34D399]/20" />
          </div>
        </div>
      </div>
    </div>,

    <div key="mobile" className="flex h-full items-center justify-center p-5">
      <div className="flex h-[85%] w-[55%] flex-col overflow-hidden rounded-[20px] border border-[#DDD6FE] bg-white">
        <div className="flex items-center justify-center py-1.5">
          <div className="h-1 w-8 rounded-full bg-[#7C3AED]/20" />
        </div>

        <div className="flex-1 space-y-2 p-3">
          <div className="h-3 w-2/3 rounded bg-[#7C3AED]/15" />
          <div className="h-2 w-full rounded bg-[#7C3AED]/10" />
          <div className="h-2 w-4/5 rounded bg-[#7C3AED]/10" />

          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="h-12 rounded-lg bg-[#E9E6FF]" />
            <div className="h-12 rounded-lg bg-[#FFDADA]" />
          </div>

          <div className="mt-2 h-8 w-full rounded-lg bg-[#D1FAE5]" />
        </div>
      </div>
    </div>,

    <div key="code" className="flex h-full flex-col p-4">
      <div className="mb-2 flex items-center gap-1.5">
        <div className="h-2 w-2 rounded-full bg-[#7C3AED]/40" />
        <div className="h-2 w-2 rounded-full bg-[#FCA5A5]" />
        <div className="h-2 w-2 rounded-full bg-[#34D399]" />
      </div>

      <div className="flex-1 space-y-1.5 rounded-lg bg-[#7C3AED]/[0.06] p-3 font-mono text-[8px]">
        <div className="flex gap-2">
          <span className="text-[#7C3AED]/40">01</span>
          <span className="text-[#7C3AED]">import</span>
          <span className="text-[#49465D]">react</span>
        </div>

        <div className="flex gap-2">
          <span className="text-[#7C3AED]/40">02</span>
          <span className="text-[#7C3AED]">export</span>
          <span className="text-[#49465D]">function App()</span>
        </div>

        <div className="flex gap-2">
          <span className="text-[#7C3AED]/40">03</span>
          <span className="text-[#7C3AED]">return</span>
        </div>

        <div className="flex gap-2">
          <span className="text-[#7C3AED]/40">04</span>
          <span className="text-[#49465D]">{"<div>"}</span>
        </div>

        <div className="flex gap-2">
          <span className="text-[#7C3AED]/40">05</span>
          <span className="text-[#49465D]">{"<h1>"}</span>
        </div>

        <div className="flex gap-2">
          <span className="text-[#7C3AED]/40">06</span>
          <span className="text-[#49465D]">Hello World</span>
        </div>
      </div>
    </div>,
  ];

  return layouts[index % layouts.length];
}

/* Technology tag colours */
const techColors = [
  "bg-[#E5E3FF] text-[#3730A3]", // Purple
  "bg-[#FFDADA] text-[#991B1B]", // Coral
  "bg-[#D1FAE5] text-[#065F46]", // Mint green
];

function getTechColor(index: number) {
  return techColors[index % techColors.length];
}

/* Project button colours */
const buttonColors = [
  "bg-[#4945DF] text-white hover:bg-[#3935C8]", // Purple
  "bg-[#E9E6FF] text-[#191644] hover:bg-[#DCD7FF]", // Lavender
  "bg-[#FFDADA] text-[#991B1B] hover:bg-[#FFCACA]", // Coral
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-10">
      <div className="relative">
        <SectionHeading title="Projects" label="🚀 Things I built" />

        <div className="space-y-8">
          {projects.map((project, i) => {
            const isReversed = i % 2 === 1;

            return (
              <article
                key={project.title}
                className="card-hover group relative overflow-hidden rounded-[28px] border border-[#EEEAF5] bg-white shadow-card transition-all duration-300 hover:shadow-card-hover"
              >
                <div
                  className={`relative flex flex-col ${
                    isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  {/* Project Screenshot */}
                  <div className="relative flex items-center justify-center p-6 sm:p-8 lg:w-1/2">
                    <div className="relative h-[200px] w-full overflow-hidden rounded-2xl border border-[#E5DEFF] bg-[#F6F2FF] shadow-pop sm:h-[250px]">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={`${project.title} screenshot`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-contain p-2"
                        />
                      ) : (
                        <ProjectScreenshot index={i} />
                      )}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-col justify-center p-6 sm:p-8 lg:w-1/2">

                    {/* Technology Tags */}
                    <div className="mb-4 flex flex-wrap gap-2.5">
                      {project.stack.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className={`rounded-full px-3.5 py-1.5 text-xs font-medium sm:text-sm ${getTechColor(
                            techIndex
                          )}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Title */}
                    <h3 className="mb-3 font-sans text-2xl font-extrabold tracking-tight text-[#191919] sm:text-3xl">
  {project.title}
</h3>

                    {/* Project Description */}
                    <p className="mb-5 text-left text-sm leading-relaxed !text-[#222222] sm:text-base sm:leading-[1.6]">
  {project.description}
</p>

                    {/* Project Links */}
                    <div className="flex flex-wrap items-center gap-3">
                      {project.links.map((link, li) => (
                        <a
                          key={link.href + link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 font-sans text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 sm:text-sm ${
                            buttonColors[li % buttonColors.length]
                          }`}
                        >
                          {link.label} ↗
                        </a>
                      ))}
                    </div>

                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
