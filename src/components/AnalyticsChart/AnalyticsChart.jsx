import "./AnalyticsChart.css";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", income: 0, expense: 0 },
  { day: "Tue", income: 1500, expense: 900 },
  { day: "Wed", income: 1200, expense: 1800 },
  { day: "Thu", income: 2600, expense: 900 },
  { day: "Fri", income: 1500, expense: 2100 },
  { day: "Sat", income: 3200, expense: 1600 },
  { day: "Sun", income: 4100, expense: 1200 },
];

const AnalyticsChart = () => {
  return (
    <div className="analytics-card">
      <div className="analytics-header">
        <h2>Analytics</h2>

        <select>
          <option>19 Aug - 25 Aug</option>
          <option>26 Aug - 1 Sep</option>
        </select>
      </div>

      <div className="analytics-top">
        <div className="analytics-item">
          <span className="circle green"></span>
          <h3>$5.850</h3>
        </div>

        <div className="analytics-item">
          <span className="circle cyan"></span>
          <h3>$1.750</h3>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#eeeeee" />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="income"
            stroke="#1E9E45"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 7 }}
          />

          <Line
            type="monotone"
            dataKey="expense"
            stroke="#42D3C8"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;