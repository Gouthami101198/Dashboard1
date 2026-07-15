import "./ProjectsHeader.css";
import { FiPlus, FiSliders } from "react-icons/fi";

const ProjectsHeader = () => {
  return (
    <div className="projects-header">

      <div className="projects-title">
        <h1>Projects</h1>
      </div>

      <div className="projects-actions">

        <button className="filter-btn">
          <FiSliders />
        </button>

        <button className="add-btn">
          <FiPlus />
          <span>Add Project</span>
        </button>

      </div>

    </div>
  );
};

export default ProjectsHeader;