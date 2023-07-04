import React from "react";
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./Profile.css";
const Profile = () => {
  return (
    <div className="Profile">
      <LogoSearch />
      <ProfileCard />
    </div>
  );
};

export default Profile;
