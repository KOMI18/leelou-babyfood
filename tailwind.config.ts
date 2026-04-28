import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ta couleur principale #f0463c
        leelou: {
          DEFAULT: "#f0463c",
          soft: "#fff5f4",
          cream: "#fffbf9",
          dark: "#d63a32", // Une variante un peu plus sombre pour les survols
        },
      },
      fontFamily: {
        // On définit les polices pour pouvoir les utiliser avec font-serif et font-sans
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-outfit)", "sans-serif"],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      }
    },
  },
  plugins: [],
};
export default config;