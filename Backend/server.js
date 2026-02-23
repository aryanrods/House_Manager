const express = require("express");
const cors = require("cors");

const app = express();

//Middleware

app.use(cors());
app.use(express.json());

//Testing

console.log("file executed");

//Test route

app.get("/", (req, res) => {
  console.log("root route hit ");
  res.send("Backend is runing");
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
