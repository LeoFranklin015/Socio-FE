import React from "react";
import "./TrendCard.css";
const TrendCard = () => {
  const TrendData = [
    { name: "Python", shares: 97 },
    { name: "Dynamic Programing", shares: 597 },
    { name: "ChatGPT", shares: 139 },
    { name: "Blockchain", shares: 309 },
    { name: "WebDev", shares: 97 },
    { name: "AI/ML", shares: 97 },
  ];
  return (
    <div className="TrendCard">
      <h3>Trends For You</h3>
      {TrendData.map((trend) => {
        return (
          <div className="trend">
            <span style={{ fontWeight: "bold" }}>#{trend.name}</span>
            <span style={{ fontSize: "15px" }}>{trend.shares}k shares</span>
          </div>
        );
      })}
    </div>
  );
};

export default TrendCard;
