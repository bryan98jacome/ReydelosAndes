const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '164': '41rem',
      },
      spacing: {
        '128': '32rem',
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '3rem',
        '5xl': '4rem',
      },
      fontFamily: {
        'title': 'Montserrat, sans-serif',
      },
      backgroundImage: {
        'helado': "url('/src/images/helado.jpg')",
        'frutos-rojos': "url('/src/images/frutos-rojos.jpg')",
        'imgG1': "url('/src/images/imgG1.jpg')",
        'imgG2': "url('/src/images/imgG2.jpg')",
        'imgG3': "url('/src/images/imgG3.jpg')",
        'imgG4': "url('/src/images/imgG4.jpg')",
        'imgG5': "url('/src/images/imgG5.jpg')",
        'imgG6': "url('/src/images/imgG6.jpg')",
      },
      colors: {
        'white80': '#fbfbfbe6',
        'white40': '#ffffff66',
        'white99': '#ffffff99',
        'blue23': '#233d7b',
        'blue26': '#267ca5',
        'black5e': '#5e5e5e',
      },
      screens: {
        'mxl': '1100px',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

