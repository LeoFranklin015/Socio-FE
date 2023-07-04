import React, { useState } from "react";
import ShareModal from "../ShareModal/ShareModal";

import TrendCard from "../TrendCard/TrendCard";
import "./Tags.css";
const Tags = () => {
  const [modalopened, setModalopened] = useState(false);

  return (
    <div className="Tags">
      <TrendCard />
      {/* <button className="share-btn1" onClick={() => setModalopen(true)}>
        Share
      </button>
      <ShareModal modalopen={modalopen} setModalopen={setModalopen} /> */}

      <button className="share-btn1" onClick={() => setModalopened(true)}>
        Share
      </button>
      <ShareModal modelopen={modalopened} setModalopen={setModalopened} />
      <div className="UserName">
        <span style={{ fontWeight: "bold" }}>Leo Franklin</span>
        <span style={{ color: "gray" }}>@LeoFrank</span>
      </div>
    </div>
  );
};

export default Tags;
