import "./ProjectsTabs.css";
import { useState } from "react";

const tabs = [
  { id: "all", label: "All", count: 151 },
  { id: "started", label: "Started", count: 128 },
  { id: "onhold", label: "On Hold", count: 15 },
  { id: "completed", label: "Completed", count: 8 },
];

const ProjectsTabs = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="projects-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-btn ${
            activeTab === tab.id ? "active" : ""
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          <span>{tab.label}</span>

          <span className="tab-count">
            {tab.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default ProjectsTabs;