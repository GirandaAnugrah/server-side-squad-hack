/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "primary-main": "#FCA34D",
      "secondary-main": "#56CDAD",
      "tertiary-main": "#568DCD",
      "white-main": "#FFFFFF",
      "color-text": "#141414",
      "darkgray-main": "#373737",
      "broken-white": "#FCFCFC",
      "gray-body": "#5B5856",
      "darkred-main": "#FF0000",
    },
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
      "light-gray": "#EFEFF1",
      "darkred-main": "#FF0000",
      "blue-main": "#0A77FF",
    },
    extend: {},
  },
  plugins: [],
};
