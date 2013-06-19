var Browser = require("zombie");
var assert = require("assert");
var argv = require('optimist').argv;

var signURL = "http://140.115.182.62/PartTime/parttime.php/";
var action = argv._[0];
var id = argv._[1];
var pw = argv._[2];
var projectValue = argv._[3];
var browser = new Browser();

function doSignIn(error) {
  console.log(browser.html());
  var projects = browser.queryAll("#checkin");
  projects.forEach(function(proj) {
    if (projectValue == proj.value && action == "signin") {
      browser.choose("signin").pressButton("submit", function() {
        console.log("Project value :" + proj.value + " signed in successful.");
        browser.close();
      });
    }
  });
}

function doSignOut(error) {
  console.log(browser.html());
  browser.choose("signout").pressButton("submit", function() {
    browser.close();
  });
}

function doLogin() {
  browser.visit(signURL + action, function() {
    browser.
    fill("j_username", id).
    fill("j_password", pw).
    pressButton("Login", function() {
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