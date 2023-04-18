import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Landing from "./pages/user/landing/Navbar";
import SendOTP from "./pages/auth/SendOTP";
import ResetLostPassword from "./pages/auth/ResetLostPassword";
import VerifyOTP from "./pages/auth/VerifyOTP";
import ChangePassword from "./pages/user/landing/ChangePassword";
import ViewMovieRating from "./pages/user/feedback/ViewMovieRating";
import UserFeedback from "./pages/user/feedback/UserFeedback";
import FeedbackSubmission from "./pages/user/feedback/FeedbackSubmission";
import LandingLayout from "./pages/user/landing/LandingLayout";
import LandingMain from "./pages/user/landing/LandingMain";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<LandingLayout />}>
          <Route path="" element={<LandingMain />} />
        </Route>
        <Route path="/send-otp" element={<SendOTP />} />
        <Route path="/reset-password" element={<ResetLostPassword />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/rating" element={<ViewMovieRating />} />
        <Route path="/feedback" element={<UserFeedback />} />
        <Route path="/feedback-submission" element={<FeedbackSubmission />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
