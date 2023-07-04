import React from "react";
import "./LogoSearch.css";
import logo from "../../Assets/icon.png";
import search from "../../Assets/search-solid.svg";
const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img src={logo} alt="Logo" />
      <div className="search">
        <input type="text" placeholder="Search" />
        <div className="s-icon">
          <img src={search} alt="Seacrh-icon" width="22px" />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
