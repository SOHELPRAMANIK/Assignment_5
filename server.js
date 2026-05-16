const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectDB = require("../course/src/config/db");

dotenv.config();

connectDB();

const app = express();


app.use(express.json());

app.use(cookieParser());

app.use(cors());

app.use("/api/auth", require("./src/routes/authRoutes"));

app.use("/api/courses", require("./src/routes/courseRoutes"));


app.get("/", (req, res) => {
  res.send("Course API Running");
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});