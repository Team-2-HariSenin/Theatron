import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";

const Footer = () => {
  return (
    <>
      <div className='bg-customColorNavbar text-white flex justify-center'>
        <div className='max-w-screen-lg w-full flex flex-col md:flex-row justify-between py-8 gap-8 md:gap-0'>
          <div className='w-full md:w-[30%] flex flex-col gap-5 p-4 md:p-8'>
            <h1>Explore</h1>
            <button className='flex gap-2 items-center'><GoChevronRight /> Thrillers</button>
            <button className='flex gap-2 items-center'><GoChevronRight /> Action</button>
            <button className='flex gap-2 items-center'><GoChevronRight /> Anime</button>
            <button className='flex gap-2 items-center'><GoChevronRight /> All Category</button>
          </div>
          <div className='w-full md:w-[50%] flex flex-col gap-5 p-4 md:p-8'>
            <h1>THEATRON</h1>
            <p>This website draws inspiration from IMDB, offering a curated selection of movie recommendations to help you discover your next favorite movie. Whether you're a casual viewer or a cinephile, our platform is designed to enhance your movie-watching experience with personalized suggestions and detailed reviews.</p>
            <div className='text-3xl flex gap-4'>
              <FaGithub />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
