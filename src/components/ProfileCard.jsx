import React from "react";
import "./ProfileCard.css";
import coverPic from "../imgs/sungCover.jpg";
import profilePic from "../imgs/sungJin.jpg";
const ProfileCard = () => {
  return (
    <div className="profileInfo">
      <img className="coverPhoto" src={coverPic}></img>
      <img className="profilePhoto" src={profilePic}></img>
      <div className="userBasicInfo">
        <h3 className="userName">GojoSatoru</h3>
        <h3 className="aboutUser">FrontEndDev</h3>
      </div>
      <div className="followerSection">
        <div className="followers">
          <h3 className="followersNums">10000</h3>
          <h3 className="followersTitle">Followers</h3>
        </div>
        <div className="following">
          <h3 className="followingNums">150</h3>
          <h3 className="followingTitle">Following</h3>
        </div>
      </div>
      <h2 className="myProfileTitle">My Profile</h2>
    </div>
  );
};

export default ProfileCard;
