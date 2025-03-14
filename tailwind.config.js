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
      height: {
        ninty: '90%',
        nintyFive: '95%',
      },
      width: {
        p55: '55%',
        p45: '45%',
      },
      rotate: {
        z30: 'rotateZ(30deg)',
      },
    },
  },
  plugins: [],
}

