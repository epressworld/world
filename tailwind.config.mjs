/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,jsx,mdx}",
    "./src/components/**/*.{js,jsx,mdx}",
    "./src/app/**/*.{js,jsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#e8a04a",
          50: "#FEF3E3",
          100: "#FDE6C7",
          200: "#FBCD8F",
          300: "#FAB457",
          400: "#F89B1F",
          500: "#e8a04a",
          600: "#C67315",
          700: "#945410",
          800: "#62360A",
          900: "#311805",
        },
        accent: {
          green: "#4af0d4",
        },
        dark: {
          bg: "#0a0a0a",
          surface: "#1a1a1a",
          border: "#2a2a2a",
          text: "#f5f5f5",
          muted: "#a0a0a0",
        },
        light: {
          bg: "#ffffff",
          surface: "#fafafa",
          border: "#e5e5e5",
          text: "#1a1a1a",
          muted: "#666666",
        },
      },
      fontFamily: {
        sans: ["var(--font-playfair)", "Georgia", "serif"],
        mono: ["var(--font-ibm-plex)", "monospace"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
    },
  },
  plugins: [],
}

export default config
