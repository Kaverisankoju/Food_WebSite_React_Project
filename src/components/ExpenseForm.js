import React, { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function ExpenseForm() {
  const { addExpense } = useContext(ExpenseContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("Food"); 

  const submitHandler = (e) => {
    e.preventDefault();

    addExpense({
      id: Date.now(),
      title,
      amount: Number(amount),
      type,
      category,
      date: new Date().toISOString(),  
    });

    setTitle("");
    setAmount("");
  };

  return (
    <form onSubmit={submitHandler} style={styles.form}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Rent">Rent</option>
        <option value="Shopping">Shopping</option>
      </select>

      <button>Add</button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
};

export default ExpenseForm;
