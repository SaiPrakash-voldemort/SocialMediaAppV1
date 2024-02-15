import React from "react";
import "./PeopleFollowing.css";
import FollowersProfile from "./FollowersProfile";
const PeopleFollowing = () => {
  return (
    <div className="peopleYouMayKnow">
      <h2>People You May Know</h2>
      <div className="listOfFollowers">
        <FollowersProfile />
      </div>
    </div>
  );
};

export default PeopleFollowing;
