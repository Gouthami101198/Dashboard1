import "./AddNoteButton.css";
import { FiPlus } from "react-icons/fi";

const AddNoteButton = ({ onClick }) => {
  return (
    <button
      className="add-note-button"
      onClick={onClick}
    >
      <FiPlus className="add-icon" />
      <span>Add Note</span>
    </button>
  );
};

export default AddNoteButton;