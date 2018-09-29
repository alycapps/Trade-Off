$(document).ready(function() {
  // Get references to page elements
  var $itemName = $("#item-name");
  var $description = $("#description");
  var $price = $("#price");
  var $addBtn = $("#add");
  var $stockItems = $("#stock-items");
  var $memberName = $(".member-name");
<<<<<<< HEAD

  // The API object contains methods for each kind of request we'll make
  var API = {
    saveProduct: function(product) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "/api/products",
        data: JSON.stringify(product)
      });
    },
    getProducts: function() {
      return $.ajax({
        url: "/api/products",
        type: "GET"
      });
    },
    getProduct: function(id) {
      return $.ajax({
        url: "/api/products/" + id,
        type: "GET"
      });
    },
    deleteProduct: function(id) {
      return $.ajax({
        url: "/api/products/" + id,
        type: "DELETE"
      });
    }
  };

  // refreshProducts gets new products from the db and repopulates the list
  var refreshProducts = function() {
    API.getProducts().then(function(data) {
      console.log(data);
      var $products = data.map(function(product) {
        var $a = $("<a>")
          .text(product.item + " | " + product.description + " | " + product.price + " | " + product.id)
          .attr("href", "/product/" + product.id);

        var $li = $("<li>")
          .attr({
            class: "list-group-item",
            "data-id": product.id
          })
          .append($a);

          var $button = $("<button>")
          .addClass("btn pull-right tradeBtn")
          .text("TRADE");
 
        $li.append($button);

        return $li;
      });

      $stockItems.empty();
      $stockItems.append($products);
=======
  // Once the main page loads, we retrieve the logged in user and render on the header
  var getMemberName = function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
      $memberName.text(data.email);
>>>>>>> 8e4cf60b5e1c623532103611acec83e1c5adf504
    });
  };

  // handleFormSubmit is called whenever we submit a new product
  // Save the new product to the db and refresh the list
  var handleFormSubmit = function(event) {
    event.preventDefault();

    var product = {
      item: $itemName.val().trim(),
      description: $description.val().trim(),
      price: $price.val().trim()
    };

    console.log("product: " + product);

    if (!(product.item && product.description)) {
      alert("You must enter a product name and description!");
      return;
    }

    API.saveProduct(product).then(function() {
      refreshProducts();
    });

<<<<<<< HEAD
    $itemName.val("");
    $description.val("");
    $price.val("");
  };

  // handleDeleteBtnClick is called when an example's delete button is clicked
  // Remove the example from the db and refresh the list
  var handleDeleteBtnClick = function() {
    var idToDelete = $(this)
      .parent()
      .attr("data-id");

    API.deleteProduct(idToDelete).then(function() {
      refreshProducts();
    });
  };

  // Once the main page loads, we retrieve the logged in user and render on the header
  var getMemberName = function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
      $memberName.text(data.email);
    });
  };


  // Add event listeners to the submit and delete buttons
  $addBtn.on("click", handleFormSubmit);
  $stockItems.on("click", ".delete", handleDeleteBtnClick);

  // If this is the home page, render the list of examples, otherwise render the detail data
  var page = window.location.pathname;
  if (page === "/dummystore") {
    getMemberName();
    refreshProducts();
  }
});
=======
    // Send an AJAX POST-request with jQuery
    $.post("/api/products/", newProduct)
      // On success, run the following code
      .then(function() {
        var $button = $("<button>")
          .addClass("btn pull-right tradeBtn")
          .text("TRADE");

        var row = $("<div>");
        // row.append("<p class='heading'> Item Name | Description | Price (or trade) | Item ID");
        row.append(
          "<p>" +
            data[i].item +
            " | " +
            data[i].description +
            " | " +
            data[i].price +
            " | " +
            data[i].id +
            "<button class = 'btn pull-right tradeBtn'>" +
            "TRADE" +
            "</button>" +
            "</p>"
        );
        // row.append($button);

        $("#stock-items").append(row);
      });

    //Empty each input box by replacing the value with an empty string
    $("#item-name").val("");
    $("#description").val("");
    $("#price").val("");
  });

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
        // row.append("<p class='heading'> Item Name | Description | Price (or trade) | Item ID");
        row.append(
          "<p>" +
            data[i].item +
            " | " +
            data[i].description +
            " | " +
            data[i].price +
            " | " +
            data[i].id +
            "<button class = 'btn pull-right tradeBtn'>" +
            "TRADE" +
            "</button>" +
            "</p>"
        );
        // row.append($button);

        //Display them
        $("#stock-items").append(row);
      }
    }
  });

  //Display contact form when trade button is clicked
  $("#tradeBtn").on("click", function() {
    $("#contactFs").css("display", "block");
    $(".store-details").css("display", "none");
    $(".trade-form").css("display", "none");
    $(".update-form").css("display", "none");
    $(".purchase-form").css("display", "none");
  });
});
>>>>>>> 8e4cf60b5e1c623532103611acec83e1c5adf504
