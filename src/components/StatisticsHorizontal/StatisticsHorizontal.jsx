import "./StatisticsHorizontal.css";

const statistics = [
  {
    id: 1,
    title: "Revenue",
    value: "$24,500",
    percent: 85,
    color: "#7ED957",
  },
  {
    id: 2,
    title: "Orders",
    value: "3,280",
    percent: 70,
    color: "#47D6D8",
  },
  {
    id: 3,
    title: "Customers",
    value: "1,480",
    percent: 60,
    color: "#FFB547",
  },
  {
    id: 4,
    title: "Products",
    value: "680",
    percent: 45,
    color: "#8A5CF6",
  },
];

const StatisticsHorizontal = () => {
  return (
    <div className="statistics-horizontal">

      <div className="statistics-header">
        <h2>Statistics</h2>

        <button>Monthly</button>
      </div>

      {statistics.map((item) => (
        <div className="statistics-item" key={item.id}>

          <div className="statistics-info">
            <span>{item.title}</span>
            <strong>{item.value}</strong>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${item.percent}%`,
                background: item.color,
              }}
            ></div>
          </div>

          <p>{item.percent}%</p>

        </div>
      ))}

    </div>
  );
};

export default StatisticsHorizontal;