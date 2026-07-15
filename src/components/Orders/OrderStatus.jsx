import "./OrderStatus.css";

const OrderStatus = ({ status }) => {
  const statusClass = status.toLowerCase().replace(/\s+/g, "-");

  return (
    <span className={`order-status ${statusClass}`}>
      {status}
    </span>
  );
};

export default OrderStatus;