import "./FilterButton.css";
import { FiSliders } from "react-icons/fi";

const FilterButton = ({ onClick }) => {
  return (
    <button
      className="filter-button"
      onClick={onClick}
    >
      <FiSliders />
    </button>
  );
};

export default FilterButton;