import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTrashCan } from "react-icons/fa6";
import { FaEdit, FaInfoCircle } from "react-icons/fa";
import useAuthStore from "../../stores/useAuthStore";

const OverviewMovie = () => {
  const [searchInput, setSearchInput] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { token } = useAuthStore((state) => state);

  const getMovies = async (keyword = "", page = 1) => {
    try {
      const response = await axios.get(
        `https://theatron-backend.vercel.app/api/movie?keyword=${keyword}&page=${page}&limit=10`,
      );
      setMovieData(response.data.data.movies);
      setTotalPages(response.data.data.totalPages);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getMovies("", currentPage);
  }, [currentPage]);

  const onChangeHandler = (setter) => (e) => setter(e.target.value);

  const handleSearch = () => {
    setCurrentPage(1);
    getMovies(searchInput, 1);
  };

  const deleteMovie = async (id) => {
    try {
      const response = await axios.delete(
        `https://theatron-backend.vercel.app/api/admin/delete-movie/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      window.location.reload();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleDelete = (id) => {
    confirm("Do you really want to delete this movie?") && deleteMovie(id);
  };

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
        <h1>Overviews</h1>
      </nav>
      <div className="mt-10 flex h-full w-full flex-col gap-3 overflow-y-auto">
        <div className="flex justify-between gap-5">
          <Link
            to={"/admin/movies/add"}
            className="relative flex w-fit items-center justify-center text-nowrap rounded border border-black-30 bg-yellow px-3 text-black-30"
          >
            Add Movie
          </Link>
          <div className="relative flex w-full max-w-md rounded border border-black-30 text-black-30">
            <input
              type="text"
              id="movieTrailer"
              onChange={onChangeHandler(setSearchInput)}
              value={searchInput}
              placeholder="Search Movie Name..."
              className="w-full cursor-pointer rounded p-2 text-black-30 placeholder:italic placeholder:text-black-30"
            />
            <div
              onClick={handleSearch}
              className="w-fit cursor-pointer border-l border-black-30 p-2 px-4 text-black-30"
            >
              Search
            </div>
          </div>
        </div>
        <div className="relative overflow-x-auto border border-black-30 sm:rounded-lg">
          <table className="w-full text-left text-base text-black-30 rtl:text-right">
            <thead className="bg-black-30 text-base uppercase text-white">
              <tr>
                <th scope="col" className="px-6 py-4 text-center">
                  ID
                </th>
                <th scope="col" className="px-6 py-4 text-center">
                  Name
                </th>
                <th scope="col" className="px-6 py-4 text-center">
                  Rate Count
                </th>
                <th scope="col" className="px-6 py-4 text-center">
                  Rate Average
                </th>
                <th scope="col" className="px-6 py-4 text-center">
                  Watchlist Count
                </th>
                <th scope="col" className="px-6 py-4 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {movieData.length > 0 ? (
                movieData.map((movie, index) => (
                  <tr
                    key={movie.id}
                    className={`bg-white ${index !== movieData.length - 1 ? "border-b" : ""}`}
                  >
                    <td className="px-6 py-4 text-center">{movie.id}</td>
                    <td className="text-ellipsis whitespace-nowrap text-nowrap px-6 py-4">
                      {movie.name}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {movie.rate_count}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {Number(movie.rate_average)}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {movie.watchlist_count}
                    </td>
                    <td className="flex items-center justify-center gap-2 px-6 py-4">
                      <Link
                        to={`/admin/movies/edit?id_movie=${movie.id}`}
                        className="relative -top-[1px] left-[3.5px]"
                      >
                        <FaEdit size={26} />
                      </Link>
                      <button
                        onClick={() => handleDelete(movie.id)}
                        className="text-blue-600 font-medium hover:underline"
                      >
                        <FaTrashCan size={21} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center">
                    {`No data found for "${searchInput}"`}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="mx-auto flex w-full max-w-96 justify-between">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="rounded border px-4 py-2 text-black-30"
          >
            Previous
          </button>
          <span className="px-4 py-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="rounded border px-4 py-2 text-black-30"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default OverviewMovie;
