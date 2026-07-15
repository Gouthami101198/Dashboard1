import "./Home.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import OverviewCards from "../../components/OverviewCards/OverviewCards";
import StatisticsChart from "../../components/StatisticsChart/StatisticsChart";
import AnalyticsChart from "../../components/AnalyticsChart/AnalyticsChart";
import SalesCard from "../../components/SalesCard/SalesCard";
import StatisticsHorizontal from "../../components/StatisticsHorizontal/StatisticsHorizontal";
import OrdersTable from "../../components/OrdersTable/OrdersTable";
import Transactions from "../../components/Transactions/Transactions";

const Home = () => {
  return (
    <div className="home">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">

        {/* Navbar */}
        <Navbar />

        {/* Overview Cards */}
        <OverviewCards />

        {/* Charts */}
        <div className="chart-row">

          <div className="chart-left">
            <StatisticsChart />
          </div>

          <div className="chart-right">
            <AnalyticsChart />
          </div>

        </div>

        {/* Sales + Statistics */}
        <div className="middle-row">

          <div className="middle-left">
            <SalesCard />
          </div>

          <div className="middle-right">
            <StatisticsHorizontal />
          </div>

        </div>

        {/* Orders + Transactions */}
        <div className="bottom-row">

          <div className="bottom-left">
            <OrdersTable />
          </div>

          <div className="bottom-right">
            <Transactions />
          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;