/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./template/**/*.{html,js}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily : {
        "source" : ['Dai Banna SIL', 'serif']
      }
    },
  },
  plugins: [],
}