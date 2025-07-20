const express = require("express");
app = express();
const fs = require("fs");
const path = require("path");

const existingUsersListPath = path.join(
  __dirname,
  "../data/existingUsersList.json",
);

async function checkIfEmailExists(req, res, next) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  fs.readFile(existingUsersListPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error in reading existingUserList", err);
      return res.status(500).send("Internal Server Error");
    }

    let users;
    try {
      users = JSON.parse(data);
    } catch (e) {
      return res.status(500).send("Failed to parse data");
    }

    const emailExists = Object.values(users).some(
      (user) => user.email === email,
    );

    if (emailExists) {
      return res.status(409).send("Email already exists");
    }
    next();
  });
}
async function checkIfUsernameExists(req, res, next) {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ error: "Username is required" });
  }

  fs.readFile(existingUsersListPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error in reading existingUserList", err);
      return res.status(500).send("Internal Server Error");
    }

    let users;
    try {
      users = JSON.parse(data);
    } catch (e) {
      return res.status(500).send("Failed to parse data");
    }

    const checkDuplicateUsername = Object.values(users).some((user) => {
      return users.username === username;
    });

    if (checkDuplicateUsername) {
      return res.status(409).send("Username already exists");
    }

    next();
  });
}

module.exports = {
  checkIfEmailExists,
  checkIfUsernameExists,
};
