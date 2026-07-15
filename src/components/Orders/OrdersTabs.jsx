import "./OrdersTabs.css";

const tabs = [
  {
    id: 1,
    title: "All",
    count: 983,
    active: true,
  },
  {
    id: 2,
    title: "Pending",
    count: 128,
    active: false,
  },
  {
    id: 3,
    title: "Processing",
    count: 15,
    active: false,
  },
  {
    id: 4,
    title: "Refunded",
    count: 8,
    active: false,
  },
];

const OrdersTabs = () => {
  return (
    <div className="orders-tabs">

      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-button ${tab.active ? "active" : ""}`}
        >
          <span>{tab.title}</span>

          <span className="tab-count">
            {tab.count}
          </span>
        </button>
      ))}

    </div>
  );
};

export default OrdersTabs;