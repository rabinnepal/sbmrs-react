import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Landing from "./pages/user/landing/Landing";
import SendOTP from "./pages/auth/SendOTP";
import ResetLostPassword from "./pages/auth/ResetLostPassword";
import VerifyOTP from "./pages/auth/VerifyOTP";
import ChangePassword from "./pages/user/landing/ChangePassword";
import UserFeedback from "./pages/user/feedback/UserFeedback";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Landing />} />
        <Route path="/send-otp" element={<SendOTP />} />
        <Route path="/reset-password" element={<ResetLostPassword />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/feedback" element={<UserFeedback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
