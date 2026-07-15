import "./ProfileHeader.css";

import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";

import cover from "../../assets/covers/profile-cover.jpg";
import avatar from "../../assets/avatars/avatar1.png";

const ProfileHeader = () => {
  return (
    <div className="profile-header">

      {/* Cover Image */}
      <div className="profile-cover">
        <img src={cover} alt="Cover" />
      </div>

      {/* Profile Card */}
      <div className="profile-card">

        <div className="profile-left">

          <img
            src={avatar}
            alt="Ronald Robertson"
            className="profile-avatar"
          />

          <div className="profile-info">

            <h2>Ronald Robertson</h2>

            <p>Creative Director</p>

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
            <span>Email</span>
            <strong>robe@example.com</strong>
          </div>

          <div className="info-box">
            <span>Birthday</span>
            <strong>17 March, 1995</strong>
          </div>

          <div className="info-box">
            <span>Phone</span>
            <strong>+1 (070) 123-8459</strong>
          </div>

          <div className="info-box">
            <span>Location</span>
            <strong>New York, NY</strong>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ProfileHeader;