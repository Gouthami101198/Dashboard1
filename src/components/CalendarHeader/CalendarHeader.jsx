import "./CalendarHeader.css";
import { FiPlus } from "react-icons/fi";

const CalendarHeader = () => {
  return (
    <div className="calendar-header">

      <div className="calendar-title">
        <h1>Calendar</h1>
      </div>

      <button className="add-event-btn">
        <FiPlus />
        <span>Add Event</span>
      </button>

    </div>
  );
};

export default CalendarHeader;