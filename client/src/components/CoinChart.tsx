import React, { FunctionComponent, PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "BTC", value: 400 },
  { name: "ETH", value: 300 },
  { name: "Others", value: 300 },
];
const COLORS = ["#F53C3D", "#243475", "#E6E7F2"];
interface Props {}

const CoinChart: FunctionComponent<Props> = () => {
  return (
    <div className="h-full w-full">
      <PieChart width={200} height={200} className="w-full h-full">
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default CoinChart;
