const store = require("../data/store");

function getExpenses(req, res) {
  res.json(store.expenses);
}

function addExpense(req, res) {
  const { payer, amount, participants, description } = req.body;

  if (!payer || !amount || !participants || participants.length === 0) {
    return res.status(400).json({ error: "Invalid data" });
  }

  const splitAmount = amount / participants.length;

  const expense = {
    id: Date.now().toString(),
    payer,
    amount,
    participants,
    description: description || "",
    createdAt: new Date(),
  };

  store.expenses.push(expense);

  store.users = store.users.map((user) => {
    if (!participants.includes(user.name)) {
      return user;
    }

    if (user.name === payer) {
      return {
        ...user,
        balance: user.balance + amount - splitAmount,
      };
    }

    return {
      ...user,
      balance: user.balance - splitAmount,
    };
  });

  res.json({ expense, users: store.users });
}

module.exports = {
  getExpenses,
  addExpense,
};
