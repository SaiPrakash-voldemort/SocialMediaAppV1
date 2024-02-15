import React from "react";
import "./PostMedia.css";
import image from "../imgs/image.png";
import video from "../imgs/video.png";
import loc from "../imgs/loc.png";
import profile from "../imgs/sungJin.jpg";
import Schedule from "../imgs/schedule.png";
const PostMedia = () => {
  return (
    <div className="topSection">
      <div className="shareSomething">
        <img src={profile}></img>
        <input type="text" placeholder="What's Happening?"></input>
      </div>
      <div className="uploadMedia">
        <div className="uploadPhoto">
          <img src={image}></img>
          <h5>Photo</h5>
        </div>
        <div className="uploadVideo">
          <img src={video}></img>
          <h5>Video</h5>
        </div>
        <div className="uploadLocation">
          <img src={loc}></img>
          <h5>Location</h5>
        </div>
        <div className="uploadSchedule">
          <img src={Schedule}></img>
          <h5>Schedule</h5>
        </div>
        <div className="uploadShare">
          <button>Share</button>
        </div>
      </div>
    </div>
  );
};

export default PostMedia;
