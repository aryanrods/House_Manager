import { useState } from "react";
import React from "react";

export default function AddUser({ addUser }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventdDefault();

    if (!name) return;
    addUser(name);
    setName("");
  }

  return (
    <>
      <div>
        <h2>Add User</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
}
