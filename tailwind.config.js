/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#061C4E',
        'brand-orange': '#FC7643',
        'brand-cream': '#FFE9E2',
        'brand-camel': '#CA9F78',
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
