var express = require("express");
var path = require("path");
var bodyparser = require("body-parser");
var nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

//initialize
var app = express();

//set up views for different route
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))); //using public folder for bootstrap

app.get("/", function (req, res) {
  // console.log("Hello World!"); //this will run in the server
  // res.send("Hello World!"); //this will run for client/browser

  res.render("index", { title: "Welcome" });
});
app.get("/about", function (req, res) {
  res.render("about");
});
app.get("/contact", function (req, res) {
  res.render("contact");
});
app.post("/contact/send", function (req, res) {
  //console.log("Test"); //check
});

app.listen(3000);
console.log("server is running on port 3000");
