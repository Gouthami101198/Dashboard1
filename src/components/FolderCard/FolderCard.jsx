import "./FolderCard.css";
import { FiMoreVertical } from "react-icons/fi";
import { FaFolder } from "react-icons/fa";

const FolderCard = ({ folder }) => {
  return (
    <div
      className="folder-card"
      style={{ backgroundColor: folder.color }}
    >
      <div className="folder-card-top">

        <div className="folder-icon-box">
          {folder.icon ? (
            <img
              src={folder.icon}
              alt={folder.name}
              className="folder-image"
            />
          ) : (
            <FaFolder className="folder-icon" />
          )}
        </div>

        <button className="folder-menu">
          <FiMoreVertical />
        </button>

      </div>

      <div className="folder-card-content">
        <h3>{folder.name}</h3>

        <p>{folder.files} Files</p>

        <span>{folder.size}</span>
      </div>
    </div>
  );
};

export default FolderCard;