const express = require("express");
app = express();
const fs = require("fs");
const path = require("path");

const existingUsersListPath = path.join(
  __dirname,
  "data/existingUsersList.json",
);

async function checkIfEmailExists(res, req, next) {
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
      res.status(409).send("Email already exists");
    }
    next();
  });
}
async function checkIfUsernameExists(res, req, next) {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ Error: "Username is required" });
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
      users.username === username;
    });

    if (checkDuplicateUsername) {
      res.status(409).send("Username already exists");
    }

    next();
  });
}

module.exports = {
  checkIfEmailExists,
  checkIfUsernameExists,
};
