import { useState } from "react";
import AddUser from "./components/AddUser";
import AddExpense from "./components/AddExpense";
import BalanceList from "./components/BalanceList";

function App() {
  const [users, SetUsers] = useState([]);

  function addUser(name) {
    const newUser = {
      name: name,
      balance: 0,
    };

    SetUsers([...users, newUser]);
  }

  function addExpense(payer, amount) {
    const splitAmount = amount / users.length;

    const newArray = users.map((user) => {
      if (user.name === payer) {
        return { ...user, balance: user.balance - splitAmount + amount };
      } else {
        return { ...user, balance: user.balance - splitAmount };
      }
    });

    SetUsers(newArray);
    console.log("addExpenses ran");
  }

  return (
    <>
      <h2>Split Billsssssss</h2>
      <AddUser addUser={addUser}></AddUser>
      <AddExpense users={users} addExpense={addExpense}></AddExpense>
      <BalanceList users={users}></BalanceList>
    </>
  );
}

export default App;
