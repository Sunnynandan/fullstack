const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

const secret_key = "iamsunnythelegendofthecentury";

const autherization = async (req, res, next) => {
  const token = req.cookies.token;
  console.log(token);
  if (!token) return res.status(401).send("Access denied");

  try {
    const verified = jwt.verify(token, secret_key);
    if (verified) {
      next();
    } else {
      res.status(403).send({
        status: true,
        message: "invalid token",
      });
    }
  } catch (err) {
    res.status(403).send({
      status: true,
      message: "Something Went Wrong !",
    });
  }
};

module.exports = {autherization}
