import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import {
  FiGrid,
  FiShoppingBag,
  FiBox,
  FiShoppingCart,
  FiCalendar,
  FiMail,
  FiFolder,
  FiCheckSquare,
  FiUser,
  FiSettings,
  FiLogOut,
  FiChevronDown,
  FiChevronRight,
} from "react-icons/fi";

const Sidebar = () => {
  const [ecommerceOpen, setEcommerceOpen] = useState(true);

  return (
    <aside className="sidebar">

      <div className="logo">
        <h2>FLOWER</h2>
      </div>

      <nav>

        {/* Dashboard */}

        <NavLink to="/" className="menu-item">
          <span>Dashboard</span>
        </NavLink>
        {/* Task */}

        <NavLink to="/task" className="menu-item">
          <span>Task</span>
        </NavLink>
        {/* Ecommerce */}

        <div>

          <button
            className="menu-item dropdown-btn"
            onClick={() => setEcommerceOpen(!ecommerceOpen)}
          >
            <div className="menu-left">
              
              <span>E-Commerce</span>
            </div>

            {ecommerceOpen ? (
          
            ) : (
            
            )}
          </button>

          {ecommerceOpen && (
            <div className="submenu">

              <NavLink
                to="/products"
                className="submenu-item"
              >
               
                Products
              </NavLink>

              <NavLink
                to="/orders"
                className="submenu-item"
              >
                
                Orders
              </NavLink>

            </div>
          )}

        </div>

        {/* Calendar */}

        <NavLink to="/calendar" className="menu-item">
          
          <span>Calendar</span>
        </NavLink>

        {/* Mail */}

        <NavLink to="/mail" className="menu-item">
    
          <span>Mail</span>
        </NavLink>

        {/* Projects */}

        <NavLink to="/projects" className="menu-item">
          
          <span>Projects</span>
        </NavLink>

        {/* File Manager */}

        <NavLink to="/filemanager" className="menu-item">

          <span>File Manager</span>
        </NavLink>

        

        {/* Profile */}

        <NavLink to="/contacts" className="menu-item">
        
          <span>contacts</span>
        </NavLink>

        {/* Settings */}

        <NavLink to="/notes" className="menu-item">
      
          <span>notes</span>
        </NavLink>

      </nav>

      <button className="logout-btn">
        <FiLogOut />
        Logout
      </button>

    </aside>
  );
};

export default Sidebar;
