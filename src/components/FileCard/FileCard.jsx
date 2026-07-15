import "./FileCard.css";
import {
  FiMoreVertical,
  FiDownload,
  FiEye,
} from "react-icons/fi";

const FileCard = ({ file }) => {
  return (
    <div className="file-card">

      <div className="file-card-header">

        <div className="file-icon-box">
          <img
            src={file.icon}
            alt={file.name}
            className="file-icon"
          />
        </div>

        <button className="file-menu">
          <FiMoreVertical />
        </button>

      </div>

      <div className="file-card-body">

        <h3>{file.name}</h3>

        <span className="file-type">
          {file.type}
        </span>

        <div className="file-details">

          <div>
            <small>Size</small>
            <p>{file.size}</p>
          </div>

          <div>
            <small>Modified</small>
            <p>{file.modified}</p>
          </div>

        </div>

      </div>

      <div className="file-card-footer">

        <button className="action-btn">
          <FiEye />
          Preview
        </button>

        <button className="action-btn download">
          <FiDownload />
          Download
        </button>

      </div>

    </div>
  );
};

export default FileCard;