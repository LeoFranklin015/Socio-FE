// import React from "react";
// import "./LogoSearch.css";
// import logo from "../../Assets/icon.png";
// import search from "../../Assets/search-solid.svg";
// const LogoSearch = () => {
//   return (
//     <div className="LogoSearch">
//       <img src={logo} alt="Logo" />
//       <div className="search">
//         <input type="text" placeholder="Search" />
//         <div className="s-icon">
//           <img src={search} alt="Seacrh-icon" width="22px" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LogoSearch;

import React from "react";
import Logo from "../../Assets/icon.png";
import "./LogoSearch.css";
import { UilSearch } from "@iconscout/react-unicons";
const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img src={Logo} alt="" />
      <div className="Search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
