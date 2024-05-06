/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {


      fontFamily: {
        "principal": ['Red Hat Display, sans-serif'],
      },


      colors:{
        //Primary
        "Pale-blue": "hsl(225, 100%, 94%)",
         "Bright-blue": "hsl(245, 75%, 52%)",
        //Neutral
         "Very-pale-blue": "hsl(225, 100%, 98%)",
         "Desaturated-blue": "hsl(224, 23%, 55%)",
         "Dark-blue": "hsl(223, 47%, 23%)",
      },

      screens: {
        'pc': '450px',
      },

    },
  },
  plugins: [],
}

