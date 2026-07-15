import "./CalendarLegend.css";

const legends = [
  {
    id: 1,
    label: "Meeting",
    color: "#3B82F6",
  },
  {
    id: 2,
    label: "Conference",
    color: "#EC4899",
  },
  {
    id: 3,
    label: "Presentation",
    color: "#F59E0B",
  },
  {
    id: 4,
    label: "Call",
    color: "#22C55E",
  },
];

const CalendarLegend = () => {
  return (
    <div className="calendar-legend">

      <h3>Legend</h3>

      <div className="legend-items">
        {legends.map((item) => (
          <div
            className="legend-item"
            key={item.id}
          >
            <span
              className="legend-color"
              style={{ backgroundColor: item.color }}
            ></span>

            <span className="legend-text">
              {item.label}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default CalendarLegend;