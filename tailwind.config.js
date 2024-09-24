/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',  // Azul oscuro personalizado
        secondary: '#9333EA', // Púrpura
        accent: 'rgb(216 180 254)',    // Amarillo
        light: '#e2e8f0cc',     // Blanco-grisáceo
        dark: '#0b0c0f',      // Negro-gris oscuro
        purpele: '#4a3d72',
        purpeleDark: '#7d63c8',
        purpleLight: '#d1d1f4',
        purpleLight2: '#f1f2fc',
        purpleLight3: '#a097e2'
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        display: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
