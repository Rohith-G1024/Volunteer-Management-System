module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
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
        // navbar:"url('/navbar.jpg')",
      },
    },
  

 variants: {
  extend: {},
},
plugins: [],
};;
