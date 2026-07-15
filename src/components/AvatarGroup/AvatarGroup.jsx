import "./AvatarGroup.css";

const AvatarGroup = ({ avatars = [], max = 3 }) => {
  const visibleAvatars = avatars.slice(0, max);
  const remaining = avatars.length - max;

  return (
    <div className="avatar-group">
      {visibleAvatars.map((avatar, index) => (
        <img
          key={index}
          src={avatar}
          alt={`Avatar ${index + 1}`}
          className="avatar"
          style={{ marginLeft: index === 0 ? "0" : "-12px" }}
        />
      ))}

      {remaining > 0 && (
        <div className="avatar extra">
          +{remaining}
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;