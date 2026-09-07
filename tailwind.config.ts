import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        anthracite: {
          950: "#0a0b0d",
          900: "#111318",
          800: "#181b21",
          700: "#22262e",
          600: "#2e333d",
          500: "#3d4451",
        },
        accent: {
          DEFAULT: "#ff6a1a",
          light: "#ff8a4c",
          dark: "#e0550a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(0,0,0,0.5)",
        glow: "0 0 40px -10px rgba(255,106,26,0.5)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
