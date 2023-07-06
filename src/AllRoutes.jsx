import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";

import Auth from "./Pages/Auth/Auth";
import Home from "./Pages/Home/Home";

const AllRoutes = ({ profilepage, setProfilePage }) => {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <Routes>
      <Route
        path="/"
        element={
          user ? (
            <Home profilepage={profilepage} setProfilePage={setProfilePage} />
          ) : (
            <Navigate to="/auth" />
          )
        }
      ></Route>
      <Route
        path="/auth"
        element={!user ? <Auth /> : <Navigate to="/" />}
      ></Route>
      <Route
        path="/user/:id"
        element={
          <Home profilepage={profilepage} setProfilePage={setProfilePage} />
        }
      ></Route>
    </Routes>
  );
};

export default AllRoutes;
