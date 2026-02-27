const store = require("../data/store");

function getUsers(req, res) {
  res.json(store.users);
}

function addUsers(req, res) {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name required" });
  }

  if (store.users.some((u) => u.name === name)) {
    return res.status(400).json({ error: "User already exists " });
  }

  const newUser = {
    id: Date.now().toString(),
    name,
    balances: 0,
  };

  store.users.push(newUser);

  res.json(newUser);
}

module.exports = {
  getUsers,
  addUsers,
};
