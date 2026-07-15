import "./Pagination.css";
import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const Pagination = () => {
  return (
    <div className="pagination">

      <div className="pagination-info">
        Showing <strong>1-10</strong> of <strong>983</strong> orders
      </div>

      <div className="pagination-controls">

        <button className="page-btn">
          <FiChevronLeft />
        </button>

        <button className="page-number active">
          1
        </button>

        <button className="page-number">
          2
        </button>

        <button className="page-number">
          3
        </button>

        <span className="dots">...</span>

        <button className="page-number">
          99
        </button>

        <button className="page-btn">
          <FiChevronRight />
        </button>

      </div>

    </div>
  );
};

export default Pagination;