import "./MailSearch.css";
import { FiSearch, FiChevronDown } from "react-icons/fi";

const MailSearch = () => {
  return (
    <div className="mail-search">

      <div className="search-box">
        <FiSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search..."
        />
      </div>

      <button className="filter-btn">
        <span>Recent</span>
        <FiChevronDown />
      </button>

    </div>
  );
};

export default MailSearch;