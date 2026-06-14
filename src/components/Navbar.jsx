import { PieChart, Pie, Cell } from "recharts";

function IncidentRisk() {
  const data = [
    { name: "Critical", value: 5 },
    { name: "High", value: 10 },
    { name: "Moderate", value: 15 },
  ];

  const COLORS = ["#ef4444", "#f59e0b", "#22c55e"];

  return (
    <div className="card">
      <h3>📊 Incident Risk Analysis</h3>

      <PieChart width={250} height={250}>
        <Pie
          data={data}
          dataKey="value"
          outerRadius={80}
          label
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}

export default IncidentRisk;