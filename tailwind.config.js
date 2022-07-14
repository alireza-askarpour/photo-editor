const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "Arial", "Helvetica", "sans-serif"],
    },
    extend: {},
    colors: {
      ...colors,
    }
  },
  plugins: [],
}
