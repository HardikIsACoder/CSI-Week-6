const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect("mongodb://localhost:27017/subscribers");
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Database Connected"));

app.use(express.json());

const subscribersRouter = require("./routes/subscribers"); // ✅ Correct path
app.use("/subscribers", subscribersRouter);

app.listen(3000, () => console.log("Server Connected"));
