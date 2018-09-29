$(document).ready(function() {
  var $memberName = $(".member-name");

  // // The API object contains methods for each kind of request we'll make
  // var API = {
  //   saveProducts: function(product) {
  //     return $.ajax({
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       type: "POST",
  //       url: "/api/products",
  //       data: JSON.stringify(product)
  //     });
  //   },
  //   getProducts: function() {
  //     return $.ajax({
  //       url: "/api/products",
  //       type: "GET"
  //     });
  //   },
  //   getProduct: function(id) {
  //     return $.ajax({
  //       url: "/api/products/" + id,
  //       type: "GET"
  //     });
  //   },
  //   deleteProduct: function(id) {
  //     return $.ajax({
  //       url: "/api/products/" + id,
  //       type: "DELETE"
  //     });
  //   }
  // };

  // // refreshProducts gets new products from the db and repopulates the list
  // var refreshProducts = function() {
  //   API.getProducts().then(function(data) {
  //     console.log(data);
  //     var $products = data.map(function(product) {
  //       var $a = $("<a>")
  //         .text(product.name)
  //         .text(product.description)
  //         .text(product.price)
  //         .attr("href", "/product/" + product.id);

  //       var $li = $("<li>")
  //         .attr({
  //           class: "list-group-item",
  //           "data-id": product.id
  //         })
  //         .append($a);

  //       var $button = $("<button>")
  //         .addClass("btn btn-danger pull-right")
  //         .text("view");

  //       $li.append($button);

  //       return $li;
  //     });

  //     $stockList.empty();
  //     $stockList.append($products);
  //   });
  // };

  // // handleFormSubmit is called whenever we submit a new product
  // // Save the new product to the db and refresh the list
  // var handleFormSubmit = function(event) {
  //   event.preventDefault();

  //   var product = {
  //     name: $productName.val().trim(),
  //     description: $productDescription.val().trim(),
  //     price: $price.val().trim()
  //   };

  //   if (!(product.name && product.description)) {
  //     alert("You must enter an product text and description!");
  //     return;
  //   }

  //   API.saveProduct(product).then(function() {
  //     refreshProducts();
  //   });

  //   $productName.val("");
  //   $productDescription.val("");
  //   $price.val("");
  // };

  // // handleDeleteBtnClick is called when an product's delete button is clicked
  // // Remove the product from the db and refresh the list
  // var handleDeleteBtnClick = function() {
  //   var idToDelete = $(this)
  //     .parent()
  //     .attr("data-id");

  //   API.deleteProduct(idToDelete).then(function() {
  //     refreshProducts();
  //   });
  // };

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
  } else {
    var id = page.split("/")[2];
    // loadDetails(id);
  }

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
        row.append("<p class='heading'> Item Name | Description | Price (or trade) | Item ID");
        row.append("<p>" + data[i].item + " | " + data[i].description + " | " + data[i].price  + " | " + data[i].id + "</p>");
        row.append($button);

        $("#stock-items").prepend(row);
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
        row.append("<p class='heading'> Item Name | Description | Price (or trade) | Item ID");
        row.append("<p>" + data[i].item + " | " + data[i].description + " | " + data[i].price  + " | " + data[i].id + "</p>");
        row.append($button);

        //Display them
        $("#stock-items").prepend(row);
      }
    }
  });

  //Display contact form when trade button is clicked
  $("#tradeBtn").on("click", function(){
    $("#contactFs").css("display", "block");
    $(".store-details").css("display", "none");
    $(".trade-form").css("display", "none");
    $(".update-form").css("display", "none");
    $(".purchase-form").css("display", "none");
  });

});
