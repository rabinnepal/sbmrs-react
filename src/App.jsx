import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import SendOTP from "./pages/auth/SendOTP";
import ChangePassword from "./pages/user/landing/ChangePassword";
import ViewMovieRating from "./pages/user/feedback/ViewMovieRating";
import UserFeedback from "./pages/user/feedback/UserFeedback";
import LandingLayout from "./pages/user/landing/LandingLayout";
import LandingMain from "./pages/user/landing/LandingMain";
import Setting from "./pages/user/settings/Settings";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ApproveVendors from "./pages/admin/components/ApproveVendors";
import AddCategory from "./pages/admin/components/category/AddCategory";
import Movies from "./pages/admin/components/movies/Movies";
import DisplayUser from "./pages/admin/components/user/DisplayUser";
import AddMovie from "./pages/admin/components/movies/AddMovie";
import AllMovies from "./pages/user/movies/AllMovies";
import UserProfile from "./pages/user/profile/UserProfile";
import AuthController from "./pages/global/AuthController";
import AboutUs from "./pages/user/settings/AboutUs";
import TermsAndConditions from "./pages/user/settings/TermsAndConditons";
import PrivacyPolicy from "./pages/user/settings/PrivacyPolicy";
import Category from "./pages/admin/components/category/Category";
import ViewSingleMovie from "./pages/admin/components/movies/ViewSingleMovie";
import UpdateMovie from "./pages/admin/components/movies/UpdateMovie";
import ForgotPassword from "./pages/auth/ForgotPassword";
import UpdateProfileForm from "./pages/user/profile/UpdateProfile";

function PrivateRoute({ children }) {
  const auth = AuthController();
  return auth ? <>{children}</> : <Navigate to="/login" />;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const authLayout = AuthController(isAuthenticated, setIsAuthenticated);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* navbar and footer outlet start */}
        <Route
          path="/"
          element={
            <PrivateRoute auth={isAuthenticated}>
              <LandingLayout />
            </PrivateRoute>
          }
        >
          <Route path="" element={<LandingMain />} />
          <Route path="/movies" element={<AllMovies />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/rating/:id" element={<ViewMovieRating />} />
          <Route path="/feedback/:id" element={<UserFeedback />} />
          <Route path="/update-profile" element={<UpdateProfileForm />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Route>
        {/* navbar and footer outlet end */}
        {/* admin dashboard outlet start */}
        <Route
          path="/admin/"
          element={
            <PrivateRoute auth={isAuthenticated}>
              <AdminDashboard />
            </PrivateRoute>
          }
        >
          <Route path="/admin/approve-vendors/" element={<ApproveVendors />} />
          <Route path="/admin/display-movies/" element={<Movies />} />
          <Route path="/admin/movies/:id" element={<ViewSingleMovie />} />
          {/* <Route path="/admin/edit-movie/:id" element={<UpdateMovie />} /> */}
          <Route path="/admin/display-users/" element={<DisplayUser />} />
          <Route path="/admin/add-movie/" element={<AddMovie />} />
          <Route path="/admin/display-categories/" element={<Category />} />
          <Route path="/admin/category/" element={<AddCategory />} />
        </Route>
        {/* admin dashboard outlet end */}
        <Route path="/change-password" element={<ChangePassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
