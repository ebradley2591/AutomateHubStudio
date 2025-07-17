/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1A56DB',
          gold: '#FFD700',
          white: '#FFFFFF',
          dark: '#23272F'
        }
      }
    }
  },
  plugins: [],
} 