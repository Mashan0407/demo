$(document).ready(function(){
//  console.log("my js is loaded");
    $('.hide-title img').mouseenter(function() {
        $(this).siblings().css('opacity','1');
    });
    $('.hide-title img').mouseleave(function(){
        $(this).siblings().css('opacity','0');
    });
});