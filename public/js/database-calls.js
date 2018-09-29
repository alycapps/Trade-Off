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
    //negotiable: $("#negotiable").val().trim(),
    // userId: $("#userId")
    //   .val()
    //   .trim()
  };

  console.log("Values from form: " + newProduct);

  // Send an AJAX POST-request with jQuery
  $.post("/api/products/", newProduct)
    // On success, run the following code
    .then(function() {
      var row = $("<tr>");

      row.append("<td>" + data[i].item);
      row.append("<td>" + data[i].description);
      row.append("<td>" + data[i].price + "</td>");
      // row.append("<p>" + data[i].negotiable + "</p>");
      //row.append("<p>" + data[i].barter + "</p>");

      $("#tableBody").append(row);
    });

  //Empty each input box by replacing the value with an empty string
  $("#item-name").val();
  $("#description").val();
  $("#price").val();
  // $("#userId").val("");
});

// When the page loads, grab all products for the logged in user --> ***currently only works when hard-coded***
$.get("/api/products/", function(data) {
  console.log("Products for logged in user " + data);

  //If there is data
  if (data.length !== 0) {
    //Loop through the user's products
    for (var i = 0; i < data.length; i++) {
      var row = $("<tr>");
      row.append("<td>" + data[i].item);
      row.append("<td>" + data[i].description);
      row.append("<td>" + data[i].price + "</td>");
      //row.append("<p>" + data[i].negotiable + "</p>");
      //row.append("<p>" + data[i].barter + "</p>");

      //Display them
      $("#tableBody").append(row);
    }
  }
});
