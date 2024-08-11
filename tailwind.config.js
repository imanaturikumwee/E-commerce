/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-orange': '#D87D4A',
      'light-orange': '#FBAF85',
      'light-black': '#191919',
      'dark-black' : '#000000',
      'light-gray':'#FAFAFA',
      'gray' : '#F1F1F1',
      'dark-gray' :'#F0F0F0',
       'white' : '#FFFFFF'


    },
    extend: {
      backgroundImage: {
        'headphone-bg': "url('/assets/home/desktop/image-hero.jpg')",
      }
    },
  },
  plugins: [],
}

