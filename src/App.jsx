import React, { useEffect } from "react";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import useAuthStore from "./stores/useAuthStore";
import MainLayout from "./layouts/MainLayout";
import NavFootLayout from "./layouts/NavFootLayout";
import HomePage from "./pages/HomePage";
import WatchList from "./pages/WatchList";
import MovieDetail from "./pages/MovieDetail";
import Category from "./pages/Category";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import AdminLayout from "./layouts/AdminLayout";
import OverviewMovie from "./pages/admin/OverviewMovie";
import AddMovie from "./pages/admin/AddMovie";
import EditMovie from "./pages/admin/EditMovie";
import OverviewCategory from "./pages/admin/OverviewCategory";
import AddCategory from "./pages/admin/AddCategory";
import EditCategory from "./pages/admin/EditCategory";
import OverviewWriter from "./pages/admin/OverviewWriter";
import AddWriter from "./pages/admin/AddWriter";
import EditWriter from "./pages/admin/EditWriter";
import OverviewDirector from "./pages/admin/OverviewDirector";
import AddDirector from "./pages/admin/AddDirector";
import EditDirector from "./pages/admin/EditDirector";
import OverviewStar from "./pages/admin/OverviewStar";
import AddStar from "./pages/admin/AddStar";
import EditStar from "./pages/admin/EditStar";
import OverviewUser from "./pages/admin/OverviewUser";
import OverviewAdmin from "./pages/admin/OverviewAdmin";
import AddAdmin from "./pages/admin/AddAdmin";
import EditAdmin from "./pages/admin/EditAdmin";
import AdminProfile from "./pages/admin/AdminProfile";
import ProtectedRoute from "./components/ProtectedRoute";
import Writer from "./pages/Writer";
import Star from "./pages/Star";
import Director from "./pages/Director";
import Profile from "./pages/Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<NavFootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="watchlist" element={<ProtectedRoute />}>
          <Route index element={<WatchList />} />
        </Route>
        <Route path="detail" element={<MovieDetail />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/writer/:id" element={<Writer />} />
        <Route path="/star/:id" element={<Star />} />
        <Route path="/director/:id" element={<Director />} />
      </Route>
      <Route path="signin" element={<SignInPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="admin" element={<ProtectedRoute isAdminRoute={true} />}>
        <Route element={<AdminLayout />}>
          <Route index element={<Navigate to="movies/overviews" />} />
          <Route path="movies/overviews" element={<OverviewMovie />} />
          <Route path="movies/add" element={<AddMovie />} />
          <Route path="movies/edit" element={<EditMovie />} />
          <Route path="categories/overviews" element={<OverviewCategory />} />
          <Route path="categories/add" element={<AddCategory />} />
          <Route path="categories/edit" element={<EditCategory />} />
          <Route path="writers/overviews" element={<OverviewWriter />} />
          <Route path="writers/add" element={<AddWriter />} />
          <Route path="writers/edit" element={<EditWriter />} />
          <Route path="stars/overviews" element={<OverviewStar />} />
          <Route path="stars/add" element={<AddStar />} />
          <Route path="stars/edit" element={<EditStar />} />
          <Route path="directors/overviews" element={<OverviewDirector />} />
          <Route path="directors/add" element={<AddDirector />} />
          <Route path="directors/edit" element={<EditDirector />} />
          <Route path="users/overviews" element={<OverviewUser />} />
          <Route path="admins/overviews" element={<OverviewAdmin />} />
          <Route path="admins/add" element={<AddAdmin />} />
          <Route path="admins/edit" element={<EditAdmin />} />
          <Route path="profile" element={<AdminProfile />} />
        </Route>
      </Route>
    </Route>,
  ),
);

const App = () => {
  const initializeAuth = useAuthStore((state) => state.initializeAuth);

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  return <RouterProvider router={router} />;
};

export default App;
