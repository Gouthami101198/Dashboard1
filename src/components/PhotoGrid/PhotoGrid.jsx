import "./PhotoGrid.css";
import { photosData } from "../../data/socialData";

const PhotoGrid = () => {
  return (
    <div className="photo-grid-card">

      <div className="photo-grid-header">
        <h3>Photo Gallery</h3>
        <span>{photosData.length} Photos</span>
      </div>

      <div className="photo-grid">

        {photosData.map((photo) => (
          <div
            className="photo-card"
            key={photo.id}
          >
            <img
              src={photo.image}
              alt={photo.title}
            />

            <div className="photo-overlay">
              <h4>{photo.title}</h4>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default PhotoGrid;