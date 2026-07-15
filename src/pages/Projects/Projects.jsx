import { useState } from "react";
import "./Projects.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

import ProjectsHeader from "../../components/ProjectsHeader/ProjectsHeader";
import ProjectsTabs from "../../components/ProjectsTabs/ProjectsTabs";
import ProjectsToolbar from "../../components/ProjectsToolbar/ProjectsToolbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import { projectsData } from "../../data/projectsData";

const Projects = () => {
  const [view, setView] = useState("grid");

  return (
    <div className="projects-page">

      {/* Sidebar */}
      <Sidebar />

      <div className="projects-main">

        {/* Navbar */}
        <Navbar />

        <div className="projects-content">

          <ProjectsHeader />

          <div className="projects-top">

            <ProjectsTabs />

            <ProjectsToolbar
              view={view}
              setView={setView}
            />

          </div>

          <div
            className={
              view === "grid"
                ? "projects-grid"
                : "projects-list"
            }
          >
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>

        </div>

      </div>

    </div>
  );
};

export default Projects;