/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js,vue}',
    './components/**/*.{html,js,vue}',
    './src/**/*.{html,js,vue}'
  ],  
  theme: {
    fontFamily:{
      logo: 'Chewy'
    },
    extend: {},
  },
  plugins: [],
}