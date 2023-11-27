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
      // screens: {
      //   'xs': {'min': '320px', 'max': '479px'},
      //   'sm': {'min': '480px', 'max': '639px'},
      //   'md': {'min': '640px', 'max': '789px'},
      //   'lg': {'min': '790px', 'max': '1029px'},
      //   'xl': {'min': '1030px', 'max': '1479px'},
      //   '2xl': {'min': '1480px'},
      // },
      
    },
  },
  plugins: [],
}
