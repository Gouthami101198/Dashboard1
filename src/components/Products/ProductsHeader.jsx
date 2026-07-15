import "./ProductsHeader.css";
import {
  FiDownload,
  FiPlus,
  FiChevronDown,
} from "react-icons/fi";

const ProductsHeader = () => {
  return (
    <div className="products-header">

      <div className="products-title">
        <h1>Products</h1>
      </div>

      <div className="products-actions">

        <button className="export-btn">
          <FiDownload />
          <span>Export</span>
          <FiChevronDown />
        </button>

        <button className="add-btn">
          <FiPlus />
        </button>

      </div>

    </div>
  );
};

export default ProductsHeader;