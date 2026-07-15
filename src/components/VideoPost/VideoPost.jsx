import "./VideoPost.css";
import { FiPlayCircle, FiMoreHorizontal } from "react-icons/fi";

import ReactionBar from "../ReactionBar/ReactionBar";
import CommentBox from "../CommentBox/CommentBox";

const VideoPost = ({ post }) => {
  return (
    <div className="video-post">

      <div className="video-post-header">

        <div className="video-user">

          <img
            src={post.avatar}
            alt={post.user}
            className="video-avatar"
          />

          <div>
            <h3>{post.user}</h3>
            <p>
              {post.role} • {post.time}
            </p>
          </div>

        </div>

        <button className="video-menu">
          <FiMoreHorizontal />
        </button>

      </div>

      <p className="video-caption">
        {post.caption}
      </p>

      <div className="video-thumbnail">

        <img
          src={post.thumbnail}
          alt="Video Thumbnail"
        />

        <button className="play-btn">
          <FiPlayCircle />
        </button>

      </div>

      <ReactionBar post={post} />

      <CommentBox />

    </div>
  );
};

export default VideoPost;