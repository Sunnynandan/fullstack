const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const { LoginController } = require("./controller/login");
const { autherization } = require("./controller/autherize");
const mongoose = require("mongoose");
require('dotenv').config();
const uri = process.env.uri
 
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(cookieParser());
app.use("/protected", autherization);

app.get("/protected/data", (req, res) => {
  res.status(200).send({
    status: true,
    message: "Data send succesfully",
  });
});

app.post("/login", LoginController);

mongoose
  .connect(uri)
  .then(() => console.log("Database connected successfully"))
  .catch(() => console.log("Connection Failed"));

app.listen(PORT, async () => {
  console.log("Listen to PORT 8080");
});
