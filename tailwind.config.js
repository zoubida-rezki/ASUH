/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-color-1': 'rgb(249, 160, 27)',
        'custom-color-2': 'rgb(245, 135, 59)',
        'custom-color-3': 'rgb(252,208,142)',
      },
    },
  },
  plugins: [],
}

