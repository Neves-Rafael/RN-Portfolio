/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: 'class',
  theme: {
    colors:{
      'fundo':'#202124',
      'gray':'#737373',
      'light-green':'#00C4C3',
      'medium-green':'#007877',
      'normal-green':'#006363',
      'black':'#0E0E0E',
      'dark-green':'#002726',
      'white':'#fff',
      'light':'#f5f5f5'
    },
    extend: {
      fontFamily: {
        koulen: "'Koulen', cursive",
        roboto: "'Roboto Slab', serif",
        bebas: "'Bebas Neue', sans-serif",
      }
    },
  },
  plugins: [],
}

