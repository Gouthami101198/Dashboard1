import "./NotesHeader.css";
import { FiPlus, FiSliders } from "react-icons/fi";

const NotesHeader = () => {
  return (
    <div className="notes-header">

      <div className="notes-title">
        <h1>Notes</h1>
      </div>

      <div className="notes-actions">

        <button className="filter-btn">
          <FiSliders />
        </button>

        <button className="add-note-btn">
          <FiPlus />
          <span>Add Note</span>
        </button>

      </div>

    </div>
  );
};

export default NotesHeader;