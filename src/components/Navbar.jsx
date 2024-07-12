import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Menu, MenuButton, MenuItems, Transition } from "@headlessui/react";
import { GoChevronDown } from "react-icons/go";
import { BsBookmarkPlus } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";
import axios from "axios";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchMobile, setSearchMobile] = useState(false);
  const [categoryData, setCategoryData] = useState([]);

  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const [categoryMenu, setCategoryMenu] = useState(false);
  const [userMenu, setUserMenu] = useState(false);

  const getCategories = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:3000/api/movie/all-category`,
      );
      setCategoryData(response.data.data.categories);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const { isAuthenticated, logout } = useAuthStore((state) => state);

  const classNames = (...classes) => classes.filter(Boolean).join(" ");

  return (
    <nav>
      <div className="flex min-h-12 w-full flex-col items-start justify-center bg-customColorNavbar px-2 py-1 text-white md:items-center">
        <div className="flex min-h-full w-full items-center justify-between lg:container">
          <button
            onClick={toggleMobileMenu}
            className="block h-full rounded p-3 text-white hover:bg-black-30 focus:outline-none md:hidden"
          >
            <GiHamburgerMenu className="h-4 w-4" />
          </button>
          <div className="flex flex-1 items-center justify-between">
            <Link to={"/"} className="mx-5 self-center text-xl font-bold">
              THEATRON
            </Link>
            <div className="flex items-center gap-2 sm:hidden">
              <div
                onClick={() => setSearchMobile(true)}
                className="cursor-pointer rounded-full p-2 hover:bg-black-30"
              >
                <svg
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.8132 7.40524C13.8132 8.92904 13.3184 10.3366 12.485 11.4787L16.6887 15.6849C17.1038 16.0999 17.1038 16.7738 16.6887 17.1888C16.2736 17.6037 15.5996 17.6037 15.1845 17.1888L10.9808 12.9825C9.83857 13.8191 8.43069 14.3105 6.90659 14.3105C3.09136 14.3105 0 11.2197 0 7.40524C0 3.59076 3.09136 0.5 6.90659 0.5C10.7218 0.5 13.8132 3.59076 13.8132 7.40524ZM6.90659 12.1858C7.5345 12.1858 8.15627 12.0621 8.73638 11.8219C9.3165 11.5816 9.8436 11.2295 10.2876 10.7856C10.7316 10.3417 11.0838 9.81468 11.3241 9.23468C11.5644 8.65467 11.6881 8.03303 11.6881 7.40524C11.6881 6.77745 11.5644 6.1558 11.3241 5.5758C11.0838 4.9958 10.7316 4.46879 10.2876 4.02488C9.8436 3.58096 9.3165 3.22883 8.73638 2.98859C8.15627 2.74834 7.5345 2.62469 6.90659 2.62469C6.27867 2.62469 5.65691 2.74834 5.07679 2.98859C4.49668 3.22883 3.96957 3.58096 3.52557 4.02488C3.08157 4.46879 2.72936 4.9958 2.48907 5.5758C2.24878 6.1558 2.1251 6.77745 2.1251 7.40524C2.1251 8.03303 2.24878 8.65467 2.48907 9.23468C2.72936 9.81468 3.08157 10.3417 3.52557 10.7856C3.96957 11.2295 4.49668 11.5816 5.07679 11.8219C5.65691 12.0621 6.27867 12.1858 6.90659 12.1858Z"
                    fill="#F6F6F6"
                  />
                </svg>
              </div>
              {isAuthenticated ? (
                <Menu as="div" className="relative inline-block text-left">
                  <MenuButton className="inline-flex justify-center gap-x-1.5 bg-customColorNavbar px-3 py-2 text-sm text-white">
                    <span className="font text-sm font-semibold">User</span>
                    <GoChevronDown
                      className="text-gray-400 -mr-1 h-5 w-5"
                      aria-hidden="true"
                    />
                  </MenuButton>
                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-black-20 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {[
                          { name: "Your Activity", path: "/activity" },
                          { name: "Your Watchlist", path: "/watchlist" },
                          { name: "Account Setting", path: "/profile" },
                        ].map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <Link
                                to={item.path}
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm",
                                )}
                              >
                                {item.name}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                onClick={() => logout()}
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block w-full px-4 py-2 text-left text-sm",
                                )}
                              >
                                Log out
                              </button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              ) : (
                <Link
                  to={"/signin"}
                  className="min-w-fit text-nowrap rounded p-2 font-semibold text-white hover:bg-black-30"
                >
                  Sign in
                </Link>
              )}
            </div>
          </div>

          <div className="hidden w-full items-center justify-between sm:flex">
            <div className="hidden flex-grow items-center gap-2 sm:flex">
              <div className="relative w-full">
                <div className="flex max-w-[515px] items-center rounded bg-white xl:mx-auto">
                  <svg
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    className="mx-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.8132 7.40524C13.8132 8.92904 13.3184 10.3366 12.485 11.4787L16.6887 15.6849C17.1038 16.0999 17.1038 16.7738 16.6887 17.1888C16.2736 17.6037 15.5996 17.6037 15.1845 17.1888L10.9808 12.9825C9.83857 13.8191 8.43069 14.3105 6.90659 14.3105C3.09136 14.3105 0 11.2197 0 7.40524C0 3.59076 3.09136 0.5 6.90659 0.5C10.7218 0.5 13.8132 3.59076 13.8132 7.40524ZM6.90659 12.1858C7.5345 12.1858 8.15627 12.0621 8.73638 11.8219C9.3165 11.5816 9.8436 11.2295 10.2876 10.7856C10.7316 10.3417 11.0838 9.81468 11.3241 9.23468C11.5644 8.65467 11.6881 8.03303 11.6881 7.40524C11.6881 6.77745 11.5644 6.1558 11.3241 5.5758C11.0838 4.9958 10.7316 4.46879 10.2876 4.02488C9.8436 3.58096 9.3165 3.22883 8.73638 2.98859C8.15627 2.74834 7.5345 2.62469 6.90659 2.62469C6.27867 2.62469 5.65691 2.74834 5.07679 2.98859C4.49668 3.22883 3.96957 3.58096 3.52557 4.02488C3.08157 4.46879 2.72936 4.9958 2.48907 5.5758C2.24878 6.1558 2.1251 6.77745 2.1251 7.40524C2.1251 8.03303 2.24878 8.65467 2.48907 9.23468C2.72936 9.81468 3.08157 10.3417 3.52557 10.7856C3.96957 11.2295 4.49668 11.5816 5.07679 11.8219C5.65691 12.0621 6.27867 12.1858 6.90659 12.1858Z"
                      fill="#757575"
                    />
                  </svg>
                  <input
                    type="text"
                    name="search"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="w-full flex-1 rounded border-none bg-white py-1 text-sm text-black-90 placeholder:text-sm focus:border-none focus:outline-none"
                    placeholder="search..."
                  />

                  <button className="h-full rounded-r border-l-[1px] border-l-black-90 bg-white px-4 py-1 text-sm font-semibold text-black sm:block">
                    Search
                  </button>
                </div>
              </div>
              <Menu
                as="div"
                className="relative hidden text-left md:inline-block"
              >
                <MenuButton className="inline-flex items-center justify-center gap-x-1.5 rounded bg-customColorNavbar p-2 px-3 py-2 text-sm text-white hover:bg-black-30">
                  <p className="text-nowrap text-sm font-semibold">
                    All Category
                  </p>
                  <svg
                    width="14"
                    height="10"
                    viewBox="0 0 14 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.01118 8.7899C6.55783 9.33655 7.44558 9.33655 7.99223 8.7899L13.5899 3.19224C13.9922 2.78991 14.1103 2.19078 13.8916 1.666C13.673 1.14122 13.1657 0.800111 12.5972 0.800111L1.40185 0.80011C0.837712 0.80011 0.326051 1.14122 0.107391 1.666C-0.111267 2.19078 0.0111814 2.78991 0.40914 3.19224L6.00681 8.7899L6.01118 8.7899Z"
                      fill="#F6F6F6"
                    />
                  </svg>
                </MenuButton>
                <Transition
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-black-10 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {categoryData.map((category) => (
                        <Menu.Item key={category.name}>
                          {({ active }) => (
                            <Link
                              to={`/category/${category.id}`}
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm",
                              )}
                            >
                              {category.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              <Link
                to={"/watchlist"}
                className="hidden cursor-pointer items-center gap-1 rounded p-2 text-sm font-semibold hover:bg-black-30 md:flex"
              >
                <svg
                  className="h-5"
                  width="19"
                  height="26"
                  viewBox="0 0 19 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 2.4375V24.766C0 25.4465 0.539323 26 1.20234 26C1.44974 26 1.69219 25.9238 1.89505 25.7766L9.5 20.3125L17.1049 25.7766C17.3078 25.9238 17.5503 26 17.7977 26C18.4607 26 19 25.4465 19 24.766V2.4375C19 1.0918 17.9362 0 16.625 0H2.375C1.0638 0 0 1.0918 0 2.4375Z"
                    fill="#F6F6F6"
                  />
                  <rect x="8" y="6" width="3" height="10" fill="black" />
                  <rect
                    x="4.5"
                    y="12.5"
                    width="3"
                    height="10"
                    transform="rotate(-90 4.5 12.5)"
                    fill="black"
                  />
                </svg>
                <span>Watchlist</span>
              </Link>
              {isAuthenticated ? (
                <Menu as="div" className="relative inline-block text-left">
                  <MenuButton className="inline-flex items-center justify-center gap-x-1.5 bg-customColorNavbar px-3 py-2 text-sm text-white">
                    <span className="font text-sm font-semibold">User</span>
                    <svg
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.01118 8.7899C6.55783 9.33655 7.44558 9.33655 7.99223 8.7899L13.5899 3.19224C13.9922 2.78991 14.1103 2.19078 13.8916 1.666C13.673 1.14122 13.1657 0.800111 12.5972 0.800111L1.40185 0.80011C0.837712 0.80011 0.326051 1.14122 0.107391 1.666C-0.111267 2.19078 0.0111814 2.78991 0.40914 3.19224L6.00681 8.7899L6.01118 8.7899Z"
                        fill="#F6F6F6"
                      />
                    </svg>
                  </MenuButton>
                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-black-20 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {[
                          { name: "Your Activity", path: "/activity" },
                          { name: "Your Watchlist", path: "/watchlist" },
                          { name: "Account Setting", path: "/settings" },
                        ].map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <Link
                                to={item.path}
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm",
                                )}
                              >
                                {item.name}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                onClick={() => logout()}
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block w-full px-4 py-2 text-left text-sm",
                                )}
                              >
                                Log out
                              </button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              ) : (
                <Link
                  to={"/signin"}
                  className="min-w-fit text-nowrap rounded p-2 text-sm font-semibold text-white hover:bg-black-30"
                >
                  Sign in
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="absolute z-[200] flex w-full flex-col items-start bg-black-10 py-2 md:hidden">
          <div className="block px-4 py-2 text-sm">
            <div
              onClick={() => setCategoryMenu((prev) => !prev)}
              className={`cursor-pointer text-sm font-semibold ${categoryMenu ? "text-yellow" : "text-white-70 hover:text-white active:text-white"}`}
            >
              All Category
            </div>
            <ul
              className={`${categoryMenu ? "block" : "hidden"} text-white-70`}
            >
              {categoryData.map((category) => (
                <li
                  className="block px-4 py-2 text-sm hover:text-white active:text-white"
                  key={category.id}
                >
                  <Link to={`/category/${category.id}`}>{category.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Link
            to={"/watchlist"}
            className="w-full px-4 py-2 text-sm font-semibold text-white-70 hover:text-white active:text-white"
          >
            Watchlist
          </Link>
          {isAuthenticated ? (
            <div className="block px-4 py-2 text-sm">
              <div
                onClick={() => setUserMenu((prev) => !prev)}
                className={`cursor-pointer text-sm font-semibold ${userMenu ? "text-yellow" : "text-white-70 hover:text-white active:text-white"}`}
              >
                User
              </div>
              <ul className={`${userMenu ? "block" : "hidden"} text-white-70`}>
                <li className="block px-4 py-2 text-sm hover:text-white active:text-white">
                  <Link to="/activity">Your Activity</Link>
                </li>
                <li className="block px-4 py-2 text-sm hover:text-white active:text-white">
                  <Link to="/profile">Account Setting</Link>
                </li>
                <li className="block w-full px-4 py-2 text-left text-sm hover:text-white active:text-white">
                  <button type="submit" onClick={() => logout()}>
                    Log out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to={"/signin"}
              className="w-full cursor-pointer px-4 py-2 text-sm font-semibold text-white-70 hover:text-white active:text-white"
            >
              Sign in
            </Link>
          )}
        </div>
      )}
      <div
        className={`trans absolute top-0 z-[199] ${searchMobile ? "translate-y-0" : "-translate-y-full"} flex min-h-10 w-full items-center justify-center bg-black-20 px-4 py-1 text-white transition-all duration-[50ms] sm:hidden`}
      >
        <input
          className="h-full w-full bg-tranparent focus:border-none focus:outline-none"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="search..."
          type="text"
        />
        <button
          onClick={() => setSearchMobile(false)}
          className="rounded-full p-2 hover:bg-black-30"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            class="ipc-icon ipc-icon--clear"
            viewBox="0 0 24 24"
            fill="currentColor"
            role="presentation"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
