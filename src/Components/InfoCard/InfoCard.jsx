import React from "react";
import "./InfoCard.css";
import pen from "../../Assets/pen-solid.svg";
const InfoCard = () => {
  return (
    <div className="InfoCard">
      <div className="infohead">
        <h4>Your Info</h4>
        <img src={pen} alt="" width="18px" className="edit" />
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Apple INC</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>USA</span>
      </div>
      <button className="share-btn2">Logout</button>
    </div>
  );
};

export default InfoCard;
