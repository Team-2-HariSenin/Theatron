import React, { useRef, useState, useEffect } from "react";
import CardMovie from "./CardMovie";

const MovieList = () => {
  const cardMovie = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  const elementRef = useRef(null);
  const cardRefs = useRef([]);
  const [entriesCard, setEntriesCard] = useState([]);
  const [leftArrowDisable, setLeftArrowDisable] = useState(true);
  const [rightArrowDisable, setRightArrowDisable] = useState(false);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const status = cardRefs.current.map((ref, index) => {
        const entry = entries.find((e) => e.target === ref);
        return `index: ${index} is ${entry ? entry.isIntersecting : "not observed"}`;
      });
      console.log(status);
    });

    cardRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      // Cleanup the observer on component unmount
      cardRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const calculateDistance = () => {
    if (elementRef.current) {
      const containerWidth = elementRef.current.clientWidth;
      let elementWidth;
      if (containerWidth < 480) {
        elementWidth = (containerWidth * 0.25 - (3 / 4) * 8 - 8) * 4;
      } else if (containerWidth >= 480 && containerWidth < 600) {
        elementWidth =
          (containerWidth * 0.25 - (3 / 4) * (0.75 * 16) - 0.75 * 16) * 4;
      } else if (containerWidth >= 600 && containerWidth < 1024) {
        elementWidth =
          (containerWidth * 0.125 - (7 / 8) * (0.75 * 16) - 0.375 * 16) * 8 +
          32;
      } else if (containerWidth >= 1024 && containerWidth < 1280) {
        elementWidth = containerWidth - 16;
      } else if (containerWidth >= 1280) {
        elementWidth = containerWidth - 8;
      }
      const calculatedDistance =
        elementRef.current.clientWidth -
        (elementRef.current.clientWidth - elementWidth);
      console.log("element", elementWidth);
      setDistance(calculatedDistance);
      console.log(calculatedDistance); // Debugging: Check the calculated distance
    }
  };

  useEffect(() => {
    calculateDistance();

    const handleResize = () => {
      calculateDistance();
      checkArrows(); // Check the arrow states after resizing
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleHorizontalScroll = (element, distance, speed, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      if (scrollAmount >= distance - step * 2) {
        element.scrollLeft += 1;
        scrollAmount += 1;
      } else {
        element.scrollLeft += step;
        scrollAmount += Math.abs(step);
      }
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
        checkArrows(); // Check the arrow states after scrolling
      }
      // console.log(scrollAmount);
    }, speed);
  };

  const checkArrows = () => {
    const { scrollLeft, scrollWidth, clientWidth } = elementRef.current;
    setLeftArrowDisable(scrollLeft === 0);
    setRightArrowDisable(scrollLeft + clientWidth >= scrollWidth);
  };

  useEffect(() => {
    const handleScroll = () => {
      checkArrows();
    };
    const element = elementRef.current;
    element.addEventListener("scroll", handleScroll);

    // Initial check
    checkArrows();

    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="mx-auto flex w-full flex-col bg-black-10 py-5 lg:container">
      <div className="relative mb-4 w-full align-baseline text-xl font-semibold leading-[1.2em] tracking-[0.0125em] text-white">
        <h3 className="m-h-[2.4em] relative flex items-center gap-2 overflow-hidden pl-3 text-xl leading-[29px] text-white sm:text-2xl">
          <span>
            <svg
              className="h-6 w-1 fill-yellow sm:h-7"
              viewBox="0 0 4 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="4" height="28" rx="2" fill="#F5C518" />
            </svg>
          </span>{" "}
          Indonesia Movies & TV
        </h3>
      </div>

      <div className="hide-scrollbar relative">
        {/* Prev Button */}
        <div
          onClick={() => {
            handleHorizontalScroll(elementRef.current, distance, 5, -10);
          }}
          className={`${leftArrowDisable ? "hidden" : ""} group absolute left-0 top-1/4 z-40 cursor-pointer rounded border border-white px-3 py-5 align-baseline text-2xl leading-[0]`}
        >
          <svg
            className="h-[1em] w-[1em] overflow-hidden fill-white align-baseline text-2xl leading-[0] tracking-[0.3125em] group-hover:fill-yellow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            role="presentation"
          >
            <path d="M18.378 23.369c.398-.402.622-.947.622-1.516 0-.568-.224-1.113-.622-1.515l-8.249-8.34 8.25-8.34a2.16 2.16 0 0 0 .548-2.07A2.132 2.132 0 0 0 17.428.073a2.104 2.104 0 0 0-2.048.555l-9.758 9.866A2.153 2.153 0 0 0 5 12.009c0 .568.224 1.114.622 1.515l9.758 9.866c.808.817 2.17.817 2.998-.021z"></path>
          </svg>
        </div>
        <div
          ref={elementRef}
          className="custom-grid-auto-columns hide-scrollbar m-h-[4em] relative grid snap-mandatory grid-flow-col gap-2 overflow-auto px-4 lg:gap-4 xl:gap-6"
        >
          {" "}
          {cardMovie.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="relative col-span-2 mb-1 mr-0 inline-flex w-full min-w-full snap-start flex-col gap-2 rounded bg-black-20 pb-4 text-base font-normal"
            >
              <CardMovie />
            </div>
          ))}
        </div>
        {/* Next Button */}
        <div
          onClick={() => {
            handleHorizontalScroll(elementRef.current, distance, 5, 10);
          }}
          className={`${rightArrowDisable ? "hidden" : ""} group absolute right-0 top-1/4 z-40 cursor-pointer rounded border border-white px-3 py-5 align-baseline text-2xl leading-[0]`}
        >
          <svg
            className="h-[1em] w-[1em] overflow-hidden fill-white align-baseline text-2xl leading-[0] tracking-[0.3125em] group-hover:fill-yellow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            role="presentation"
          >
            <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
