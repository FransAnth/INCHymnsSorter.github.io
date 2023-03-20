/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blackHeader: "#002029",
        blueDarkest: "#00303d",
        blueDark: "#004052",
        blueLight: "#005066",
        blueLigthest: "#00607a",
        red: "#FF5959",
      },
      fontFamily: {
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
};
