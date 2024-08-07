import React from "react";
import MovieList from "./MovieList";

const MovieListContainer = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-3 bg-black py-5 sm:py-8 md:py-10 lg:py-12">
      <MovieList categoryId={4} />
      <MovieList categoryId={1} />
      <MovieList categoryId={3} />
    </section>
  );
};

export default MovieListContainer;
