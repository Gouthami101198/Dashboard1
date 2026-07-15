import "./Notes.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

import NotesHeader from "../../components/Notes/NotesHeader";
import NotesGrid from "../../components/Notes/NotesGrid";

const Notes = () => {
  return (
    <div className="notes-page">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <div className="notes-main">

        {/* Navbar */}

        <Navbar />

        <div className="notes-container">

          {/* Header */}

          <NotesHeader />

          {/* Notes Grid */}

          <div className="notes-card">
            <NotesGrid />
          </div>

        </div>

      </div>

    </div>
  );
};

export default Notes;