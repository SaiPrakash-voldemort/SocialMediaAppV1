import React from "react";
import "./IconsDiv.css";
import homeIcon from "../imgs/home.png";
import bellIcon from "../imgs/bell.png";
import chatIcon from "../imgs/chat.png";
import settingIcon from "../imgs/setting.png";

const IconsDiv = () => {
  return (
    <div className="icons">
      <img src={homeIcon}></img>
      <img src={chatIcon}></img>

      <img src={bellIcon}></img>

      <img src={settingIcon}></img>
    </div>
  );
};

export default IconsDiv;
