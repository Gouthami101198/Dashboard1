import "./Calendar.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

import CalendarHeader from "../../components/CalendarHeader/CalendarHeader";
import CalendarToolbar from "../../components/CalendarToolbar/CalendarToolbar";
import MonthSwitcher from "../../components/CalendarMonthSwitcher/CalendarMonthSwitcher";
import CalendarGrid from "../../components/CalendarGrid/CalendarGrid";
import CalendarLegend from "../../components/CalendarLegend/CalendarLegend";

const CalendarMonthSwitcher = () => {
  return (
    <div className="calendar-page">

      {/* Sidebar */}
      <Sidebar />

      <div className="calendar-main">

        {/* Navbar */}
        <Navbar />

        <div className="calendar-content">

          {/* Page Header */}
          <CalendarHeader />

          {/* Calendar Card */}
          <div className="calendar-card">

            <MonthSwitcher
              month="September"
              year="2020"
            />

            <CalendarToolbar />

            <CalendarGrid />

            <CalendarLegend />

          </div>

        </div>

      </div>

    </div>
  );
};

export default CalendarMonthSwitcher;