import React from "react";
import TrendCard from "../TrendCard/TrendCard";
import "./Tags.css";
const Tags = () => {
  return (
    <div className="Tags">
      <TrendCard />
      <button className="share-btn1">Share</button>
      <div className="UserName">
        <span style={{ fontWeight: "bold" }}>Leo Franklin</span>
        <span style={{ color: "gray" }}>@LeoFrank</span>
      </div>
    </div>
  );
};

export default Tags;
