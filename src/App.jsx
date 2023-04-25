import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import UserProfile from "./pages/user/profile/UserProfile";
import Setting from "./pages/user/settings/Settings";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ApproveVendors from "./pages/admin/components/ApproveVendors";
import AddCategory from "./pages/admin/components/category/AddCategory";
import Movies from "./pages/admin/components/movies/Movies";
import DisplayUser from "./pages/admin/components/user/DisplayUser";
import AddMovie from "./pages/admin/components/movies/AddMovie";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* navbar and footer outlet start */}

        <Route path="/" element={<LandingLayout />}>
          <Route path="" element={<LandingMain />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/rating:id" element={<ViewMovieRating />} />
          <Route path="/feedback" element={<UserFeedback />} />
          <Route path="/feedback-submission" element={<FeedbackSubmission />} />
          <Route path="/settings" element={<Setting />} />
        </Route>
        {/* navbar and footer outlet end */}
        {/* admin dashboard outlet start */}
        <Route path="/admin/" element={<AdminDashboard />}>
          <Route path="/admin/approve-vendors/" element={<ApproveVendors />} />
          <Route path="/admin/display-movies/" element={<Movies />} />
          <Route path="/admin/display-users/" element={<DisplayUser />} />
          <Route path="/admin/add-movie/" element={<AddMovie />} />
          <Route path="/admin/category/" element={<AddCategory />} />
        </Route>
        {/* admin dashboard outlet end */}
        <Route path="/send-otp" element={<SendOTP />} />
        <Route path="/reset-password" element={<ResetLostPassword />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
