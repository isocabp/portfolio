/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1180px",
        xl: "1180px",
        "2xl": "1180px",
      },
    },
    extend: {
      colors: {
        // tema escuro
        cherry: {
          dark: "#72262C",
          medium: "#64313E",
        },
        lesbianGreen: {
          light: "#616247",
          dark: "#4A5D23",
        },
        dark: "#1c1b1b",
        black: "#000000",

        // tema claro
        lilac: "#A68DCE",
        purple: "#5C3C85",
        roxo: "#3D1365",
        "purple-muted": "#533C64",
        white: "#FFFFFF",
        offwhite: "#F4F0EB",
        "lavender-white": "#F8F4FF",
      },

      fontFamily: {
        cursive: ['"Dancing Script"', "cursive"], // ou 'Pacifico'
        modern: ['"Poppins"', "sans-serif"], // ou 'Sora'
        code: ['"Fira Code"', "monospace"],
      },

      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1400px",
      },

      animation: {
        "slide-in-left": "slide-in-left 0.3s ease-out forwards",
        "slide-out-left": "slide-out-left 0.3s ease-in forwards",
        "gradient-shimmer": "gradient-shimmer 3s ease infinite",
      },

      keyframes: {
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-out-left": {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(-100%)", opacity: "0" },
        },
        "gradient-shimmer": {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
