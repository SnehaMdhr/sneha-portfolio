import Image from "next/image";
import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";

/* Screenshot placeholder components - purple wireframes */
function ProjectScreenshot({ index }: { index: number }) {
  const layouts = [
    <div key="dash" className="relative flex h-full w-full flex-col gap-3 p-5">
      <div className="flex items-center gap-2">
        <div className="h-2.5 w-2.5 rounded-full bg-accent-bright/40" />
        <div className="h-2.5 w-2.5 rounded-full bg-accent-neon/30" />
        <div className="h-2.5 w-2.5 rounded-full bg-accent/20" />
        <div className="ml-2 h-2 flex-1 rounded-full bg-accent/10" />
      </div>
      <div className="flex flex-1 gap-3">
        <div className="w-1/4 space-y-2 rounded-lg bg-accent/[0.06] p-2">
          <div className="h-2 w-full rounded bg-accent/15" />
          <div className="h-2 w-3/4 rounded bg-accent/10" />
          <div className="h-2 w-1/2 rounded bg-accent/8" />
        </div>
        <div className="flex-1 space-y-2 rounded-lg bg-accent/[0.06] p-3">
          <div className="h-3 w-1/3 rounded bg-accent/15" />
          <div className="grid grid-cols-3 gap-2 flex-1">
            <div className="rounded bg-accent/8" />
            <div className="rounded bg-accent/8" />
            <div className="rounded bg-accent/8" />
          </div>
        </div>
      </div>
    </div>,
    <div key="mobile" className="flex h-full items-center justify-center p-5">
      <div className="flex h-[85%] w-[55%] flex-col overflow-hidden rounded-[20px] border border-accent/15 bg-accent/[0.06]">
        <div className="flex items-center justify-center py-1.5">
          <div className="h-1 w-8 rounded-full bg-accent/20" />
        </div>
        <div className="flex-1 space-y-2 p-3">
          <div className="h-3 w-2/3 rounded bg-accent/15" />
          <div className="h-2 w-full rounded bg-accent/8" />
          <div className="h-2 w-4/5 rounded bg-accent/8" />
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="h-12 rounded-lg bg-accent/10" />
            <div className="h-12 rounded-lg bg-accent/10" />
          </div>
          <div className="mt-2 h-8 w-full rounded-lg bg-accent/15" />
        </div>
      </div>
    </div>,
    <div key="code" className="flex h-full flex-col p-4">
      <div className="mb-2 flex items-center gap-1.5">
        <div className="h-2 w-2 rounded-full bg-accent/40" />
        <div className="h-2 w-2 rounded-full bg-accent-bright/30" />
        <div className="h-2 w-2 rounded-full bg-accent-neon/20" />
      </div>
      <div className="flex-1 space-y-1.5 rounded-lg bg-accent/[0.06] p-3 font-mono text-[8px]">
        <div className="flex gap-2"><span className="text-accent/40">01</span><span className="text-accent-neon/30">import</span><span className="text-ink-muted/30">react</span></div>
        <div className="flex gap-2"><span className="text-accent/40">02</span><span className="text-accent-neon/30">export</span><span className="text-ink-muted/30">function App()</span></div>
        <div className="flex gap-2"><span className="text-accent/40">03</span><span className="text-ink-muted/20">{"  "}</span><span className="text-accent-neon/30">return</span></div>
        <div className="flex gap-2"><span className="text-accent/40">04</span><span className="text-ink-muted/20">{"    "}</span><span className="text-accent/20">{"<"}</span><span className="text-ink-muted/30">div</span><span className="text-accent/20">{">"}</span></div>
        <div className="flex gap-2"><span className="text-accent/40">05</span><span className="text-ink-muted/20">{"      "}</span><span className="text-accent/20">{"<"}</span><span className="text-ink-muted/30">h1</span><span className="text-accent/20">{">"}</span></div>
        <div className="flex gap-2"><span className="text-accent/40">06</span><span className="text-ink-muted/20">{"        "}</span><span className="text-ink-muted/20">Hello World</span></div>
      </div>
    </div>,
  ];
  return layouts[index % layouts.length];
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-5">
      <div className="relative">
        <SectionHeading title="Projects" />
        <div className="space-y-6">
          {projects.map((project, i) => {
            const isReversed = i % 2 === 1;
            return (
              <article
                key={project.title}
                className="group relative overflow-hidden rounded-2xl border border-line bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-accent-neon/45 hover:bg-card-hover/80 card-hover"
              >
                <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-accent/[0.06] opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100" />
                <div className={`relative flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                  {/* Screenshot with purple ambient glow */}
                  <div className="relative flex items-center justify-center p-6 sm:p-8 lg:w-1/2">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-[70%] w-[70%] rounded-full bg-accent/[0.08] blur-[50px]" />
                    </div>
                    <div
                      className="relative h-[200px] w-full overflow-hidden rounded-xl border border-accent/15 bg-panel/60 sm:h-[250px]"
                      style={{ boxShadow: "0 0 45px rgba(139, 92, 246, 0.20)" }}
                    >
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

                  {/* Content */}
                  <div className="flex flex-col justify-center p-6 sm:p-8 lg:w-1/2">
                    <h3 className="mb-2 font-sans text-xl font-bold text-ink sm:text-2xl">
                      {project.title}
                    </h3>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="tag-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="mb-6 text-[14.5px] leading-relaxed text-ink-muted">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.links.map((link) => (
                        <a
                          key={link.href + link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-glow inline-flex items-center gap-1.5 rounded-lg border border-accent/25 bg-accent/12 px-4 py-2 font-mono text-[12.5px] text-accent-neon transition-all hover:border-accent-neon/50 hover:bg-accent/20"
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
