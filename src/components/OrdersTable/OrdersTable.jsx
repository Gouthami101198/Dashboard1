import "./OrdersTable.css";
import {
  FaEllipsisH,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
} from "react-icons/fa";

const orders = [
  {
    id: "#10245",
    customer: "Emma Watson",
    product: "MacBook Pro",
    amount: "$2,450",
    status: "Completed",
  },
  {
    id: "#10246",
    customer: "John Smith",
    product: "iPhone 15",
    amount: "$1,150",
    status: "Pending",
  },
  {
    id: "#10247",
    customer: "Sophia Brown",
    product: "AirPods Pro",
    amount: "$299",
    status: "Cancelled",
  },
  {
    id: "#10248",
    customer: "Michael Lee",
    product: "Apple Watch",
    amount: "$599",
    status: "Completed",
  },
  {
    id: "#10249",
    customer: "Olivia Davis",
    product: "iPad Air",
    amount: "$799",
    status: "Pending",
  },
];

const OrdersTable = () => {
  return (
    <div className="orders-card">

      <div className="orders-header">
        <h2>Recent Orders</h2>

        <button>View All</button>
      </div>

      <table>

        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>

        <tbody>

          {orders.map((order) => (
            <tr key={order.id}>

              <td>{order.id}</td>

              <td>{order.customer}</td>

              <td>{order.product}</td>

              <td>{order.amount}</td>

              <td>
                <span
                  className={`status ${order.status.toLowerCase()}`}
                >
                  {order.status === "Completed" && <FaCheckCircle />}
                  {order.status === "Pending" && <FaClock />}
                  {order.status === "Cancelled" && <FaTimesCircle />}

                  {order.status}
                </span>
              </td>

              <td>
                <button className="action-btn">
                  <FaEllipsisH />
                </button>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default OrdersTable;