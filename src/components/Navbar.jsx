import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { GoChevronDown } from "react-icons/go";
import { BsBookmarkPlus } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const classNames = (...classes) => classes.filter(Boolean).join(' ');

  return (
    <div className="p-2 bg-customColorNavbar text-white">
      <div className="flex justify-between items-center">
        <button
          onClick={toggleMobileMenu}
          className="block md:hidden text-white focus:outline-none"
        >
          <GiHamburgerMenu className="h-6 w-6" />
        </button>
        <p className="mr-32 hidden lg: block">THEATRON</p>
        <div className="flex items-center gap-2 md:hidden">
          <IoIosSearch />
          <button className="mr-5 w-16">Sign in</button>
        </div>
        <div className="hidden md:flex items-center justify-center w-full">
          <p className="mr-5">THEATRON</p>
          <div className="flex items-center gap-10">
            <div className="relative max-w-[400px]">
              <div className="flex items-center">
                <input
                  type="text"
                  className="hidden sm:block w-full pl-10 pr-20 py-1 rounded"
                  placeholder="Search..."
                />
                <IoIosSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <button className="absolute right-0 top-0 h-full bg-white text-black py-1 px-4 rounded-r border-l hidden sm:block">
                  Search
                </button>
              </div>
            </div>
            <Menu as="div" className="relative inline-block text-left">
              <MenuButton className="inline-flex justify-center gap-x-1.5 bg-customColorNavbar px-3 py-2 text-sm text-white">
                All Category
                <GoChevronDown className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
              </MenuButton>
              <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {['Category 1', 'Category 2', 'Category 3', 'Category 4'].map(category => (
                      <MenuItem key={category}>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            {category}
                          </a>
                        )}
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Transition>
            </Menu>
            <div className="flex items-center gap-1">
              <BsBookmarkPlus />
              Watchlist
            </div>
            <Menu as="div" className="relative inline-block text-left">
              <MenuButton className="inline-flex justify-center gap-x-1.5 bg-customColorNavbar px-3 py-2 text-sm text-white">
                User
                <GoChevronDown className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
              </MenuButton>
              <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {['Your Activity', 'Your Watchlist', 'Account Setting'].map(item => (
                      <MenuItem key={item}>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            {item}
                          </a>
                        )}
                      </MenuItem>
                    ))}
                    <form method="POST" action="#">
                      <MenuItem>
                        {({ active }) => (
                          <button
                            type="submit"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block w-full px-4 py-2 text-left text-sm'
                            )}
                          >
                            Log out
                          </button>
                        )}
                      </MenuItem>
                    </form>
                  </div>
                </MenuItems>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <ul className="flex flex-col mt-2 space-y-2 md:hidden">
          <li className="hidden md:block">THEATRON</li>
          <li className="flex items-center gap-2">
            <div className="relative w-full">
              <div className="flex items-center">
                <input
                  type="text"
                  className="w-full pl-10 pr-20 py-1 rounded"
                  placeholder="Search..."
                />
                <IoIosSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <button className="absolute right-0 top-0 h-full bg-white text-black py-1 px-4 rounded-r border-l">
                  Search
                </button>
              </div>
            </div>
          </li>
          <li>
            <Menu as="div" className="relative inline-block text-left">
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 bg-customColorNavbar px-3 py-2 text-sm text-white">
                All Category
                <GoChevronDown className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
              </MenuButton>
              <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {['Category 1', 'Category 2', 'Category 3', 'Category 4'].map(category => (
                      <MenuItem key={category}>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            {category}
                          </a>
                        )}
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Transition>
            </Menu>
          </li>
          <li className="flex items-center gap-1">
            <BsBookmarkPlus />
            Watchlist
          </li>
          <li>
            <Menu as="div" className="relative inline-block text-left">
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 bg-customColorNavbar px-3 py-2 text-sm text-white">
                User
                <GoChevronDown className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
              </MenuButton>
              <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {['Your Activity', 'Your Watchlist', 'Account Setting'].map(item => (
                      <MenuItem key={item}>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            {item}
                          </a>
                        )}
                      </MenuItem>
                    ))}
                    <form method="POST" action="#">
                      <MenuItem>
                        {({ active }) => (
                          <button
                            type="submit"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block w-full px-4 py-2 text-left text-sm'
                            )}
                          >
                            Log out
                          </button>
                        )}
                      </MenuItem>
                    </form>
                  </div>
                </MenuItems>
              </Transition>
            </Menu>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
