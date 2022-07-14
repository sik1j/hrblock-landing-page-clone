/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hrbgreen: {
          600: "rgb(20,170,64)",
          700: "rgb(0, 170, 79)",
          800: "rgb(0, 93, 31)",
        },
        goldenrod: {
          300: "rgb(245,204,2)",
          100: "rgb(248,217,66)",
        },
      },
      fontSize: {
        xxs: "0.625rem",
      },
      spacing: {
        halfwidthFourByThree: "37.5vw",
        halfwidth: "50vw",
        112: "28rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};
