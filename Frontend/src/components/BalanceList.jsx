import React from "react";

function BalanceList({ users }) {
  return (
    <>
      <h2>Balance</h2>
      <ul>
        {users.map((u) => (
          <li key={u.name}>
            {u.name}:{u.balance.toFixed(2)}
          </li>
        ))}
      </ul>
    </>
  );
}

export default BalanceList;
