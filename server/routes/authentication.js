const express = require("express");
const cors = require("cors");
const router = express.Router();
const { test } = require('../controllers/authControllers')

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.get("/", test);

module.exports = router;

