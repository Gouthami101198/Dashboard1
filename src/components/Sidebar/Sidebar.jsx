import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  FiGrid,
  FiShoppingCart,
  FiPackage,
  FiClipboard,
  FiCalendar,
  FiMail,
  FiMessageSquare,
  FiFolder,
  FiFileText,
  FiUsers,
  FiUser,
  FiChevronDown,
  FiChevronRight,
} from "react-icons/fi";

import "./Sidebar.css";

const Sidebar = () => {
  const [openEcommerce, setOpenEcommerce] = useState(true);

  return (
    <aside className="sidebar">

      <div className="logo">
        <h2>FLOWER</h2>
      </div>

      <div className="search-box">
        <input type="text" placeholder="Search anything" />
      </div>

      <span className="menu-title">MAIN MENU</span>

      <nav>

        <NavLink to="/" className="menu-item">
          <FiGrid />
          <span>Dashboard</span>
        </NavLink>

        {/* Ecommerce */}

        <button
          className="menu-item dropdown-btn"
          onClick={() => setOpenEcommerce(!openEcommerce)}
        >
          <div className="menu-left">
            <FiShoppingCart />
            <span>E-Commerce</span>
          </div>

          {openEcommerce ? <FiChevronDown /> : <FiChevronRight />}
        </button>

        {openEcommerce && (
          <div className="submenu">

            <NavLink to="/products" className="submenu-item">
              Products
            </NavLink>

            <NavLink to="/orders" className="submenu-item">
              Orders
            </NavLink>

          </div>
        )}

        <NavLink to="/calendar" className="menu-item">
          <FiCalendar />
          <span>Calendar</span>
        </NavLink>

        <NavLink to="/mail" className="menu-item">
          <FiMail />
          <span>Mail</span>
        </NavLink>

        <NavLink to="/chat" className="menu-item">
          <FiMessageSquare />
          <span>Chat</span>
        </NavLink>

        <NavLink to="/projects" className="menu-item">
          <FiFolder />
          <span>Projects</span>
        </NavLink>

        <NavLink to="/filemanager" className="menu-item">
          <FiPackage />
          <span>File Manager</span>
        </NavLink>

        <NavLink to="/task" className="menu-item">
          <FiClipboard />
          <span>Task</span>
        </NavLink>

        <NavLink to="/notes" className="menu-item">
          <FiFileText />
          <span>Notes</span>
        </NavLink>

        <NavLink to="/contacts" className="menu-item">
          <FiUsers />
          <span>Contacts</span>
        </NavLink>

        <NavLink to="/profile" className="menu-item">
          <FiUser />
          <span>Profile</span>
        </NavLink>

      </nav>

    </aside>
  );
};

export default Sidebar;
