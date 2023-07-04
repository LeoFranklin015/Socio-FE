import React from "react";
import "./Post.css";
import Like from "../../Assets/heart-solid.svg";
import DisLike from "../../Assets/heart-regular.svg";
import Comment from "../../Assets/message-regular.svg";
import Share from "../../Assets/paper-plane-regular.svg";
const Post = ({ data }) => {
  return (
    <div className="Post">
      <img src={data.img} alt="" className="Postimg" />

      <div className="postReaction">
        <img src={data.liked ? Like : DisLike} alt="" width="20px" />
        <img src={Comment} alt="" width="20px" />
        <img src={Share} alt="" width="20px" />
      </div>
      <span style={{ color: "gray", fontSize: "12px" }}>
        {data.likes} likes
      </span>
      <div className="details">
        <span style={{ fontWeight: "bold" }}>{data.name}</span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
