/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./template/**/*.{html,js}"],
  mode: "jit",
  theme: {
    extend: {

      fontFamily: {
        "natosans":['Noto Sans', 'sans-serif']
      }

    },
  },
  plugins: [],
}

