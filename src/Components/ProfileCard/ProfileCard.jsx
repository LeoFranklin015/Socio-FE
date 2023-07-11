// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import "./ProfileCard.css";
// import profile from "../../Assets/profile.jpeg";
// import defaultProfile from "../../Assets/profile.png";
// import cover from "../../Assets/cover.jpeg";
// import { Link } from "react-router-dom";
// const ProfileCard = ({ profilepage, setProfilePage }) => {
//   const { user } = useSelector((state) => state.authReducer.authData);
//   const posts = useSelector((state) => state.postReducer.posts);
//   // const [profilepage, setProfilePage] = useState(false);
//   const Folder = process.env.REACT_APP_PUBLIC_FOLDER;
//   return (
//     <div className="ProfileCard">
//       <div className="images">
//         <img
//           src={user.coverPicture ? Folder + user.coverPicture : cover}
//           alt=""
//           className="cover"
//         />
//         <img
//           src={
//             user.profilePicture ? Folder + user.profilePicture : defaultProfile
//           }
//           alt=""
//           className="profilepic"
//         />
//       </div>

//       <div className="ProfileName">
//         <span style={{ fontWeight: "bold" }}>{user.username}</span>
//         <span>{user.worksAt ? user.worksAt : "Write About yourself"}</span>
//       </div>
//       <div className="FollowStatus">
//         <hr />
//         <div className="Count">
//           <div className="follow">
//             <span style={{ fontWeight: "bold" }}>{user.followers.length}</span>
//             <span style={{ color: "grey" }}>Followers</span>
//           </div>
//           <div className="vr"></div>
//           <div className="follow">
//             <span style={{ fontWeight: "bold" }}>{user.following.length}</span>
//             <span style={{ color: "grey" }}>Following</span>
//           </div>
//           {profilepage && (
//             <>
//               <div className="vr"></div>
//               <div className="follow">
//                 <span style={{ fontWeight: "bold" }}>
//                   {posts.filter((post) => post.userId === user._id).length}
//                 </span>
//                 <span style={{ color: "grey" }}>Posts</span>
//               </div>
//             </>
//           )}
//         </div>
//         <hr />
//       </div>
//       {profilepage ? (
//         <></>
//       ) : (
//         <div className="MyProfile" style={{ textDecoration: "none" }}>
//           <Link to={`/user/${user._id}`}>
//             <span onClick={() => setProfilePage(true)}>My Profile</span>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfileCard;

import React from "react";
import "./ProfileCard.css";
// import Cover from "../../img/cover.jpg";
// import Profile from "../../img/profileImg.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const ProfileCard = ({ location }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state) => state.postReducer.posts);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img
          src={
            user.coverPicture
              ? user.coverPicture
              : serverPublic + "defaultCover.jpg"
          }
          alt="CoverImage"
        />
        <img
          src={
            user.profilePicture
              ? user.profilePicture
              : serverPublic + "defaultProfile.png"
          }
          alt="ProfileImage"
        />
      </div>
      <div className="ProfileName">
        <span>
          {user.firstname} {user.lastname}
        </span>
        <span>{user.worksAt ? user.worksAt : "Write about yourself"}</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>Following</span>
          </div>
          {/* for profilepage */}
          {location === "profilePage" && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>
                  {posts.filter((post) => post.userId === user._id).length}
                </span>
                <span>Posts</span>
              </div>{" "}
            </>
          )}
        </div>
        <hr />
      </div>

      {location === "profilePage" ? (
        ""
      ) : (
        <span>
          <Link
            to={`/profile/${user._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            My Profile
          </Link>
        </span>
      )}
    </div>
  );
};

export default ProfileCard;
