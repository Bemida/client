import { Route, Routes } from "react-router-dom";

import React from "react";
import Layout from "../Layout";
import ChangePassword from "../Pages/ChangePassword";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

function MainRoutes() {
  return (
    <Routes>
      <Route index element={<Layout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/changepassword" element={<ChangePassword />} />
    </Routes>
  );
}

export default MainRoutes;
