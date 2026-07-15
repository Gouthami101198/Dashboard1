import "./CalendarMonthSwitcher.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const CalendarMonthSwitcher = ({
  month = "September",
  year = "2020",
  onPrevious,
  onNext,
  onToday,
}) => {
  return (
    <div className="month-switcher">

      <div className="switcher-left">

        <button
          className="switch-btn"
          onClick={onPrevious}
        >
          <FiChevronLeft />
        </button>

        <button
          className="switch-btn"
          onClick={onNext}
        >
          <FiChevronRight />
        </button>

        <button
          className="today-btn"
          onClick={onToday}
        >
          Today
        </button>

      </div>

      <div className="switcher-center">
        <h2>
          {month} <span>{year}</span>
        </h2>
      </div>

    </div>
  );
};

export default CalendarMonthSwitcher;