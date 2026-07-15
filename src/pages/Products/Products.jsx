import "./Products.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

import ProductsHeader from "../../components/Products/ProductsHeader";
import ProductsTabs from "../../components/Products/ProductsTabs";
import ProductsToolbar from "../../components/Products/ProductsToolbar";
import ProductTable from "../../components/Products/ProductTable";
import Pagination from "../../components/Products/Pagination";

const Products = () => {
  return (
    <div className="products-page">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <div className="products-main">

        {/* Top Navbar */}

        <Navbar />

        <div className="products-container">

          {/* Header */}

          <ProductsHeader />

          {/* Tabs */}

          <ProductsTabs />

          {/* Card */}

          <div className="products-card">

            {/* Toolbar */}

            <ProductsToolbar />

            {/* Product Table */}

            <ProductTable />

            {/* Pagination */}

            <Pagination />

          </div>

        </div>

      </div>

    </div>
  );
};

export default Products;