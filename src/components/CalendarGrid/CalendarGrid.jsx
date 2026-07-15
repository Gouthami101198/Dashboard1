import "./CalendarGrid.css";
import CalendarCell from "../CalendarCell/CalendarCell";
import { calendarData } from "../../data/calendarData";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const CalendarGrid = () => {
  return (
    <div className="calendar-grid">

      {/* Week Days */}

      <div className="week-header">
        {days.map((day) => (
          <div key={day} className="day-name">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Body */}

      <div className="calendar-body">
        {calendarData.map((day) => (
          <CalendarCell
            key={day.id}
            day={day}
          />
        ))}
      </div>

    </div>
  );
};

export default CalendarGrid;