import React, { useEffect, useRef, useState } from "react";
import PlayButton from "./icons/PlayButton";
import PrevButton from "./icons/PrevButton";
import NextButton from "./icons/NextButton";
import AddToWatchList from "./icons/AddToWatchList";
import LikeButton from "./icons/LikeButton";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import axios from "axios";
SwiperCore.use([Navigation]);

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";

const Main = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reorderedMovies, setReorderedMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user, token, isAuthenticated } = useAuthStore((state) => state);
  const [isWatchList, setIsWatchList] = useState([]);

  const navigate = useNavigate();

  const getWatchListStatus = async (movieIds) => {
    try {
      const responses = await Promise.all(
        movieIds.map((id) =>
          axios.get(`http://127.0.0.1:3000/api/watchlist/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
        ),
      );
      return responses.map((response) => response.data.data.watchlist);
    } catch (error) {
      console.error("Error fetching watchlist status:", error);
      return [];
    }
  };

  const getMovies = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://127.0.0.1:3000/api/movie/playnow?id_user=1`,
      );
      setMovies(response.data.data);
      const movieIds = response.data.data.map((movie) => movie.id);

      if (isAuthenticated) {
        const watchListStatus = await getWatchListStatus(movieIds);
        setIsWatchList(watchListStatus);

        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  const reorderMovies = (index) => {
    const part1 = movies.slice(index, movies.length);
    const part2 = movies.slice(0, index);
    return [...part1, ...part2];
  };

  useEffect(() => {
    getMovies();
  }, [isAuthenticated]);

  useEffect(() => {
    if (movies.length > 0) {
      setReorderedMovies(reorderMovies(currentIndex));
    }
  }, [movies, currentIndex]);

  const watchlistToggle = async (id_movie, index) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `http://127.0.0.1:3000/api/watchlist/toggle`,
        { id_movie },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const updatedWatchList = [...isWatchList];
      updatedWatchList[index] = response.data.data.watchlist;
      setIsWatchList(updatedWatchList);
    } catch (error) {
      console.error("Error adding movie:", error);
      setLoading(false); // Set loading to false if there's an error
    } finally {
      setLoading(false);
    }
  };

  const handleAddToWatchList = (id_movie, index) => {
    if (!isAuthenticated) {
      return navigate("/signin");
    }
    watchlistToggle(id_movie, index);
  };

  return (
    <main className="mx-auto mt-9 grid w-full grid-cols-[100%] justify-stretch px-2 lg:container">
      <div className="relative col-auto flex max-w-screen-xl justify-center">
        {/* Section Movie Preview */}
        <section className="relative mx-2 flex-shrink flex-grow-[664] basis-[0%] overflow-hidden xl:flex-grow-[864]">
          <div className="relative z-10 mx-auto h-full w-full overflow-hidden">
            <Swiper
              onSwiper={(swiper) => setSwiperRef(swiper)}
              onSlideChange={(swiper) => {
                setCurrentIndex(
                  swiper.activeIndex == 0 ||
                    swiper.activeIndex == swiper.slides.length - 1
                    ? movies.length
                    : swiper.activeIndex === 1 ||
                        swiper.activeIndex === swiper.slides.length
                      ? 0
                      : swiper.activeIndex - 1,
                );
              }}
              modules={[Autoplay]}
              slidesPerView={1}
              initialSlide={1}
              loop
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              navigation={{
                nextEl: ".custom-next-button",
                prevEl: ".custom-prev-button",
              }}
              // className="relative z-10 box-content flex h-full w-full"
            >
              {movies.length > 0 &&
                movies.map((movie, index) => (
                  <SwiperSlide
                    key={movie.id}
                    className="relative h-full w-full flex-shrink-0"
                  >
                    {/* Poster 1*/}
                    <div className="absolute inset-0 flex items-center space-x-4 text-white xs:top-2/4 lg:top-3/4">
                      <div className="absolute bottom-0 z-20 aspect-[23/34] w-[90px] sm:left-4 sm:w-[132px] xl:w-[165px]">
                        <img
                          alt={movie.name}
                          className="h-full w-full object-cover"
                          loading="lazy"
                          src={movie.url_poster}
                          srcSet={`${movie.url_poster} 140w, ${movie.url_poster} 210w, ${movie.url_poster} 280w`}
                          sizes="50vw, (min-width: 480px) 34vw, (min-width: 600px) 26vw, (min-width: 1024px) 16vw, (min-width: 1280px) 16vw"
                        />
                        <div
                          onClick={() => handleAddToWatchList(movie.id, index)}
                        >
                          {isWatchList[index] ? (
                            <AddToWatchList
                              statusWachlist={true}
                              loading={loading}
                            />
                          ) : (
                            <AddToWatchList loading={loading} />
                          )}
                        </div>
                      </div>
                    </div>
                    {/* Movie Banner 2*/}
                    <div className="relative w-full pb-[70px]">
                      <div className="relative aspect-video w-full">
                        {/* 16:9 Aspect Ratio */}
                        <img
                          alt={`${movie.name} Banner`}
                          className="absolute left-0 top-0 h-full w-full object-cover"
                          loading="lazy"
                          src={movie.url_image}
                        />
                      </div>
                      <div
                        onClick={() => navigate(`/detail/${movie.id}`)}
                        className="bg-banner-section group absolute bottom-0 h-full w-full cursor-pointer"
                      >
                        <div className="absolute z-10 flex h-full w-full">
                          <figcaption className="absolute bottom-0 left-[90px] right-0 mx-4 mt-4 flex flex-col text-white sm:left-[165px] sm:flex-row sm:items-start lg:left-[148px] xl:left-[177px]">
                            <div className="flex items-center">
                              <svg
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="mb-2 mr-4 h-[50px] w-[50px] fill-white group-hover:fill-yellow sm:mb-0 sm:h-[72px] sm:w-[72px]"
                                fill="currentColor"
                                role="presentation"
                              >
                                <path d="M10.803 15.932l4.688-3.513a.498.498 0 0 0 0-.803l-4.688-3.514a.502.502 0 0 0-.803.402v7.026c0 .412.472.653.803.402z"></path>
                                <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"></path>
                              </svg>
                              <span className="ml-4 block sm:hidden">
                                {movie.trailers[0].duration}
                              </span>
                            </div>
                            <div className="flex w-full flex-col pb-7">
                              <div className="flex items-end text-sm">
                                <span className="text-base font-semibold sm:text-2xl sm:font-normal xl:text-[2rem] xl:leading-10">
                                  {movie.name}
                                </span>
                                <span className="ml-8 hidden self-end text-white-70 sm:inline sm:text-lg xl:text-xl">
                                  {movie.trailers[0].duration}
                                </span>
                              </div>
                              <div className="text-sm text-white-70 xl:text-xl">
                                Watch the Trailer
                              </div>
                            </div>
                          </figcaption>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              <div className="absolute left-0 right-auto top-[30%] z-[100] hidden sm:block">
                <div className="custom-prev-button pointer-events-auto absolute left-0 top-1/2 z-10 cursor-pointer rounded border border-white bg-[#0000008f] px-3 py-5 opacity-100">
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    role="presentation"
                  >
                    <path d="M18.378 23.369c.398-.402.622-.947.622-1.516 0-.568-.224-1.113-.622-1.515l-8.249-8.34 8.25-8.34a2.16 2.16 0 0 0 .548-2.07A2.132 2.132 0 0 0 17.428.073a2.104 2.104 0 0 0-2.048.555l-9.758 9.866A2.153 2.153 0 0 0 5 12.009c0 .568.224 1.114.622 1.515l9.758 9.866c.808.817 2.17.817 2.998-.021z"></path>
                  </svg>
                </div>
              </div>
              <div className="absolute left-auto right-0 top-[30%] z-[100] hidden sm:block">
                <div className="custom-next-button pointer-events-auto absolute right-0 top-1/2 z-10 cursor-pointer rounded border border-white bg-[#0000008f] px-3 py-5 opacity-100">
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    role="presentation"
                  >
                    <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path>
                  </svg>
                </div>
              </div>
            </Swiper>
          </div>
        </section>
        {/* Section Up Next */}
        <section
          id="up-next"
          className="jus relative ml-1 mr-2 hidden flex-shrink flex-grow-[328] basis-[0%] flex-col lg:flex xl:flex-grow-[402]"
        >
          <div className="w-full">
            <div className="h-[52px]">
              <span className="block overflow-hidden text-ellipsis whitespace-nowrap py-1 text-left text-lg font-semibold text-yellow">
                Up Next
              </span>
            </div>
            <div className="relative h-[389px] overflow-hidden xl:h-[492px]">
              <div className="bg-poster-section absolute inset-0 overflow-hidden">
                <div className="absolute -top-[129.6px] flex h-full w-full flex-col xl:-top-[165px]">
                  {reorderedMovies.length > 0 &&
                    reorderedMovies.map((movie) => (
                      <div
                        key={movie.id}
                        className="relative w-full flex-shrink-0 flex-grow-0 basis-[129.6px] overflow-hidden px-4 xl:basis-[165px]"
                      >
                        <div className="w-[76px] pt-4 xl:w-[100px]">
                          <div className="relative bottom-0 left-0 inline-flex aspect-[23/34] h-full w-full overflow-hidden">
                            <img
                              src={movie.url_poster}
                              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
                              alt={movie.name}
                            />
                          </div>
                        </div>
                        <Link
                          to={`/detail/${movie.id}`}
                          className="group absolute left-[94px] right-0 top-0 cursor-pointer overflow-hidden px-2 pt-4 text-white xl:left-[120px]"
                        >
                          <div className="relative mb-[6px] flex w-full items-end text-left">
                            <svg
                              width="24"
                              height="24"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              className="mr-2 h-[28px] w-[28px] overflow-hidden group-hover:fill-red xl:h-[32px] xl:w-[32px]"
                              fill="currentColor"
                              role="presentation"
                            >
                              <path d="M10.803 15.932l4.688-3.513a.498.498 0 0 0 0-.803l-4.688-3.514a.502.502 0 0 0-.803.402v7.026c0 .412.472.653.803.402z"></path>
                              <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"></path>
                            </svg>
                            <span className="text-[.875rem] leading-5 text-white-70">
                              {movie.trailers[0].duration}
                            </span>
                          </div>
                          <div className="relative max-h-10 w-full text-left">
                            <span className="max-h-10 w-full overflow-hidden text-ellipsis whitespace-normal text-start text-base font-normal leading-5">
                              {movie.name}
                            </span>
                          </div>
                          <div className="relative w-full text-left">
                            <span className="text-[.875rem] leading-5 text-white-70">
                              Watch the Trailer
                            </span>
                          </div>
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
