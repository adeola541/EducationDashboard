
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";


const data = [
  { name: "UI Desgin", value: 3, color: "#0088FE" },
  { name: "Digital Marketing", value: 18, color: "#00C49F" },
  { name: "User Reaserch", value: 12, color: "#FFBB28" },
  { name: "Animation", value: 45, color: "#FF8042" },
];

const PieChartBox = () => {
  return (
    <div className="pieChartBox">
      <h1>Topic your interested in </h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
     
    </div>
  );
};

export default PieChartBox;