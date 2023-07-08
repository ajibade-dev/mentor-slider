/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "full-side-bar": "#a5f3eb",
        "slider-background" : "#10d5c2",
        "discount-background" : "#feece7",
        "discount-text" : "#ff8c66",
        "cta-text" : "#bdccff",
        "main-bg" : "#fafbff",
        "empty-slider-bar" : "#eaeefb",
        "toggle-bg" : "#cdd7ee",
        text : "#858fad",
        "text-cta-bg" : "#293356"
      },
      fontFamily:{
        manrope : ["Manrope", "sans-serif"]
      },
      backgroundImage: {
        'hero-pattern': "url('./images/bg-pattern.svg')",
        'login-button-bg': 'linear-gradient(#7EE249, #F2F047)'
        
      }

    },
  },
  plugins: [],
}

