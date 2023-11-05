/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,css,js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
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