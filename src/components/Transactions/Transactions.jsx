import "./Transactions.css";
import {
  FaArrowDown,
  FaArrowUp,
  FaEllipsisH,
} from "react-icons/fa";

const transactions = [
  {
    id: 1,
    title: "Salary",
    date: "20 Aug 2026",
    amount: "+$5,200",
    status: "Income",
    icon: <FaArrowDown />,
  },
  {
    id: 2,
    title: "Shopping",
    date: "19 Aug 2026",
    amount: "-$320",
    status: "Expense",
    icon: <FaArrowUp />,
  },
  {
    id: 3,
    title: "Freelance",
    date: "18 Aug 2026",
    amount: "+$1,450",
    status: "Income",
    icon: <FaArrowDown />,
  },
  {
    id: 4,
    title: "Netflix",
    date: "17 Aug 2026",
    amount: "-$15",
    status: "Expense",
    icon: <FaArrowUp />,
  },
  {
    id: 5,
    title: "Electricity",
    date: "16 Aug 2026",
    amount: "-$120",
    status: "Expense",
    icon: <FaArrowUp />,
  },
];

const Transactions = () => {
  return (
    <div className="transactions-card">

      <div className="transactions-header">
        <h2>Transactions</h2>

        <button>View All</button>
      </div>

      {transactions.map((item) => (
        <div className="transaction-item" key={item.id}>

          <div
            className={`transaction-icon ${
              item.status === "Income"
                ? "income-bg"
                : "expense-bg"
            }`}
          >
            {item.icon}
          </div>

          <div className="transaction-info">
            <h4>{item.title}</h4>
            <p>{item.date}</p>
          </div>

          <div className="transaction-right">

            <span
              className={
                item.status === "Income"
                  ? "income-text"
                  : "expense-text"
              }
            >
              {item.amount}
            </span>

            <button className="more-btn">
              <FaEllipsisH />
            </button>

          </div>

        </div>
      ))}

    </div>
  );
};

export default Transactions;