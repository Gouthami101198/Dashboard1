import "./Orders.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

import OrdersHeader from "../../components/Orders/OrdersHeader";
import OrdersTabs from "../../components/Orders/OrdersTabs";
import OrdersToolbar from "../../components/Orders/OrdersToolbar";
import OrdersTable from "../../components/Orders/OrdersTable";
import Pagination from "../../components/Orders/Pagination";

const Orders = () => {
  return (
    <div className="orders-page">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="orders-main">

        {/* Top Navbar */}
        <Navbar />

        <div className="orders-container">

          {/* Page Header */}
          <OrdersHeader />

          {/* Tabs */}
          <OrdersTabs />

          {/* Orders Card */}
          <div className="orders-card">

            <OrdersToolbar />

            <OrdersTable />

            <Pagination />

          </div>

        </div>

      </div>

    </div>
  );
};

export default Orders;