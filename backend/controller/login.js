const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;

const secret_key = "iamsunnythelegendofthecentury";

const users = {
  username: "sunnynandan665@gmail.com",
  password: "12345",
};


const LoginController = (req,res) => {
    const { username, password } = req.body;

  if (username != users.username && password != users.password) {
    res.status(400).send({
      status: "Invalid credential",
    });
  }
  const token = jwt.sign({ username: users.username }, secret_key, {
    expiresIn: "1h",
  });

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "strict", // Prevent CSRF
    maxAge: 60 * 60 * 1000, // 1 hour
  });

  return res.status(200).send({
    status: "login successfull",
  });
}

module.exports = {LoginController}