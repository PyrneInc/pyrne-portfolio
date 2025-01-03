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
      animation: {
        'fade-in': 'fadeIn 1.5s ease-out forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)'},
          '100%': {opacity: '1', tranform: 'translateY(0)'}
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
