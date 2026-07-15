import "./StatisticsChart.css";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", income: 190, expense: 150 },
  { day: "Tue", income: 100, expense: 160 },
  { day: "Wed", income: 250, expense: 130 },
  { day: "Thu", income: 200, expense: 170 },
  { day: "Fri", income: 220, expense: 140 },
  { day: "Sat", income: 180, expense: 150 },
  { day: "Sun", income: 150, expense: 120 },
];

const StatisticsChart = () => {
  return (
    <div className="statistics-card">

      <div className="statistics-header">
        <h2>Statistics</h2>

        <select>
          <option>19 Aug - 25 Aug</option>
          <option>26 Aug - 1 Sep</option>
        </select>
      </div>

      <div className="statistics-chart">

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} barGap={8}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />

            <Bar
              dataKey="income"
              fill="#1E9E45"
              radius={[8, 8, 0, 0]}
            />

            <Bar
              dataKey="expense"
              fill="#42D3C8"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>

      </div>

      <div className="statistics-footer">

        <div>
          <span className="dot income"></span>
          Income
        </div>

        <div>
          <span className="dot expense"></span>
          Expense
        </div>

      </div>

    </div>
  );
};

export default StatisticsChart;