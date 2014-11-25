var Browser = require('zombie'),
    argv = process.argv,
    signURL = "http://140.115.182.62/PartTime/parttime.php/",
    action = argv[2],
    id = argv[3],
    pw = argv[4],
    pid = argv[5],
    browser = new Browser();

function doArgvCheck() {
  if (argv.length != 6) {
    doUsage();
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
    console.log("Sign in fail");
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
    console.log("Sign out fail");
  });
}

function doLogin() {
  browser.visit(signURL + action, function() {
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
  });
}

function doUsage() {
  console.log('Usage:');
  console.log('\tnode ncu_sign.js Action ID PASSWD ProjectID.');
  console.log('');

  console.log('Action:');
  console.log('\tsignin');
  console.log('\tsignout');
  console.log('');

  console.log('ID:');
  console.log('\tYour student ID');
  console.log('');

  console.log("PASSWD:");
  console.log("\tYour password of NCU's SSO");
  console.log('');

  console.log('ProjectID:');
  console.log('\tInput button value of NCU signin website.');
  console.log('');
}

if (doArgvCheck()) {
  doLogin();
}
