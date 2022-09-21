/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js}"],
  theme: {
    screens: {
      'sm' : '1430px',
    },
    container: {
      padding: '15px',
      center: true
    },
    fontFamily: {
      'mont': ['Montserrat', 'Arial', 'sans-serif'],
      'robo': ['Roboto', 'Arial', 'sans-serif'],
    },
    fontWeight: {
      '300' : 300,
      '400' : 400,
      '500' : 500,
      '600' : 600,
      '700' : 700,
    },
    extend: {
      colors: {
        coral: '#FF555A',
        hoverLink: '#E9252B',
      }
    },
  },
  plugins: [],
}
