// import React, { useState } from "react";
// import PostSide from "../../Components/PostSide/PostSide";
// import Profile from "../../Components/Profile/Profile";
// import Tags from "../../Components/Tags/Tags";
// import "./Home.css";

// const Home = ({ profilepage, setProfilePage }) => {
//   // const [profilepage, setProfilePage] = useState(false);

//   return (
//     <div className="Home">
//       <Profile profilepage={profilepage} setProfilePage={setProfilePage} />
//       <PostSide profilepage={profilepage} setProfilePage={setProfilePage} />
//       <Tags />
//     </div>
//   );
// };

// export default Home;

import React from "react";
import PostSide from "../../components/PostSide/PostSide";
import ProfileSide from "../../components/profileSide/ProfileSide";
import RightSide from "../../components/RightSide/RightSide";
import "./Home.css";
const Home = () => {
  return (
    <div className="Home">
      <ProfileSide />
      <PostSide />
      <RightSide />
    </div>
  );
};

export default Home;
