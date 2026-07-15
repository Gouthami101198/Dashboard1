import "./FolderSidebar.css";
import {
  FiChevronRight,
  FiChevronDown,
  FiTrash2,
} from "react-icons/fi";
import { FaFolder } from "react-icons/fa";

const FolderSidebar = () => {
  return (
    <aside className="folder-sidebar">

      <div className="sidebar-section">
        <h4>FOLDERS</h4>

        <ul className="folder-list">

          <li className="folder-item">
            <div className="folder-left">
              <FaFolder className="folder-icon" />
              <span>Design</span>
            </div>
            <FiChevronRight />
          </li>

          <li className="folder-item active">

            <div className="folder-left">
              <FaFolder className="folder-icon" />
              <span>Projects</span>
            </div>

            <FiChevronDown />

          </li>

          <ul className="sub-folder">

            <li>
              <FaFolder className="folder-icon" />
              <span>Projects_01</span>
            </li>

            <li>
              <FaFolder className="folder-icon" />
              <span>Projects_02</span>
            </li>

            <li>
              <FaFolder className="folder-icon" />
              <span>Projects_03</span>
            </li>

            <li>
              <FaFolder className="folder-icon" />
              <span>Projects_04</span>
            </li>

          </ul>

          <li className="folder-item">
            <div className="folder-left">
              <FaFolder className="folder-icon" />
              <span>Music</span>
            </div>
            <FiChevronRight />
          </li>

          <li className="folder-item">
            <div className="folder-left">
              <FaFolder className="folder-icon" />
              <span>Pictures</span>
            </div>
            <FiChevronRight />
          </li>

          <li className="folder-item">
            <div className="folder-left">
              <FaFolder className="folder-icon" />
              <span>Documents</span>
            </div>
            <FiChevronRight />
          </li>

          <li className="folder-item">
            <div className="folder-left">
              <FaFolder className="folder-icon" />
              <span>Downloads</span>
            </div>
            <FiChevronRight />
          </li>

        </ul>

      </div>

      <div className="trash-section">

        <button className="trash-btn">
          <FiTrash2 />
          <span>Trash</span>
        </button>

      </div>

      <div className="storage-box">

        <div className="storage-header">
          <span>Storage</span>
          <span>70%</span>
        </div>

        <div className="storage-bar">
          <div className="storage-fill"></div>
        </div>

      </div>

    </aside>
  );
};

export default FolderSidebar;