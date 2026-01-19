import React, { useContext } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import ChartView from "../components/ChartView";
import { ExpenseContext } from "../context/ExpenseContext";

function Dashboard() {
  const { expenses } = useContext(ExpenseContext);

  const currentMonth = new Date().getMonth();

  const filteredExpenses = expenses.filter(
    (e) => new Date(e.date).getMonth() === currentMonth
  );

  const income = filteredExpenses
    .filter((e) => e.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = filteredExpenses
    .filter((e) => e.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = filteredExpenses.reduce(
    (total, e) => (e.type === "income" ? total + e.amount : total - e.amount),
    0
  );

  return (
    <div style={styles.container}>
      <h3>Dashboard Summary (Current Month)</h3>
      <p>Total Income: ₹{income}</p>
      <p>Total Expense: ₹{expense}</p>
      <p><b>Balance:</b> ₹{balance}</p>

      <ExpenseForm />
      <ChartView />
      <ExpenseList />
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "auto",
  },
};

export default Dashboard;
