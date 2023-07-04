import React from "react";
import "./Posts.css";
import postPic1 from "../../Assets/img1.jpeg";
import postPic2 from "../../Assets/bg.jpeg";
import Post from "../Post/Post";
const Posts = () => {
  const PostsData = [
    {
      img: postPic1,
      name: "Tzuyu",
      desc: "Happy New Year all friends! #2023",
      likes: 2100,
      liked: true,
    },
    {
      img: postPic2,
      name: "HAzzy",
      desc: "HHELLO peeps",
      likes: 2300,
      liked: false,
    },
  ];
  return (
    <div className="Posts">
      {PostsData.map((post) => (
        <Post data={post} />
      ))}
    </div>
  );
};

export default Posts;
