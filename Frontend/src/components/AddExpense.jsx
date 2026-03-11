import React, { useState } from "react";

export default function AddExpense() {
  const [payer, setPayer] = useState("");
  const [amount, setAmount] = useState("");
  const [participants, setParticipants] = useState([]);
  const [description, setDescription] = useState("");

  return <div>AddExpense</div>;
}
