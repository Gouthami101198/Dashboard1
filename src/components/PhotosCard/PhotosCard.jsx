import "./PhotosCard.css";
import { photosData } from "../../data/socialData";

const PhotosCard = () => {
  return (
    <div className="photos-card">

      <div className="photos-header">
        <h3>Photos</h3>
        <span>{photosData.length} Photos</span>
      </div>

      <div className="photos-grid">

        {photosData.map((photo) => (
          <div
            className="photo-item"
            key={photo.id}
          >
            <img
              src={photo.image}
              alt={photo.title}
            />
          </div>
        ))}

      </div>

    </div>
  );
};

export default PhotosCard;