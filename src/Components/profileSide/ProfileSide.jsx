// import React from "react";
// import FollowersCard from "../FollowersCard/FollowersCard";
// import InfoCard from "../InfoCard/InfoCard";
// import LogoSearch from "../LogoSearch/LogoSearch";
// import ProfileCard from "../ProfileCard/ProfileCard";
// import "./Profile.css";
// const Profile = ({ profilepage, setProfilePage }) => {
//   return (
//     <div className="Profile">
//       <LogoSearch />
//       {profilepage ? (
//         <InfoCard />
//       ) : (
//         <ProfileCard
//           profilepage={profilepage}
//           setProfilePage={setProfilePage}
//         />
//       )}
//       {/* <ProfileCard /> */}
//       <FollowersCard />
//     </div>
//   );
// };

// export default Profile;

import React from "react";
import FollowersCard from "../FollowersCard/FollowersCard";
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./ProfileSide.css";
const ProfileSide = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <ProfileCard location="homepage" />
      <FollowersCard />
    </div>
  );
};

export default ProfileSide;
