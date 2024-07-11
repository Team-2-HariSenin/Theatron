import React, { useEffect, useState } from "react";
import AddToWatchList from "./icons/AddToWatchList";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";
import axios from "axios";
import useRatingStore from "../stores/useRatingStore";

const CardMovie = ({ type, id_movie, src, title, rateAverage }) => {
  const [loading, setLoading] = useState(false);
  const { token, isAuthenticated } = useAuthStore((state) => state);
  const [isWatchList, setIsWatchList] = useState(false);
  const [rating, setRating] = useState(null);

  const { setActive, active, setTitleMovie, setIdMovie } = useRatingStore(
    (state) => state,
  );

  const getRating = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:3000/api/rate?id_movie=${id_movie}`,
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
  }, [active]);

  const navigate = useNavigate();

  useEffect(() => {
    try {
      const getWatchListStatus = async () => {
        const response = await axios.get(
          `http://127.0.0.1:3000/api/watchlist/${id_movie}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setIsWatchList(response.data.data.watchlist);
      };
      if (isAuthenticated) {
        getWatchListStatus();
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);
  const watchlistToggle = async () => {
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
      console.log(response.data.message);
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
    setIdMovie(id_movie);
    setTitleMovie(title);
    setActive(true);
  };
  return (
    <>
      {type === "watchlist" ? (
        // Card untuk watchlist
        <div className="pb relative col-span-2 mb-1 mr-0 inline-flex w-full min-w-full snap-start flex-col gap-2 rounded bg-black-20 text-base font-normal">
          {/* {image container} */}
          <div className="relative mb-2 mr-0 w-full">
            {/* {watchlist button} */}
            <div onClick={() => handleAddToWatchList()}>
              {isWatchList ? (
                <AddToWatchList statusWachlist={true} loading={loading} />
              ) : (
                <AddToWatchList loading={loading} />
              )}
            </div>
            <div className="aspect-[23/34] w-full overflow-hidden">
              <img
                alt={title}
                className="h-full w-full object-cover"
                loading="lazy"
                src={src}
              />
            </div>
          </div>

          <div className="relative mb-1 flex min-h-9 items-center px-2">
            <div className="mr-2 inline-flex items-baseline text-white-70">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-[0.15em] h-[0.8em] w-[1em] align-middle"
                viewBox="0 0 24 24"
                fill="rgba(245, 197, 24, 1)"
                role="presentation"
              >
                <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
              </svg>
              {rateAverage === 10 || rateAverage === 0
                ? rateAverage
                : rateAverage.toFixed(1)}
            </div>
            <button
              onClick={() => handleAddRating()}
              className="group relative inline-block min-h-8 min-w-12 max-w-full cursor-pointer overflow-hidden rounded bg-tranparent px-3 text-base font-medium tracking-[.03125em] hover:bg-black-30"
            >
              {rating ? (
                <span className="inline-flex items-center justify-center text-base font-normal -tracking-tight text-light-blue">
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto mr-[.15rem] h-[0.8em] w-[1em] fill-light-blue"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    role="presentation"
                  >
                    <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
                  </svg>
                  {rating}
                </span>
              ) : (
                <span className="text-base font-normal -tracking-tight text-light-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="mx-auto h-[0.8em] w-[1em] group-hover:fill-[white]"
                    viewBox="0 0 24 24"
                    fill="rgba(87, 153, 239, 1)"
                    role="presentation"
                  >
                    <path d="M22.724 8.217l-6.786-.587-2.65-6.22c-.477-1.133-2.103-1.133-2.58 0l-2.65 6.234-6.772.573c-1.234.098-1.739 1.636-.8 2.446l5.146 4.446-1.542 6.598c-.28 1.202 1.023 2.153 2.09 1.51l5.818-3.495 5.819 3.509c1.065.643 2.37-.308 2.089-1.51l-1.542-6.612 5.145-4.446c.94-.81.45-2.348-.785-2.446zm-10.726 8.89l-5.272 3.174 1.402-5.983-4.655-4.026 6.141-.531 2.384-5.634 2.398 5.648 6.14.531-4.654 4.026 1.402 5.983-5.286-3.187z"></path>
                  </svg>
                </span>
              )}
            </button>
          </div>
          <Link className="relative h-10 cursor-pointer overflow-hidden text-ellipsis px-2 align-baseline text-base leading-5 tracking-[.03125em]">
            <span className="m-0 cursor-pointer p-0 align-baseline text-white">
              {title}
            </span>
          </Link>
          <div className="relative px-2 pt-3 align-baseline">
            <Link
              to={`/detail/${id_movie}`}
              className="relative inline-flex min-h-9 w-full min-w-12 max-w-full cursor-pointer items-center justify-center overflow-hidden rounded bg-black-30 px-4 text-[0.875rem] font-medium leading-5 tracking-[0.02em] text-light-blue hover:bg-[#433F45]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="ml-[-0.375rem] mr-1 cursor-pointer overflow-hidden fill-white align-middle text-[0.875rem] font-medium leading-5 tracking-[0.02em]"
                viewBox="0 0 24 24"
                role="presentation"
              >
                <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z"></path>
              </svg>
              <span className="overflow-hidden text-ellipsis whitespace-nowrap align-baseline font-semibold text-white">
                Detail
              </span>
            </Link>
          </div>
        </div>
      ) : (
        // Card untuk movie list
        <div className="relative col-span-2 mb-1 mr-0 inline-flex w-full min-w-full snap-start flex-col gap-2 rounded bg-black-20 pb-4 text-base font-normal">
          {/* {image container} */}
          <div className="relative mb-2 mr-0 w-full">
            {/* watchlist button */}
            <div onClick={() => handleAddToWatchList()}>
              {isWatchList ? (
                <AddToWatchList statusWachlist={true} loading={loading} />
              ) : (
                <AddToWatchList loading={loading} />
              )}
            </div>
            <div className="aspect-[23/34] w-full overflow-hidden">
              <img
                alt={title}
                className="h-full w-full object-cover"
                loading="lazy"
                src={src}
              />
            </div>
          </div>

          <div className="relative mb-1 flex min-h-9 items-center px-2">
            <div className="mr-2 inline-flex items-baseline text-white-70">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-[0.15em] h-[0.8em] w-[1em] align-middle"
                viewBox="0 0 24 24"
                fill="rgba(245, 197, 24, 1)"
                role="presentation"
              >
                <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
              </svg>
              {rateAverage === 10 || rateAverage === 0
                ? rateAverage
                : rateAverage.toFixed(1)}
            </div>
            <button
              onClick={() => handleAddRating()}
              className="group relative inline-block min-h-8 min-w-12 max-w-full cursor-pointer overflow-hidden rounded bg-tranparent px-3 text-base font-medium tracking-[.03125em] hover:bg-black-30"
            >
              {rating ? (
                <span className="inline-flex items-center justify-center text-base font-normal -tracking-tight text-light-blue">
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto mr-[.15rem] h-[0.8em] w-[1em] fill-light-blue"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    role="presentation"
                  >
                    <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
                  </svg>
                  {rating}
                </span>
              ) : (
                <span className="text-base font-normal -tracking-tight text-light-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="mx-auto h-[0.8em] w-[1em] group-hover:fill-[white]"
                    viewBox="0 0 24 24"
                    fill="rgba(87, 153, 239, 1)"
                    role="presentation"
                  >
                    <path d="M22.724 8.217l-6.786-.587-2.65-6.22c-.477-1.133-2.103-1.133-2.58 0l-2.65 6.234-6.772.573c-1.234.098-1.739 1.636-.8 2.446l5.146 4.446-1.542 6.598c-.28 1.202 1.023 2.153 2.09 1.51l5.818-3.495 5.819 3.509c1.065.643 2.37-.308 2.089-1.51l-1.542-6.612 5.145-4.446c.94-.81.45-2.348-.785-2.446zm-10.726 8.89l-5.272 3.174 1.402-5.983-4.655-4.026 6.141-.531 2.384-5.634 2.398 5.648 6.14.531-4.654 4.026 1.402 5.983-5.286-3.187z"></path>
                  </svg>
                </span>
              )}
            </button>
          </div>
          <Link className="relative h-10 cursor-pointer overflow-hidden text-ellipsis px-2 align-baseline text-base leading-5 tracking-[.03125em]">
            <span className="m-0 cursor-pointer p-0 align-baseline text-white">
              {title}
            </span>
          </Link>
          <div className="relative px-2 pt-3 align-baseline">
            <button
              onClick={() => handleAddToWatchList()}
              className="relative inline-flex min-h-9 w-full min-w-12 max-w-full cursor-pointer items-center justify-center overflow-hidden rounded bg-black-30 px-4 text-[0.875rem] font-medium leading-5 tracking-[0.02em] text-light-blue hover:bg-[#433F45]"
            >
              {loading ? (
                <span className="loader_blue"></span>
              ) : (
                <>
                  {isWatchList ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      className="mr-1 h-6 w-6 fill-light-blue align-baseline"
                      viewBox="0 0 24 24"
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
                      className="ml-[-0.375] mr-1 cursor-pointer overflow-hidden fill-light-blue align-middle text-[0.875rem] font-medium leading-5 tracking-[0.02em]"
                      viewBox="0 0 24 24"
                      role="presentation"
                    >
                      <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
                    </svg>
                  )}
                  <span className="overflow-hidden text-ellipsis whitespace-nowrap align-baseline font-semibold text-light-blue">
                    Watchlist
                  </span>
                </>
              )}
            </button>
            <div className="-mb-4 flex w-full items-center justify-center py-2 tracking-[.03125em]">
              <Link
                to={`/detail/${id_movie}`}
                className="relative inline-flex min-h-9 min-w-12 max-w-full cursor-pointer items-center justify-center overflow-hidden text-ellipsis rounded px-4 align-baseline text-[0.875rem] font-medium leading-5 tracking-[0.02em] text-white hover:bg-[#403737]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="ml-[-0.375rem] mr-1 cursor-pointer overflow-hidden fill-white align-middle text-[0.875rem] font-medium leading-5 tracking-[0.02em]"
                  viewBox="0 0 24 24"
                  role="presentation"
                >
                  <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z"></path>
                </svg>
                <span className="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap align-baseline font-semibold text-white">
                  Detail
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardMovie;
