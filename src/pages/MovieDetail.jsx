import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";
import useRatingStore from "../stores/useRatingStore";
import MovieList from "../components/MovieList";

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const [currentTrailer, setCurrentTrailer] = useState("");
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(null);

  const { token, isAuthenticated } = useAuthStore((state) => state);
  const { setActive, active, setTitleMovie, setIdMovie } = useRatingStore(
    (state) => state,
  );

  const [isWatchList, setIsWatchList] = useState(false);
  const { id } = useParams();

  const navigate = useNavigate();

  const getWatchListStatus = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:3000/api/watchlist/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return setIsWatchList(response.data.data.watchlist);
    } catch (error) {
      console.error("Error fetching watchlist status:", error);
      return [];
    }
  };

  const getMovieDetail = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://127.0.0.1:3000/api/movie/${id}`);
      setMovie(response.data.data);
      setCurrentTrailer(response.data.data.trailers[0].key);
      // console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  const getRating = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:3000/api/rate?id_movie=${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (response.data.data) {
        setRating(response.data.data.rate);
      } else {
        setRating(null);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      getRating();
    }
  }, [active, movie]);

  useEffect(() => {
    getMovieDetail();
  }, [id]);

  useEffect(() => {
    if (isAuthenticated) {
      getWatchListStatus();
    }
  }, [isAuthenticated]);

  const watchlistToggle = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `http://127.0.0.1:3000/api/watchlist/toggle`,
        { id_movie: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setIsWatchList(response.data.data.watchlist);
    } catch (error) {
      console.error("Error adding movie:", error);
      setLoading(false); // Set loading to false if there's an error
    } finally {
      setLoading(false);
    }
  };

  const handleAddToWatchList = () => {
    if (!isAuthenticated) {
      return navigate("/signin");
    }
    watchlistToggle();
  };

  const handleAddRating = () => {
    setIdMovie(id);
    setTitleMovie(movie ? movie.name : "");
    setActive(true);
  };

  return (
    <main className="mx-auto mt-9 grid w-full grid-cols-[100%] justify-stretch px-2 lg:container">
      <div className="relative col-auto flex max-w-screen-xl justify-center">
        {/* Section Movie Preview */}
        <section className="relative mx-2 flex-shrink flex-grow-[664] basis-[0%] overflow-hidden xl:flex-grow-[864]">
          <div className="relative h-full w-full flex-shrink-0">
            {/* Movie Banner 2*/}
            <div className="relative w-full">
              <div className="relative aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${currentTrailer}`}
                  frameBorder="0"
                  className="absolute left-0 top-0 h-full w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        {/* Section Trailers */}
        <section
          id="up-next"
          className="relative ml-1 mr-2 hidden h-[369px] flex-shrink flex-grow-[328] basis-[0%] flex-col lg:flex xl:h-[474px] xl:flex-grow-[402]"
        >
          <div className="h-[52px]">
            <span className="block overflow-hidden text-ellipsis whitespace-nowrap py-1 text-left text-lg font-semibold text-yellow">
              Trailers
            </span>
          </div>

          <div className="relative flex h-full flex-col overflow-scroll bg-black-10">
            {movie &&
              movie.trailers.length > 0 &&
              movie.trailers.map((trailer) => (
                <div
                  key={trailer.key}
                  className={`relative flex h-fit w-full flex-shrink-0 overflow-hidden ${currentTrailer === trailer.key && "bg-black-30"} p-2`}
                >
                  <div className="relative inline-flex aspect-video w-32 flex-shrink-0 overflow-hidden">
                    <img
                      src={`https://i.ytimg.com/vi/${trailer.key}/hq720.jpg`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div
                    onClick={() => setCurrentTrailer(trailer.key)}
                    className="cursor-pointer overflow-hidden px-2 text-white"
                  >
                    <div className="relative max-h-5 w-full truncate whitespace-normal text-left">
                      <span className="max-h-5 w-full text-ellipsis text-start text-base font-normal leading-5">
                        {trailer.title}
                      </span>
                    </div>
                    <div className="relative w-full text-left">
                      <span className="text-[.875rem] leading-5 text-white-70">
                        {trailer.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>

      {/* Section Trailer On Mobile */}
      <section className="mt-5 border lg:hidden">
        <div className="custom-grid-auto-columns hide-scrollbar relative grid grid-flow-col gap-2 overflow-auto px-2 lg:gap-4 xl:gap-6">
          {movie &&
            movie.trailers.length > 0 &&
            movie.trailers.map((trailer) => (
              <div
                key={trailer.key}
                onClick={() => setCurrentTrailer(trailer.key)}
                className={`relative col-span-2 mb-1 mr-0 inline-flex w-full min-w-full cursor-pointer snap-start flex-col gap-2 overflow-hidden rounded ${trailer.key === currentTrailer ? "bg-black-20" : ""} pb-2 text-base font-normal`}
              >
                <div className="relative aspect-video w-full flex-shrink-0 overflow-hidden xl:w-32">
                  <img
                    src={`https://i.ytimg.com/vi/${trailer.key}/hq720.jpg`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-shrink-0 overflow-hidden px-2 text-white">
                  <div className="relative h-full w-full truncate text-left">
                    <span className="max-h-2 w-full text-start text-base font-normal leading-5">
                      {trailer.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      <div className="mt-4 flex flex-col md:flex-row md:justify-evenly">
        <section className="max-w-screen-lgxl mx-2 mt-4 flex flex-col gap-6 text-base font-normal text-white">
          <div className="flex gap-6">
            <div className="relative aspect-[23/34] w-1/3 min-w-[140px] max-w-[200px] overflow-hidden md:hidden">
              <img
                className="h-full w-full object-cover"
                src={movie && movie.url_poster}
                alt=""
              />
            </div>
            <div className="flex w-full flex-col gap-4 text-white-70">
              {/* category */}
              <div className="ml-4 flex flex-wrap gap-2">
                {movie &&
                  movie.categories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/category/${category.id}`}
                      className="rounded-full border px-3 py-2 text-xs sm:text-base"
                    >
                      {category.name}
                    </Link>
                  ))}
              </div>
              {/* Overview */}
              <p className="text-wrap text-sm xs:text-base">
                {movie && movie.overview}
              </p>
            </div>
          </div>
          <div className="flex items-start justify-start gap-4 md:hidden">
            <div className="inline-flex px-[.125rem] py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="relative bottom-[2px] fill-yellow"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="presentation"
              >
                <path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
              </svg>
              <span className="mr-[2px] text-base font-semibold">
                {movie && movie.rate_average ? Number(movie.rate_average) : 0}
              </span>
              <span>/10 </span>
            </div>
            <button
              onClick={handleAddRating}
              className="inline-flex rounded p-1 hover:bg-black-20"
            >
              {rating ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="relative bottom-[2px] fill-light-blue"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  role="presentation"
                >
                  <path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="relative bottom-[2px] fill-light-blue"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  role="presentation"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
                </svg>
              )}

              <div className="mr-1 text-base font-semibold text-light-blue">
                {rating ? rating : "Rate"}
              </div>
            </button>
          </div>
          <div>
            <div>
              <ul className="flex flex-col">
                {movie && movie.director && (
                  <li className="relative z-0 flex min-h-12 flex-wrap items-center border-y border-white-70 py-3">
                    <span className="relative z-10 flex-shrink-0 pr-3 text-start font-semibold">
                      Director
                    </span>
                    <div className="relatory z-1 flex-grow">
                      <ul className="inline-flex flex-wrap font-normal">
                        <li className="inline align-middle text-light-blue">
                          <Link to={`/director/${movie.director.id}`}>
                            {movie.director.name}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                )}

                {movie && movie.writers.length > 0 && (
                  <li className="relative z-0 flex min-h-12 flex-wrap items-center border-b border-white-70 py-3">
                    <span className="relative z-10 flex-shrink-0 pr-3 text-start font-semibold">
                      Writers
                    </span>
                    <div className="z-1 relative flex-grow">
                      <ul className="inline-flex flex-wrap font-normal">
                        {movie.writers.map((writer, index) => (
                          <li
                            key={writer.id}
                            className="inline align-middle text-light-blue"
                          >
                            {index > 0 && <span className="bullet"></span>}
                            <Link to={`/writer/${writer.id}`}>
                              {writer.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                )}
                {movie && movie.stars.length > 0 && (
                  <li className="relative z-0 flex min-h-12 flex-wrap items-center border-b border-white-70 py-3">
                    <span className="relative z-10 flex-shrink-0 pr-3 text-start font-semibold">
                      Stars
                    </span>
                    <div className="z-1 relative flex-grow">
                      <ul className="inline-flex flex-wrap font-normal">
                        {movie.stars.map((star, index) => (
                          <li
                            key={star.id}
                            className="inline align-middle text-light-blue"
                          >
                            {index > 0 && <span className="bullet"></span>}
                            <Link to={`/star/${star.id}`}>{star.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-2 mt-4 flex flex-col justify-center">
          <div className="relative mx-auto hidden aspect-[23/34] w-1/3 min-w-[140px] max-w-[200px] overflow-hidden md:block">
            <img
              className="h-full w-full object-cover"
              src={movie && movie.url_poster}
              alt=""
            />
          </div>
          <div className="hidden items-start justify-start gap-4 text-white md:flex">
            <div className="flex flex-col items-center justify-center px-[.125rem] py-1">
              <div className="text-nowrap text-xs font-bold text-white-70">
                THEATRON RATING
              </div>
              <div className="inline-flex items-center justify-center p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="relative bottom-[2px] h-10 w-10 fill-yellow"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  role="presentation"
                >
                  <path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                </svg>

                <span className="mr-[2px] text-2xl font-semibold">
                  {movie && movie.rate_average ? Number(movie.rate_average) : 0}
                </span>
                <span className="text-white-70">/10 </span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center px-[.125rem] py-1">
              <div className="text-nowrap text-xs font-bold text-white-70">
                YOUR RATING
              </div>
              <button
                onClick={handleAddRating}
                className="flex items-center justify-center rounded p-1 hover:bg-black-20"
              >
                {rating ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="relative bottom-[2px] h-10 w-10 fill-light-blue"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    role="presentation"
                  >
                    <path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="relative bottom-[2px] h-10 w-10 fill-light-blue"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    role="presentation"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
                  </svg>
                )}
                <span
                  className={`${rating ? "mr-[2px] text-2xl" : "text-base text-light-blue"} font-semibold`}
                >
                  {rating ? rating : "Rate"}
                </span>
                {rating && <span className="text-white-70">/10 </span>}
              </button>
            </div>
          </div>
          <button
            onClick={() => handleAddToWatchList()}
            className="flex w-full max-w-screen-xs items-center justify-start rounded bg-yellow p-2 px-4 text-black-10"
          >
            <div className="mr-2 flex items-center justify-center">
              {isWatchList ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  role="presentation"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M9 16.2l-3.5-3.5a.984.984 0 0 0-1.4 0 .984.984 0 0 0 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7a.984.984 0 0 0 0-1.4.984.984 0 0 0-1.4 0L9 16.2z"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  role="presentation"
                >
                  <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
                </svg>
              )}
            </div>
            <div className="flex flex-col items-start text-[.875rem]">
              <span className="font-semibold">
                {isWatchList ? "In WatchList" : "Add to WatchList"}
              </span>
              <span className="text-[.75rem]">
                Added by {movie ? movie.watchlist_count : ""} users
              </span>
            </div>
          </button>
        </section>
      </div>

      {movie &&
        movie.categories.map((category) => (
          <MovieList categoryId={category.id} />
        ))}
    </main>
  );
};

export default MovieDetail;
