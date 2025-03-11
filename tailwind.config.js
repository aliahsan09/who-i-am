/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],  // For headings
        roboto: ["Roboto", "sans-serif"],    // For other text
      },
      colors: {
        mono: "#4bffa5",
      },
    },
  },
  plugins: [],
}

