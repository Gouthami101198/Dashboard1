import "./SearchBar.css";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="searchbar">

      <div className="search-input">

        <FiSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search..."
        />

      </div>

    </div>
  );
};

export default SearchBar;