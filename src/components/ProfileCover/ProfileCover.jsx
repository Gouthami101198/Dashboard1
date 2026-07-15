import "./ProfileCover.css";

import coverImage from "../../assets/covers/profile-cover.png";

const ProfileCover = () => {
  return (
    <div className="profile-cover">
      <img
        src={coverImage}
        alt="Profile Cover"
        className="cover-image"
      />
    </div>
  );
};

export default ProfileCover;