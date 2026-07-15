import "./ReactionBar.css";

import {
  FiHeart,
  FiMessageCircle,
  FiShare2,
} from "react-icons/fi";

const ReactionBar = ({ post }) => {
  return (
    <div className="reaction-bar">

      <button className="reaction-btn">
        <FiHeart />
        <span>{post.likes} Likes</span>
      </button>

      <button className="reaction-btn">
        <FiMessageCircle />
        <span>{post.comments} Comments</span>
      </button>

      <button className="reaction-btn">
        <FiShare2 />
        <span>{post.shares} Shares</span>
      </button>

    </div>
  );
};

export default ReactionBar;