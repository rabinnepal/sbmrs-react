import React from "react";
import { Outlet } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";

const DashboardLayout = () => {
  return (
    <div>
      <AdminDashboard />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
