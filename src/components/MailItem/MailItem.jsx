import "./MailItem.css";
import {
  FiMoreHorizontal,
  FiPaperclip,
  FiBookmark,
} from "react-icons/fi";

const MailItem = ({ mail }) => {
  return (
    <div className={`mail-item ${mail.unread ? "active" : ""}`}>

      <div className="mail-avatar">
        <img src={mail.avatar} alt={mail.sender} />
      </div>

      <div className="mail-info">

        <div className="mail-top">

          <h4>{mail.sender}</h4>

          <div className="mail-actions">

            {mail.hasAttachment && (
              <FiPaperclip className="attachment-icon" />
            )}

            <span className="mail-time">{mail.time}</span>

          </div>

        </div>

        <h3>{mail.subject}</h3>

        <p>{mail.preview}</p>

        <div className="mail-bottom">

          <FiMoreHorizontal />

          {mail.starred && (
            <FiBookmark className="bookmark active" />
          )}

        </div>

      </div>

    </div>
  );
};

export default MailItem;