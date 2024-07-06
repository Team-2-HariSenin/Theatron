import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const AdminNavbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [moviesOpen, setMoviesOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [writersOpen, setWritersOpen] = useState(false);
  const [directorsOpen, setDirectorsOpen] = useState(false);
  const [starsOpen, setStarsOpen] = useState(false);
  const [usersOpen, setUsersOpen] = useState(false);
  const [adminsOpen, setAdminsOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("movies/overviews");

  return (
    <>
      <div
        className={`fixed left-0 top-0 h-screen lg:relative ${navbar ? "translate-x-0" : "-translate-x-full"} z-10 min-w-60 max-w-60 bg-black-30 text-white transition-all duration-300 lg:translate-x-0`}
      >
        <div className="fixed flex h-14 w-full items-center justify-around border-b border-white bg-black-30">
          <div
            className="ml-3 flex cursor-pointer flex-col items-center gap-1 lg:hidden"
            onClick={() => setNavbar(false)}
          >
            <div className="h-1 w-6 rounded-full bg-white" />
            <div className="h-1 w-6 rounded-full bg-white" />
            <div className="h-1 w-6 rounded-full bg-white" />
          </div>
          <h1 className="mx-auto cursor-pointer text-2xl font-black">
            THEATRON
          </h1>
        </div>
        <div className="h-full overflow-scroll px-5 py-16">
          <div className="flex flex-col gap-3">
            <div>
              <h2
                className="cursor-pointer py-2 text-base font-semibold"
                onClick={() => setMoviesOpen((prev) => !prev)}
              >
                Movies
              </h2>
              <div
                className={` ${moviesOpen ? "flex" : "hidden"} flex-col text-sm font-normal *:cursor-pointer`}
              >
                <NavLink
                  onClick={() => setActiveNav("movies/overviews")}
                  to={"movies/overviews"}
                  className={`px-6 py-2 hover:bg-black-40 ${activeNav === "movies/overviews" ? "bg-black-20" : ""}`}
                >
                  Overviews
                </NavLink>
                <NavLink
                  onClick={() => setActiveNav("movies/add")}
                  to={"movies/add"}
                  className={`px-6 py-2 hover:bg-black-40 ${activeNav === "movies/add" ? "bg-black-20" : ""}`}
                >
                  Add Movie
                </NavLink>
                <NavLink
                  onClick={() => setActiveNav("movies/edit")}
                  to={"movies/edit"}
                  className={`px-6 py-2 hover:bg-black-40 ${activeNav === "movies/edit" ? "bg-black-20" : ""}`}
                >
                  Edit Movie
                </NavLink>
              </div>
            </div>
            <div>
              <h2
                className="cursor-pointer py-2 text-base font-semibold"
                onClick={() => setCategoriesOpen((prev) => !prev)}
              >
                Categories
              </h2>
              <div
                className={`${categoriesOpen ? "flex" : "hidden"} flex-col text-sm font-normal`}
              >
                <NavLink
                  onClick={() => setActiveNav("categories/overviews")}
                  to={"categories/overviews"}
                  className={`px-6 py-2 hover:bg-black-40 ${activeNav === "categories/overviews" ? "bg-black-20" : ""}`}
                >
                  Overviews
                </NavLink>
                <NavLink
                  onClick={() => setActiveNav("categories/add")}
                  to={"categories/add"}
                  className={`px-6 py-2 hover:bg-black-40 ${activeNav === "categories/add" ? "bg-black-20" : ""}`}
                >
                  Add Category
                </NavLink>
                <NavLink
                  onClick={() => setActiveNav("categories/edit")}
                  to={"categories/edit"}
                  className={`px-6 py-2 hover:bg-black-40 ${activeNav === "categories/edit" ? "bg-black-20" : ""}`}
                >
                  Edit Category
                </NavLink>
              </div>
            </div>
            <div>
              <h2
                className="cursor-pointer py-2 text-base font-semibold"
                onClick={() => setWritersOpen((prev) => !prev)}
              >
                Writers
              </h2>
              <div
                className={`${writersOpen ? "flex" : "hidden"} flex-col text-sm font-normal`}
              >
                <NavLink
                  onClick={() => setActiveNav("writers/overviews")}
                  to={"writers/overviews"}
                  className={`px-6 py-2 hover:bg-black-40 ${activeNav === "writers/overviews" ? "bg-black-20" : ""}`}
                >
                  Overviews
                </NavLink>
                <NavLink
                  onClick={() => setActiveNav("writers/add")}
                  to={"writers/add"}
                  className={`px-6 py-2 hover:bg-black-40 ${activeNav === "writers/add" ? "bg-black-20" : ""}`}
                >
                  Add Writer
                </NavLink>
                <NavLink
                  onClick={() => setActiveNav("writers/edit")}
                  to={"writers/edit"}
                  className={`px-6 py-2 hover:bg-black-40 ${activeNav === "writers/edit" ? "bg-black-20" : ""}`}
                >
                  Edit Writer
                </NavLink>
              </div>
            </div>
            <div>
              <h2
                className="cursor-pointer py-2 text-base font-semibold"
                onClick={() => setDirectorsOpen((prev) => !prev)}
              >
                Directors
              </h2>
              <div
                className={`${directorsOpen ? "flex" : "hidden"} flex-col text-sm font-normal`}
              >
                <NavLink
                  onClick={() => setActiveNav("directors/overviews")}
                  to={"directors/overviews"}
                  className={`px-6 py-2 hover:bg-black-40 ${activeNav === "directors/overviews" ? "bg-black-20" : ""}`}
                >
                  Overviews
                </NavLink>
                <NavLink
                  onClick={() => setActiveNav("directors/add")}
                  to={"directors/add"}
                  className={`px-6 py-2 hover:bg-black-40 ${activeNav === "directors/add" ? "bg-black-20" : ""}`}
                >
                  Add Director
                </NavLink>
                <NavLink
                  onClick={() => setActiveNav("directors/edit")}
                  to={"directors/edit"}
                  className={`px-6 py-2 hover:bg-black-40 ${activeNav === "directors/edit" ? "bg-black-20" : ""}`}
                >
                  Edit Director
                </NavLink>
              </div>
            </div>
            <div>
              <h2
                className="cursor-pointer py-2 text-base font-semibold"
                onClick={() => setStarsOpen((prev) => !prev)}
              >
                Stars
              </h2>
              <div
                className={`${starsOpen ? "flex" : "hidden"} flex-col text-sm font-normal`}
              >
                <NavLink
                  onClick={() => setActiveNav("stars/overviews")}
                  to={"stars/overviews"}
                  className={`px-6 py-2 hover:bg-black-40 ${activeNav === "stars/overviews" ? "bg-black-20" : ""}`}
                >
                  Overviews
                </NavLink>
                <NavLink
                  onClick={() => setActiveNav("stars/add")}
                  to={"stars/add"}
                  className={`px-6 py-2 hover:bg-black-40 ${activeNav === "stars/add" ? "bg-black-20" : ""}`}
                >
                  Add Star
                </NavLink>
                <NavLink
                  onClick={() => setActiveNav("stars/edit")}
                  to={"stars/edit"}
                  className={`px-6 py-2 hover:bg-black-40 ${activeNav === "stars/edit" ? "bg-black-20" : ""}`}
                >
                  Edit Star
                </NavLink>
              </div>
            </div>
            <div>
              <h2
                className="cursor-pointer py-2 text-base font-semibold"
                onClick={() => setUsersOpen((prev) => !prev)}
              >
                Users
              </h2>
              <div
                className={`${usersOpen ? "flex" : "hidden"} flex-col text-sm font-normal`}
              >
                <NavLink
                  onClick={() => setActiveNav("users/overviews")}
                  to={"users/overviews"}
                  className={`px-6 py-2 hover:bg-black-40 ${activeNav === "users/overviews" ? "bg-black-20" : ""}`}
                >
                  Overviews
                </NavLink>
              </div>
            </div>
            <div>
              <h2
                className="cursor-pointer py-2 text-base font-semibold"
                onClick={() => setAdminsOpen((prev) => !prev)}
              >
                Admins
              </h2>
              <div
                className={`${adminsOpen ? "flex" : "hidden"} flex-col text-sm font-normal`}
              >
                <NavLink
                  onClick={() => setActiveNav("admins/overviews")}
                  to={"admins/overviews"}
                  className={`px-6 py-2 hover:bg-black-40 ${activeNav === "admins/overviews" ? "bg-black-20" : ""}`}
                >
                  Overviews
                </NavLink>
                <NavLink
                  onClick={() => setActiveNav("admins/add")}
                  to={"admins/add"}
                  className={`px-6 py-2 hover:bg-black-40 ${activeNav === "admins/add" ? "bg-black-20" : ""}`}
                >
                  Add Admin
                </NavLink>
                <NavLink
                  onClick={() => setActiveNav("admins/edit")}
                  to={"admins/edit"}
                  className={`px-6 py-2 hover:bg-black-40 ${activeNav === "admins/edit" ? "bg-black-20" : ""}`}
                >
                  Edit Admin
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 flex h-fit w-full flex-col items-start justify-around bg-black-30 px-6 py-2">
          <div
            className={`${adminOpen ? "flex" : "hidden"} w-full flex-col text-sm font-normal`}
          >
            <NavLink
              onClick={() => setActiveNav("profile")}
              to={"profile"}
              className={`w-full px-6 py-2 hover:bg-black-40 ${activeNav === "profile" ? "bg-black-20" : ""}`}
            >
              Profile
            </NavLink>
            <NavLink
              onClick={() => setActiveNav("")}
              to={"admins/add"}
              className={`px-6 py-2 hover:bg-black-40`}
            >
              Logout
            </NavLink>
          </div>

          <div
            onClick={() => setAdminOpen((prev) => !prev)}
            className="flex cursor-pointer items-center justify-center gap-3 py-2 text-base font-semibold"
          >
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C8.81186 17.2 7.64218 16.906 6.59528 16.3441C5.54837 15.7823 4.65678 14.9701 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C15.3432 14.9701 14.4516 15.7823 13.4047 16.3441C12.3578 16.906 11.1881 17.2 10 17.2Z"
                  fill="#F6F6F6"
                />
              </svg>
            </div>
            <h2>Admin 1</h2>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[18px] ml-3 ${navbar ? "hidden" : "flex"} cursor-pointer flex-col items-center gap-1 lg:hidden`}
        onClick={() => setNavbar(true)}
      >
        <div className="h-1 w-6 rounded-full bg-black-30" />
        <div className="h-1 w-6 rounded-full bg-black-30" />
        <div className="h-1 w-6 rounded-full bg-black-30" />
      </div>
    </>
  );
};

export default AdminNavbar;
