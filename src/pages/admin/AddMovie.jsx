import axios from "axios";
import React, { useEffect, useState } from "react";
import { DiEclipse } from "react-icons/di";
import useAuthStore from "../../stores/useAuthStore";

const AddMovie = () => {
  const { token } = useAuthStore((state) => state);

  const [banner, setBanner] = useState(null);
  const [poster, setPoster] = useState(null);
  const [name, setName] = useState("");
  const [overview, setOverview] = useState("");
  const [director, setDirector] = useState(null);
  const [writer, setWriter] = useState([]);
  const [star, setStar] = useState([]);
  const [category, setCategory] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [loading, setLoading] = useState(false);

  const [directorInput, setDirectorInput] = useState("");
  const [writerInput, setWriterInput] = useState("");
  const [starInput, setStarInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");

  const [inputImageBy, setInputImageBy] = useState("text");

  const [urlBannerInput, setUrlBannerInput] = useState("");
  const [urlPosterInput, setUrlPosterInput] = useState("");

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

  const addImage = async (idMovie) => {
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
    } catch (err) {
      console.error("Error uploading files:", err);
    } finally {
      setLoading(false); // Set loading to false after process completes
    }
  };

  const addTrailer = async (idMovie) => {
    console.log("Sending Trailer...");
    const newTrailer = {
      id_movie: idMovie,
      youtubeId: trailer,
    };
    try {
      const res = await axios.post(
        `http://127.0.0.1:3000/api/admin/add-trailer`,
        newTrailer,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(res.data.message);
    } catch (err) {
      console.error("Error uploading files:", err);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form is submitted
    console.log("Sending Movie...");
    const newMovie = {
      name,
      overview,
      director: director ? director.id : null,
      writer: writer.map((writer) => writer.id),
      star: star.map((star) => star.id),
      category: category.map((category) => category.id),
    };

    if (urlBannerInput && inputImageBy === "text") {
      newMovie.url_image = urlBannerInput;
    }

    if (urlPosterInput && inputImageBy === "text") {
      newMovie.url_poster = urlPosterInput;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/api/admin/add-movie",
        newMovie,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(response.data.message);
      const idMovie = response.data.data.id;
      await addTrailer(idMovie);
      if (banner && poster && inputImageBy === "file") {
        await addImage(idMovie);
      }

      setLoading(false);
      window.location.reload();
    } catch (error) {
      console.error("Error adding movie:", error);
      setLoading(false); // Set loading to false if there's an error
    }
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
        <h1>Add</h1>
      </nav>
      <div className="overflow-y-auto">
        <form
          onSubmit={onSubmit}
          className="mx-auto flex h-full w-full max-w-[564px] flex-col gap-2"
        >
          <label className="font-semibold text-black-30" htmlFor="movieName">
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
            className="min-h-28 w-full rounded border border-black-30 p-2 text-black-30"
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
          <label className="font-semibold text-black-30" htmlFor="movieWriter">
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
          <label className="font-semibold text-black-30" htmlFor="movieStar">
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
          <label className="font-semibold text-black-30" htmlFor="movieTrailer">
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
          {/* add image */}

          <label className="font-semibold text-black-30" htmlFor="movieWriter">
            Input Image By
          </label>

          <select
            id="inputImageBy"
            value={inputImageBy}
            onChange={(e) => setInputImageBy(e.target.value)}
            className="w-full cursor-pointer rounded border border-black-30 p-2 text-black-30"
          >
            <option value="text">Text</option>
            <option value="file">File</option>
          </select>

          <h2 className="font-semibold text-black-30">Add Movie Banner</h2>
          {inputImageBy === "text" ? (
            <input
              type="text"
              id="movieWriter"
              value={urlBannerInput}
              onChange={(e) => setUrlBannerInput(e.target.value)}
              placeholder="Add Image Path from TMDB API"
              className="w-full cursor-pointer rounded border border-black-30 p-2 text-black-30 placeholder:italic placeholder:text-black-30"
            />
          ) : (
            inputImageBy === "file" && (
              <input
                type="file"
                onChange={onChangeHandlerFile(setBanner)}
                className="min-h-11 w-full cursor-pointer rounded border border-black-30 p-2 text-black-30 placeholder:italic placeholder:text-black-30"
              />
            )
          )}

          <h3 className="font-semibold text-black-30">Add Movie Poster</h3>
          {inputImageBy === "text" ? (
            <input
              type="text"
              id="movieWriter"
              value={urlPosterInput}
              onChange={(e) => setUrlPosterInput(e.target.value)}
              placeholder="Add Image Path from TMDB API"
              className="w-full cursor-pointer rounded border border-black-30 p-2 text-black-30 placeholder:italic placeholder:text-black-30"
            />
          ) : (
            inputImageBy === "file" && (
              <input
                type="file"
                onChange={onChangeHandlerFile(setPoster)}
                className="min-h-11 w-full cursor-pointer rounded border border-black-30 p-2 text-black-30 placeholder:italic placeholder:text-black-30"
              />
            )
          )}
          <button
            type="submit"
            disabled={loading}
            className="mb-12 w-full cursor-pointer rounded border border-black-30 bg-yellow p-2 text-black-30"
          >
            {loading ? "Upload Movie..." : "Add Movie"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
