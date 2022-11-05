const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      textColor: {
        skin: {
          title: 'var(--title-color)',
          text: 'var(--text-color)',
          blue: 'var(--blue-color)'
        }
      },
      backgroundColor: {
        skin: {
          default: 'var(--background-color)',
          title: 'var(--title-color)',
          blue: 'var(--blue-color)'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addUtilities({
        '.max-w-container': {
          maxWidth: '1440px',
        }
      })
    })
  ],
}
