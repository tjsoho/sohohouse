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
        'brand-orange-light': '#FF9268',
        'brand-blue-light': '#263559',
        'brand-cream': '#FFFBFA',
        'brand-camel': '#263559',
        'brand-black': '#222222',
        'brand-beige': '#F9D3B1',
        // Add a silver color for the shimmer effect
        'silver': '#C0C0C0',
      },
      fontFamily: {
        'Black': ['Black Han Sans', 'sans-serif'],
        'Raleway': ['Raleway', 'sans-serif']
      },
      // Define the custom shimmer animation
      animation: {
        'shimmer': 'shimmer 5s infinite linear', // Add this line
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      // If you had other theme extensions, they would continue here
    },
  },
  plugins: [],
}
