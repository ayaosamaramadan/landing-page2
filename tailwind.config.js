/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      '2sm': '320px', // min-width: 320px
      'sm': '375px', // min-width: 375px
      'md': '425px', // min-width: 425px
      'lg': '768px', // min-width: 768px
      'xl': '1024px', // min-width: 1024px 
      '2xl': '1440px', // min-width: 1440px
      '3xl': '2560px', // min-width: 1920px
    },
    extend: {
      colors: {
        graii: 'rgba(84, 84, 84, 1)',
        navbtn:'rgba(31, 31, 31, 1)',
        h11: 'rgba(31, 31, 31, 1)',
        firstP:'rgba(84, 84, 84, 1)',
        secondP:'rgba(70, 70, 70, 1)',
        graybtn:'rgba(241, 241, 241, 1)',
        gray3:'rgba(146, 146, 146, 1)',
        footerr:'rgba(209, 209, 209, 1)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}