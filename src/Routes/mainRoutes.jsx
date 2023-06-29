import { Route, Routes } from "react-router-dom";

import React from "react";
import Layout from "../Layout";
import Payment from "../Components/Payment";

function MainRoutes() {
  return (
    <Routes>
      <Route index element={<Layout />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
}

export default MainRoutes;
