import "./FileInfoPanel.css";
import {
  FiFileText,
  FiCalendar,
  FiHardDrive,
  FiUser,
  FiDownload,
} from "react-icons/fi";

import preview from "../../assets/preview.PNG";

const FileInfoPanel = () => {
  return (
    <aside className="file-info-panel">

      <div className="preview-card">

        <img
          src={preview}
          alt="Preview"
          className="preview-image"
        />

      </div>

      <h2>Dashboard UI.fig</h2>

      <p className="file-description">
        Figma design containing the latest dashboard
        screens and reusable UI components.
      </p>

      <div className="info-list">

        <div className="info-item">
          <FiFileText />
          <div>
            <span>File Type</span>
            <strong>FIG File</strong>
          </div>
        </div>

        <div className="info-item">
          <FiHardDrive />
          <div>
            <span>File Size</span>
            <strong>15.6 MB</strong>
          </div>
        </div>

        <div className="info-item">
          <FiCalendar />
          <div>
            <span>Modified</span>
            <strong>24 Jul 2026</strong>
          </div>
        </div>

        <div className="info-item">
          <FiUser />
          <div>
            <span>Owner</span>
            <strong>John Carter</strong>
          </div>
        </div>

      </div>

      <button className="download-file-btn">
        <FiDownload />
        Download File
      </button>

    </aside>
  );
};

export default FileInfoPanel;
