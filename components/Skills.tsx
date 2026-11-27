"use client";

import { skillCategories, type SkillCategory } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const techIcons: Record<string, string> = {
  Flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  Dart: "https://cdn.simpleicons.org/dart/0175C2",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  Pandas: "https://cdn.simpleicons.org/pandas/150458",
  NumPy: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
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
  Postman: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
 Wireframing: "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/pencil-ruler.svg",

Prototyping: "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/workflow.svg",

"UI Design": "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/layout-dashboard.svg",

"Responsive Design": "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/monitor-smartphone.svg",
};

/* Card look per category: icon, icon-box color, pill color */
const tones = {
  lavender: { box: "bg-tint", pill: "bg-tint/60 text-accent-dim" },
  coral: { box: "bg-[#ffdad8]", pill: "bg-[#ffdad8]/60 text-[#8c1520]" },
  mint: { box: "bg-[#6ffbbe]", pill: "bg-[#6ffbbe]/45 text-[#005236]" },
};

const categoryStyle: Record<string, { tone: keyof typeof tones }> = {
  Mobile: {  tone: "lavender" },
  Languages: { tone: "coral" },
  Frontend: { tone: "mint" },
  Backend: { tone: "lavender" },
  Tools: { tone: "coral" },
  Database: { tone: "mint" },
  "Data & Analytics": { tone: "lavender" },
  Concepts: { tone: "coral" },
};

/* Concept icons as inline SVGs */
function ConceptIcon({ name }: { name: string }) {
  if (name === "OOP") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4648d4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    );
  }
  if (name === "CRUD") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4648d4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </svg>
    );
  }
  if (name === "XGBoost") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4648d4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M21 3v6h-6" />
      </svg>
    );
  }
  if (name === "Data Analysis") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4648d4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20V10" />
        <path d="M10 20V4" />
        <path d="M16 20v-7" />
        <path d="M22 20H2" />
      </svg>
    );
  }
  if (name === "Data Visualization") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4648d4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v9l6.5 4" />
      </svg>
    );
  }
  if (name === "REST APIs") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4648d4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
      alt="Express.js"
      className="h-[16px] w-auto"
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = "none";
      }}
    />
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#181445" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386C24 5.373 18.627 0 12 0z"/>
    </svg>
  );
}

function SkillPill({ name, pillClass }: { name: string; pillClass: string }) {
  const icon = techIcons[name];
  const isExpress = name === "Express.js";
  const isGitHub = name === "GitHub";
  const isInline = icon === "__inline__";

  return (
    <div
      className={`flex items-center gap-2 rounded-full px-3 py-1.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card ${pillClass}`}
    >
      <div className="flex h-[16px] w-[16px] flex-shrink-0 items-center justify-center">
        {isExpress ? (
          <ExpressIcon />
        ) : isGitHub ? (
          <GitHubIcon />
        ) : icon && !isInline ? (
          <img
            src={icon}
            alt={name}
            className="h-[16px] w-[16px]"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        ) : (
          <ConceptIcon name={name} />
        )}
      </div>
      <span className="font-sans text-[12.5px] font-semibold">{name}</span>
    </div>
  );
}

function SkillCard({ category }: { category: SkillCategory }) {
  const style = categoryStyle[category.name] ?? { icon: "🧩", tone: "lavender" as const };
  const tone = tones[style.tone];

  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-line-soft bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="flex items-center gap-3">
  
        <h3 className="font-sans text-[17px] font-semibold tracking-tight text-ink">{category.name}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.items.map((item) => (
          <SkillPill key={item} name={item} pillClass={tone.pill} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-10">
      <div className="relative">
        <SectionHeading title="Technical Skills" label="What I use" tone="mint" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
  {skillCategories.map((category) => {
    if (category.name === "Concepts") return null;

    if (category.name === "Tools") {
      const concepts = skillCategories.find(
        (item) => item.name === "Concepts"
      );

      return (
        <div key="tools-concepts" className="flex flex-col gap-4">
          <SkillCard category={category} />
          {concepts && <SkillCard category={concepts} />}
        </div>
      );
    }

    return <SkillCard key={category.name} category={category} />;
  })}
</div>
      </div>
    </section>
  );
}