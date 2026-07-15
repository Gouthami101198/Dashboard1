import "./FriendsCard.css";
import { friendsData } from "../../data/socialData";

const FriendsCard = () => {
  return (
    <div className="friends-card">

      <h3 className="friends-title">Friends</h3>

      <div className="friends-list">

        {friendsData.map((friend) => (
          <div className="friend-item" key={friend.id}>

            <img
              src={friend.avatar}
              alt={friend.name}
              className="friend-avatar"
            />

            <div className="friend-info">
              <h4>{friend.name}</h4>
              <p>{friend.role}</p>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default FriendsCard;