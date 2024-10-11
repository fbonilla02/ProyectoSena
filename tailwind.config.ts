import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      dmSans: ["DM Sans"],
    },
    extend: {
      colors: {
        colorBlack: "#161616",
        colorWhite: "#F2F2F2",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      daisyui: {
        themes: false,
      },
    },
  },
  // plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
};

export default config;
