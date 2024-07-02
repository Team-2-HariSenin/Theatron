import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen w-full bg-white">
      <AdminNavbar />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
