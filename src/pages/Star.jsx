import React, { useEffect, useState } from "react";
import CardMovie from "../components/CardMovie";
import { useParams } from "react-router-dom";
import axios from "axios";

const Star = () => {
  const { id } = useParams();

  const [starData, setStarData] = useState([]);
  const [starName, setStarName] = useState("");

  const getMovieByStar = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:3000/api/movie/star/${id}`,
      );
      setStarData(response.data.data.movies);
      setStarName(response.data.data.name);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getMovieByStar();
  }, [id]);

  return (
    <div className="mx-auto flex w-full flex-col py-5 lg:container">
      <div className="relative mb-8 w-full align-baseline text-xl font-semibold leading-[1.2em] tracking-[0.0125em] text-white">
        <h3 className="m-h-[2.4em] relative flex items-center gap-2 overflow-hidden pl-3 text-2xl leading-[29px] text-white sm:text-4xl">
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
          {`${starName}'s Movie`}
        </h3>
      </div>

      <div className="hide-scrollbar relative">
        {/* Card Movie */}
        <div className="hide-scrollbar m-h-[4em] relative grid snap-mandatory grid-cols-4 gap-4 px-4 xs:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 lg:gap-4 xl:gap-6">
          {" "}
          {starData.map((star, index) => (
            <div
              key={star.id}
              className="relative col-span-2 mb-1 mr-0 inline-flex w-full min-w-full snap-start flex-col gap-2 rounded bg-black-20 pb-4 text-base font-normal"
            >
              <CardMovie
                id_movie={star.id}
                src={star.url_poster}
                title={star.name}
                rateAverage={Number(star.rate_average)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Star;