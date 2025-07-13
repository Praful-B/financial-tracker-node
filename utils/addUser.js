const express = require("express");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const userListPath = path.join(__dirname, "data/userList.json");
const userUuidListPath = path.join(__dirname, "data/userUuidList.json");

function userObject(email, username, password) {
  const user_uuid = uuidv4();
  const time = new Date();

  let year = time.getFullYear();
  let month = time.getMonth();
  let day = time.getDate();

  userData = {
    uuid: `${user_uuid}`,
    account_creation_time: `${day}_${month}_${year}`,
    email: `${email}`,
    username: `${username}`,
    password: `${password}`,
  };

  return userData;
}

async function writeToJson(jsonStr, jsonFilePath) {
  // for new user add their uuid to userUuidList.json "user-uuid" array
  // and add further data to userList.json
  //
}
