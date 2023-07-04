import React from "react";
import FollowersCard from "../FollowersCard/FollowersCard";
import InfoCard from "../InfoCard/InfoCard";
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./Profile.css";
const Profile = () => {
  const profile = false;
  return (
    <div className="Profile">
      <LogoSearch />
      {profile ? <InfoCard /> : <ProfileCard />}
      {/* <ProfileCard /> */}
      <FollowersCard />
    </div>
  );
};

export default Profile;
