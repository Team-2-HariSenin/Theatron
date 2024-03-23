/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "view/home.html",
    "view/watchlist.html",
    "view/register.html",
    "view/login.html",
    "view/movie-detail.html",
    "view/admin/manageuser.html",
  ],
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
