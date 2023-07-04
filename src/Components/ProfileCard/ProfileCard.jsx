import React from "react";
import "./ProfileCard.css";
import profile from "../../Assets/profile.jpeg";
import cover from "../../Assets/cover.jpeg";
const ProfileCard = () => {
  return (
    <div className="ProfileCard">
      <div className="images">
        <img src={cover} alt="" className="cover" />
        <img src={profile} alt="" className="profilepic" />
      </div>

      <div className="ProfileName">
        <span style={{ fontWeight: "bold" }}>Leo Franklin</span>
        <span>Fullstack Developer</span>
      </div>
      <div className="FollowStatus">
        <hr />
        <div className="Count">
          <div className="follow">
            <span style={{ fontWeight: "bold" }}>1000</span>
            <span style={{ color: "grey" }}>Followers</span>
          </div>
          <div className="vr"></div>
          <div className="follow">
            <span style={{ fontWeight: "bold" }}>300</span>
            <span style={{ color: "grey" }}>Following</span>
          </div>
        </div>
        <hr />
      </div>

      <div className="MyProfile">
        <span>My Profile</span>
      </div>
    </div>
  );
};

export default ProfileCard;
