import "./MailHeader.css";
import {
  FiClock,
  FiStar,
  FiSend,
  FiMoreHorizontal,
} from "react-icons/fi";

import avatar from "../../assets/images/avatar1.PNG";

const MailHeader = () => {
  return (
    <div className="mail-header">

      <div className="mail-user">

        <img
          src={avatar}
          alt="Regina Cooper"
          className="user-avatar"
        />

        <div className="user-info">

          <h3>Regina Cooper</h3>

          <p>
            regina.cooper@gmail.com
          </p>

          <span>
            To: Me
          </span>

        </div>

      </div>

      <div className="mail-header-right">

        <div className="mail-time">

          <FiClock />

          <span>10:45 AM</span>

        </div>

        <button className="mail-icon">
          <FiStar />
        </button>

        <button className="mail-icon">
          <FiSend />
        </button>

        <button className="mail-icon">
          <FiMoreHorizontal />
        </button>

      </div>

    </div>
  );
};

export default MailHeader;