import React from "react";
import "./Post.css";
import like from "../imgs/like.png";
import unlike from "../imgs/unlike.png";
import comment from "../imgs/comment.png";
import shareOne from "../imgs/share.png";
import shareTwo from "../imgs/sharing.png";
import sung from "../imgs/sungJin.jpg";
import obj from "../imgs/obj3.jpg";
const Post = () => {
  return (
    <div className="postMedia">
      <div className="uploadedProfile">
        <img src={sung}></img>
        <h4>sungJin</h4>
      </div>
      <div className="uploadedMedia">
        <img src={obj}></img>
      </div>
      <div className="likeIcons">
        <div className="likeDiv">
          <img src={like}></img>
          <h6 className="noOFLikes">10</h6>
        </div>
        <div className="commentDiv">
          <img src={comment}></img>
          <h6 className="noOFComments">10</h6>
        </div>
        <div className="shareDiv">
          <img src={shareOne}></img>
          <h6 className="noOFShares">10</h6>
        </div>
      </div>
    </div>
  );
};

export default Post;
