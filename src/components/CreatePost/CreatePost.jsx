import "./CreatePost.css";

import {
  FiImage,
  FiVideo,
  FiSmile,
  FiSend,
} from "react-icons/fi";

import avatar from "../../assets/avatars/avatar1.png";

const CreatePost = () => {
  return (
    <div className="create-post">

      <div className="create-post-top">

        <img
          src={avatar}
          alt="User"
          className="user-avatar"
        />

        <textarea
          placeholder="Write something..."
          rows="3"
        ></textarea>

      </div>

      <div className="create-post-bottom">

        <div className="post-actions">

          <button>
            <FiImage />
            <span>Photo</span>
          </button>

          <button>
            <FiVideo />
            <span>Video</span>
          </button>

          <button>
            <FiSmile />
            <span>Feeling</span>
          </button>

        </div>

        <button className="post-btn">
          <FiSend />
          Post
        </button>

      </div>

    </div>
  );
};

export default CreatePost;