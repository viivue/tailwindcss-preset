/** @type {import('tailwindcss').Config} */
import config from "./theme.config.json" with { type: "json" };

import myTailwindPreset from '../dist/index.js';
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],

  presets: [myTailwindPreset(config)],
};
