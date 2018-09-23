$("#purchase").on('click', function(){
    $(".purchase-form").css("display", "block");
    $(".store-details").css("display", "none");
});

$(".stock-button").on('click', function(){
    $(".update-form").css("display", "block");
    $(".store-details").css("display", "none");
});

$("#trade").on('click', function(){
    $(".trade-form").css("display", "block");
    $(".store-details").css("display", "none");
});

$("#back").on('click', function(){
    $(".store-details").css("display", "block");
    $(".trade-form").css("display", "none");
    $(".update-form").css("display", "block");
    $(".purchase-form").css("display", "block");
});