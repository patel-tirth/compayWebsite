$(document).ready(function(){

    $('#slides').superslides({
        animation:'fade',
        play : 3500,
        pagination: false
    })

    $(window).scroll(function(){
        $('#navigation').toggleClass('scrolled', $(this).scrollTop() > 250);
    });

    $(window).scroll(function(){
        $('#logo').toggleClass('scrolled', $(this).scrollTop() > 200);
    });


   

})
