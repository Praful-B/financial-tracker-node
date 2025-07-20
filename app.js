// // const express = require("express");
// // const path = require("path");
// // require("dotenv").config();
// // // const { MongoClient } = require('mongodb');
// // const mongoose = require("mongoose");
// // const existingUsers = require("./models/existingUserSchema");

// // mongoose
// //   .connect(process.env.MONGO_URI, {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //   })
// //   .then(() => console.log("Connected to MongoDB"))
// //   .catch((err) => console.error("Error connecting to MongoDB:", err));

// // // const uri = process.env.MONGO_URI

// // // const client = new MongoClient(uri);

// // const authentication_route = require("./routes/authentication");

// // const app = express();

// // app.set("view engine", "ejs");
// // app.set("views", path.join(__dirname, "views"));

// // app.use(express.json());
// // app.use(express.static(path.join(__dirname, "public")));
// // app.use(express.urlencoded({ extended: true }));

// // app.use("/auth", authentication_route);

// // app.get("/", (req, res) => {
// //   res.redirect("/auth");
// // });


// // const PORT = process.env.PORT || 3000;
// // app.listen(PORT, () => {
// //   console.log(`Listening app on port ${process.env.PORT}`);
// // });
// const express = require("express");
// const path = require("path");
// require("dotenv").config();

// const authentication_route = require("./routes/authentication");

// const app = express();

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// app.use(express.json());
// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.urlencoded({ extended: true }));

// app.use("/auth", authentication_route);

// app.get("/", (req, res) => {
//   res.redirect("/auth");
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Listening app on port ${PORT}`);
// });

const express = require("express");
const path = require("path");
require("dotenv").config(); // Load environment variables from .env file

const mongoose = require("mongoose"); // Import Mongoose
// const existingUsers = require("./models/existingUserSchema"); // You might not need this here if only controllers use it
// If your model file is named 'User.js' as per our previous discussion, it would be:
// const User = require("./models/User"); // Assuming your User model is in ./models/User.js


// --- MongoDB Connection ---
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));
// --- End MongoDB Connection ---


const authentication_route = require("./routes/authentication");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware to parse JSON request bodies
app.use(express.json());
// Middleware to serve static files (CSS, JS, images) from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));
// Middleware to parse URL-encoded request bodies (for form submissions)
app.use(express.urlencoded({ extended: true }));

// Use the authentication routes for paths starting with '/auth'
app.use("/auth", authentication_route);

// Redirect root URL to the authentication route
app.get("/", (req, res) => {
  res.redirect("/auth");
});

const PORT = process.env.PORT || 3000;  
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
