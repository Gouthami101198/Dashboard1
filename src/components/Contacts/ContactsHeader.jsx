import "./ContactsHeader.css";
import { FiPlus } from "react-icons/fi";

const ContactsHeader = ({ onAddContact }) => {
  return (
    <div className="contacts-header">

      <div className="contacts-header-left">
        <h1>Contacts</h1>
      </div>

      <div className="contacts-header-right">
        <button
          className="add-contact-btn"
          onClick={onAddContact}
        >
          <FiPlus />
          <span>Add Contact</span>
        </button>
      </div>

    </div>
  );
};

export default ContactsHeader;