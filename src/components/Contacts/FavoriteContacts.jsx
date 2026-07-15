import "./FavoriteContacts.css";
import { FiStar } from "react-icons/fi";
import { contactsData } from "../../data/contactsData";

const FavoriteContacts = () => {
  const favorites = contactsData.filter(
    (contact) => contact.favorite
  );

  return (
    <div className="favorite-contacts">

      <div className="favorite-header">

        <h3>Favorite Contacts</h3>

        <FiStar className="star-icon" />

      </div>

      <div className="favorite-list">

        {favorites.map((contact) => (

          <div
            className="favorite-item"
            key={contact.id}
          >

            <img
              src={contact.avatar}
              alt={contact.name}
            />

            <div>

              <h4>{contact.name}</h4>

              <span>{contact.designation}</span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default FavoriteContacts;