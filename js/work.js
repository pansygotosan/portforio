$(function(){
    $(".menu").click(function(){
        $(".menu1").toggleClass("menuclick1")
    });
    $(".menu").click(function(){
        $(".menu2").toggleClass("menuclick2")
    });
    $(".menu").click(function(){
        $(".menu3").toggleClass("menuclick3")
    }); 
});
jQuery(function($){
    $('.menu').click(function(){
        if ($('.menu-block').css('display') == 'none') {
            // $('.menu-block').slideDown('fast');
            $('.menu-block').animate( { width: 'show' }, 'slow' );
        } else {
               $('.menu-block').animate( { width: 'hide' }, 'slow' );
           }
    });
});