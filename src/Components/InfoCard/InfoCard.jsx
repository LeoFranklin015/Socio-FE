import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./InfoCard.css";
import pen from "../../Assets/pen-solid.svg";
import ProfileModal from "./ProfileModal";
const InfoCard = () => {
  const [modalopen, setModalopen] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="InfoCard">
      <div className="infohead">
        <h4>Your Info</h4>
        <img
          src={pen}
          alt=""
          width="18px"
          className="edit"
          onClick={() => setModalopen(true)}
        />
        <ProfileModal modelopen={modalopen} setModalopen={setModalopen} />
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
