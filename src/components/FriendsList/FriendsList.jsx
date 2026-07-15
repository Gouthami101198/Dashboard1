import "./FriendsList.css";
import { friendsData } from "../../data/socialData";

const FriendsList = () => {
  return (
    <div className="friends-list-card">

      <div className="friends-list-header">
        <h3>Friends</h3>
        <span>{friendsData.length} Friends</span>
      </div>

      <div className="friends-grid">
        {friendsData.map((friend) => (
          <div
            className="friend-card"
            key={friend.id}
          >
            <img
              src={friend.avatar}
              alt={friend.name}
              className="friend-avatar"
            />

            <h4>{friend.name}</h4>

            <p>{friend.role}</p>

            <button className="friend-btn">
              View Profile
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default FriendsList;