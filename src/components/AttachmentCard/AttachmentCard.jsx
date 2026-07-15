import "./AttachmentCard.css";
import { FiDownload, FiFileText } from "react-icons/fi";

const AttachmentCard = ({
  image,
  title,
  size,
  type,
}) => {
  return (
    <div className="attachment-card">

      <div className="attachment-left">

        {image ? (
          <img
            src={image}
            alt={title}
            className="attachment-image"
          />
        ) : (
          <div className="attachment-icon">
            <FiFileText />
          </div>
        )}

        <div className="attachment-info">
          <h4>{title}</h4>

          <p>{size}</p>

          <span>{type}</span>
        </div>

      </div>

      <button className="download-btn">
        <FiDownload />
      </button>

    </div>
  );
};

export default AttachmentCard;