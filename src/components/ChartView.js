import React, { useContext } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { ExpenseContext } from "../context/ExpenseContext";

const COLORS = ["#22c55e", "#ef4444"];

function ChartView() {
  const { expenses } = useContext(ExpenseContext);

  const income = expenses
    .filter((e) => e.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = expenses
    .filter((e) => e.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const data = [
    { name: "Income", value: income },
    { name: "Expense", value: expense },
  ];

  return (
    <PieChart width={300} height={300}>
      <Pie data={data} dataKey="value" outerRadius={100}>
        {data.map((_, i) => (
          <Cell key={i} fill={COLORS[i]} />
        ))}
      </Pie>
    </PieChart>
  );
}

export default ChartView;
