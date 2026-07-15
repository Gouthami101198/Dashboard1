import "./ProfileInfo.css";

import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";

import { profileInfo } from "../../data/socialData";

const ProfileInfo = () => {
  return (
    <div className="profile-info">

      <div className="profile-left">

        <img
          src={profileInfo.avatar}
          alt={profileInfo.name}
          className="profile-avatar"
        />

        <div className="profile-details">

          <h2>{profileInfo.name}</h2>

          <p>{profileInfo.role}</p>

          <div className="social-icons">

            <a href="#">
              <FiFacebook />
            </a>

            <a href="#">
              <FiTwitter />
            </a>

            <a href="#">
              <FiInstagram />
            </a>

          </div>

        </div>

      </div>

      <div className="profile-right">

        <div className="info-box">
          <span>EMAIL</span>
          <h4>{profileInfo.email}</h4>
        </div>

        <div className="info-box">
          <span>BIRTHDAY</span>
          <h4>{profileInfo.birthday}</h4>
        </div>

        <div className="info-box">
          <span>PHONE</span>
          <h4>{profileInfo.phone}</h4>
        </div>

        <div className="info-box">
          <span>LOCATION</span>
          <h4>{profileInfo.location}</h4>
        </div>

      </div>

    </div>
  );
};

export default ProfileInfo;