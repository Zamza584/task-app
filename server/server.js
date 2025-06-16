require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", require("./routes/authentication"));

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.ATLAS_URI)
  .then(() => console.log("mongodb is connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("welcome to my api");
});

app.post("/register", (req, res) => {
  UserModel.create({ uername, email, password })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
