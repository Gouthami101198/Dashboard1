import "./TaskColumn.css";
import { FiPlus } from "react-icons/fi";
import TaskCard from "../TaskCard/TaskCard";

const TaskColumn = ({ title, tasks, color }) => {
  return (
    <div className="task-column">

      {/* Header */}

      <div className="column-header">

        <div className="column-title">

          <span
            className="column-dot"
            style={{ background: color }}
          ></span>

          <h3>{title}</h3>

          <span className="task-count">
            {tasks.length}
          </span>

        </div>

        <button className="column-add">
          <FiPlus />
        </button>

      </div>

      {/* Cards */}

      <div className="column-body">

        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
          />
        ))}

      </div>

    </div>
  );
};

export default TaskColumn;