import React from "react";
import { DiEclipse } from "react-icons/di";

const AddMovie = () => {
  const Writer = ["Writer 1", "Writer 2", "Writer 3"];
  const Star = ["Star 1", "Star 2", "Star 3"];
  const Category = ["Category 1", "Category 2", "Category 3"];
  const Trailer = ["Category 1", "Category 2", "Category 3"];
  const directorsData = [];
  const writersData = [];
  const starsData = [];
  const categoriesData = [];

  return (
    <div className="flex h-screen w-full flex-col gap-4 px-6 pb-10 pt-2">
      <nav className="relative ml-5 flex h-fit items-center justify-start gap-3 text-4xl font-bold">
        <h1>Movie</h1>
        <span>
          <svg
            className="h-6 overflow-hidden fill-black-30 align-baseline text-2xl leading-[0] tracking-[0.3125em] group-hover:fill-yellow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            role="presentation"
          >
            <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path>
          </svg>
        </span>
        <h1>Add</h1>
      </nav>
      <div className="overflow-y-auto">
        <form className="mx-auto flex h-full w-full max-w-[564px] flex-col gap-2">
          <label className="font-semibold text-black-30" htmlFor="movieName">
            Movie Name*
          </label>
          <input
            type="text"
            id="movieName"
            className="h-11 w-full rounded border border-black-30 p-2 text-black-30"
          />
          <label
            className="font-semibold text-black-30"
            htmlFor="movieOverview"
          >
            Movie Overview*
          </label>
          <textarea
            rows={4}
            type="text"
            id="movieOverview"
            className="w-full rounded border border-black-30 p-2 text-black-30"
          />
          <label
            className="font-semibold text-black-30"
            htmlFor="movieDirector"
          >
            Movie Director
          </label>
          <div className="flex w-full flex-col gap-2 rounded border border-black-30 p-2 text-black-30">
            <div className="h-11 w-full">
              <div className="w-fit cursor-pointer rounded border border-black-30 p-2 text-black-30">
                Director Name
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                id="movieDirector"
                placeholder="Search Director..."
                className="w-full cursor-pointer rounded border border-black-30 p-2 text-black-30 placeholder:italic placeholder:text-black-30"
              />
              <div
                className={`absolute ${directorsData ? "flex" : "hidden"} h-fit max-h-36 w-full flex-col overflow-auto text-white`}
              >
                {directorsData.map((item, index) => (
                  <div
                    key={index}
                    className="cursor-pointer bg-black-90 p-2 hover:bg-black-40"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <label className="font-semibold text-black-30" htmlFor="movieWriter">
            Movie Writer
          </label>
          <div className="flex w-full flex-col gap-2 rounded border border-black-30 p-2 text-black-30">
            <div className="flex h-11 w-full flex-wrap gap-2">
              {Writer.map((item, index) => (
                <div
                  key={index}
                  className="w-fit cursor-pointer rounded border border-black-30 p-2 text-black-30"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="relative">
              <input
                type="text"
                id="movieWriter"
                placeholder="Search Writer..."
                className="w-full cursor-pointer rounded border border-black-30 p-2 text-black-30 placeholder:italic placeholder:text-black-30"
              />
              <div
                className={`absolute ${writersData ? "flex" : "hidden"} h-fit max-h-36 w-full flex-col overflow-auto text-white`}
              >
                {writersData.map((item, index) => (
                  <div
                    key={index}
                    className="cursor-pointer bg-black-90 p-2 hover:bg-black-40"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <label className="font-semibold text-black-30" htmlFor="movieStar">
            Movie Star
          </label>
          <div className="flex w-full flex-col gap-2 rounded border border-black-30 p-2 text-black-30">
            <div className="flex h-11 w-full flex-wrap gap-2">
              {Star.map((item, index) => (
                <div
                  key={index}
                  className="w-fit cursor-pointer rounded border border-black-30 p-2 text-black-30"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="relative">
              <input
                type="text"
                id="movieWriter"
                placeholder="Search Star..."
                className="w-full cursor-pointer rounded border border-black-30 p-2 text-black-30 placeholder:italic placeholder:text-black-30"
              />
              <div
                className={`absolute ${starsData ? "flex" : "hidden"} h-fit max-h-36 w-full flex-col overflow-auto text-white`}
              >
                {starsData.map((item, index) => (
                  <div
                    key={index}
                    className="cursor-pointer bg-black-90 p-2 hover:bg-black-40"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <label
            className="font-semibold text-black-30"
            htmlFor="movieCategory"
          >
            Movie Category
          </label>
          <div className="flex w-full flex-col gap-2 rounded border border-black-30 p-2 text-black-30">
            <div className="flex h-11 w-full flex-wrap gap-2">
              {Category.map((item, index) => (
                <div
                  key={index}
                  className="w-fit cursor-pointer rounded border border-black-30 p-2 text-black-30"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="relative">
              <input
                type="text"
                id="movieWriter"
                placeholder="Search Category..."
                className="w-full cursor-pointer rounded border border-black-30 p-2 text-black-30 placeholder:italic placeholder:text-black-30"
              />
              <div
                className={`absolute ${categoriesData ? "flex" : "hidden"} h-fit max-h-36 w-full flex-col overflow-auto text-white`}
              >
                {categoriesData.map((item, index) => (
                  <div
                    key={index}
                    className="cursor-pointer bg-black-90 p-2 hover:bg-black-40"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <label className="font-semibold text-black-30" htmlFor="movieTrailer">
            Movie Trailer
          </label>
          <div className="flex w-full flex-col gap-2 rounded border border-black-30 p-2 text-black-30">
            <div className="flex h-11 w-full flex-wrap gap-2">
              {Trailer.map((item, index) => (
                <div
                  key={index}
                  className="w-fit cursor-pointer rounded border border-black-30 p-2 text-black-30"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="relative flex w-full rounded border border-black-30 text-black-30">
              <input
                type="text"
                id="movieTrailer"
                placeholder="Add Youtube Video Id"
                className="w-full cursor-pointer rounded p-2 text-black-30 placeholder:italic placeholder:text-black-30"
              />
              <button className="w-fit cursor-pointer border-l border-black-30 p-2 px-4 text-black-30">
                Add
              </button>
            </div>
          </div>
          <h2 className="font-semibold text-black-30">Add Movie Banner</h2>
          <input
            type="file"
            id="movieBanner"
            placeholder="Search Category..."
            className="w-full cursor-pointer rounded border border-black-30 p-2 text-black-30 placeholder:italic placeholder:text-black-30"
          />
          <h3 className="font-semibold text-black-30">Add Movie Poster</h3>
          <input
            type="file"
            id="moviePoster"
            placeholder="Search Category..."
            className="w-full cursor-pointer rounded border border-black-30 p-2 text-black-30 placeholder:italic placeholder:text-black-30"
          />
          <button
            type="submit"
            className="mb-12 w-full cursor-pointer rounded border border-black-30 p-2 text-black-30"
          >
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
