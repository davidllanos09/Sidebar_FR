/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          950: "#172554",
          900: "#1e3a8a",
          800: "#1e40af"
        }
      }
    },
  },
  plugins: [],
}