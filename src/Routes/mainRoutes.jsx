import { Route, Routes } from "react-router-dom";

import React from "react";
import Layout from "../Layout";

function MainRoutes() {
  return (
    <Routes>
      <Route index element={<Layout />} />
    </Routes>
  );
}

export default MainRoutes;
