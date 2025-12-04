export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        heading: ['"Montserrat"', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#2C4A52', // Deep Teal
          dark: '#1A2E33', // Darker shade
          yellow: '#FFB81C', // Golden yellow
          orange: '#F58220', // Orange accent
          light: '#F4F7F6', // Off-white background
        }
      }
    },
  },
  plugins: [],
}