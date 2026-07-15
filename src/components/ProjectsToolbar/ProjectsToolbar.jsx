import "./ProjectsToolbar.css";
import { FiList, FiGrid } from "react-icons/fi";

const ProjectsToolbar = ({ view, setView }) => {
  return (
    <div className="projects-toolbar">

      <button
        className={`toolbar-btn ${view === "list" ? "active" : ""}`}
        onClick={() => setView("list")}
      >
        <FiList />
      </button>

      <button
        className={`toolbar-btn ${view === "grid" ? "active" : ""}`}
        onClick={() => setView("grid")}
      >
        <FiGrid />
      </button>

    </div>
  );
};

export default ProjectsToolbar;