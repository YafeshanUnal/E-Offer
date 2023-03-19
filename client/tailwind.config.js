/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-black": "#0A0A0A",
        "primary-red": "#CC0605",
        secondary: {
          100: "#4F4F4F",
          200: "#828282",
          300: "#BDBDBD",
          400: "#E0E0E0",
          500: "#F2F2F2",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      fontSize: {
        1: "40px",
        2: "32px",
        3: "24px",
      },
    },
  },
  plugins: [],
};
