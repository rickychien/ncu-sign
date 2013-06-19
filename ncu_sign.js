var Browser = require("zombie");
var assert = require("assert");
var argv = require('optimist').argv;

var signURL = "http://140.115.182.62/PartTime/parttime.php/";
var action = argv._[0];
var id = argv._[1];
var pw = argv._[2];
var pid = argv._[3];
var browser = new Browser();

function doSignIn(error) {
  browser.choose('input[value="' + pid + '"]').pressButton("submit", function() {
    console.log("Project value :" + pid + " signed in.");
    browser.close();
  });
}

function doSignOut(error) {
  browser.choose("signout").pressButton("submit", function() {
    console.log("Signed out");
    browser.close();
  });
}

function doLogin() {
  browser.visit(signURL + action, function() {
    browser.
    fill("j_username", id).
    fill("j_password", pw).
    pressButton("Login", function() {
      console.log("Login");
      if (action == "signin") {
        doSignIn();
      } else if (action == "signout") {
        doSignOut();
      } else {
        console.log("Invalid command");
      }
    });
  });
}

doLogin();