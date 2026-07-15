import "./FileGrid.css";
import FileCard from "../FileCard/FileCard";
import { filesData } from "../../data/fileManagerData";

const FileGrid = () => {
  return (
    <div className="file-grid-section">

      <div className="file-grid-header">
        <h2>Recent Files</h2>

        <button className="view-all-btn">
          View All
        </button>
      </div>

      <div className="file-grid">

        {filesData.map((file) => (
          <FileCard
            key={file.id}
            file={file}
          />
        ))}

      </div>

    </div>
  );
};

export default FileGrid;