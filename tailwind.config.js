/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.htnl", "register.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#5B50E1",
      },
    },
  },
  plugins: [],
};
