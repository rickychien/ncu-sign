var Browser = require('zombie');
var assert = require('assert');
var argv = process.argv;
var signURL = "http://140.115.182.62/PartTime/parttime.php/";
var action = argv[2];
var id = argv[3];
var pw = argv[4];
var pid = argv[5];
var browser = new Browser();

function doArgvCheck() {
  if (argv.length != 6) {
    console.log("Usage: node ncu_sign.js Action ID PASSWD ProjectID.\n" +
      "Action: signin, signout.\n" +
      "ProjectID: input button value of NCU signin website.");
    return false;
  }

  return true;
}

function doSignIn() {
  browser.visit(signURL + action).
  then(function() {
    browser.
    choose('input[value="' + pid + '"]').
    pressButton("submit", function() {
      console.log("Project value :" + pid + " signed in.");
      browser.close();
    });
  }).
  fail(function() {
    console.log("Sign in fail, retry to sign in...");
    doSignIn();
  });
}

function doSignOut() {
  browser.visit(signURL + action).
  then(function() {
    browser.
    choose("signout").
    pressButton("submit", function() {
      console.log("Signed out");
      browser.close();
    });
  }).
  fail(function() {
    console.log("Sign out fail, retry to signout...");
    doSignOut();
  });
}

function doLogin() {
  browser.visit(signURL + action).
  then(function() {
    browser.
    fill("j_username", id).
    fill("j_password", pw).
    pressButton("Login", function() {
      console.log("Login... done!");

      if (action == "signin") {
        doSignIn();
      } else if (action == "signout") {
        doSignOut();
      } else {
        console.log("Invalid command");
      }
    });
  }).
  fail(function() {
    console.log("Visiting website fail, retry...");
    doLogin();
  });
}

if (doArgvCheck()) {
  doLogin();
}