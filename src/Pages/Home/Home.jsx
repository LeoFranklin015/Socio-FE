import React from "react";
import PostSide from "../../Components/PostSide/PostSide";
import Profile from "../../Components/Profile/Profile";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <PostSide />
      <Profile />
    </div>
  );
};

export default Home;
