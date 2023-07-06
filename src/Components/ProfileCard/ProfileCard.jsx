import React from "react";
import { useSelector } from "react-redux";
import "./ProfileCard.css";
import profile from "../../Assets/profile.jpeg";
import defaultProfile from "../../Assets/profile.png";
import cover from "../../Assets/cover.jpeg";
const ProfileCard = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const profilepage = false;
  const Folder = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="ProfileCard">
      <div className="images">
        <img
          src={user.coverPicture ? Folder + user.coverPicture : cover}
          alt=""
          className="cover"
        />
        <img
          src={
            user.profilePicture ? Folder + user.profilePicture : defaultProfile
          }
          alt=""
          className="profilepic"
        />
      </div>

      <div className="ProfileName">
        <span style={{ fontWeight: "bold" }}>{user.username}</span>
        <span>{user.worksAt ? user.worksAt : "Write About yourself"}</span>
      </div>
      <div className="FollowStatus">
        <hr />
        <div className="Count">
          <div className="follow">
            <span style={{ fontWeight: "bold" }}>{user.followers.length}</span>
            <span style={{ color: "grey" }}>Followers</span>
          </div>
          <div className="vr"></div>
          <div className="follow">
            <span style={{ fontWeight: "bold" }}>{user.following.length}</span>
            <span style={{ color: "grey" }}>Following</span>
          </div>
          {profilepage && (
            <>
              <div className="vr"></div>
              <div className="follow">
                <span style={{ fontWeight: "bold" }}>1</span>
                <span style={{ color: "grey" }}>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {profilepage ? (
        <></>
      ) : (
        <div className="MyProfile">
          <span>My Profile</span>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
