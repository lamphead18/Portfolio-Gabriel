import type { Config } from "tailwindcss";

const config = {
  content: {
    files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    safelist: [
      "bg-background",
      "bg-surface",
      "bg-primary",
      "bg-secondary",
      "text-text",
      "text-muted",
      "text-highlight",
      "text-error",
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [],
} as unknown as Config;

export default config;
