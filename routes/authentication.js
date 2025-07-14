const express = require("express");
const router = express.Router();
const checkUserExists = require("../middleware/checkIfUserExists.js");

router.get("/", (req, res) => {
  res.render("register");
});

router.post("/login", (req, res) => {
  // do validation - if valid - redirect dashboard - else - throw errors
  const { username, password } = req.body;
  res.render("login", { username: username, password: password, email: "" });
});

router.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  res.render("login", { email: email, username: username, password: password });
});

module.exports = router;
