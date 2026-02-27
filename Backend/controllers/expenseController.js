const { split } = require("postcss/lib/list");
const store = require("../data/store");

function getExpenses(req, res) {
  res.send(store.expenses);
}

function addExpense(req, res) {
  const { payer, amount, participants } = req.body;

  if (!payer || !amount || !participants) {
    return res.status(400).json({ error: "Invalid data" });
  }
  //Splitamount
  const splitAmount = amount / participants.length;

  const expense = {
    id: Date.now().toString,
    payer,
    amount,
    participants,
    createdAt: new Date(),
  };
  store.expenses.push(expense);

  // Update balance

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
      ...users,
      balance: user.balance - splitAmount,
    };
  });

  res.json({ expense, users: store.users });
}
