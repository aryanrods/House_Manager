import { useState } from "react";
import AddUser from "./components/AddUser";
import AddExpense from "./components/AddExpense";
import BalanceList from "./components/BalanceList";

function App() {
  const [users, setUsers] = useState([]);
  const [expenses, setExpenses] = useState([]);

  // Load users and expenses from backend

  useEffect(() => {
    fetch("http://localhost:3001/expenses")
      .then((res) => res.json())
      .then((data) => setExpenses(data));

    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  });

  //Add a new user

  async function addUser(name) {
    const res = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    const newUser = await res.json();
    setUsers([...users, newUser]);
  }

  //Add a new expense

  async function addExpense(payer, amount, participants, description = "") {
    const res = await fetch("http://localhost:3001/expenses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ payer, amount, participants, description }),
    });

    const data = await res.json();
    setUsers(data.users);
    setExpenses([...expenses, data.expense]);
  }
  //Update users and expenses

  setUsers(data.users);
  setExpenses([...expenses, data.expense]);

  return (
    <>
      <div>
        <AddUser addUser={addUser} />
        <hr />
        <AddExpense users={users} addExpense={addExpense} />
        <hr />
        <BalanceList />
      </div>
    </>
  );
}

export default App;
