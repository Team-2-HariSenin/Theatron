import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";

const ProtectedRoute = ({ isAdminRoute = false }) => {
  const { isAuthenticated, isAdmin, isInitializing } = useAuthStore(
    (state) => state,
  );

  if (isInitializing) {
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  if (isAdminRoute && !isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
