// import React from "react";
// import { useSelector } from "react-redux";
// import { Route, Routes, Navigate } from "react-router-dom";

// import Auth from "./pages/Auth/Auth";
// import Home from "./pages/Home/Home";

// const AllRoutes = ({ profilepage, setProfilePage }) => {
//   const user = useSelector((state) => state.authReducer.authData);
//   return (
//     <Routes>
//       <Route
//         path="/"
//         element={
//           user ? (
//             <Home profilepage={profilepage} setProfilePage={setProfilePage} />
//           ) : (
//             <Navigate to="/auth" />
//           )
//         }
//       ></Route>
//       <Route
//         path="/auth"
//         element={!user ? <Auth /> : <Navigate to="/" />}
//       ></Route>
//       <Route
//         path="/user/:id"
//         element={
//           <Home profilepage={profilepage} setProfilePage={setProfilePage} />
//         }
//       ></Route>
//     </Routes>
//   );
// };

// export default AllRoutes;

import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";

import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";

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
      <Route
        path="/profile/:id"
        element={user ? <Profile /> : <Navigate to="../auth" />}
      />
    </Routes>
  );
};

export default AllRoutes;
