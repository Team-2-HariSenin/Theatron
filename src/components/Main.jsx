import React, { useState } from "react";
import PlayButton from "./icons/PlayButton";
import PrevButton from "./icons/PrevButton";
import NextButton from "./icons/NextButton";
import AddToWatchList from "./icons/AddToWatchList";
import LikeButton from "./icons/LikeButton";

const movies = [
  {
    title: "Inside Out 2",
    time: "1:37",
    img: "https://image.tmdb.org/t/p/w154/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    synopsis:
      "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected.",
    banner: "https://image.tmdb.org/t/p/w1280/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg",
  },
  {
    title: "Furiosa: A Mad Max Saga",
    time: "2:29",
    img: "https://image.tmdb.org/t/p/w154/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
    synopsis:
      "As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Bike",
    banner: "https://image.tmdb.org/t/p/w1280/wNAhuOZ3Zf84jCIlrcI6JhgmY5q.jpg",
  },
  {
    title: "Kingdom of the Planet of the Apes",
    time: "2:25",
    img: "https://image.tmdb.org/t/p/w154/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
    synopsis:
      "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while",
    banner: "https://image.tmdb.org/t/p/w1280/fqv8v6AycXKsivp1T5yKtLbGXce.jpg",
  },
];

const truncateSynopsis = (synopsis, maxLength) => {
  if (synopsis.length > maxLength) {
    return synopsis.substring(0, maxLength) + "...";
  }
  return synopsis;
};

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1,
    );
  };

  const currentMovie = movies[currentIndex];

  return (
    <main className="mx-auto py-5 lg:container sm:py-8 md:py-10 lg:py-12">
      <div className="flex flex-wrap gap-1">
        {/* Section Movie Preview */}
        <section
          id="movie-preview"
          className="relative flex-1 bg-black pb-2 pt-2 lg:w-1/3"
        >
          <div className="">
            <div className="relative mr-6 mt-10">
              <div className="relative">
                <div className="absolute inset-0 left-4 top-2/4 z-20 flex items-center space-x-4 text-white">
                  <div className="relative">
                    <img
                      alt={currentMovie.title}
                      className="w-62 h-48 object-cover"
                      loading="lazy"
                      src={currentMovie.img}
                      srcSet={`${currentMovie.img} 140w, ${currentMovie.img} 210w, ${currentMovie.img} 280w`}
                      sizes="50vw, (min-width: 480px) 34vw, (min-width: 600px) 26vw, (min-width: 1024px) 16vw, (min-width: 1280px) 16vw"
                    />
                    <AddToWatchList
                      className="absolute right-0 top-0"
                      aria-label="Add to Watchlist"
                    />
                  </div>
                  <PlayButton className="z-20" aria-label="Play Trailer" />
                  <div className="text-left">
                    <h2 className="flex items-center space-x-2 text-xl font-bold text-white drop-shadow-2xl">
                      <span>{currentMovie.title}</span>
                      <span className="text-sm drop-shadow-lg">
                        ({currentMovie.time})
                      </span>
                    </h2>
                    <p className="text-sm drop-shadow-2xl">Watch the trailer</p>
                  </div>
                </div>
                <div className="relative h-[94vh] w-full overflow-hidden">
                  <img
                    alt={`${currentMovie.title} Banner`}
                    className="absolute inset-0 w-full object-cover"
                    loading="lazy"
                    src={currentMovie.banner}
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={handlePrev}
                      className="absolute left-4 top-1/2 z-10 -translate-y-1/2 transform text-white hover:text-yellow"
                      aria-label="Previous Movie"
                    >
                      <PrevButton />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-4 top-1/2 z-10 -translate-y-1/2 transform text-white hover:text-yellow"
                      aria-label="Next Movie"
                    >
                      <NextButton />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Up Next */}
        <section
          id="up-next"
          className="mr-6 mt-8 hidden bg-black-10 pb-8 sm:mr-4 sm:pt-8 lg:block lg:w-1/3"
        >
          <div className="mx-auto ml-4">
            <h1 className="mb-4 text-base font-bold text-yellow md:text-xl lg:text-2xl">
              Up Next
            </h1>
            <div className="flex flex-wrap">
              {movies.map((movie, index) => (
                <div
                  key={index}
                  className="relative mb-4 flex w-full items-start"
                >
                  <img
                    alt={movie.title}
                    className="w-62 h-48 object-cover"
                    loading="lazy"
                    src={movie.img}
                    srcSet={`${movie.img} 140w, ${movie.img} 210w, ${movie.img} 280w`}
                    sizes="50vw, (min-width: 480px) 34vw, (min-width: 600px) 26vw, (min-width: 1024px) 16vw, (min-width: 1280px) 16vw"
                  />
                  <div className="ml-4 flex flex-col">
                    <div className="mb-2 flex items-center space-x-2">
                      <PlayButton
                        className="mr-2 h-8 w-8 text-white"
                        aria-label="Play Trailer"
                      />
                      <span className="text-md text-white">{movie.time}</span>
                    </div>
                    <h2 className="ml-2 text-lg font-bold text-white">
                      {movie.title}
                    </h2>
                    <p className="text-sm text-white">
                      {truncateSynopsis(movie.synopsis, 50)}
                    </p>
                    <LikeButton
                      className="mt-2 h-12 w-12 self-start text-white"
                      aria-label="Like"
                    />
                  </div>
                  <AddToWatchList
                    className="absolute right-2 top-2"
                    aria-label="Add to Watchlist"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
