import "./ContactsTable.css";
import ContactRow from "./ContactRow";
import { contactsData } from "../../data/contactsData";

const ContactsTable = () => {
  return (
    <div className="contacts-table-wrapper">

      <table className="contacts-table">

        <thead>

          <tr>

            <th>
              <input type="checkbox" />
            </th>

            <th>NAME</th>

            <th>EMAIL</th>

            <th>LOCATION</th>

            <th>PHONE</th>

            <th></th>

          </tr>

        </thead>

        <tbody>

          {contactsData.map((contact) => (
            <ContactRow
              key={contact.id}
              contact={contact}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default ContactsTable;