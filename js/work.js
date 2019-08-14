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

    var easing='linear';
    var speed='slow';
    $('.menu-home').click(function(){
        var target=0;
        $('html, body').animate({ scrollTop: target }, speed, easing);

    })
    $('.menu-about').click(function(){
        var target=$('.about').offset().top;
        $('html, body').animate({ scrollTop: target }, speed, easing);

    })
    $('.menu-work').click(function(){
        var target = $('.home').height()+$('.layer1').height();
        $('html, body').animate({ scrollTop: target }, speed, easing);
    })
});
