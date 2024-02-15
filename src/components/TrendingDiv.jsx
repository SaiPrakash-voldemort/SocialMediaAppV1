import React from "react";
import "./TrendingDiv.css";
import TrendingTags from "./TrendingTags";
const TrendingDiv = () => {
  return (
    <div className="trendingDiv">
      <div className="Heading">
        <h2>Trending</h2>
      </div>
      <div className="trendingTags">
        <TrendingTags />
        <TrendingTags />
        <TrendingTags />
        <TrendingTags />
        <TrendingTags />
        <TrendingTags />
      </div>
    </div>
  );
};

export default TrendingDiv;
