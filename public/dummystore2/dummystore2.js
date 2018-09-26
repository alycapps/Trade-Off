$("#purchase").on('click', function(){
    $(".purchase-form").css("display", "block");
    $(".store-details").css("display", "none");
    $(".trade-form").css("display", "none");
});

$(".stock-button").on('click', function(){
    $(".update-form").css("display", "block");
    $(".store-details").css("display", "none");
});

$("#trade").on('click', function(){
    $(".trade-form").css("display", "block");
    $(".purchase-form").css("display", "none");
    $(".store-details").css("display", "none");
});

$("#back").on('click', function(){
    $(".store-details").css("display", "block");
    $(".trade-form").css("display", "none");
    $(".update-form").css("display", "none");
    $(".purchase-form").css("display", "none");
});

function purchaseForm(){
    let item = $('#item-number').val();
    let amount = $('#amount').val();
    let price = $('#price').val();

    console.log("Item Number is " + item);
    console.log("Amount equals " + amount);
    console.log("Price is " + price);
}

$('#buy').on('click', function(){
    purchaseForm();
})


// When user clicks add btn
$("#add").on("click", function(event) {
    event.preventDefault();
  
    // Make a new product object
    var newProduct = {
      item: $("#item-name").val().trim(),
      description: $("#description").val().trim(),
      price: $("#price").val().trim(),
      negotiable: $("#negotiable").val().trim(),
      userId: $("#userId").val().trim(),
    };
  
    console.log(newProduct);
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newProduct)
      // On success, run the following code
      .then(function() {
  
        var row = $("<div>");
        row.addClass("chirp");
  
        row.append("<p>" + newProduct.author + " chirped: </p>");
        row.append("<p>" + newProduct.body + "</p>");
        row.append("<p>At " + moment(newProduct.created_at).format("h:mma on dddd") + "</p>");
  
        $("#chirp-area").prepend(row);
  
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#author").val("");
    $("#chirp-box").val("");
  });
  
 
// When the page loads, grab all products for the logged in user
$.get("/api/products/:userId", function(data) {
    //If there is data
    if (data.length !== 0) {
      //Loop through the user's products and display them
      for (var i = 0; i < data.length; i++) {
  
        var row = $("<div>");
  
        row.append("<p>" + data[i].item + "</p>");
        row.append("<p>" + data[i].description + "</p>");
        row.append("<p>" + data[i].price + "</p>");
        row.append("<p>" + data[i].negotiable + "</p>");
        row.append("<p>" + data[i].barter + "</p>");

        $("#stock-items").prepend(row);
  
      }
  
    }
  
  });