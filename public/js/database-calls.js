$(document).ready(function() {
  // Get references to page elements
  var $itemName = $("#item-name");
  var $description = $("#description");
  var $price = $("#price");
  var $submitBtn = $("#submit");
  var $stockItems = $("#stock-items");
  var $memberName = $(".member-name");
  var $details = $(".details");

  // The API object contains methods for each kind of request we'll make
  var API = {
    saveExample: function(product) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "/api/products",
        data: JSON.stringify(product)
      });
    },
    getExamples: function() {
      return $.ajax({
        url: "/api/products",
        type: "GET"
      });
    },
    getExample: function(id) {
      return $.ajax({
        url: "/api/products/" + id,
        type: "GET"
      });
    },
    deleteExample: function(id) {
      return $.ajax({
        url: "/api/products/" + id,
        type: "DELETE"
      });
    }
  };

  // refreshExamples gets new products from the db and repopulates the list
  var refreshExamples = function() {
    API.getExamples().then(function(data) {
      console.log(data);
      var $products = data.map(function(product) {
        var $row = $("<div>");
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

        $row.append("<p class='heading'> Item Name | Description | Price (or trade) | Item ID </p>");
        $row.append($li); 
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
      name: $itemName.val().trim(),
      description: $description.val().trim(),
      price: $price.val().trim()
    };

    if (!(product.name && product.description)) {
      alert("You must enter a product name and description!");
      return;
    }

    API.saveExample(product).then(function() {
      refreshExamples();
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

    API.deleteExample(idToDelete).then(function() {
      refreshExamples();
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

  // // Once the detail page loads, we retrieve the data for the detail page, and render it
  // var loadDetails = function(id) {
  //   API.getExample(id).then(function(data) {
  //     console.log(data);
  //     var $id = $("<p>").html("<strong>ID</strong>: ${data.id}");
  //     var $text = $("<p>").html("<strong>Text</strong>: ${data.text}");
  //     var $desc = $("<p>").html(
  //       "<strong>Description:</strong> ${data.description}"
  //     );
  //     $details.append($id, $text, $desc);
  //   });
  // };

  // Add event listeners to the submit and delete buttons
  $submitBtn.on("click", handleFormSubmit);
  $stockItems.on("click", ".delete", handleDeleteBtnClick);

  // If this is the home page, render the list of examples, otherwise render the detail data
  var page = window.location.pathname;
  if (page === "/dummystore") {
    getMemberName();
    refreshExamples();
  }
  // } else {
  //   var id = page.split("/")[2];
  //   loadDetails(id);
  // }
});

// $(document).ready(function() {
//   var $memberName = $(".member-name");

//   // Once the main page loads, we retrieve the logged in user and render on the header
//   var getMemberName = function() {
//     // This file just does a GET request to figure out which user is logged in
//     // and updates the HTML on the page
//     $.get("/api/user_data").then(function(data) {
//       $memberName.text(data.email);
//     });
//   };

//   // If this is the dummystore page, show the user's name
//   var page = window.location.pathname;
//   if (page === "/dummystore") {
//     getMemberName();
//   }

//   var refreshProducts = function() {
//     // When the page loads, grab all products to display
//     $.get("/api/products/", function(data) {
//       console.log("All products: " + data);

//       //If there is data
//       if (data.length !== 0) {
//         //Loop through the products
//         for (var i = 0; i < data.length; i++) {
//           var $button = $("<button>")
//             .addClass("btn pull-right tradeBtn")
//             .text("TRADE");

//           var row = $("<div>");
//           row.append(
//             "<p class='heading'> Item Name | Description | Price (or trade) | Item ID"
//           );
//           row.append(
//             "<p>" +
//               data[i].item +
//               " | " +
//               data[i].description +
//               " | " +
//               data[i].price +
//               " | " +
//               data[i].id +
//               "</p>"
//           );
//           row.append($button);

//           //Display them
//           $("#stock-items").prepend(row);
//         }
//       }
//     });
//   };

//   refreshProducts();

//   //Display contact form when trade button is clicked
//   $("#tradeBtn").on("click", function() {
//     $("#contactFs").css("display", "block");
//     $(".store-details").css("display", "none");
//     $(".trade-form").css("display", "none");
//     $(".update-form").css("display", "none");
//     $(".purchase-form").css("display", "none");
//   });

//   // When user clicks add btn
//   $("#add").on("click", function(event) {
//     event.preventDefault();

//     // Make a new product object
//     var newProduct = {
//       item: $("#item-name")
//         .val()
//         .trim(),
//       description: $("#description")
//         .val()
//         .trim(),
//       price: $("#price")
//         .val()
//         .trim()
//     };

//     if (!(newProduct.item && newProduct.description)) {
//       alert("You must enter an product text and description!");
//       return;
//     }

//     console.log("Product values from form: " + newProduct);

//     // Send an AJAX POST-request with jQuery
//     $.post("/api/products/", newProduct)
//       // On success, run the following code
//       .then(function() {
//         var $button = $("<button>")
//           .addClass("btn pull-right tradeBtn")
//           .text("TRADE");

//         var row = $("<div>");
//         row.append(
//           "<p class='heading'> Item Name | Description | Price (or trade) | Item ID"
//         );
//         row.append(
//           "<p>" +
//             newProduct.item +
//             " | " +
//             newProduct.description +
//             " | " +
//             newProduct.price +
//             " | " +
//             newProduct.id +
//             "</p>"
//         );
//         row.append($button);

//         $("#stock-items").prepend(row);
//       });

//     //Empty each input box by replacing the value with an empty string
//     $("#item-name").val("");
//     $("#description").val("");
//     $("#price").val("");
//   });

//   // When user clicks update btn
//   $("#update").on("click", function(event) {
//     event.preventDefault();

//     // Make a new product object
//     var newProduct = {
//       item: $("#item-name")
//         .val()
//         .trim(),
//       description: $("#description")
//         .val()
//         .trim(),
//       price: $("#price")
//         .val()
//         .trim()
//     };

//     // Send an AJAX POST-request with jQuery
//     $.post("/api/products/:id", newProduct)
//       // On success, run the following code
//       .then(function() {
//         refreshProducts();
//       });

//     //Empty each input box by replacing the value with an empty string
//     $("#item-name").val("");
//     $("#description").val("");
//     $("#price").val("");
//   });

//   // When user clicks update btn
//   $("#delete").on("click", function(event) {
//     event.preventDefault();

//     // Make a new product object
//     var newProduct = {
//       item: $("#item-name")
//         .val()
//         .trim(),
//       description: $("#description")
//         .val()
//         .trim(),
//       price: $("#price")
//         .val()
//         .trim()
//     };

//     // Send an AJAX POST-request with jQuery
//     $.delete("/api/products/:id", newProduct)
//       // On success, run the following code
//       .then(function() {
//         refreshProducts();
//       });

//     //Empty each input box by replacing the value with an empty string
//     $("#item-name").val("");
//     $("#description").val("");
//     $("#price").val("");
//   });
// });
