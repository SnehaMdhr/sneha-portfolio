"use client";

import { skillCategories } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const techIcons: Record<string, string> = {
  Flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  Dart: "https://cdn.simpleicons.org/dart/0175C2",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  Kotlin: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  HTML5: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  GitHub: "__inline__",
  Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  Canva: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
};

/* Concept icons as inline SVGs */
function ConceptIcon({ name }: { name: string }) {
  if (name === "OOP") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    );
  }
  if (name === "CRUD") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </svg>
    );
  }
  if (name === "REST APIs") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    );
  }
  return null;
}

function ExpressIcon() {
  return (
    <img
      src="https://raw.githubusercontent.com/expressjs/expressjs.com/main/public/images/logos/logo-express-white.svg"
      alt="Express.js"
      className="h-[20px] w-auto"
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = "none";
      }}
    />
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#F5F0FF" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386C24 5.373 18.627 0 12 0z"/>
    </svg>
  );
}

function SkillPill({ name }: { name: string }) {
  const icon = techIcons[name];
  const isExpress = name === "Express.js";
  const isGitHub = name === "GitHub";
  const isInline = icon === "__inline__";

  return (
    <div className="group/pill flex items-center gap-2.5 rounded-xl border border-accent/15 bg-accent/[0.06] px-3.5 py-2 transition-all duration-200 hover:border-accent-neon/40 hover:bg-accent/[0.10] hover:shadow-[0_0_12px_rgba(139,92,246,0.15)]">
      <div className="flex h-[20px] w-[20px] flex-shrink-0 items-center justify-center">
        {isExpress ? (
          <ExpressIcon />
        ) : isGitHub ? (
          <GitHubIcon />
        ) : icon && !isInline ? (
          <img
            src={icon}
            alt={name}
            className="h-[18px] w-[18px]"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        ) : (
          <ConceptIcon name={name} />
        )}
      </div>
      <span className="font-sans text-[13px] font-medium text-ink-muted group-hover/pill:text-ink">
        {name}
      </span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-5">
      {/* Subtle purple grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(139, 92, 246, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 1) 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }} />
      {/* Radial purple glow */}
      <div className="pointer-events-none absolute inset-0" style={{
        background: "radial-gradient(ellipse at 50% 50%, rgba(124, 58, 237, 0.06), transparent 70%)"
      }} />

      <div className="relative">
        <SectionHeading title="Technical Skills" />

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const isConcepts = category.name === "Concepts";

            return (
              <div
                key={category.name}
                className={`group relative overflow-hidden rounded-2xl border border-accent/15 bg-[#160A26]/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-neon/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.12)] ${isConcepts ? "col-span-full py-4 px-6" : "col-span-1 p-5"}`}
              >
                {/* Subtle gradient highlight on hover */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.04] via-transparent to-accent-neon/[0.02] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Content */}
                <div className={`relative ${isConcepts ? "flex flex-wrap items-center gap-4" : ""}`}>
                  {/* Category heading */}
                  <div className={`flex items-center gap-2 ${isConcepts ? "" : "mb-3"}`}>
                    <span className="text-accent-bright text-[11px]">✦</span>
                    <h3 className="font-sans text-[13px] font-bold tracking-wide text-accent-neon uppercase">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className={`flex flex-wrap gap-2 ${isConcepts ? "flex-1" : ""}`}>
                    {category.items.map((item) => (
                      <SkillPill key={item} name={item} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
