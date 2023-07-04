import React from "react";
import "./FollowersCard.css";
import img1 from "../../Assets/img1.jpeg";
import img2 from "../../Assets/img2.jpeg";
import img3 from "../../Assets/img3.jpeg";
import img4 from "../../Assets/img4.jpeg";
const FollowersCard = () => {
  ///
  const Followers = [
    { name: "Robert Downey Jr", username: "IronMan", img: img1 },
    { name: "Chris Evans", username: "CaptainAmerica", img: img2 },
    { name: "Chris Hemsworth", username: "Thor", img: img3 },
    { name: "Scarlet Johnson", username: "BlackWidow", img: img4 },
  ];
  ///
  return (
    <div className="FollowersCard">
      <h3>Who is following you</h3>
      {Followers.map((follower, id) => (
        <div className="followers">
          <div className="img">
            <img src={follower.img} alt="" className="followerimg" />
            <div className="Names">
              <span style={{ fontWeight: "bold" }}>{follower.name}</span>
              <span>@{follower.username}</span>
            </div>
          </div>
          <button className="follow-btn">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default FollowersCard;
