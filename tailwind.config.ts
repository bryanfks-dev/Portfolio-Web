import type { Config } from "tailwindcss";
import { createThemes } from "tw-colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        istockWeb: "var(--istock_web)",
      },
    },
  },
  plugins: [
    createThemes({
      light: {
        primary: "#7091E6",
        secondary: "#3D52A0",
        "background-primary": "#EDE8F5",
        subtle: "#ADBBDA",
        highlight: "#8697C4",
        "text-primary": "#000000",
        "text-secondary": "#FFFFFF",
      },
    }),
  ],
};
export default config;
