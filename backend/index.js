const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const {LoginController} = require("./controller/login")
const { autherization } = require("./controller/autherize");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(cookieParser());
app.use("/protected",autherization)

app.get("/protected/data", (req,res)=>{
   res.status(200).send({
    status : true,
     message : "Data send succesfully"
   })
});

app.post("/login", LoginController);

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


app.listen(PORT, () => {
  console.log("Listen to PORT 8080");
});
