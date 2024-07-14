import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuthStore from "../../stores/useAuthStore";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const EditWriter = () => {
  const { token } = useAuthStore((state) => state);

  const navigate = useNavigate();

  const query = useQuery();
  const idWriter = query.get("id_writer");
  const [writerData, setWriterData] = useState(null);
  const [writerId, setWriterId] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [name, setName] = useState("");

  const onChangeHandler = (setter) => (e) => setter(e.target.value);

  useEffect(() => {
    if (idWriter) {
      // Fetch movie data from API
      axios
        .get(`http://127.0.0.1:3000/api/movie/writer/${idWriter}?limit=0`)
        .then((response) => {
          setWriterData(response.data.data);
          setName(response.data.data.name);

          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
  }, [idWriter]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form is submitted
    console.log("Updating Writer...");

    const updatedWriter = { id: idWriter };

    if (writerData.name !== name) {
      updatedWriter.name = name;
    }

    try {
      const response = await axios.put(
        "http://127.0.0.1:3000/api/admin/update-writer",
        updatedWriter,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(response.data.message);
      navigate("/admin/writers/overviews");
    } catch (error) {
      console.error("Error adding writer:", error);
      setLoading(false); // Set loading to false if there's an error
    } finally {
      setLoading(false); // Set loading to false after process completes
    }
  };

  return (
    <div className="w-full">
      <div className="flex h-screen w-full flex-col gap-4 px-6 pb-10 pt-2">
        <nav className="relative ml-5 flex h-fit items-center justify-start gap-3 text-4xl font-bold">
          <h1>Writer</h1>
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
          <h1>Edit</h1>
        </nav>
        {idWriter ? (
          loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            <div className="h-full w-full overflow-y-auto">
              <form
                onSubmit={onSubmit}
                className="mx-auto flex h-full w-full max-w-[564px] flex-col items-center justify-center gap-2"
              >
                <label
                  className="w-full text-start font-semibold text-black-30"
                  htmlFor="writerName"
                >
                  Writer Name*
                </label>
                <input
                  type="text"
                  id="writerName"
                  value={name}
                  onChange={onChangeHandler(setName)}
                  required
                  className="h-11 w-full rounded border border-black-30 p-2 text-black-30"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="mb-12 mt-5 w-full cursor-pointer rounded border border-black-30 bg-yellow p-2 text-black-30"
                >
                  {loading ? "Updating Writer..." : "Update Writer"}
                </button>
              </form>
            </div>
          )
        ) : (
          <div className="mx-auto flex h-full w-full max-w-[564px] flex-col items-center justify-center gap-2">
            <label
              className="w-full text-start font-semibold text-black-30"
              htmlFor="writerName"
            >
              Writer id*
            </label>
            <input
              type="text"
              id="writerName"
              value={writerId}
              onChange={onChangeHandler(setWriterId)}
              placeholder="Please add movie id!"
              required
              className="h-11 w-full rounded border border-black-30 p-2 text-black-30"
            />

            <Link
              to={`/admin/writers/edit?id_writer=${writerId}`}
              onClick={() => setWriterId("")}
              disabled={loading}
              className="mb-12 mt-5 w-full cursor-pointer rounded border border-black-30 bg-yellow p-2 text-center text-black-30"
            >
              Add Writer Id
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditWriter;
