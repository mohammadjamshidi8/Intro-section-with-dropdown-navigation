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
      },
      backgroundImage: {
        'desktop': "url('./public/images/image-hero-desktop.png')",
        'mobile': "url('./public/images/image-hero-mobile.png')",
      },
    },
  },
  plugins: [],
}

