import React from "react";
import "./Home.css";
import ProfileSide from "../components/ProfileSide";
import MainSide from "../components/MainSide";
import SettingsSide from "../components/SettingsSide";
const Home = () => {
  return (
    <div className="homepage">
      <ProfileSide />
      <div className="mainSection">
        <MainSide />
      </div>
      <div className="settings">
        <SettingsSide />
      </div>
    </div>
  );
};

export default Home;
