import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        espresso: "var(--espresso)",
        gold: "var(--gold)",
      },
      fontFamily: {
        chivo: ["var(--font-chivo)"],
        hanken: ["var(--font-hanken)"],
      },
    },
  },
  plugins: [],
};
export default config;
