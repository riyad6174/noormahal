/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      primaryFont:["Cinzel","serif"]
    },
    screens:{
      sm:'576px',
      md:'768px',
      lg:'992px',
      xl:'1200px'
          },
    container:{
      center:true,
      padding:'1rem'
    },
    extend: {
      colors: {
        'primary':'#F5EFE7',
        'secondary':'#A4843E',
        'footer':"#182747"
        
      }
    },
  },
  plugins: [],
}
