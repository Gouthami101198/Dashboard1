import "./TaskCard.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import AvatarGroup from "../AvatarGroup/AvatarGroup";

import {
  FiCalendar,
  FiPaperclip,
  FiMessageCircle,
  FiCheckCircle,
  FiCircle,
} from "react-icons/fi";

const TaskCard = ({ task }) => {
  return (
    <div className="task-card">

      {/* Date */}

      <div className="task-card-date">
        <FiCalendar />
        <span>{task.date}</span>
      </div>

      {/* Title Decoration */}

      <div className="task-card-lines">
        <span></span>
        <span></span>
      </div>

      {/* Title */}

      <h3>{task.title}</h3>

      {/* Description */}

      {task.description && (
        <p>{task.description}</p>
      )}

      {/* Progress */}

      {task.progress > 0 && task.progress < 100 && (
        <ProgressBar
          title="SUB TASKS"
          progress={task.progress}
        />
      )}

      {/* Checklist */}

      {task.checklist &&
        task.checklist.map((item) => (
          <div className="check-item" key={item.id}>

            <span>{item.text}</span>

            {item.completed ? (
              <FiCheckCircle className="check-success" />
            ) : (
              <FiCircle className="check-pending" />
            )}

          </div>
        ))}

      {/* Single Image */}

      {task.image && (
        <img
          src={task.image}
          alt={task.title}
          className="task-image"
        />
      )}

      {/* Multiple Images */}

      {task.images && (
        <div className="image-grid">
          {task.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="task"
            />
          ))}
        </div>
      )}

      {/* Footer */}

      <div className="task-footer">

        <div className="task-info">

          <span>
            <FiPaperclip />
            {task.attachments}
          </span>

          <span>
            <FiMessageCircle />
            {task.comments}
          </span>

        </div>

        <AvatarGroup avatars={task.avatars} />

      </div>

    </div>
  );
};

export default TaskCard;