import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Primary Colors
        dark: "#1a1a1a",
        grey: "#2e2e2e",
        white: colors.white,

       
        // Accent Colors
        electricBlue: '#00aaff',
        neonGreen: '#39ff14',
        softPurple: '#6c5ce7',
        metallicGrey: '#b0b0b0',

        // Secondary Colors
        mutedPink: '#ff4d6d',
        amber: '#ffbf00',
      },
    },
  },
  plugins: [],
} satisfies Config;
