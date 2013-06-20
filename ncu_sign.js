var Browser = require('zombie');
var assert = require('assert');
var argv = process.argv;
var signURL = "http://140.115.182.62/PartTime/parttime.php/";
var action = argv[2];
var id = argv[3];
var pw = argv[4];
var pid = argv[5];
var browser = new Browser();

function doSignIn() {
  browser.
  choose('input[value="' + pid + '"]').
  pressButton("submit", function() {
    console.log("Project value :" + pid + " signed in.");
    browser.close();
  });
}

function doSignOut() {
  browser.
  choose("signout").
  pressButton("submit", function() {
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
