import React from "react";
import PostSide from "../../Components/PostSide/PostSide";
import Profile from "../../Components/Profile/Profile";
import Tags from "../../Components/Tags/Tags";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <Profile />
      <PostSide />
      <Tags />
    </div>
  );
};

export default Home;
