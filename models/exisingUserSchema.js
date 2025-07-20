// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   _id: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true,
//   },
//   username: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true,
//     minlenght: [3, "Username must be at least 3 characters long."],
//     maxlength: [30, "Username cannot exceed 30 characters."],
//   },
//   email: {
//     type: String,
//     required: [true, "Email is required."],
//     unique: true,
//     lowercase: true,
//     trim: true,
//     match: [
//       /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
//       "Please fill a valid email address",
//     ], // copied the regex
//   },
//   password: {
//     type: String,
//     required: [true, "Password is required."],
//     // This should be a hashed password - before saving to database - using bcrypt
//     minlenght: [8, "Password must atleast 8 characters long."],
//   },
//   accountCreationTime: {
//     type: Date,
//     default: Date.now,
//     required: true,
//   },  
// });

// const existingUser = mongoose.model("existingUser", userSchema);
// module.exports = existingUser;
const mongoose = require('mongoose');

const existingUserSchema = new mongoose.Schema({
  uuid: {
    type: String,
    required: true,
    unique: true
  },
  account_creation_time: {
    type: Date,
    default: Date.now
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('ExistingUser', existingUserSchema);