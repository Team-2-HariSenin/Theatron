// src/components/EditMovie.js
import React, { useEffect, useState } from "react";
import {
  Link,
  useAsyncError,
  useLocation,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import useAuthStore from "../../stores/useAuthStore";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function EditMovie() {
  const { token } = useAuthStore((state) => state);

  const query = useQuery();
  const idMovie = query.get("id_movie");
  const [movieId, setMovieId] = useState("");
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [banner, setBanner] = useState(null);
  const [poster, setPoster] = useState(null);
  const [name, setName] = useState("");
  const [overview, setOverview] = useState("");
  const [director, setDirector] = useState(null);
  const [writer, setWriter] = useState([]);
  const [star, setStar] = useState([]);
  const [category, setCategory] = useState([]);
  const [urlBanner, setUrlBanner] = useState(null);
  const [urlPoster, setUrlPoster] = useState(null);
  const [trailer, setTrailer] = useState([]);

  const [directorInput, setDirectorInput] = useState("");
  const [writerInput, setWriterInput] = useState("");
  const [starInput, setStarInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");

  const [dataDirector, setDataDirector] = useState([]);
  const [dataWriter, setDataWriter] = useState([]);
  const [dataStar, setDataStar] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);
  const [newTrailer, setNewTrailer] = useState("");

  function deleteItem(index, state, setState) {
    const updateItem = state.filter((_, i) => i !== index);
    setState(updateItem);
  }

  const onChangeHandler = (setter) => (e) => setter(e.target.value);
  const onChangeHandlerFile = (setter) => (e) => setter(e.target.files[0]);

  const getSuggestions = async (url, setter, keyword) => {
    if (keyword) {
      try {
        const option = {
          headers: { Authorization: `Bearer ${token}` },
        };
        let res;
        if (setter !== setDataCategory) {
          res = await axios.get(url, option);
        } else {
          res = await axios.get(url);
        }

        if (setter === setDataDirector) {
          setter(res.data.data.directors);
        } else if (setter === setDataWriter) {
          setter(res.data.data.writers);
        } else if (setter === setDataStar) {
          setter(res.data.data.stars);
        } else if (setter === setDataCategory) {
          setter(res.data.data.categories);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    } else {
      setter([]);
    }
  };

  useEffect(() => {
    getSuggestions(
      `http://127.0.0.1:3000/api/admin/all-director?keyword=${directorInput}`,
      setDataDirector,
      directorInput,
    );
    console.log(dataDirector);
  }, [directorInput]);

  useEffect(() => {
    getSuggestions(
      `http://127.0.0.1:3000/api/admin/all-writer?keyword=${writerInput}`,
      setDataWriter,
      writerInput,
    );
  }, [writerInput]);

  useEffect(() => {
    getSuggestions(
      `http://127.0.0.1:3000/api/admin/all-star?keyword=${starInput}`,
      setDataStar,
      starInput,
    );
  }, [starInput]);

  useEffect(() => {
    getSuggestions(
      `http://127.0.0.1:3000/api/movie/all-category?keyword=${categoryInput}`,
      setDataCategory,
      categoryInput,
    );
  }, [categoryInput]);

  function addNewTrailer() {
    if (newTrailer.trim() !== "") {
      setTrailer((trailer) => [...trailer, newTrailer]);
      setNewTrailer("");
    }
  }

  useEffect(() => {
    if (idMovie) {
      // Fetch movie data from API
      axios
        .get(`http://127.0.0.1:3000/api/movie/${idMovie}`)
        .then((response) => {
          setMovieData(response.data.data);
          setName(response.data.data.name);
          setOverview(response.data.data.overview);
          setDirector(response.data.data.director);
          setWriter(response.data.data.writers);
          setStar(response.data.data.stars);
          setCategory(response.data.data.categories);
          setTrailer(response.data.data.trailers.map((trailer) => trailer.key));
          setUrlBanner(response.data.data.url_image);
          setUrlPoster(response.data.data.url_poster);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
  }, [idMovie]);

  const updateTrailer = async () => {
    console.log("Sending Trailer...");
    const newTrailer = {
      id_movie: idMovie,
      youtubeIds: trailer,
    };
    try {
      const res = await axios.put(
        `http://127.0.0.1:3000/api/admin/update-trailer`,
        newTrailer,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(res.data.message);
      setLoading(false);
    } catch (err) {
      console.error("Error uploading files:", err);
      setLoading(false); // Set loading to false if there's an error
    }
  };

  const updateMovie = async () => {
    console.log("Sending Movie...");
    const updatedMovie = {
      id: movieData.id,
    };

    if (name !== movieData.name) {
      updatedMovie.name = name;
    }

    if (overview !== movieData.overview) {
      updatedMovie.overview = overview;
    }

    if (director?.id !== movieData.director?.id) {
      updatedMovie.director = director.id;
    }

    if (
      JSON.stringify(writer.map((w) => w.id)) !==
      JSON.stringify(movieData.writers.map((w) => w.id))
    ) {
      updatedMovie.writerIds = writer.map((writer) => writer.id);
    }

    if (
      JSON.stringify(star.map((s) => s.id)) !==
      JSON.stringify(movieData.stars.map((s) => s.id))
    ) {
      updatedMovie.starIds = star.map((star) => star.id);
    }

    if (
      JSON.stringify(category.map((c) => c.id)) !==
      JSON.stringify(movieData.categories.map((c) => c.id))
    ) {
      updatedMovie.categoryIds = category.map((category) => category.id);
    }

    try {
      const response = await axios.put(
        "http://127.0.0.1:3000/api/admin/update-movie",
        updatedMovie,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(response.data.message);
      setMovieData(response.data.data);
      setName(response.data.data.name);
      setOverview(response.data.data.overview);
      setDirector(response.data.data.director);
      setWriter(response.data.data.writers);
      setStar(response.data.data.stars);
      setCategory(response.data.data.categories);
      setTrailer(response.data.data.trailers.map((trailer) => trailer.key));
      setUrlBanner(response.data.data.url_image);
      setUrlPoster(response.data.data.url_poster);
    } catch (error) {
      console.error("Error updating movie:", error);
      setLoading(false); // Set loading to false if there's an error
    }
  };

  const addImage = async () => {
    const formData = new FormData();
    formData.append("id_movie", idMovie);
    formData.append("image", banner);
    formData.append("poster", poster);
    try {
      const res = await axios.post(
        `http://127.0.0.1:3000/api/admin/add-image`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(res.data.message);
      updateTrailer();
      updateMovie();
    } catch (err) {
      console.error("Error uploading files:", err);
    } finally {
      setLoading(false); // Set loading to false after process completes
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form is submitted
    addImage();
  };

  const deleteImage = async (url, type) => {
    console.log("Delete Image...");
    try {
      const res = await axios.delete(
        "http://127.0.0.1:3000/api/admin/delete-image",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: { id_movie: idMovie, url, type },
        },
      );
      console.log(res.data.message);
      if (type === "banner") {
        setUrlBanner(null);
      } else if (type === "poster") {
        setUrlPoster(null);
      }
      setLoading(false);
    } catch (err) {
      console.error("Error deleting image:", err);
      setLoading(false); // Set loading to false if there's an error
    }
  };

  const handleDeleteImage = (url, type) => {
    if (confirm("Do you really want to delete this file?")) {
      deleteImage(url, type);
    }
  };

  return (
    <div className="w-full">
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
        {idMovie ? (
          loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            <div className="overflow-y-auto">
              <form
                onSubmit={onSubmit}
                className="mx-auto flex h-full w-full max-w-[564px] flex-col gap-2"
              >
                <label
                  className="font-semibold text-black-30"
                  htmlFor="movieName"
                >
                  Movie Id
                </label>
                <input
                  type="text"
                  id="movieName"
                  value={idMovie}
                  readOnly
                  disabled
                  className="h-11 w-full rounded border border-black-30 p-2 text-black-30"
                />
                <label
                  className="font-semibold text-black-30"
                  htmlFor="movieName"
                >
                  Movie Name*
                </label>
                <input
                  type="text"
                  id="movieName"
                  value={name}
                  onChange={onChangeHandler(setName)}
                  required
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
                  value={overview}
                  onChange={onChangeHandler(setOverview)}
                  required
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
                    {director && (
                      <div
                        onClick={() => setDirector(null)}
                        className="w-fit cursor-pointer rounded border border-black-30 p-2 text-black-30"
                      >
                        {director.name}
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="movieDirector"
                      value={directorInput}
                      onChange={(e) => setDirectorInput(e.target.value)}
                      placeholder="Search Director..."
                      className="w-full cursor-pointer rounded border border-black-30 p-2 text-black-30 placeholder:italic placeholder:text-black-30"
                    />
                    {dataDirector.length > 0 && (
                      <div
                        className={`absolute z-10 flex h-fit max-h-36 w-full flex-col overflow-auto text-white`}
                      >
                        {dataDirector.map((director) => (
                          <div
                            key={director.id}
                            onClick={() => {
                              setDirector(director);
                              setDirectorInput("");
                              setDataDirector([]);
                            }}
                            className="cursor-pointer bg-black-90 p-2 hover:bg-black-40"
                          >
                            {director.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <label
                  className="font-semibold text-black-30"
                  htmlFor="movieWriter"
                >
                  Movie Writer
                </label>
                <div className="flex h-fit w-full flex-col gap-2 rounded border border-black-30 p-2 text-black-30">
                  <div className="flex h-fit min-h-11 w-full flex-wrap gap-2">
                    {writer.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => deleteItem(index, writer, setWriter)}
                        className="w-fit cursor-pointer rounded border border-black-30 p-2 text-black-30"
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="movieWriter"
                      value={writerInput}
                      onChange={(e) => setWriterInput(e.target.value)}
                      placeholder="Search Writer..."
                      className="w-full cursor-pointer rounded border border-black-30 p-2 text-black-30 placeholder:italic placeholder:text-black-30"
                    />
                    {dataWriter.length > 0 && (
                      <div
                        className={`absolute z-10 flex h-fit max-h-36 w-full flex-col overflow-auto text-white`}
                      >
                        {dataWriter.map((writer) => (
                          <div
                            key={writer.id}
                            onClick={() => {
                              setWriter((prev) => [...prev, writer]);
                              setWriterInput("");
                              setDataWriter([]);
                            }}
                            className="cursor-pointer bg-black-90 p-2 hover:bg-black-40"
                          >
                            {writer.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <label
                  className="font-semibold text-black-30"
                  htmlFor="movieStar"
                >
                  Movie Star
                </label>
                <div className="flex h-fit w-full flex-col gap-2 rounded border border-black-30 p-2 text-black-30">
                  <div className="flex h-fit min-h-11 w-full flex-wrap gap-2">
                    {star.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => deleteItem(index, star, setStar)}
                        className="w-fit cursor-pointer rounded border border-black-30 p-2 text-black-30"
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="movieWriter"
                      value={starInput}
                      onChange={(e) => setStarInput(e.target.value)}
                      placeholder="Search Star..."
                      className="w-full cursor-pointer rounded border border-black-30 p-2 text-black-30 placeholder:italic placeholder:text-black-30"
                    />
                    {dataStar.length > 0 && (
                      <div
                        className={`absolute z-10 flex h-fit max-h-36 w-full flex-col overflow-auto text-white`}
                      >
                        {dataStar.map((star) => (
                          <div
                            key={star.id}
                            onClick={() => {
                              setStar((prev) => [...prev, star]);
                              setStarInput("");
                              setDataStar([]);
                            }}
                            className="cursor-pointer bg-black-90 p-2 hover:bg-black-40"
                          >
                            {star.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <label
                  className="font-semibold text-black-30"
                  htmlFor="movieCategory"
                >
                  Movie Category
                </label>
                <div className="flex h-fit w-full flex-col gap-2 rounded border border-black-30 p-2 text-black-30">
                  <div className="flex h-fit min-h-11 w-full flex-wrap gap-2">
                    {category.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => deleteItem(index, category, setCategory)}
                        className="w-fit cursor-pointer rounded border border-black-30 p-2 text-black-30"
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="movieWriter"
                      value={categoryInput}
                      onChange={(e) => setCategoryInput(e.target.value)}
                      placeholder="Search Category..."
                      className="w-full cursor-pointer rounded border border-black-30 p-2 text-black-30 placeholder:italic placeholder:text-black-30"
                    />
                    {dataCategory.length > 0 && (
                      <div
                        className={`absolute z-10 flex h-fit max-h-36 w-full flex-col overflow-auto text-white`}
                      >
                        {dataCategory.map((category) => (
                          <div
                            key={category.id}
                            onClick={() => {
                              setCategory((prev) => [...prev, category]);
                              setCategoryInput("");
                              setDataCategory([]);
                            }}
                            className="cursor-pointer bg-black-90 p-2 hover:bg-black-40"
                          >
                            {category.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <label
                  className="font-semibold text-black-30"
                  htmlFor="movieTrailer"
                >
                  Movie Trailer
                </label>
                <div className="flex h-fit w-full flex-col gap-2 rounded border border-black-30 p-2 text-black-30">
                  <div className="flex h-fit min-h-11 w-full flex-wrap gap-2">
                    {trailer.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => deleteItem(index, trailer, setTrailer)}
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
                      onChange={onChangeHandler(setNewTrailer)}
                      value={newTrailer}
                      placeholder="Add Youtube Video Id"
                      className="w-full cursor-pointer rounded p-2 text-black-30 placeholder:italic placeholder:text-black-30"
                    />
                    <div
                      onClick={addNewTrailer}
                      className="w-fit cursor-pointer border-l border-black-30 p-2 px-4 text-black-30"
                    >
                      Add
                    </div>
                  </div>
                </div>

                <div className="">
                  <h3 className="mb-2 text-lg font-semibold">{`${urlBanner ? "Banner" : "Add Banner"}`}</h3>
                  {urlBanner ? (
                    <div className="relative mb-4 flex flex-col items-center">
                      <img
                        src={urlBanner}
                        alt="Banner"
                        className="w-full rounded-lg object-cover shadow-md"
                      />
                      <div
                        onClick={() => handleDeleteImage(urlBanner, "banner")}
                        className="absolute bottom-2 right-2 w-fit cursor-pointer rounded bg-[#cc0d0d] p-2 font-semibold text-white"
                      >
                        Delete Banner
                      </div>
                    </div>
                  ) : (
                    <input
                      type="file"
                      onChange={onChangeHandlerFile(setBanner)}
                      className="w-full cursor-pointer rounded border border-black-30 p-2 text-black-30 placeholder:italic placeholder:text-black-30"
                    />
                  )}

                  <h3 className="mb-2 text-lg font-semibold">{`${urlPoster ? "Poster" : "Add Poster"}`}</h3>
                  {urlPoster ? (
                    <div className="relative flex flex-col items-center">
                      <img
                        src={urlPoster}
                        alt="Poster"
                        className="w-full rounded-lg object-cover shadow-md"
                      />
                      <div
                        onClick={() => handleDeleteImage(urlPoster, "poster")}
                        className="absolute bottom-2 right-2 w-fit cursor-pointer rounded bg-[#cc0d0d] p-2 font-semibold text-white"
                      >
                        Delete Poster
                      </div>
                    </div>
                  ) : (
                    <input
                      type="file"
                      onChange={onChangeHandlerFile(setPoster)}
                      className="w-full cursor-pointer rounded border border-black-30 p-2 text-black-30 placeholder:italic placeholder:text-black-30"
                    />
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mb-12 w-full cursor-pointer rounded border border-black-30 bg-yellow p-2 text-black-30"
                >
                  {loading ? "Upload Movie..." : "Add Movie"}
                </button>
              </form>
            </div>
          )
        ) : (
          <div className="mx-auto flex h-full w-full max-w-[564px] flex-col items-center justify-center gap-2">
            <label
              className="w-full text-start font-semibold text-black-30"
              htmlFor="categoryName"
            >
              Movie id*
            </label>
            <input
              type="text"
              id="categoryName"
              value={movieId}
              onChange={onChangeHandler(setMovieId)}
              placeholder="Please add movie id!"
              required
              className="h-11 w-full rounded border border-black-30 p-2 text-black-30"
            />

            <Link
              to={`/admin/movies/edit?id_movie=${movieId}`}
              onClick={() => setMovieId("")}
              disabled={loading}
              className="mb-12 mt-5 w-full cursor-pointer rounded border border-black-30 bg-yellow p-2 text-center text-black-30"
            >
              Add Movie Id
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default EditMovie;
