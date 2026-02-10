import React from "react";
import { useState } from "react";

function AddExpense({ users, addExpense }) {
  const [payer, setPayer] = useState("");
  const [amount, setAmount] = useState();

  function handleSave() {
    if (!payer || !amount) return;
    addExpense(payer, Number(amount));
    setPayer("");
    setAmount("");
  }

  return (
    <>
      <h3>Add Expenses</h3>
      <select onChange={(e) => setPayer(e.target.value)}>
        <option value="">Who paid?</option>
        {users.map((u) => (
          <option key={u.name} value={u.name}>
            {u.name}
          </option>
        ))}
      </select>

      <input value={amount} onChange={(e) => setAmount(e.target.value)} />

      <button onClick={handleSave}>Add Expense</button>
    </>
  );
}

export default AddExpense;
