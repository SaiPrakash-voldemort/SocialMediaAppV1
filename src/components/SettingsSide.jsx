import React from "react";
import "./SettingsSide.css";
import IconsDiv from "./IconsDiv";
import TrendingDiv from "./TrendingDiv";
import ShareSomething from "./ShareSomething";
const SettingsSide = () => {
  return (
    <div className="settingsSide">
      <IconsDiv />
      <TrendingDiv />
      <ShareSomething />
    </div>
  );
};

export default SettingsSide;
