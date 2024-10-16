import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import themes from "daisyui/src/theming/themes";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      dmSans: ["DM Sans", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        colorBlack: "#161616",
        colorWhite: "#F2F2F2",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          ...themes["light"],
          primary: "#161616",
          secundary: "#F2F2F2",
          fontFamily: "Roboto, sans-serif",
        },
      },
    ],
  },
};

export default config;
