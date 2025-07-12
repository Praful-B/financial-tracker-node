const express = require("express");
const path = require("path");
require("dotenv").config();

const authentication_route = require("./routes/authentication");

app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/auth", authentication_route);

app.get("/", (req, res) => {
  res.redirect("/auth");
});

app.listen(process.env.PORT, () => {
  console.log(`Listening app on port ${process.env.PORT}`);
});
