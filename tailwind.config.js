/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,css,js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    screens: {
      sm: '426px',
      md:'769px',
      lg:'1025px',
      xl:'1441px',
      xxl:'2560px',
    },
    extend: {
        textColor: {
                pink: '#cf2680'
        },
      keyframes: {
        slide:{
          '0%,100%' : {opacity:0},
          '5%' : {
            opacity : 0,
            transform : 'translateY(-50px)',
          },
          '10%' :{
            opacity: 1,
            transform: 'translateY(0)',
        },
        '30%' :{
            opacity: 0,
            transform: 'translateY(50px)',
        },
        '80%' : {
            opacity: 0,
        },
        
        }
      },
      animation : {
        slide : 'slide 5s linear 5s infinite'
      }
  },

  plugins: [
    require('flowbite/plugin')
],
}
}