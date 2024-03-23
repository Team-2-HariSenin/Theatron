const movies = [
  {
    title: "Dune 2",
    poster: "dune2.jpg",
    rating: "8.8",
  },
  {
    title: "The Gentleman",
    poster: "gentlemen.jpg",
    rating: "8.3",
  },
  { title: "Poor Things", poster: "poorthings.jpg", rating: "8.0" },
  { title: "Damsel", poster: "damsel.jpg", rating: "6.1" },
  { title: "Shogun", poster: "shogun.jpg", rating: "9.2" },
  { title: "Oppenheimer", poster: "oppenheimer.jpg", rating: "8.3" },
  { title: "Challengers", poster: "challengers.jpg", rating: "7.8" },
  { title: "Godzilla - Kong", poster: "godzillakong.png", rating: "7.6" },
  { title: "Demon Slayer", poster: "demonslayer.jpg", rating: "8.6" },
  { title: "Kungfu Panda 4", poster: "kungfupanda4.jpg", rating: "6.5" },
];

function showMovieList() {
  const movieContainer = document.getElementById("movielist-container");

  movies.forEach(function (movie) {
    const movieDiv = document.createElement("div");
    movieDiv.className = "mb-12 w-full px-4 md:w-1/3 lg:w-1/5";

    const posterImgDiv = document.createElement("div");
    posterImgDiv.className = "mt-2 aspect-w-2 aspect-h-3";

    const img = document.createElement("img");
    img.src = "/src/images/movie-poster/" + movie.poster;
    img.alt = movie.title;
    img.className = "object-cover object-center w-full h-full";
    img.style.height = "100%";

    img.onload = function () {
      const height = posterImgDiv.offsetWidth * (3 / 2); // 2:3 aspect ratio
      img.style.height = height + "px";
    };

    posterImgDiv.appendChild(img);

    const movieInfoDiv = document.createElement("div");
    movieInfoDiv.className = "bg-slate-800 px-6 py-8";

    const movieTitle = document.createElement("h3");
    movieTitle.innerHTML = `<a href="#" target="_blank" class="mb-3 block text-xl font-semibold text-white hover:text-primary overflow-x-auto">${movie.title}</a>`;

    const ratingDiv = document.createElement("div");
    ratingDiv.className = "my-4 flex items-center justify-end";

    const starIcon = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg",
    );
    starIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    starIcon.setAttribute("width", "16");
    starIcon.setAttribute("height", "16");
    starIcon.setAttribute("fill", "#FFD700");
    starIcon.setAttribute("class", "bi bi-star");
    starIcon.setAttribute("viewBox", "0 0 16 16");

    const starPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path",
    );
    starPath.setAttribute(
      "d",
      "M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z",
    );
    starIcon.appendChild(starPath);

    const ratingSpan = document.createElement("span");
    ratingSpan.innerHTML = movie.rating;
    ratingSpan.className = "ml-1 text-white";

    ratingDiv.appendChild(starIcon);
    ratingDiv.appendChild(ratingSpan);

    const watchlistLinkDiv = document.createElement("div");
    watchlistLinkDiv.className = "flex items-center justify-between";

    const watchlistLink = document.createElement("a");
    watchlistLink.href = "#";
    watchlistLink.className =
      "w-full rounded-full bg-primary px-4 py-2 text-center text-sm font-medium text-white";
    watchlistLink.textContent = "+ Watchlist";

    watchlistLinkDiv.appendChild(watchlistLink);

    movieInfoDiv.appendChild(movieTitle);
    movieInfoDiv.appendChild(ratingDiv);
    movieInfoDiv.appendChild(watchlistLinkDiv);

    movieDiv.appendChild(posterImgDiv);
    movieDiv.appendChild(movieInfoDiv);

    movieContainer.appendChild(movieDiv);
  });
}

window.onload = showMovieList;
