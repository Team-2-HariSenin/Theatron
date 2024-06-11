import React from "react";
import AddToWatchList from "./icons/AddToWatchList";
import { Link } from "react-router-dom";

const CardMovie = ({ type }) => {
  return (
    <>
      {type === "watchlist" ? (
        // Card untuk watchlist
        <div className="pb relative col-span-2 mb-1 mr-0 inline-flex w-full min-w-full snap-start flex-col gap-2 rounded bg-black-20 text-base font-normal">
          {/* {image container} */}
          <div className="relative mb-2 mr-0 w-full">
            <div className="group absolute left-0 top-0 z-30 h-[2.6rem] w-8 cursor-pointer text-2xl">
              <svg
                className="relative h-auto w-full"
                width="24px"
                height="34px"
                viewBox="0 0 24 34"
                xmlns="http://www.w3.org/2000/svg"
                role="presentation"
              >
                <polygon
                  className="fill-yellow group-hover:stroke-none"
                  stroke="rgba(255, 255, 255, 0.32)"
                  points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"
                ></polygon>
                <polygon
                  className="group-hover:fill-icon-hover-yellow"
                  fill="rgba(0, 0, 0, 0)"
                  points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"
                ></polygon>
                <polygon
                  fill="rgba(0, 0, 0, 0.32)"
                  points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"
                ></polygon>
              </svg>
              <div className="absolute top-[.2em] flex h-[1em] w-full items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="h-6 w-6 fill-black-10 align-baseline"
                  viewBox="0 0 24 24"
                  role="presentation"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M9 16.2l-3.5-3.5a.984.984 0 0 0-1.4 0 .984.984 0 0 0 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7a.984.984 0 0 0 0-1.4.984.984 0 0 0-1.4 0L9 16.2z"></path>
                </svg>
              </div>
            </div>
            <div className="w-full">
              <img
                alt="1. Bridgerton"
                className="object-cover"
                loading="lazy"
                src="https://m.media-amazon.com/images/M/MV5BY2ZiODA2MGYtMmMxMi00YjlmLWFmYjktMWYyOTMwNWFkNWNkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UX140_CR0,0,140,207_.jpg"
                srcSet="https://m.media-amazon.com/images/M/MV5BY2ZiODA2MGYtMmMxMi00YjlmLWFmYjktMWYyOTMwNWFkNWNkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UX140_CR0,0,140,207_.jpg 140w, https://m.media-amazon.com/images/M/MV5BY2ZiODA2MGYtMmMxMi00YjlmLWFmYjktMWYyOTMwNWFkNWNkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UX210_CR0,0,210,311_.jpg 210w, https://m.media-amazon.com/images/M/MV5BY2ZiODA2MGYtMmMxMi00YjlmLWFmYjktMWYyOTMwNWFkNWNkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UX280_CR0,0,280,414_.jpg 280w"
                sizes="50vw, (min-width: 480px) 34vw, (min-width: 600px) 26vw, (min-width: 1024px) 16vw, (min-width: 1280px) 16vw"
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
              7.25
            </div>
            <button className="group relative inline-block min-h-8 min-w-12 max-w-full cursor-pointer overflow-hidden rounded bg-tranparent px-3 text-base font-medium tracking-[.03125em]">
              <span className="mr-0 text-base font-normal -tracking-tight text-light-blue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="mr-[0.15em] h-[0.8em] w-[1em] group-hover:fill-[white]"
                  viewBox="0 0 24 24"
                  fill="rgba(87, 153, 239, 1)"
                  role="presentation"
                >
                  <path d="M22.724 8.217l-6.786-.587-2.65-6.22c-.477-1.133-2.103-1.133-2.58 0l-2.65 6.234-6.772.573c-1.234.098-1.739 1.636-.8 2.446l5.146 4.446-1.542 6.598c-.28 1.202 1.023 2.153 2.09 1.51l5.818-3.495 5.819 3.509c1.065.643 2.37-.308 2.089-1.51l-1.542-6.612 5.145-4.446c.94-.81.45-2.348-.785-2.446zm-10.726 8.89l-5.272 3.174 1.402-5.983-4.655-4.026 6.141-.531 2.384-5.634 2.398 5.648 6.14.531-4.654 4.026 1.402 5.983-5.286-3.187z"></path>
                </svg>
              </span>
            </button>
          </div>
          <Link className="relative h-10 cursor-pointer overflow-hidden text-ellipsis px-2 align-baseline text-base leading-5 tracking-[.03125em]">
            <span className="m-0 cursor-pointer p-0 align-baseline text-white">
              1. Bridgerton
            </span>
          </Link>
          <div className="relative px-2 pt-3 align-baseline">
            <Link className="relative inline-flex min-h-9 w-full min-w-12 max-w-full cursor-pointer items-center justify-center overflow-hidden rounded bg-black-30 px-4 text-[0.875rem] font-medium leading-5 tracking-[0.02em] text-light-blue hover:bg-[#433F45]">
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
              <span className="overflow-hidden text-ellipsis whitespace-nowrap align-baseline text-white">
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
            <div className="group absolute left-0 top-0 z-30 h-[2.6rem] w-8 cursor-pointer text-2xl">
              <svg
                className="relative h-auto w-full"
                width="24px"
                height="34px"
                viewBox="0 0 24 34"
                xmlns="http://www.w3.org/2000/svg"
                role="presentation"
              >
                <polygon
                  className="group-hover:stroke-none"
                  fill="rgba(31, 31, 31, 0.75)"
                  stroke="rgba(255, 255, 255, 0.32)"
                  points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"
                ></polygon>
                <polygon
                  className="group-hover:fill-icon-hover"
                  fill="rgba(0, 0, 0, 0)"
                  points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"
                ></polygon>
                <polygon
                  fill="rgba(0, 0, 0, 0.32)"
                  points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"
                ></polygon>
              </svg>
              <div className="absolute top-[.2em] flex h-[1em] w-full items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="h-[1em] w-[1em] align-baseline"
                  viewBox="0 0 24 24"
                  fill="rgba(246, 246, 246, 1)"
                  role="presentation"
                >
                  <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
                </svg>
              </div>
            </div>
            <div className="w-full">
              <img
                alt="1. Bridgerton"
                className="object-cover"
                loading="lazy"
                src="https://m.media-amazon.com/images/M/MV5BY2ZiODA2MGYtMmMxMi00YjlmLWFmYjktMWYyOTMwNWFkNWNkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UX140_CR0,0,140,207_.jpg"
                srcSet="https://m.media-amazon.com/images/M/MV5BY2ZiODA2MGYtMmMxMi00YjlmLWFmYjktMWYyOTMwNWFkNWNkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UX140_CR0,0,140,207_.jpg 140w, https://m.media-amazon.com/images/M/MV5BY2ZiODA2MGYtMmMxMi00YjlmLWFmYjktMWYyOTMwNWFkNWNkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UX210_CR0,0,210,311_.jpg 210w, https://m.media-amazon.com/images/M/MV5BY2ZiODA2MGYtMmMxMi00YjlmLWFmYjktMWYyOTMwNWFkNWNkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UX280_CR0,0,280,414_.jpg 280w"
                sizes="50vw, (min-width: 480px) 34vw, (min-width: 600px) 26vw, (min-width: 1024px) 16vw, (min-width: 1280px) 16vw"
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
              7.25
            </div>
            <button className="group relative inline-block min-h-8 min-w-12 max-w-full cursor-pointer overflow-hidden rounded bg-tranparent px-3 text-base font-medium tracking-[.03125em]">
              <span className="mr-0 text-base font-normal -tracking-tight text-light-blue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="mr-[0.15em] h-[0.8em] w-[1em] group-hover:fill-[white]"
                  viewBox="0 0 24 24"
                  fill="rgba(87, 153, 239, 1)"
                  role="presentation"
                >
                  <path d="M22.724 8.217l-6.786-.587-2.65-6.22c-.477-1.133-2.103-1.133-2.58 0l-2.65 6.234-6.772.573c-1.234.098-1.739 1.636-.8 2.446l5.146 4.446-1.542 6.598c-.28 1.202 1.023 2.153 2.09 1.51l5.818-3.495 5.819 3.509c1.065.643 2.37-.308 2.089-1.51l-1.542-6.612 5.145-4.446c.94-.81.45-2.348-.785-2.446zm-10.726 8.89l-5.272 3.174 1.402-5.983-4.655-4.026 6.141-.531 2.384-5.634 2.398 5.648 6.14.531-4.654 4.026 1.402 5.983-5.286-3.187z"></path>
                </svg>
              </span>
            </button>
          </div>
          <Link className="relative h-10 cursor-pointer overflow-hidden text-ellipsis px-2 align-baseline text-base leading-5 tracking-[.03125em]">
            <span className="m-0 cursor-pointer p-0 align-baseline text-white">
              1. Bridgerton
            </span>
          </Link>
          <div className="relative px-2 pt-3 align-baseline">
            <button className="relative inline-flex min-h-9 w-full min-w-12 max-w-full cursor-pointer items-center justify-center overflow-hidden rounded bg-black-30 px-4 text-[0.875rem] font-medium leading-5 tracking-[0.02em] text-light-blue hover:bg-[#433F45]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="ml-[-0.375] mr-1 cursor-pointer overflow-hidden fill-white align-middle text-[0.875rem] font-medium leading-5 tracking-[0.02em]"
                viewBox="0 0 24 24"
                role="presentation"
              >
                <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
              </svg>
              <span className="overflow-hidden text-ellipsis whitespace-nowrap align-baseline text-white">
                Watchlist
              </span>
            </button>
            <div className="-mb-4 flex w-full items-center justify-center py-2 tracking-[.03125em]">
              <Link className="relative inline-flex min-h-9 min-w-12 max-w-full cursor-pointer items-center justify-center overflow-hidden text-ellipsis rounded px-4 align-baseline text-[0.875rem] font-medium leading-5 tracking-[0.02em] text-white hover:bg-[#403737]">
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
                <span className="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap align-baseline text-white">
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
