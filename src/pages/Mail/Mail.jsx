import "./Mail.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

import MailSidebar from "../../components/MailSidebar/MailSidebar";
import MailSearch from "../../components/MailSearch/MailSearch";
import MailList from "../../components/MailList/MailList";
import MailContent from "../../components/MailContent/MailContent";

const Mail = () => {
  return (
    <div className="mail-page">

      {/* Dashboard Sidebar */}
      <Sidebar />

      <div className="mail-main">

        {/* Top Navbar */}
        <Navbar />

        <div className="mail-container">

          {/* Mail Left Sidebar */}
          <MailSidebar />

          {/* Mail Section */}
          <div className="mail-section">

            {/* Search */}
            <MailSearch />

            <div className="mail-body">

              {/* Inbox List */}
              <MailList />

              {/* Mail Content */}
              <MailContent />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Mail;