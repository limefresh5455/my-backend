require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});