import React from "react";
import { useState } from "react";

function AddUser({ addUser, users }) {
  const [name, setName] = useState("");

  function handleSave() {
    if (!name) return;
    addUser(name);
    setName("");
    console.log(users);
  }

  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <button onClick={handleSave}>Add User</button>
    </>
  );
}

export default AddUser;
