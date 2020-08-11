var express = require("express");
var path = require("path");
var bodyparser = require("body-parser");
var nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

//initialize
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  console.log("Hello World!"); //this will run in the server
  res.send("Hello World!"); //this will run for client/browser
});
app.listen(3000);
console.log("server is running on port 3000");
