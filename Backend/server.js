const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const app = express();

//Middleware

app.use(cors());
app.use(express.json());

//Testing

console.log("file executed");

//Test route

//Routes

app.use("/users", userRoutes);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
