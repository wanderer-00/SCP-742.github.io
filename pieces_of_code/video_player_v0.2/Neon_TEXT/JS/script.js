$(function(){
    $(window).scroll(function(){
        $('.text').css('opacity', 1 - $(window).scrollTop() / 600);
    })
})