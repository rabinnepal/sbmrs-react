import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import SendOTP from "./pages/auth/SendOTP";
import ResetLostPassword from "./pages/auth/ResetLostPassword";
import VerifyOTP from "./pages/auth/VerifyOTP";
import ChangePassword from "./pages/user/landing/ChangePassword";
import ViewMovieRating from "./pages/user/feedback/ViewMovieRating";
import UserFeedback from "./pages/user/feedback/UserFeedback";
import FeedbackSubmission from "./pages/user/feedback/FeedbackSubmission";
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
import ErrorPage from "./pages/global/ErrorPage";
import AuthController from "./pages/global/AuthController";

function PrivateRoute({ children }) {
  const auth = AuthController();
  return auth ? <>{children}</> : <Navigate to="/login" />;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const authLayout = AuthController();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />

        <Route path="/register" element={<Register />} />
        {/* navbar and footer outlet start */}
        <Route
          isAuthenticated={isAuthenticated}
          path="/"
          element={
            <PrivateRoute>
              <LandingLayout />
            </PrivateRoute>
          }
        >
          <Route
            isAuthenticated={isAuthenticated}
            path=""
            element={<LandingMain />}
          />
          <Route
            isAuthenticated={isAuthenticated}
            path="/movies"
            element={<AllMovies />}
          />
          <Route
            isAuthenticated={isAuthenticated}
            path="/profile"
            element={<UserProfile />}
          />
          <Route
            isAuthenticated={isAuthenticated}
            path="/rating/:id"
            element={<ViewMovieRating />}
          />
          <Route
            isAuthenticated={isAuthenticated}
            path="/feedback/:id"
            element={<UserFeedback />}
          />
          {/* <Route  isAuthenticated={isAuthenticated} path="/feedback-submission" element={<FeedbackSubmission />} /> */}
          <Route
            isAuthenticated={isAuthenticated}
            path="/settings"
            element={<Setting />}
          />
        </Route>
        {/* navbar and footer outlet end */}
        {/* admin dashboard outlet start */}
        <Route
          isAuthenticated={isAuthenticated}
          path="/admin/"
          element={<AdminDashboard />}
        >
          <Route
            isAuthenticated={isAuthenticated}
            path="/admin/approve-vendors/"
            element={<ApproveVendors />}
          />
          <Route
            isAuthenticated={isAuthenticated}
            path="/admin/display-movies/"
            element={<Movies />}
          />
          <Route
            isAuthenticated={isAuthenticated}
            path="/admin/display-users/"
            element={<DisplayUser />}
          />
          <Route
            isAuthenticated={isAuthenticated}
            path="/admin/add-movie/"
            element={<AddMovie />}
          />
          <Route
            isAuthenticated={isAuthenticated}
            path="/admin/category/"
            element={<AddCategory />}
          />
        </Route>
        {/* admin dashboard outlet end */}
        <Route
          isAuthenticated={isAuthenticated}
          path="/send-otp"
          element={<SendOTP />}
        />
        <Route
          isAuthenticated={isAuthenticated}
          path="/reset-password"
          element={<ResetLostPassword />}
        />
        <Route
          isAuthenticated={isAuthenticated}
          path="/verify-otp"
          element={<VerifyOTP />}
        />
        <Route
          isAuthenticated={isAuthenticated}
          path="/change-password"
          element={<ChangePassword />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
