import "./ProjectCard.css";
import { FiMoreHorizontal, FiClock } from "react-icons/fi";
import ProgressBar from "../ProgressBar/ProgressBar";
import AvatarGroup from "../AvatarGroup/AvatarGroup";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">

      <div className="project-top">

        <div className="project-company">

          <img
            src={project.logo}
            alt={project.title}
            className="project-logo"
          />

          <div>
            <h3>{project.title}</h3>
            <span>{project.company}</span>
          </div>

        </div>

        <button className="project-menu">
          <FiMoreHorizontal />
        </button>

      </div>

      <p className="project-description">
        {project.description}
      </p>

      <div className="progress-header">

        <span>Progress</span>

        <span>{project.progress}%</span>

      </div>

      <ProgressBar progress={project.progress} />

      <div className="project-footer">

        <div className="project-time">

          <FiClock />

          <span>{project.timeLeft}</span>

        </div>

        <AvatarGroup avatars={project.members} />

      </div>

    </div>
  );
};

export default ProjectCard;