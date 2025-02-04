import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#6366F1",
          DEFAULT: "#4F46E5",
          dark: "#4338CA",
        },
      },
    },
  },
  plugins: [],
};

export default config;
