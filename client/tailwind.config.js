/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#EEBD89',
        'custom-pink': '#D13ABD',
        'custom-indigo': '#5A67D8',
        'custom-blue': '#A3BFFA',
        'custom-green': '#50D5B7',
        'custom-green-light': '#067D68',
      },
    },
  },
  plugins: [],
}