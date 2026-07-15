import "./NoteCard.css";
import { FiCalendar, FiPaperclip } from "react-icons/fi";

const NoteCard = ({ note }) => {
  return (
    <div className={`note-card ${note.pinned ? "pinned" : ""}`}>

      {/* Top */}

      <div className="note-top">

        <div className="note-date">
          <FiCalendar />
          <span>{note.date}</span>
        </div>

        <button className="pin-btn">
          <FiPaperclip />
        </button>

      </div>

      {/* Body */}

      <div className="note-body">

        <h3>{note.title}</h3>

        <p>{note.description}</p>

      </div>

    </div>
  );
};

export default NoteCard;