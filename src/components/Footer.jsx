import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";

const Footer = () => {
  return (
    <>
      <div className="mx-auto flex justify-center bg-black text-white lg:container">
        <div className="flex w-full max-w-screen-lg flex-col justify-between gap-8 py-8 md:flex-row md:gap-0">
          <div className="flex w-full flex-col gap-5 p-4 md:w-[30%] md:p-8">
            <h1>Explore</h1>
            <button className="flex items-center gap-2">
              <GoChevronRight /> Thrillers
            </button>
            <button className="flex items-center gap-2">
              <GoChevronRight /> Action
            </button>
            <button className="flex items-center gap-2">
              <GoChevronRight /> Anime
            </button>
            <button className="flex items-center gap-2">
              <GoChevronRight /> All Category
            </button>
          </div>
          <div className="flex w-full flex-col gap-5 p-4 md:w-[50%] md:p-8">
            <h1>THEATRON</h1>
            <p>
              This website draws inspiration from IMDB, offering a curated
              selection of movie recommendations to help you discover your next
              favorite movie. Whether you're a casual viewer or a cinephile, our
              platform is designed to enhance your movie-watching experience
              with personalized suggestions and detailed reviews.
            </p>
            <div className="flex gap-4 text-3xl">
              <FaGithub />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
