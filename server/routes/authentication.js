const express = require("express");
const cors = require("cors");
const router = express.Router();
const {
  test,
  registerUser,
  loginUser,
  getProfile,
  logoutUser,
} = require("../controllers/authControllers");
const { saveTasks } = require("../controllers/taskControllers.js");

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);
router.post("/tasks", saveTasks);
router.get("/logout", logoutUser);

module.exports = router;
