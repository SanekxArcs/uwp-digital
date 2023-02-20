/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      width: {
        DEFAULT: "100%",
        phone: "320pxm",
        tablet: "760px",
        laptop: "1650px",
      },
    },

    screens: {
      phone: "360px",
      tablet: "820px",
      laptop: "1920px",
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
      lightred: "#FF445E",
      grey: "#323232",
      darkgrey: "#474747",
      middlegrey: "#919191",
      lightgrey: "#E0E0E0",
      light: "#F8F8F8",
      white: "#FFFFFF",
      prototype: "#457292",
    },
    extend: {},
  },
  plugins: [],
};
