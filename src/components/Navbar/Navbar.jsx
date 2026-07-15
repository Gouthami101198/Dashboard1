import "./Navbar.css";

import {
  FaSearch,
  FaBell,
  FaRegMoon,
  FaCog,
  FaChevronDown,
} from "react-icons/fa";

import avatar from "../../assets/avatar.png";

const Navbar = () => {
  return (
    <header className="navbar">

      {/* Left */}

      <div className="navbar-left">

        <h1>Overview</h1>

        <div className="search-bar">
          <FaSearch />
          <input
            type="text"
            placeholder="Search anything..."
          />
        </div>

      </div>

      {/* Right */}

      <div className="navbar-right">

        <button className="icon-btn">
          <FaRegMoon />
        </button>

        <button className="icon-btn notification">
          <FaBell />
          <span className="notification-dot"></span>
        </button>

        <button className="icon-btn">
          <FaCog />
        </button>

        <div className="profile">

          <img
            src={avatar}
            alt="User"
          />

          <div className="profile-info">
            <h4>Gouthami</h4>
            <p>Administrator</p>
          </div>

          <FaChevronDown />

        </div>

      </div>

    </header>
  );
};

export default Navbar;