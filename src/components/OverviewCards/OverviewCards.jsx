import "./OverviewCards.css";
import {
  FaDollarSign,
  FaChartBar,
  FaUserAlt,
} from "react-icons/fa";

const cards = [
  {
    id: 1,
    title: "Total Income",
    value: "$8.500",
    change: "↑ 50.8%",
    color: "#2ecc71",
    icon: <FaDollarSign />,
  },
  {
    id: 2,
    title: "Total Sales",
    value: "3.500K",
    change: "↓ 10.5%",
    color: "#ff5b5b",
    icon: <FaChartBar />,
  },
  {
    id: 3,
    title: "New Clients",
    value: "2.500K",
    change: "↑ 24.9%",
    color: "#2ecc71",
    icon: <FaUserAlt />,
  },
];

const OverviewCards = () => {
  return (
    <div className="overviewCards">
      {cards.map((card) => (
        <div className="overviewCard" key={card.id}>
          <div className="cardLeft">
            <p>{card.title}</p>

            <h2>{card.value}</h2>

            <span style={{ color: card.color }}>
              {card.change}
            </span>
          </div>

          <div className="cardRight">
            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverviewCards;