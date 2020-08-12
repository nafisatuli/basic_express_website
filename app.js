var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");

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
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "myemail@gmail.com",
      pass: "mypass",
    },
  });
  //set up mail options
  var mailOptions = {
    from: "Nafisa Hasan <myemail@gmail.com>",
    to: "",
    subject: "Website Submission",
    text:
      "You have a submission with following details... Name: " +
      req.body.name +
      " Email: " +
      req.body.email +
      " Message: " +
      req.body.message,
    html:
      "<p>You have a submission with following details...</p><ul><li>Name: " +
      req.body.name +
      "</li><li>Email: " +
      req.body.email +
      "</li><li>Message: " +
      req.body.message +
      "</li></ul>",
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Error");
      console.log(error);
      res.redirect("/"); //to homapage
    } else {
      console.log("Message sent: " + info.response);
      res.redirect("/");
    }
  });
});

app.listen(3000);
console.log("server is running on port 3000");
