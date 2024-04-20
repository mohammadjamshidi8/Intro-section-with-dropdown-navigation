/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        almostWhite : 'hsl(0, 0%, 98%)',
        mediumGrey : 'hsl(0, 0%, 41%)',
        almostgray : 'hsl(0, 0%, 8%)'
      }
    },
  },
  plugins: [],
}

