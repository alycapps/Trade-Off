$(document).ready(function() {
  var $memberName = $(".member-name");

  // Once the main page loads, we retrieve the logged in user and render on the header
  var getMemberName = function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
      $memberName.text(data.email);
    });
  };

  // If this is the dummystore page, show the user's name
  var page = window.location.pathname;
  if (page === "/dummystore") {
    getMemberName();
  }

  var refreshProducts = function() {
    // When the page loads, grab all products to display
    $.get("/api/products/", function(data) {
      console.log("All products: " + data);

      //If there is data
      if (data.length !== 0) {
        //Loop through the products
        for (var i = 0; i < data.length; i++) {
          var $button = $("<button>")
            .addClass("btn pull-right tradeBtn")
            .text("TRADE");

          var row = $("<div>");
          row.append(
            "<p class='heading'> Item Name | Description | Price (or trade) | Item ID"
          );
          row.append(
            "<p>" +
              data[i].item +
              " | " +
              data[i].description +
              " | " +
              data[i].price +
              " | " +
              data[i].id +
              "</p>"
          );
          row.append($button);

          //Display them
          $("#stock-items").prepend(row);
        }
      }
    });
  };

  refreshProducts();

  //Display contact form when trade button is clicked
  $("#tradeBtn").on("click", function() {
    $("#contactFs").css("display", "block");
    $(".store-details").css("display", "none");
    $(".trade-form").css("display", "none");
    $(".update-form").css("display", "none");
    $(".purchase-form").css("display", "none");
  });

  // When user clicks add btn
  $("#add").on("click", function(event) {
    event.preventDefault();

    // Make a new product object
    var newProduct = {
      item: $("#item-name")
        .val()
        .trim(),
      description: $("#description")
        .val()
        .trim(),
      price: $("#price")
        .val()
        .trim()
    };

    if (!(newProduct.item && newProduct.description)) {
      alert("You must enter an product text and description!");
      return;
    }

    console.log("Product values from form: " + newProduct);

    // Send an AJAX POST-request with jQuery
    $.post("/api/products/", newProduct)
      // On success, run the following code
      .then(function() {
        var $button = $("<button>")
          .addClass("btn pull-right tradeBtn")
          .text("TRADE");

        var row = $("<div>");
        row.append(
          "<p class='heading'> Item Name | Description | Price (or trade) | Item ID"
        );
        row.append(
          "<p>" +
            newProduct.item +
            " | " +
            newProduct.description +
            " | " +
            newProduct.price +
            " | " +
            newProduct.id +
            "</p>"
        );
        row.append($button);

        $("#stock-items").prepend(row);
      });

    //Empty each input box by replacing the value with an empty string
    $("#item-name").val("");
    $("#description").val("");
    $("#price").val("");
  });

  // When user clicks update btn
  $("#update").on("click", function(event) {
    event.preventDefault();

    // Make a new product object
    var newProduct = {
      item: $("#item-name")
        .val()
        .trim(),
      description: $("#description")
        .val()
        .trim(),
      price: $("#price")
        .val()
        .trim()
    };

    // Send an AJAX POST-request with jQuery
    $.post("/api/products/:id", newProduct)
      // On success, run the following code
      .then(function() {
        refreshProducts();
      });

    //Empty each input box by replacing the value with an empty string
    $("#item-name").val("");
    $("#description").val("");
    $("#price").val("");
  });

  // When user clicks update btn
  $("#delete").on("click", function(event) {
    event.preventDefault();

    // Make a new product object
    var newProduct = {
      item: $("#item-name")
        .val()
        .trim(),
      description: $("#description")
        .val()
        .trim(),
      price: $("#price")
        .val()
        .trim()
    };

    // Send an AJAX POST-request with jQuery
    $.delete("/api/products/:id", newProduct)
      // On success, run the following code
      .then(function() {
        refreshProducts();
      });

    //Empty each input box by replacing the value with an empty string
    $("#item-name").val("");
    $("#description").val("");
    $("#price").val("");
  });
});
