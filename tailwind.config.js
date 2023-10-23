import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      primary: "#8736AF",
      "primary-dark": "#712D92",
      "primary-darker": "#5B2476",
      backround: "#A587D7",
    },
    fontFamily: {},
  },
  plugins: [],
};
