import "./AvatarGroupp.css";

const AvatarGroupp = ({ avatars = [], max = 4 }) => {
  const visibleAvatars = avatars.slice(0, max);
  const remaining = avatars.length - max;

  return (
    <div className="avatar-groupp">
      {visibleAvatars.map((avatar, index) => (
        <img
          key={index}
          src={avatar}
          alt={`Avatar ${index + 1}`}
          className="avatar-img"
          style={{
            marginLeft: index === 0 ? 0 : "-12px",
            zIndex: visibleAvatars.length - index,
          }}
        />
      ))}

      {remaining > 0 && (
        <div className="avatar-more">
          +{remaining}
        </div>
      )}
    </div>
  );
};

export default AvatarGroupp;