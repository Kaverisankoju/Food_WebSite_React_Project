import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function ExpenseList() {
  const { expenses, deleteExpense } = useContext(ExpenseContext);

  return (
    <ul>
      {expenses.map((e) => (
        <li key={e.id}>
          {e.title} - ₹{e.amount} ({e.type}) [{e.category}]
           <button onClick={() => deleteExpense(e.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
