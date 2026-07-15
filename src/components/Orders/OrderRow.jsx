import "./OrderRow.css";
import { FiMoreVertical } from "react-icons/fi";
import OrderStatus from "./OrderStatus";

const OrderRow = ({ order }) => {
  return (
    <tr className="order-row">

      {/* Order ID */}
      <td>
        <span className="order-id">{order.orderId}</span>
      </td>

      {/* Customer */}

      <td>
        <div className="customer-info">

          <img
            src={order.avatar}
            alt={order.customer}
            className="customer-avatar"
          />

          <div>
            <h4>{order.customer}</h4>
            <p>{order.email}</p>
          </div>

        </div>
      </td>

      {/* Date */}

      <td>{order.date}</td>

      {/* Amount */}

      <td className="amount">{order.amount}</td>

      {/* Payment */}

      <td>{order.payment}</td>

      {/* Status */}

      <td>
        <OrderStatus status={order.status} />
      </td>

      {/* Action */}

      <td>
        <button className="action-btn">
          <FiMoreVertical />
        </button>
      </td>

    </tr>
  );
};

export default OrderRow;