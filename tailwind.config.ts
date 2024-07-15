import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#e93854",
        "text-1": "#8e626a",
        "text_pr": "#4f0e19",
        primary_bg: "#fff9f9",
        secondary_bg: "#fff1f3",
      },
      dropShadow: {
          "3xl": "0 25px 25px rgba(233, 56, 84, 0.50)",
      }
    },
  },
  plugins: [],
};
export default config;
