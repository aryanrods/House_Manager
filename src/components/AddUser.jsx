import React from "react";
import { useState } from "react";

function AddUser(Adduser) {
  const [name, setName] = useState("");

  function handleSave(name) {
    AddUser(name);
    setName("");
  }

  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <button onClick={handleSave}></button>
    </>
  );
}
