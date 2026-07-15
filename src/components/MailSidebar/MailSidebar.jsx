import "./MailSidebar.css";
import {
  FiInbox,
  FiStar,
  FiEdit,
  FiSend,
  FiBookmark,
  FiTrash2,
  FiPlus,
} from "react-icons/fi";

const labels = [
  { id: 1, name: "Personal", color: "#36D6C8" },
  { id: 2, name: "Work", color: "#37B6FF" },
  { id: 3, name: "Friends", color: "#4CAF50" },
  { id: 4, name: "Family", color: "#FFC107" },
  { id: 5, name: "Social", color: "#2E9E44" },
];

const MailSidebar = () => {
  return (
    <aside className="mail-sidebar">

      <button className="new-message-btn">
        NEW MESSAGE
      </button>

      <ul className="mail-menu">

        <li className="active">
          <div>
            <FiInbox />
            <span>Inbox</span>
          </div>

          <span className="badge">5</span>
        </li>

        <li>
          <div>
            <FiStar />
            <span>Marked</span>
          </div>
        </li>

        <li>
          <div>
            <FiEdit />
            <span>Drafts</span>
          </div>
        </li>

        <li>
          <div>
            <FiSend />
            <span>Sent</span>
          </div>
        </li>

        <li>
          <div>
            <FiBookmark />
            <span>Important</span>
          </div>

          <span className="badge red">4</span>
        </li>

        <li>
          <div>
            <FiTrash2 />
            <span>Deleted</span>
          </div>
        </li>

      </ul>

      <div className="label-header">

        <h4>LABELS</h4>

        <button>
          <FiPlus />
        </button>

      </div>

      <ul className="label-list">

        {labels.map((label) => (
          <li key={label.id}>

            <span
              className="label-dot"
              style={{ background: label.color }}
            ></span>

            {label.name}

          </li>
        ))}

      </ul>

    </aside>
  );
};

export default MailSidebar;