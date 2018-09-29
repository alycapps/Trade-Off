$(".stock-button").on("click", function() {
  $(".update-form").css("display", "block");
  $(".store-details").css("display", "none");
  $("#contactFs").css("display", "none");
});

$("#trade").on("click", function(){
  $(".trade-form").css("display", "block");
  $(".purchase-form").css("display", "none");
  $(".store-details").css("display", "none");
  $("#contactFs").css("display", "none");
});


$("#back").on("click", function(){
  $(".store-details").css("display", "block");
  $(".trade-form").css("display", "none");
  $(".update-form").css("display", "none");
  $(".purchase-form").css("display", "none");
  $("#contactFs").css("display", "none");
  //$(".contact-form").css("display", "none");
});

$("#contact").on("click", function(){
  $("#contactFs").css("display", "block");
  $(".store-details").css("display", "none");
  $(".trade-form").css("display", "none");
  $(".update-form").css("display", "none");
  $(".purchase-form").css("display", "none");
});

function purchaseForm() {
  var item = $("#item-number").val();
  var amount = $("#amount").val();
  var price = $("#price").val();

  console.log("Item Number is " + item);
  console.log("Amount equals " + amount);
  console.log("Price is " + price);
}

$("#buy").on("click", function() {
  purchaseForm();
});
