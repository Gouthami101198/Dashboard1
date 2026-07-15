import "./NotesGrid.css";
import NoteCard from "./NoteCard";
import { notesData } from "../../data/notesData";

const NotesGrid = () => {
  return (
    <div className="notes-grid">
      {notesData.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
        />
      ))}
    </div>
  );
};

export default NotesGrid;