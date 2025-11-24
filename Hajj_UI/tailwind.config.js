/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'desert-light': '#FFF7E6',
        'desert-dark': '#7C4A2A',
        'desert-accent': '#D9A066',
        'desert-muted': '#C7B299'
      }
    },
  },
  plugins: [],
}
