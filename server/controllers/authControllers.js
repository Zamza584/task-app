const UserModel = require("../models/User");
const { hashPassword, comparedPassword } = require("../helpers/auth");

const test = (req, res) => {
  res.json("test is working");
};

const registerUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    //checks
    if (!userName) {
      return res.json({ error: "Username is required" });
    }
    // condition if user name already exist
    const existUser = await UserModel.findOne({ userName });
    if (existUser) {
      return res.json({
        error: "Username already exists",
      });
    }

    if (!password || password.length < 6) {
      return res.json({ error: "password is not valid" });
    }

    const exist = await UserModel.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is already used",
      });
    }

    const hashedPassword = await hashPassword(password) 


    const user = await UserModel.create({
      userName,
      email,
      password: hashedPassword
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const user = await UserModel.findOne({ userName });

    //match password
    if (password === user.password) {
      console.log("logged in");
      res.json({ message: "user logged in" });
    }
    console.log("inside here");
  } catch (error) {
    console.log("failed to login");
  }
};

module.exports = { test, registerUser, loginUser };
