import "./Feed.css";
import PostCard from "../PostCard/PostCard";
import { postsData } from "../../data/socialData";

const Feed = () => {
  return (
    <div className="feed">

      <div className="feed-header">
        <h2>Recent Posts</h2>
      </div>

      <div className="feed-posts">
        {postsData.map((post) => (
          <PostCard
            key={post.id}
            post={post}
          />
        ))}
      </div>

    </div>
  );
};

export default Feed;