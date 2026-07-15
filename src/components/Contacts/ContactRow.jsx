import "./ContactRow.css";
import { FiMoreVertical } from "react-icons/fi";

const ContactRow = ({ contact }) => {
  return (
    <tr className="contact-row">

      {/* Checkbox */}
      <td>
        <input type="checkbox" />
      </td>

      {/* Name */}
      <td>
        <div className="contact-user">

          <img
            src={contact.avatar}
            alt={contact.name}
            className="contact-avatar"
          />

          <div className="contact-info">
            <h4>{contact.name}</h4>
            <p>{contact.designation}</p>
          </div>

        </div>
      </td>

      {/* Email */}
      <td>{contact.email}</td>

      {/* Location */}
      <td>{contact.location}</td>

      {/* Phone */}
      <td>{contact.phone}</td>

      {/* Action */}
      <td>
        <button className="contact-action">
          <FiMoreVertical />
        </button>
      </td>

    </tr>
  );
};

export default ContactRow;