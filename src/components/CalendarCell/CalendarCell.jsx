import "./CalendarCell.css";
import EventCard from "../EventCard/EventCard";

const CalendarCell = ({ day }) => {
  return (
    <div
      className={`calendar-cell ${
        day.outsideMonth ? "outside-month" : ""
      }`}
    >
      {/* Date */}

      <div className="calendar-date">
        {day.today ? (
          <span className="today">{day.day}</span>
        ) : (
          <span>{day.day}</span>
        )}
      </div>

      {/* Events */}

      <div className="calendar-events">
        {day.events &&
          day.events.map((event, index) => (
            <EventCard
              key={index}
              event={event}
            />
          ))}
      </div>
    </div>
  );
};

export default CalendarCell;