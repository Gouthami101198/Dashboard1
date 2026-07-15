import "./SalesCard.css";
import { FaArrowUp } from "react-icons/fa";

const SalesCard = () => {
  return (
    <div className="sales-card">

      <div className="sales-header">
        <h2>Sales</h2>

        <button className="sales-btn">
          Weekly
        </button>
      </div>

      <div className="progress-wrapper">

        <div className="progress-circle">

          <svg width="180" height="180">

            <circle
              className="bg"
              cx="90"
              cy="90"
              r="75"
            />

            <circle
              className="progress"
              cx="90"
              cy="90"
              r="75"
            />

          </svg>

          <div className="progress-content">
            <h2>$25.5K</h2>
            <p>Total Sales</p>
          </div>

        </div>

      </div>

      <div className="sales-footer">

        <div className="sales-info">

          <FaArrowUp className="up-icon" />

          <div>
            <h3>+18.5%</h3>
            <p>Compared to last week</p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default SalesCard;