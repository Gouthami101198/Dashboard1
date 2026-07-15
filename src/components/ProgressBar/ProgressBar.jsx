import "./ProgressBar.css";

const ProgressBar = ({ title = "SUB TASKS", progress = 0 }) => {
  return (
    <div className="progress-card">

      <div className="progress-header">
        <span>{title}</span>
        <span>{progress}%</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

    </div>
  );
};

export default ProgressBar;