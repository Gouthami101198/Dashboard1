import "./ContactsToolbar.css";
import {
  FiSearch,
  FiSliders,
  FiChevronDown,
} from "react-icons/fi";

const ContactsToolbar = () => {
  return (
    <div className="contacts-toolbar">

      {/* Search */}

      <div className="search-box">

        <FiSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search contact..."
        />

        <button className="filter-btn">
          <FiSliders />
        </button>

      </div>

      {/* Actions */}

      <button className="actions-btn">
        <span>Actions</span>
        <FiChevronDown />
      </button>

    </div>
  );
};

export default ContactsToolbar;