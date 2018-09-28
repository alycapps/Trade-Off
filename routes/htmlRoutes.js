// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", function(req, res) {
    // If the user already has an account send them to their store
    if (req.user) {
      res.redirect("/dummystore");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the store
    if (req.user) {
      res.redirect("/dummystore");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  //app.get("/dummystore", function(req, res) {
    //if(req.user) {
      //res.redirect("/store");
   // }
    //res.sendFile(path.join(__dirname, "../public/dummystore2.html"));
  //});

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/store", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/store.html"));
  });

  app.get("/store/:id", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/store.html"));
  });

  app.get("/dummystore", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/dummystore2/dummystore2.html"));
  });
};
