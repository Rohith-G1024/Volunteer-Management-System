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
  },
};
