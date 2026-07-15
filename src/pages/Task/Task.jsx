import "./Task.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import TaskColumn from "../../components/TaskColumn/TaskColumn";

import {
  todoTasks,
  progressTasks,
  completedTasks,
} from "../../data/TaskData";

import { FiPlus, FiFilter } from "react-icons/fi";

const Task = () => {
  return (
    <div className="task-page">
      <Sidebar />

      <div className="task-content">
        <Navbar />

        <div className="task-header">
          <div className="task-title">
            <h1>Design Plan</h1>
          </div>

          <div className="task-actions">
            <button className="filter-btn">
              <FiFilter />
            </button>

            <button className="add-btn">
              <FiPlus />
              Add
            </button>
          </div>
        </div>

        <div className="task-board">

          <TaskColumn
            title="TODO"
            count={todoTasks.length}
            color="#FFC83D"
            tasks={todoTasks}
          />

          <TaskColumn
            title="IN PROGRESS"
            count={progressTasks.length}
            color="#3CC7E7"
            tasks={progressTasks}
          />

          <TaskColumn
            title="COMPLETED"
            count={completedTasks.length}
            color="#2FBF71"
            tasks={completedTasks}
          />

        </div>
      </div>
    </div>
  );
};

export default Task;