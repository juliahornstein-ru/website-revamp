import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
        sans: ["var(--font-instrument-sans)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      colors: {
        "recruitu": {
          white: "#ffffff",
          "gray-50": "#F9F9F9",
          "gray-100": "#F3F3F3",
          "gray-200": "#E8E8E8",
          "gray-300": "#D1D1D1",
          "gray-500": "#8A8A8A",
          "gray-700": "#444444",
          "gray-900": "#111111",
          blue: "#1A3DFF",
          "blue-light": "#EEF1FF",
        },
      },
    },
  },
  plugins: [],
};

export default config;
