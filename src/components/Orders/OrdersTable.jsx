import "./OrdersTable.css";

import OrderRow from "./OrderRow";
import { ordersData } from "../../data/ordersData";

const OrdersTable = () => {
  return (
    <div className="orders-table-container">

      <table className="orders-table">

        <thead>

          <tr>

            <th>Order ID</th>

            <th>Customer</th>

            <th>Date</th>

            <th>Amount</th>

            <th>Payment</th>

            <th>Status</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {ordersData.map((order) => (
            <OrderRow
              key={order.id}
              order={order}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default OrdersTable;