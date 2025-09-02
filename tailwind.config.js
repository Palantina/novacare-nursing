/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#0B2D5C",
        "brand-gold": "#C6A662",
        "brand-sage": "#6B7C77",
        "brand-cream": "#F7F4EF"
      },
      fontFamily: {
        serif: ["Georgia", "serif"]
      }
    }
  },
  plugins: []
}
