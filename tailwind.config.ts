import type { Config } from "tailwindcss";

const config: Config = {
  // Light theme only: stops the visitor's dark mode from changing the site
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // surfaces
        base: "#fcf8ff",
        surface: "#ffffff",
        panel: "#ffffff",
        card: "#ffffff",
        "card-hover": "#ffffff",
        soft: "#f6f2ff",
        tint: "#e1e0ff",

        // borders
        line: "rgba(70, 72, 212, 0.22)",
        "line-soft": "rgba(70, 72, 212, 0.12)",

        // accent
        accent: "#4648d4",
        "accent-bright": "#4648d4",
        "accent-neon": "#4648d4",
        "accent-dim": "#2f2ebe",

        // text
        ink: "#181445",
        "ink-muted": "#464554",
        "ink-faint": "rgba(70, 69, 84, 0.7)",

        purple: {
          glow: "rgba(70, 72, 212, 0.25)",
          "glow-soft": "rgba(70, 72, 212, 0.12)",
          "glow-bright": "rgba(70, 72, 212, 0.35)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        card: "0 2px 12px rgba(24, 20, 69, 0.06)",
        "card-hover": "0 14px 34px -14px rgba(70, 72, 212, 0.3)",
        pop: "0 20px 40px -15px rgba(70, 72, 212, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;