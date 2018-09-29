$(document).ready(function() {
  // Get references to page elements
  var $itemName = $("#item-name");
  var $description = $("#description");
  var $price = $("#price");
  var $addBtn = $("#add");
  var $stockItems = $("#stock-items");
  var $memberName = $(".member-name");

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
          .text(
            product.item +
              " | " +
              product.description +
              " | " +
              product.price +
              " | " +
              product.id
          )
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

  $(document).on("click", ".tradeBtn", function() {
    $(".trade-form").css("display", "none");
    $(".purchase-form").css("display", "none");
    $(".store-details").css("display", "none");
    $("#contactFs").css("display", "block");
  });
});
