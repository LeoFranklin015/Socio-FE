import React, { useState } from "react";
import PostSide from "../../Components/PostSide/PostSide";
import Profile from "../../Components/Profile/Profile";
import Tags from "../../Components/Tags/Tags";
import "./Home.css";

const Home = ({ profilepage, setProfilePage }) => {
  // const [profilepage, setProfilePage] = useState(false);

  return (
    <div className="Home">
      <Profile profilepage={profilepage} setProfilePage={setProfilePage} />
      <PostSide profilepage={profilepage} setProfilePage={setProfilePage} />
      <Tags />
    </div>
  );
};

export default Home;
