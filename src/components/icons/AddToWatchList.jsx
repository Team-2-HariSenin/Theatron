import React from "react";

const AddToWatchList = () => {
  return (
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
  );
};

export default AddToWatchList;
