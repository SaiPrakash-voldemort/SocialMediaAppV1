import React from "react";
import img1 from "../imgs/img1.png";
import "./FollowersProfile.css";
const FollowersProfile = () => {
  return (
    <div className="followersProfile">
      <img src={img1} className="followersImage"></img>
      <div className="othersProfile">
        <h4 className="followersName">Sung Jin Woo</h4>
        <h4 className="followersUserName">@Sung Jin Woo</h4>
      </div>
      <button className="followButton">Follow</button>
    </div>
  );
};

export default FollowersProfile;
