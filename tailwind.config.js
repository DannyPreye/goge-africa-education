/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "yellow": "#FF8A00",
      "dark": "#FFC000",
      "white": "#ffffff",
      "black": "#000000",
      "pink": "#FFF7DF",
      "gray": "#5C5C5C"
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}