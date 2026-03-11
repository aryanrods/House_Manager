import React from "react";

export default function BalanceList({ users }) {
  return (
    <>
      <h2>Balances</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} : ${user.balance}
          </li>
        ))}
      </ul>
    </>
  );
}
