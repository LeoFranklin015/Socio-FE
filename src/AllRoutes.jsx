import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";

import Auth from "./Pages/Auth/Auth";
import Home from "./Pages/Home/Home";

const AllRoutes = () => {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <Routes>
      <Route
        path="/"
        element={user ? <Home /> : <Navigate to="/auth" />}
      ></Route>
      <Route
        path="/auth"
        element={!user ? <Auth /> : <Navigate to="/" />}
      ></Route>
    </Routes>
  );
};

export default AllRoutes;
