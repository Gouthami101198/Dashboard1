import "./ProductTable.css";

import ProductRow from "./ProductRow";
import { productsData } from "../../data/productsData";

const ProductTable = () => {
  return (
    <div className="product-table-container">

      <table className="product-table">

        <thead>

          <tr>

            <th>Product</th>

            <th>Category</th>

            <th>Date Added</th>

            <th>Price</th>

            <th>Status</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {productsData.map((product) => (
            <ProductRow
              key={product.id}
              product={product}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default ProductTable;