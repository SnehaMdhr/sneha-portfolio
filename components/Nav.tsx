"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

// Sections tracked by the scroll spy ("home" is tracked so no link stays
// highlighted while the visitor is still at the top of the page)
const spyIds = ["home", ...links.map((link) => link.href.slice(1))];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sections = spyIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      // Narrow band around the middle of the viewport decides the active section
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 max-[639px]:hidden sm:top-5">
      <nav className="relative rounded-2xl border border-line-soft bg-card/85 shadow-card backdrop-blur-xl sm:rounded-full sm:px-2 sm:py-2">
        {/* Desktop links */}
        <div className="hidden items-center gap-1 sm:flex">
          {links.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative whitespace-nowrap rounded-full px-4 py-2 font-sans text-[14.5px] font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-accent text-surface shadow-card"
                    : "text-ink-muted hover:bg-soft hover:text-accent"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Mobile bar */}
        <div className="flex items-center justify-between gap-3 px-5 py-3 sm:hidden">
          <span className="font-mono text-sm font-bold text-accent">SM</span>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line-soft bg-soft text-ink transition-colors duration-200 hover:border-line hover:text-accent"
          >
            {open ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="absolute top-full left-0 right-0 mt-2 flex flex-col gap-1 rounded-2xl border border-line-soft bg-card p-3 shadow-pop sm:hidden">
            {links.map((link) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={`rounded-xl px-4 py-2.5 font-sans text-[14px] font-semibold transition-colors duration-200 ${
                    isActive
                      ? "bg-accent text-surface"
                      : "text-ink-muted hover:bg-soft hover:text-accent"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
           
        </div>
        )}
         
      </nav>
   <a
        href="#contact"
        className="ml-3 hidden self-center whitespace-nowrap rounded-full bg-accent px-6 py-3 font-sans text-[14.5px] font-semibold text-surface shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-dim lg:inline-flex"
      >
        Let&apos;s Talk
      </a>
    </div>
  );
}