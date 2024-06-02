import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import NavFootLayout from "./layouts/NavFootLayout";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import WatchList from "./pages/WatchList";
import MovieDetail from "./pages/MovieDetail";
import Category from "./pages/Category";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<NavFootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="watchlist" element={<WatchList />} />
        <Route path="detail" element={<MovieDetail />} />
        <Route path="/:category" element={<Category />} />
      </Route>
      <Route path="signin" element={<SignInPage />} />
      <Route path="signup" element={<SignUpPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
