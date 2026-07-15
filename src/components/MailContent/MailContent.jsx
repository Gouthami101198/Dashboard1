import "./MailContent.css";
import MailToolbar from "../MailToolbar/MailToolbar";
import AttachmentCard from "../AttachmentCard/AttachmentCard";
import MailHeader from "../MailHeader/MailHeader";


import {
  FiPaperclip,
  FiClock,
  FiStar,
} from "react-icons/fi";

import avatar from "../../assets/images/avatar1.PNG";
import pdf from "../../assets/pdf.png";
import zip from "../../assets/zip.png";

const MailContent = () => {
  return (
    <div className="mail-content">

      <MailToolbar />

      <div className="mail-header">

        <img
          src={avatar}
          alt="Avatar"
          className="sender-avatar"
        />

        <div className="sender-details">

          <h2>Regina Cooper</h2>

          <p>
            to <strong>Me</strong>
          </p>

        </div>

        <div className="mail-date">

          <FiClock />

          <span>10:45 AM</span>

          <FiStar className="star-icon" />

        </div>

      </div>

      <div className="mail-body">

        <h1>Creative Director Resume</h1>

        <p>
          Hello Mark,
        </p>

        <p>
          The arts play a large role in the expression
          of inner thoughts and beauty in my life.
          Thank you for taking the time to review my
          application for the Creative Director role.
        </p>

        <p>
          I have attached my latest portfolio and
          resume for your consideration.
        </p>

        <p>
          Looking forward to hearing from you.
        </p>

        <p>
          Regards,
          <br />
          Regina Cooper
        </p>

      </div>

      <div className="attachment-section">

        <h3>
          <FiPaperclip />
          Attachments
        </h3>

        <div className="attachments">

          <AttachmentCard
            image={pdf}
            title="Resume.pdf"
            size="2.3 MB"
          />

          <AttachmentCard
            image={zip}
            title="Portfolio.zip"
            size="18.5 MB"
          />

        </div>

      </div>
         <MailHeader />

         <div className="mail-body">
          {/* Email Content */}
         </div>
        <div className="attachments">

         <AttachmentCard
           image={pdf}
           title="Resume.pdf"
           size="2.3 MB"
           type="PDF File"
           />

         <AttachmentCard
          image={zip}
          title="Portfolio.zip"
          size="18.5 MB"
          type="ZIP Archive"
          />

           </div>


    </div>
  );
};

export default MailContent;
