import "./ContactDetails.css";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiBriefcase,
  FiCalendar,
  FiEdit2,
} from "react-icons/fi";

const ContactDetails = ({ contact }) => {
  if (!contact) {
    return (
      <div className="contact-details empty">
        <p>Select a contact to view details.</p>
      </div>
    );
  }

  return (
    <div className="contact-details">

      {/* Profile */}

      <div className="profile-section">

        <img
          src={contact.avatar}
          alt={contact.name}
          className="profile-image"
        />

        <h2>{contact.name}</h2>

        <p>{contact.designation}</p>

        <button className="edit-btn">
          <FiEdit2 />
          Edit Profile
        </button>

      </div>

      {/* Information */}

      <div className="details-list">

        <div className="detail-item">
          <FiMail />
          <span>{contact.email}</span>
        </div>

        <div className="detail-item">
          <FiPhone />
          <span>{contact.phone}</span>
        </div>

        <div className="detail-item">
          <FiMapPin />
          <span>{contact.location}</span>
        </div>

        <div className="detail-item">
          <FiBriefcase />
          <span>{contact.company}</span>
        </div>

        <div className="detail-item">
          <FiCalendar />
          <span>{contact.joined}</span>
        </div>

      </div>

      {/* About */}

      <div className="about-section">
        <h3>About</h3>

        <p>{contact.about}</p>
      </div>

    </div>
  );
};

export default ContactDetails;