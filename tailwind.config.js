/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        yellowtail: ["Yellowtail"],
      },
      backgroundImage: {
        "index-pattern": "url('/hpwp.jpg')",
        lgbackground: "url('/lggradient.jpg')",
        lgbackground2: "url('/g1.jpg')",
        lgbackground3: "url('/overlaypic.jpg')",
        tealgrad: "url('/tealgrad.jpeg')",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      teal: "#0369a1",
      sky: "#38bdf8",
      darkblue: "#1e3a8a",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      grey: "#6b7280",
      black: "#0f172a",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
