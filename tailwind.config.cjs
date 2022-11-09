/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      xs: 16,
      sm: 18,
      md: 20,
      xl: 24,
      '2xl': 32
      
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#FFF',
      
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        200: '#c4c4c6',
        100: '#e1e1e6',
      },

      cyan: {
        500: '#81d8f7',
        300: '#9BE1F8',
      },
    },

      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif']
        }
      },
    },
    plugins: [],
  }
