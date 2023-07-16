import React, { useState } from "react";
import "./Post.css";
import Comment from "../../Assets/message-regular.svg";
import Share from "../../Assets/paper-plane-regular.svg";
import Heart from "../../Assets/heart-solid.svg";
import NotLike from "../../Assets/heart-regular.svg";
import { likePost } from "../../api/PostRequests";
import { useSelector } from "react-redux";

import ReactPlayer from "react-player";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);

  ////

  ////
  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked ? setLikes(likes - 1) : setLikes(likes + 1);
  };
  return (
    <div className="Post">
      {data.image ? (
        <img src={data.image} alt="" />
      ) : data.video ? (
        <ReactPlayer url={data.video} controls={true} />
      ) : (
        <p style={{ whiteSpace: "pre-wrap" }}>{data.desc}</p>
      )}

      <div className="postReact">
        <img
          src={liked ? Heart : NotLike}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={handleLike}
        />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} likes
      </span>
      {data.image || data.video ? (
        <div className="detail">
          <span>
            <b>{data.name} </b>
          </span>
          <span>{data.desc}</span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Post;
