import "./MailToolbar.css";
import {
  FiArchive,
  FiTrash2,
  FiFolder,
  FiMail,
  FiPrinter,
  FiMoreHorizontal,
} from "react-icons/fi";

const MailToolbar = () => {
  return (
    <div className="mail-toolbar">

      <div className="toolbar-left">

        <button className="toolbar-btn">
          <FiArchive />
        </button>

        <button className="toolbar-btn">
          <FiTrash2 />
        </button>

        <button className="toolbar-btn">
          <FiFolder />
        </button>

        <button className="toolbar-btn">
          <FiMail />
        </button>

      </div>

      <div className="toolbar-right">

        <button className="toolbar-btn">
          <FiPrinter />
        </button>

        <button className="toolbar-btn">
          <FiMoreHorizontal />
        </button>

      </div>

    </div>
  );
};

export default MailToolbar;