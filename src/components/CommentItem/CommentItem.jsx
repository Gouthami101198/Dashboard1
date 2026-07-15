import "./CommentItem.css";
import { FiCornerUpLeft } from "react-icons/fi";

const CommentItem = ({ comment }) => {
  return (
    <div className="comment-item">

      <img
        src={comment.avatar}
        alt={comment.user}
        className="comment-item-avatar"
      />

      <div className="comment-content">

        <div className="comment-header">
          <h4>{comment.user}</h4>
          <span>{comment.time}</span>
        </div>

        <p>{comment.text}</p>

        <button className="reply-btn">
          <FiCornerUpLeft />
          Reply
        </button>

      </div>

    </div>
  );
};

export default CommentItem;