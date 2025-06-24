const UserModel = require("../models/User");
const { hashPassword, comparePasswords } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

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

    const hashedPassword = await hashPassword(password);

    const user = await UserModel.create({
      userName,
      email,
      password: hashedPassword,
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

    if (!userName) {
      return res.json({
        error: "Please enter a username",
      });
    }
    if (!password) {
      return res.json({
        error: "Please enter a password",
      });
    }

    const match = await comparePasswords(password, user.password);
    console.log(match);
    

    if (!match) {
      return res.json({
        error: "passwords dont match",
      });
    }

    if (match) {
      jwt.sign(
        { userName: user.userName, id: user._id },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        }
      );
    }
  } catch (error) {
    res.json({
      error: "passwords dont match",
    });
  }
};

const getProfile = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
};

module.exports = { test, registerUser, loginUser, getProfile };
