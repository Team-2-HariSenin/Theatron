import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Menu, MenuButton, MenuItems, Transition } from "@headlessui/react";
import { GoChevronDown } from "react-icons/go";
import { BsBookmarkPlus } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const { isAuthenticated, logout } = useAuthStore((state) => state);

  const classNames = (...classes) => classes.filter(Boolean).join(" ");

  return (
    <div className="flex min-h-12 w-full flex-col items-start justify-center bg-customColorNavbar p-2 text-white md:items-center">
      <div className="flex h-full w-full items-center justify-between lg:container">
        <button
          onClick={toggleMobileMenu}
          className="block text-white focus:outline-none md:hidden"
        >
          <GiHamburgerMenu className="h-6 w-6" />
        </button>
        <div className="flex flex-1 items-center justify-between">
          <Link to={"/"} className="mx-5 self-start text-xl font-bold">
            THEATRON
          </Link>
          <div className="flex items-center gap-2 sm:hidden">
            <div className="cursor-pointer">
              <IoIosSearch />
            </div>
            <Link to={"/signin"} className="mr-5 w-16">
              Sign in
            </Link>
          </div>
        </div>

        <div className="hidden w-full items-center justify-between sm:flex">
          <div className="hidden flex-grow items-center gap-2 sm:flex">
            <div className="relative w-full">
              <div className="flex items-center">
                <input
                  type="text"
                  className="w-full rounded py-1 pl-10 pr-20 text-black-10"
                  placeholder="Search..."
                />
                <IoIosSearch className="text-gray-500 absolute left-2 top-1/2 -translate-y-1/2 transform" />
                <button className="absolute right-0 top-0 h-full rounded-r border-l bg-white px-4 py-1 text-black sm:block">
                  Search
                </button>
              </div>
            </div>
            <Menu
              as="div"
              className="relative hidden text-left md:inline-block"
            >
              <MenuButton className="inline-flex justify-center gap-x-1.5 bg-customColorNavbar px-3 py-2 text-sm text-white">
                <p className="text-nowrap">All Category</p>
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
                <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-black-10 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {[
                      { name: "Category 1", path: "/category1" },
                      { name: "Category 2", path: "/category2" },
                      { name: "Category 3", path: "/category3" },
                      { name: "Category 4", path: "/category4" },
                    ].map((category) => (
                      <Menu.Item key={category.name}>
                        {({ active }) => (
                          <Link
                            to={category.path}
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
              className="hidden cursor-pointer items-center gap-1 md:flex"
            >
              <BsBookmarkPlus />
              Watchlist
            </Link>
            {isAuthenticated ? (
              <Menu as="div" className="relative inline-block text-left">
                <MenuButton className="inline-flex justify-center gap-x-1.5 bg-customColorNavbar px-3 py-2 text-sm text-white">
                  User
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
              <Link to={"/signin"} className="mr-5 w-16 text-nowrap">
                Sign in
              </Link>
            )}
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="mt-2 flex w-full flex-col items-start space-y-2 md:hidden">
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 bg-customColorNavbar py-2 text-sm text-white">
              All Category
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
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-black-10 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {[
                    { name: "Category 1", path: "/category1" },
                    { name: "Category 2", path: "/category2" },
                    { name: "Category 3", path: "/category3" },
                    { name: "Category 4", path: "/category4" },
                  ].map((category) => (
                    <Menu.Item key={category.name}>
                      {({ active }) => (
                        <Link
                          to={category.path}
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
            className="text-gray-700 hover:bg-gray-100 w-full px-4 py-2 text-sm"
          >
            Watchlist
          </Link>
          {isAuthenticated ? (
            <Menu as="div" className="relative inline-block text-left">
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 bg-customColorNavbar py-2 text-sm text-white">
                User
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-black-10 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
              className="text-gray-700 hover:bg-gray-100 w-full px-4 py-2 text-sm"
            >
              Sign in
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
