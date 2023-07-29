/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./template/**/*.{html,js}"],
  mode:"jit",
  theme: {
    extend: {
      colors: {
        'nav_title': '#333333',
      },
      spacing: {
        '77': '77px',
        '400':"400px",
        '381':"381px"
        
      },
      fontSize: {
        '64':'64px'
      },

      fontFamily : {
        'spacemono':['Space Mono', "monospace"]
      }
    },
  },
  plugins: [],
}

