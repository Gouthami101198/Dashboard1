import "./EventCard.css";
import { FiClock } from "react-icons/fi";

const EventCard = ({ event }) => {
  return (
    <div
      className="event-card"
      style={{
        backgroundColor: event.color || "#E8F8EF",
        borderLeft: `4px solid ${event.borderColor || "#22C55E"}`,
      }}
    >
      <h5>{event.title}</h5>

      <div className="event-time">
        <FiClock />
        <span>{event.time}</span>
      </div>
    </div>
  );
};

export default EventCard;