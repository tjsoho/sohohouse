/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#375292',
        'brand-orange': '#E26F44',
        'brand-black': '#222222',
      },
      fontFamily: {
        'Black': ['Black Han Sans', 'sans-serif'],
        'Raleway': ['Raleway', 'sans-serif']
      },
    },
  },
  plugins: [],
}
