import React from "react";
import Posts from "../Posts/Posts";
import PostShare from "../PostShare/PostShare";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./PostSide.css";
const PostSide = () => {
  const profile = true;
  return (
    <div className="PostSide">
      {profile ? <ProfileCard /> : <></>}
      <PostShare />
      <Posts />
    </div>
  );
};

export default PostSide;
