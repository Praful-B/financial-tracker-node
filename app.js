const express = require("express");
const path = require("path");
require("dotenv").config();

/*
  The routes go here example below:
  const a_home_route = require('./routes/a_home');
  const a_newArticle_route = require('./routes/a_newArticle');
  const a_editArticle_route = require('./routes/a_editArticle');

  const g_home_route = require('./routes/g_home');
  const g_article_route = require('./routes/g_article');
*/

app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// const routes = require('./routes/')
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// app.use('/home', a_home_route);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Listening app on port ${process.env.PORT}`);
});
