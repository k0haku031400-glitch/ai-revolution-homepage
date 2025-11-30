import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./styles/**/*.css"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans JP", "system-ui", "sans-serif"]
      },
      colors: {
        "ai-red": "#e60012"
      }
    }
  },
  plugins: []
};

export default config;

