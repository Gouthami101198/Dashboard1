import "./ComposeBox.css";
import {
  FiPaperclip,
  FiSend,
  FiTrash2,
} from "react-icons/fi";
import EditorToolbar from "../EditorToolbar/EditorToolbar";

const ComposeBox = () => {
  return (
    <div className="compose-box">

      <div className="compose-header">
        <h3>New Message</h3>
      </div>

      <div className="compose-body">

        <input
          type="email"
          placeholder="To"
          className="compose-input"
        />

        <input
          type="text"
          placeholder="Subject"
          className="compose-input"
        />

        <textarea
          placeholder="Write your message..."
          className="compose-textarea"
          rows="10"
        ></textarea>

      </div>

      <div className="compose-footer">

        <button className="attach-btn">
          <FiPaperclip />
          Attach File
        </button>

        <div className="compose-actions">

          <button className="delete-btn">
            <FiTrash2 />
            Discard
          </button>

          <button className="send-btn">
            <FiSend />
            Send
          </button>

        </div>

      </div>
      <div className="compose-body">

  <input
    type="email"
    placeholder="To"
    className="compose-input"
  />

  <input
    type="text"
    placeholder="Subject"
    className="compose-input"
  />

  <EditorToolbar />

  <textarea
    className="compose-textarea"
    placeholder="Write your message..."
    rows="10"
  ></textarea>

</div>

    </div>
  );
};

export default ComposeBox;