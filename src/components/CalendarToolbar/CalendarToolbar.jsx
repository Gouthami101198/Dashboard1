import "./CalendarToolbar.css";
import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const CalendarToolbar = () => {
  return (
    <div className="calendar-toolbar">

      {/* Left Section */}
      <div className="toolbar-left">

        <div className="month-navigation">

          <button className="nav-btn">
            <FiChevronLeft />
          </button>

          <button className="nav-btn">
            <FiChevronRight />
          </button>

        </div>

        <button className="today-btn">
          Today
        </button>

      </div>

      {/* Center */}
      <div className="toolbar-center">
        <h2>
          September <span>2020</span>
        </h2>
      </div>

      {/* Right */}
      <div className="toolbar-right">

        <button className="view-btn active">
          Month
        </button>

        <button className="view-btn">
          Week
        </button>

        <button className="view-btn">
          Day
        </button>

      </div>

    </div>
  );
};

export default CalendarToolbar;