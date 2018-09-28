var db = require("../models");

module.exports = function(app) {
  //Get all users
  app.get("/api/users", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  //Get the information of the logged in user
  app.get("/api/users/:id", function(req, res) {
    db.Users.findAll({
      where: {
        id: req.params.id
      }
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // ========= Product Routes ===========

  //Get all products from all users
  app.get("/api/products", function(req, res) {
    db.Products.findAll({}).then(function(dbProducts) {
      res.json(dbProducts);
    });
  });

  // //Get all products for the logged in user
  // app.get("/api/products/:UserId", function(req, res) {
  //   db.Products.findAll({
  //     where: {
  //       UserId: req.params.UserId
  //     }
  //   }).then(function(dbProducts) {
  //     res.json(dbProducts);
  //   });
  // });

  // Create a new product
  app.post("/api/products", function(req, res) {
    db.Products.create(req.body).then(function(dbProducts) {
      res.json(dbProducts);
      console.log(dbProducts);
    });
  });

  // Update a product
  app.post("/api/products/:id", function(req, res) {
    db.Products.update(req.body).then(function(dbProducts) {
      res.json(dbProducts);
    });
  });

  // Delete a product
  app.delete("/api/products/:id", function(req, res) {
    db.Products.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbProducts) {
      res.json(dbProducts);
    });
  });
};
