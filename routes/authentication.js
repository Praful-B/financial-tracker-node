const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("register");
});

router.post("/login", (req, res) => {
  // do validation - if valid - redirect dashboard - else - throw errors
  res.redirect("login");
  res.send("User pressed submit");
  const { username, password } = req.body;
});

module.exports = router;
