import "./ProductsToolbar.css";
import {
  FiSearch,
  FiSliders,
  FiChevronDown,
} from "react-icons/fi";

const ProductsToolbar = () => {
  return (
    <div className="products-toolbar">

      {/* Search */}

      <div className="search-box">
        <FiSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search products..."
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

export default ProductsToolbar;