import Image from "next/image";
import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";

/* ---------- Link icons ---------- */
function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function DesignIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m12 19 7-7 3 3-7 7-3-3z" />
      <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="m2 2 7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}

function LiveIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

type LinkKind = "live" | "design" | "code";

function linkKind(label: string): LinkKind {
  const l = label.toLowerCase();
  if (l.includes("live") || l.includes("demo")) return "live";
  if (l.includes("figma") || l.includes("design")) return "design";
  return "code";
}

function KindIcon({ kind }: { kind: LinkKind }) {
  if (kind === "live") return <LiveIcon />;
  if (kind === "design") return <DesignIcon />;
  return <GithubIcon />;
}

/* Screenshot placeholder components - soft wireframes (shown only when a project has no image) */
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
          <div className="h-2 w-1/2 rounded bg-accent/10" />
        </div>
        <div className="flex-1 space-y-2 rounded-lg bg-accent/[0.06] p-3">
          <div className="h-3 w-1/3 rounded bg-accent/15" />
          <div className="grid grid-cols-3 gap-2 flex-1">
            <div className="rounded bg-accent/10" />
            <div className="rounded bg-accent/10" />
            <div className="rounded bg-accent/10" />
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
          <div className="h-2 w-full rounded bg-accent/10" />
          <div className="h-2 w-4/5 rounded bg-accent/10" />
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
        <div className="flex gap-2"><span className="text-accent/40">01</span><span className="text-accent/60">import</span><span className="text-ink-muted/50">react</span></div>
        <div className="flex gap-2"><span className="text-accent/40">02</span><span className="text-accent/60">export</span><span className="text-ink-muted/50">function App()</span></div>
        <div className="flex gap-2"><span className="text-accent/40">03</span><span className="text-ink-muted/30">{"  "}</span><span className="text-accent/60">return</span></div>
        <div className="flex gap-2"><span className="text-accent/40">04</span><span className="text-ink-muted/30">{"    "}</span><span className="text-accent/40">{"<"}</span><span className="text-ink-muted/50">div</span><span className="text-accent/40">{">"}</span></div>
        <div className="flex gap-2"><span className="text-accent/40">05</span><span className="text-ink-muted/30">{"      "}</span><span className="text-accent/40">{"<"}</span><span className="text-ink-muted/50">h1</span><span className="text-accent/40">{">"}</span></div>
        <div className="flex gap-2"><span className="text-accent/40">06</span><span className="text-ink-muted/30">{"        "}</span><span className="text-ink-muted/40">Hello World</span></div>
      </div>
    </div>,
  ];
  return layouts[index % layouts.length];
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-10">
      <div className="relative">
        <SectionHeading title="Projects" label="🚀 Things I built" />
        <div className="space-y-8">
          {projects.map((project, i) => {
            const isReversed = i % 2 === 1;
            const isFeatured = i === 0;

            // The screenshot opens the live demo if there is one, otherwise the first link
            const liveLink = project.links.find((l) => linkKind(l.label) === "live");
            const mainLink = liveLink ?? project.links[0];
            const mainKind = mainLink ? linkKind(mainLink.label) : "code";
            const tagText = mainKind === "live" ? "Open live demo" : mainKind === "design" ? "View design" : "View source";

            return (
              <article
                key={project.title}
                className={`card-hover group relative overflow-hidden rounded-3xl border bg-card shadow-card ${
                  isFeatured ? "border-accent/40 shadow-pop ring-4 ring-tint" : "border-line-soft"
                }`}
              >
                <div className={`relative flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                  {/* Screenshot (clickable) */}
                  <div className="relative flex items-center justify-center p-6 sm:p-8 lg:w-1/2">
                    {(() => {
                      const frame = (
                        <div className="relative h-[200px] w-full overflow-hidden rounded-2xl border border-line-soft bg-soft shadow-pop sm:h-[250px]">
                          {project.image ? (
                            <Image
                              src={project.image}
                              alt={`${project.title} screenshot`}
                              fill
                              sizes="(max-width: 1024px) 100vw, 50vw"
                              className="object-contain p-2 transition-transform duration-500 group-hover/shot:scale-[1.03]"
                            />
                          ) : (
                            <ProjectScreenshot index={i} />
                          )}
                          {mainLink && (
                            <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-card/95 px-3 py-1.5 font-sans text-[12px] font-semibold text-ink shadow-card transition-all duration-300 group-hover/shot:bg-accent group-hover/shot:text-surface">
                              <KindIcon kind={mainKind} />
                              {tagText} ↗
                            </span>
                          )}
                        </div>
                      );

                      return mainLink ? (
                        <a
                          href={mainLink.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${tagText}: ${project.title}`}
                          className="group/shot block w-full"
                        >
                          {frame}
                        </a>
                      ) : (
                        frame
                      );
                    })()}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center p-6 sm:p-8 lg:w-1/2">
                    {isFeatured && (
                      <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#ffdad8] px-3 py-1 font-sans text-[11px] font-bold uppercase tracking-wider text-[#8c1520]">
                        ⭐ Featured Project
                      </span>
                    )}
                    <h3 className="mb-3 font-sans text-2xl font-extrabold tracking-tight text-ink sm:text-[28px]">
                      {project.title}
                    </h3>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="tag-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="mb-6 text-left text-[14.5px] leading-relaxed text-ink-muted">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.links.map((link) => {
                        const kind = linkKind(link.label);
                        const isMain = link === mainLink;
                        return (
                          <a
                            key={link.href + link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 font-sans text-[13px] font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                              isMain
                                ? "bg-accent text-surface shadow-card hover:shadow-card-hover"
                                : "border border-line bg-card text-ink hover:border-accent hover:text-accent"
                            }`}
                          >
                            <KindIcon kind={kind} />
                            {link.label} ↗
                          </a>
                        );
                      })}
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