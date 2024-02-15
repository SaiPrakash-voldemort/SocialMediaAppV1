import React from "react";
import "./ProfileSide.css";
import BarSearch from "./BarSearch";
import ProfileCard from "./ProfileCard";
import PeopleFollowing from "./PeopleFollowing";
import FollowersProfile from "./FollowersProfile";
const ProfileSide = () => {
  return (
    <div className="profile">
      <BarSearch />
      <ProfileCard />
      <PeopleFollowing />
      <FollowersProfile />
      <FollowersProfile />
      <FollowersProfile />
      <FollowersProfile />
      <FollowersProfile />
      <FollowersProfile />
      <FollowersProfile />
    </div>
  );
};

export default ProfileSide;
