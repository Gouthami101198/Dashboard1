import "./social.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

import ProfileCover from "../../components/ProfileCover/ProfileCover";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";

import FriendsCard from "../../components/FriendsCard/FriendsCard";
import PhotosCard from "../../components/PhotosCard/PhotosCard";

import CreatePost from "../../components/CreatePost/CreatePost";
import Feed from "../../components/Feed/Feed";
import VideoPost from "../../components/VideoPost/VideoPost";

import { videoPost } from "../../data/socialData";

const social = () => {
  return (
    <div className="profile-page">

      {/* Dashboard Sidebar */}
      <Sidebar />

      <div className="profile-main">

        {/* Top Navbar */}
        <Navbar />

        <div className="profile-content">

          {/* Cover */}
          <ProfileCover />

          {/* Profile Information */}
          <ProfileInfo />

          <div className="profile-layout">

            {/* Left Sidebar */}
            <div className="profile-left">

              <FriendsCard />

              <PhotosCard />

            </div>

            {/* Main Feed */}
            <div className="profile-center">

              <CreatePost />

              <Feed />

              <VideoPost post={videoPost} />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
export default social;



export default Social;
