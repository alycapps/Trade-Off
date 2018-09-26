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

