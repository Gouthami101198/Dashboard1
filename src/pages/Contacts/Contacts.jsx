import "./Contacts.css";
import { useState } from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

import ContactsHeader from "../../components/Contacts/ContactsHeader";
import ContactsToolbar from "../../components/Contacts/ContactsToolbar";
import ContactsTable from "../../components/Contacts/ContactsTable";
import ContactDetails from "../../components/Contacts/ContactDetails";
import FavoriteContacts from "../../components/Contacts/FavoriteContacts";
import Pagination from "../../components/Contacts/Pagination";

import { contactsData } from "../../data/contactsData";

const Contacts = () => {
  const [selectedContact, setSelectedContact] = useState(
    contactsData[0]
  );

  return (
    <div className="contacts-page">

      {/* Sidebar */}

      <Sidebar />

      {/* Main */}

      <div className="contacts-main">

        <Navbar />

        <div className="contacts-container">

          <ContactsHeader />

          <div className="contacts-layout">

            {/* Left */}

            <div className="contacts-left">

              <div className="contacts-card">

                <ContactsToolbar />

                <ContactsTable
                  selectedContact={selectedContact}
                  setSelectedContact={setSelectedContact}
                />

                <Pagination />

              </div>

            </div>

            {/* Right */}

            <div className="contacts-right">

              <ContactDetails contact={selectedContact} />

              <FavoriteContacts />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Contacts;