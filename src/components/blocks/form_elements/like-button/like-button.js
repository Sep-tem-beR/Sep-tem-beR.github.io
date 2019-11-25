import './__heart/like-button__heart'
import './__amount/like-button__amount'

$(function(){
    $(".like-button").click(function() {
        $(this).addClass("like-button_click")
    });
});