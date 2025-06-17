const UserModel = require("../models/User");

const test = (req, res) => {
  res.json("test is working");
};

const registerUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    //checks
    if (!userName) {
      return res.json({ error: "name is required" });
    }

    if (!password || password.length < 6) {
      return res.json({ error: "password is not valid" });
    }

    const exist = await UserModel.f
  } catch (error) {
    console.log(error);
  }
};

module.exports = { test, registerUser };
