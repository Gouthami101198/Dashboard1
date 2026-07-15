import "./ProductsTabs.css";

const tabs = [
  {
    id: 1,
    name: "All",
    count: 283,
    active: true,
  },
  {
    id: 2,
    name: "Available",
    count: 268,
    active: false,
  },
  {
    id: 3,
    name: "Disabled",
    count: 15,
    active: false,
  },
];

const ProductsTabs = () => {
  return (
    <div className="products-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-btn ${tab.active ? "active" : ""}`}
        >
          <span className="tab-name">{tab.name}</span>

          <span className="tab-count">
            {tab.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default ProductsTabs;