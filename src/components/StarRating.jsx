import React, { useEffect, useState } from "react";
import useRatingStore from "../stores/useRatingStore";
import useAuthStore from "../stores/useAuthStore";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AiFillSun } from "react-icons/ai";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [removeButton, setRemoveButton] = useState(false);

  const { token, isAuthenticated, logout, isAdmin } = useAuthStore(
    (state) => state,
  );
  const { active, setActive, titleMovie, idMovie } = useRatingStore(
    (state) => state,
  );

  const navigate = useNavigate();

  /**
   * Function to send the user rating to the server.
   *
   * @return {Promise<void>} - Promise that resolves after sending the rating
   */
  const sendRating = async () => {
    try {
      const response = await axios.post(
        "https://theatron-backend.vercel.app/api/rate",
        { id_movie: idMovie, rate: rating },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(response.data.message);
      setActive(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    if (!isAuthenticated) {
      return navigate("/signin");
    } else if (isAdmin) {
      logout();
      return navigate("/signin");
    }
    sendRating();
  };

  /**
   * Asynchronously removes a rating from the server using the provided idMovie and token.
   *
   * @return {Promise<void>} A Promise that resolves when the rating is successfully deleted.
   * @throws {Error} If there is an error deleting the rating.
   */
  const removeRate = async () => {
    try {
      const response = await axios.delete(
        `https://theatron-backend.vercel.app/api/rate`,
        {
          data: {
            id_movie: idMovie,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setRating(null);
      setRemoveButton(false);
      setActive(false);
    } catch (error) {
      console.log("Error deleting data:", error);
    }
  };

  const handleRemove = () => {
    if (!isAuthenticated) {
      return navigate("/signin");
    }
    removeRate();
  };

  const getRating = async () => {
    try {
      const response = await axios.get(
        `https://theatron-backend.vercel.app/api/rate?id_movie=${idMovie}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (response.data.data) {
        setRating(response.data.data.rate);
        setRemoveButton(true);
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

    if (active) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [active]);

  const handleOutsideClick = (e) => {
    // Check if the clicked element is the main div or not
    if (e.target === e.currentTarget) {
      setRating(null);
      setHover(null);
      setActive(false);
    }
  };

  const scaleClass = () => {
    switch (rating) {
      case 1:
        return "scale-[1.05]";
      case 2:
        return "scale-[1.1]";
      case 3:
        return "scale-[1.15]";
      case 4:
        return "scale-[1.2]";
      case 5:
        return "scale-[1.25]";
      case 6:
        return "scale-[1.3]";
      case 7:
        return "scale-[1.35]";
      case 8:
        return "scale-[1.4]";
      case 9:
        return "scale-[1.45]";
      case 10:
        return "scale-[1.5]";
      default:
        return "scale-[1]";
    }
  };
  return (
    <div
      onClick={handleOutsideClick}
      className={`${active ? "fixed" : "hidden"} top-0 z-[99999] flex h-screen w-full items-end justify-center bg-[#00000065] xs:items-center`}
    >
      <div className="relative flex h-[300px] w-full max-w-[calc(600px-4rem)] justify-center bg-black-20 pb-[3.75rem] xs:h-fit">
        <div
          className={`absolute -top-12 left-0 flex w-full ${scaleClass()} transform flex-col items-center transition-transform duration-200 ease-out`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="85"
            height="81"
            className="fill-light-blue"
            viewBox="0 0 85 81"
            fill="currentColor"
            role="presentation"
          >
            <path d="M29.4278383,26.4913549 L2.77970363,28.6432143 L2.63541119,28.6580541 C0.066865676,28.979767 -0.941953299,32.2222005 1.05754936,33.9345403 L21.3502824,51.3123553 L15.1650027,77.2797478 L15.1355051,77.4163845 C14.6437005,79.9569202 17.4230421,81.9201545 19.6736611,80.5499671 L42.5,66.6529451 L65.3263389,80.5499671 L65.447392,80.6201968 C67.7156822,81.8722123 70.4448402,79.8400226 69.8349973,77.2797478 L63.6489629,51.3123553 L83.9424506,33.9345403 L84.0504483,33.8378644 C85.9390285,32.0703808 84.8461128,28.855226 82.2202964,28.6432143 L55.571407,26.4913549 L45.2865041,1.85440279 C44.2543406,-0.618134262 40.7456594,-0.618134262 39.7134959,1.85440279 L29.4278383,26.4913549 Z"></path>
          </svg>
          <div className="translate-y-[-3.25rem] transform text-[1.375rem] font-normal text-white">
            {rating >= 1 ? rating : "?"}
          </div>
        </div>
        <div className="mt-14 flex w-full max-w-[320px] flex-col items-center justify-center text-white">
          <h6 className="text-center text-xs font-semibold text-yellow">
            RATE THIS
          </h6>
          <div className="my-2 max-h-[3.2rem] px-4 text-center text-xl">
            {titleMovie}
          </div>
          <div className="flex w-full flex-col items-center">
            <div className="flex">
              {[...Array(10)].map((star, i) => (
                <label
                  className="cursor-pointer"
                  onMouseEnter={() => setHover(i + 1)}
                  onMouseLeave={() => setHover(null)}
                  key={i}
                >
                  <input
                    className="hidden"
                    type="radio"
                    name="rating"
                    value={i + 1}
                    onClick={() => setRating(i + 1)}
                  />
                  {i < (hover || rating) ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 fill-light-blue"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      role="presentation"
                    >
                      <path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      className="h-7 w-7 fill-white-70"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      role="presentation"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
                    </svg>
                  )}
                </label>
              ))}
            </div>
            <button
              onClick={() => handleClick()}
              disabled={!rating}
              className={`m-4 inline-flex min-h-9 w-full min-w-12 ${rating && "cursor-pointer"} items-center justify-center rounded ${rating ? "bg-yellow text-black-30" : "bg-black-30"} text-[.875rem] font-semibold`}
            >
              <span>Rate</span>
            </button>
            <button
              onClick={() => handleRemove()}
              className={`m-4 mt-0 ${removeButton ? "inline-flex" : "hidden"} min-h-9 w-full min-w-12 cursor-pointer items-center justify-center rounded text-[.875rem] font-semibold text-light-blue hover:bg-black-30`}
            >
              <span>Remove Rating</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarRating;
