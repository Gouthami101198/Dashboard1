import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { sidebarData } from "./sidebarData";
import logo from "../../assets/logo.png";

const Sidebar = () => {
  return (
    <aside className="sidebar">

      <div>
        <h2>FLOWER</h2>
      </div>

      <div className="search">
        <input type="text" placeholder="Search anything" />
      </div>

      <p className="title">MAIN MENU</p>

      <nav className="menu">

        {sidebarData.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              isActive ? "menu-link active" : "menu-link"
            }
          >
            <span className="icon">{item.icon}</span>

            <span className="text">{item.title}</span>

            {item.badge && (
              <span className="badge">
                {item.badge}
              </span>
            )}

            {item.arrow && (
              <span className="arrow">
                {item.arrow}
              </span>
            )}
          </NavLink>
        ))}

      </nav>

    </aside>
  );
};

export default Sidebar;
