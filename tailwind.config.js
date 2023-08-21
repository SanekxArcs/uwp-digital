/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        width: true,
        center: true,
        screens: {
          sm: "320px",
          md: "768px",
          lg: "1024px",
          xl: "1440px",
          "2xl": "1650px",
        },
      },

      screens: {
        sm: "320px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        "2xl": "1650px",
        "3xl": "1920px",
      },

      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },

      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000",
        dark: "#171717",
        main: "#FF304D",
        activeRed: "#DC2D45",
        lightRed: "#FF445E",
        grey: "#323232",
        darkGrey: "#474747",
        middleGrey: "#919191",
        lightGrey: "#E0E0E0",
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