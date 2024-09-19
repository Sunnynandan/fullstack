const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;


app.use(express.json());
app.use(cors(
 {
  origin: 'http://localhost:3000',
  credentials: true
 }
));
app.use(cookieParser());

const secret_key = "iamsunnythelegendofthecentury";

const users = {
  username: "sunnynandan665@gmail.com",
  password: "Sunny@665",
};


app.use("/login/dashboard", (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).send("Access denied");

  try {
    const verified = jwt.verify(token, secret_key);
    res.json({ message: "Protected data", user: verified });
    if (verified) {
      next();
    } else {
      res.status(404).json({
        message: "token expired",
      });
    }
  } catch (err) {
    res.status(403).send("something went wrong!");
  }
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username != users.username && password != users.password) {
    res.status(400).send({
      status: "user not found",
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
});

app.get("/profile", (req, res) => {
  const first_name = req.query.firstname;
  const last_name = req.query.lastname;

  // Respond with the data, including a properly formatted date
  res.send({
    company: "id", // Replace 'id' with the actual company id
    first: first_name,
    last: last_name,
    date: Date.now(), // This returns the current timestamp
  });
});

app.get("/protected", (req, res) => {
  const token = req.cookies.token;
  console.log(token)
  if (!token) return res.status(401).send("Access denied");

  try {
    const verified = jwt.verify(token, secret_key);
    res.json({ message: "Protected data", user: verified });
  } catch (err) {
    res.status(403).send("Invalid token");
  }
});

app.listen(PORT, () => {
  console.log("Listen to PORT 8080");
});
