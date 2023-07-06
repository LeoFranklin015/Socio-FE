// import React, { useState } from "react";
// import ShareModal from "../ShareModal/ShareModal";

// import TrendCard from "../TrendCard/TrendCard";
// import "./Tags.css";
// const Tags = () => {
//   const [modalopened, setModalopened] = useState(false);

//   return (
//     <div className="Tags">
//       <TrendCard />
//       {/* <button className="share-btn1" onClick={() => setModalopen(true)}>
//         Share
//       </button>
//       <ShareModal modalopen={modalopen} setModalopen={setModalopen} /> */}

//       <button className="share-btn1" onClick={() => setModalopened(true)}>
//         Share
//       </button>
//       <ShareModal modelopen={modalopened} setModalopen={setModalopened} />
//       <div className="UserName">
//         <span style={{ fontWeight: "bold" }}>Leo Franklin</span>
//         <span style={{ color: "gray" }}>@LeoFrank</span>
//       </div>
//     </div>
//   );
// };

// export default Tags;

import React, { useState } from "react";
import "./RightSide.css";
import Home from "../../Assets/home.png";
import Noti from "../../Assets/noti.png";
import Comment from "../../Assets/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";
import { Link } from "react-router-dom";
const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="RightSide">
      {/* Side Navbar */}
      <div className="navIcons">
        <Link to="../">
          <img src={Home} alt="" />
        </Link>
        <UilSetting />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>

      {/* TrendCard */}
      <TrendCard />

      {/* Share buttong */}
      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
