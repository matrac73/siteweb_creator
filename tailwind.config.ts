import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#f7f1e8",
        chalk: "#fffaf1",
        sand: "#d9c6a7",
        walnut: "#5a3928",
        moss: "#536b55",
        pine: "#203f33",
        fuchsia: "#a92f6f",
        gold: "#b89b5e",
        ink: "#221f1b"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Cormorant Garamond", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(34, 31, 27, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
