$(function(){
    $('.menu').click(function(){
        $(".menu1").toggleClass("menuclick1");
        $(".menu2").toggleClass("menuclick2");
        $(".menu3").toggleClass("menuclick3");
        if ($('.menu-block').css('display') == 'none') {
            // $('.menu-block').slideDown('fast');
            $('.menu-block').animate( { width: 'show' }, 'slow' );
        } else {
               $('.menu-block').animate( { width: 'hide' }, 'slow' );
           }
    });
    $('.menu-box').click(function(){
        $(".menu1").toggleClass("menuclick1");
        $(".menu2").toggleClass("menuclick2");
        $(".menu3").toggleClass("menuclick3");
        if ($('.menu-block').css('display') == 'none') {
            // $('.menu-block').slideDown('fast');
            $('.menu-block').animate( { width: 'show' }, 'slow' );
        } else {
               $('.menu-block').animate( { width: 'hide' }, 'slow' );
           }
    });
});
