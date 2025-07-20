const express = require("express");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const User = require('../models/exisingUserSchema')

async function registerUser(req, res, next) {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ message: "username, email and password are required!" });
      next()
  }

  try {
    const newUuid = uuidv4();
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      _id: newUuid,
      email,
      username,
      password: hashedPassword,
    });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User register successfully!", userId: newUuid });
      next();
  } catch (error) {
    if (error.code === 11000) {
      // mongoose duplicate key error
      console.error("Error in addNewUserController", error);
    }
    next();
  }
}

module.exports = registerUser;