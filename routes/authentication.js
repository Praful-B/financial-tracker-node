const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("authentication", { username_err: false, password_err: false });
});

router.post("/login", (req, res) => {
  // do validation - if valid - redirect dashboard - else - throw errors
  const { username, password } = req.body;
});

module.exports = router;
