import React from "react";
import PostMedia from "./PostMedia";
import "./MainSide.css";
import PostDiv from "./PostDiv";

const MainSide = () => {
  return (
    <div className="mainDiv">
      <PostMedia />
      <PostDiv />
    </div>
  );
};

export default MainSide;
