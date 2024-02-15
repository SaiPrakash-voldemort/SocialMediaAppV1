import React from "react";
import Logo from "../imgs/logo.png";
import Search from "../imgs/searching.png";
import "./Barsearch.css";
import SecondSearch from "../imgs/loupe.png";

const BarSearch = () => {
  return (
    <div className="logoSearch">
      <img src={Logo} id="logoImage"></img>
      <div className="search">
        <input
          type="text"
          className="searchInput"
          placeholder="#Explore Kar Bmsdk"
        ></input>
        <img src={SecondSearch} id="searchIcon"></img>
      </div>
    </div>
  );
};

export default BarSearch;
