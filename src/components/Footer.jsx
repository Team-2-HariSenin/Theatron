import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <div className="mx-auto flex justify-center bg-black text-white lg:container">
        <div className="flex w-full max-w-screen-lg flex-col justify-between gap-8 py-8 md:flex-row md:gap-0">
          <div className="flex w-full flex-col gap-5 p-4 md:w-[30%] md:p-8">
            <h1>Explore</h1>
            <button className="flex items-center gap-2">
              <GoChevronRight /> 
              <Link to="/category/1">Drama</Link>
            </button>
            <button className="flex items-center gap-2">
              <GoChevronRight /> 
              <Link to="/category/2">Romance</Link>
            </button>
            <button className="flex items-center gap-2">
              <GoChevronRight />
              <Link to="/category/3">Horor</Link>
            </button>
            <button className="flex items-center gap-2">
              <GoChevronRight />
              <Link to="/category/4">Commedy</Link>
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
              <a href="https://github.com/Team-2-HariSenin"><FaGithub /></a>
              <a href="https://instagram.com"><FaInstagram /></a>
              <a href="https://www.linkedin.com"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
