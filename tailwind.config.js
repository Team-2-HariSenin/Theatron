/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
    colors: {
      white: "rgba(246, 246, 246, 1)",
      "white-70": "rgba(246, 246, 246, 0.7)",
      black: "rgba(0, 0, 0, 1)",
      "black-10": "rgba(18, 18, 18, 1)",
      "black-20": "rgba(26, 26, 26, 1)",
      "black-30": "rgba(44, 44, 44, 1)",
      "black-40": "rgba(117, 117, 117, 1)",
      "black-90": "rgba(33, 33, 33, 0.9)",
      yellow: "rgba(245, 197, 24, 1)",
      "light-blue": "rgba(87, 153, 239, 1)",
    },
  },
  plugins: [],
};
