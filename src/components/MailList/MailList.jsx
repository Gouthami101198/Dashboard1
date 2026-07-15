import "./MailList.css";
import MailItem from "../MailItem/MailItem";
import { mailData } from "../../data/mailData";

const MailList = () => {
  return (
    <div className="mail-list">
      {mailData.map((mail) => (
        <MailItem
          key={mail.id}
          mail={mail}
        />
      ))}
    </div>
  );
};

export default MailList;