import "./OrdersHeader.css";
import {
  FiDownload,
  FiChevronDown,
} from "react-icons/fi";

const OrdersHeader = () => {
  return (
    <div className="orders-header">

      <div className="orders-title">
        <h1>Orders</h1>
      </div>

      <div className="orders-actions">

        <button className="export-btn">
          <FiDownload />
          <span>Export</span>
          <FiChevronDown />
        </button>

      </div>

    </div>
  );
};

export default OrdersHeader;