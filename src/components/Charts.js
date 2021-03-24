import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Line,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    x_value: "Page A",
    uv: 4000,
    y_value: 2400,
    amt: 2400,
  },
  {
    x_value: "Page B",
    uv: 3000,
    y_value: 1398,
    amt: 2210,
  },
  {
    x_value: "Page C",
    uv: 2000,
    y_value: 9800,
    amt: 2290,
  },
  {
    x_value: "Page D",
    uv: 2780,
    y_value: 3908,
    amt: 2000,
  },
  {
    x_value: "Page E",
    uv: 1890,
    y_value: 4800,
    amt: 2181,
  },
  {
    x_value: "Page F",
    uv: 2390,
    y_value: 3800,
    amt: 2500,
  },
  {
    x_value: "Page G",
    uv: 3490,
    y_value: 4300,
    amt: 2100,
  },
];

const Charts = (props) => {
  return (
    <div style={{ width: "100%", height: "90vh" }}>
      <ResponsiveContainer width={"90%"} height="80%">
        <LineChart data={data}>
          <Line type="linear" dataKey="y_value" activeDot={{ r: 8 }} />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x_value" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
