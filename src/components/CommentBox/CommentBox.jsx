import "./CommentBox.css";

import { FiSend } from "react-icons/fi";
import avatar1 from "../../assets/avatars/avatar1.PNG";

const CommentBox = () => {
  return (
    <div className="comment-box">

      <img
        src={avatar}
        alt="User"
        className="comment-avatar"
      />

      <input
        type="text"
        placeholder="Write a comment..."
        className="comment-input"
      />

      <button className="comment-btn">
        <FiSend />
      </button>

    </div>
  );
};

export default CommentBox;