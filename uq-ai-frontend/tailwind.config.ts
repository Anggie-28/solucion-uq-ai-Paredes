import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        ocean: "#0f766e",
        limeSoft: "#d9f99d",
        skySoft: "#e0f2fe",
        coral: "#fb7185"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(17, 24, 39, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
