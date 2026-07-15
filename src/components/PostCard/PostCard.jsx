import "./PostCard.css";

import { FiMoreHorizontal } from "react-icons/fi";

import ReactionBar from "../ReactionBar/ReactionBar";
import CommentBox from "../CommentBox/CommentBox";

const PostCard = ({ post }) => {
  return (
    <div className="post-card">

      <div className="post-header">

        <div className="post-user">

          <img
            src={post.avatar}
            alt={post.user}
            className="post-avatar"
          />

          <div>

            <h3>{post.user}</h3>

            <p>
              {post.role} • {post.time}
            </p>

          </div>

        </div>

        <button className="post-menu">
          <FiMoreHorizontal />
        </button>

      </div>

      <div className="post-content">

        <p className="post-caption">
          {post.caption}
        </p>

        {post.image && (
          <img
            src={post.image}
            alt="Post"
            className="post-image"
          />
        )}

      </div>

      <ReactionBar post={post} />

      <CommentBox />

    </div>
  );
};

export default PostCard;