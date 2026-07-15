import "./OrdersToolbar.css";
import {
  FiSearch,
  FiSliders,
  FiChevronDown,
} from "react-icons/fi";

const OrdersToolbar = () => {
  return (
    <div className="orders-toolbar">

      {/* Search Box */}

      <div className="search-box">

        <FiSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search order..."
        />

        <button className="filter-btn">
          <FiSliders />
        </button>

      </div>

      {/* Actions */}

      <button className="actions-btn">
        <span>Actions</span>
        <FiChevronDown />
      </button>

    </div>
  );
};

export default OrdersToolbar;