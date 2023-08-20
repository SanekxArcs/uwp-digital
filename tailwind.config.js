/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1920px",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },

    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000",
        dark: "#171717",
        main: "#FF304D",
        activeRed: "#DC2D45",
        lightred: "#FF445E",
        grey: "#323232",
        darkgrey: "#474747",
        middlegrey: "#919191",
        lightgrey: "#E0E0E0",
        light: "#F8F8F8",
        white: "#FFFFFF",
        prototype: "#457292",
      },
      spacing: {
        98: "26rem",
        100: "28rem",
        102: "30rem",
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};