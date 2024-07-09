import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StarRating from "../components/StarRating";

const NavFootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <StarRating />
      <Footer />
    </>
  );
};

export default NavFootLayout;
