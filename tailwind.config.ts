import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {  // You need to wrap it in fontFamily
        sans: ['var(--font-lausanne)']
      },
    },
  },
  plugins: [],
} satisfies Config;
