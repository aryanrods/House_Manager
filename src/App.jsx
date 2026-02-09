import { useState } from "react";
import AddUser from "./components/AddUser";
import AddExpense from "./components/AddExpense";

function App() {
  const [users, SetUsers] = useState([]);

  function addUser(name) {
    const newUser = {
      name: name,
      balance: 0,
    };

    SetUsers([...users, newUser]);
  }

  function AddExpense(payer, amount) {
    const splitAmount = amount / users.length;

    const newArray = users.map((user) => {
      if (users.name === payer) {
        return { ...users, balance: user.balance - splitamount + amount };
      } else {
        return { ...user, balance: balance - splitAmount };
      }
    });
  }

  return;
}

export default App;
