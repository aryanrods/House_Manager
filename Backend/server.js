const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const app = express();

//Middleware

app.use(cors());
app.use(express.json());

//Testing
console.log("Sever file new running");
console.log("file executed");

//Test route
app.get("/", (req, res) => {
  res.send("Api running");
});
//Routes
app.use("/expenses", expenseRoutes);
app.use("/users", userRoutes);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
