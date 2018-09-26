// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  ///BELOW EXAMPLES TO BE DELETED WHEN PROJECT IS DONE
  // app.get("/", function(req, res) {
  //   // If the user already has an account send them to the members page
  //   if (req.user) {
  //     res.redirect("/members");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/signup.html"));
  // });

  // app.get("/login", function(req, res) {
  //   // If the user already has an account send them to the members page
  //   if (req.user) {
  //     res.redirect("/members");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/login.html"));
  // });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/members", isAuthenticated, function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/members.html"));
  // });

  // app.get("/example/:id", isAuthenticated, function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/example.html"));
  // });

  ///ABOVE ARE ALL EXAMPLE ROUTES TO BE DELETED WHEN PROJECT DONE



  //ADDED new correct routes below -- keep these when project is done

  app.get("/", function(req, res) {
    // If the user already has an account send them to their store
    if (req.user) {
      res.redirect("/store");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the store
    if (req.user) {
      res.redirect("/store");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/store", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/store.html"));
  });

  app.get("/store/:id", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/store.html"));
  });

  app.get("/dummystore", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "./dummystore2/dummystore2.html"));
  });
};