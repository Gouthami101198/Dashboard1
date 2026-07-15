import "./FolderGrid.css";
import FolderCard from "../FolderCard/FolderCard";
import { folderGridData } from "../../data/fileManagerData";

const FolderGrid = () => {
  return (
    <div className="folder-grid-section">

      <div className="section-header">
        <h2>Folders</h2>
        <button>View All</button>
      </div>

      <div className="folder-grid">
        {folderGridData.map((folder) => (
          <FolderCard
            key={folder.id}
            folder={folder}
          />
        ))}
      </div>

    </div>
  );
};

export default FolderGrid;