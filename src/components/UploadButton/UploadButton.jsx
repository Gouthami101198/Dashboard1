import "./UploadButton.css";
import { FiUpload } from "react-icons/fi";

const UploadButton = ({ onUpload }) => {
  return (
    <button
      className="upload-btn"
      onClick={onUpload}
    >
      <FiUpload className="upload-icon" />
      <span>Upload</span>
    </button>
  );
};

export default UploadButton;