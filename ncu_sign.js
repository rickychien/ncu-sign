var Browser = require("zombie");
var assert = require("assert");
var argv = require('optimist').argv;

var signinURL = "http://140.115.182.62/PartTime/parttime.php/signin";
var id = argv._[0];
var pw = argv._[1];

browser = new Browser();
browser.visit(signinURL, function() {
  browser.
    fill("j_username", id).
    fill("j_password", pw).
    pressButton("Login", function() {
      console.log(browser.html());
    });
});
