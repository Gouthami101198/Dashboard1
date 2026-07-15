import "./ProductRow.css";
import { FiMoreVertical } from "react-icons/fi";
import StatusBadge from "./StatusBadge";

const ProductRow = ({ product }) => {
  return (
    <tr className="product-row">

      <td>
        <div className="product-info">

          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />

          <div className="product-details">
            <h4>{product.name}</h4>
            <span>{product.productNo}</span>
          </div>

        </div>
      </td>

      <td>{product.category}</td>

      <td>{product.date}</td>

      <td className="price">{product.price}</td>

      <td>
        <StatusBadge status={product.status} />
      </td>

      <td>
        <button className="action-btn">
          <FiMoreVertical />
        </button>
      </td>

    </tr>
  );
};

export default ProductRow;