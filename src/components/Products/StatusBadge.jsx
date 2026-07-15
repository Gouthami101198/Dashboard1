import "./StatusBadge.css";

const StatusBadge = ({ status }) => {
  return (
    <span
      className={`status-badge ${
        status.toLowerCase() === "available"
          ? "available"
          : "disabled"
      }`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;