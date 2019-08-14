$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > $('.home').offset().top &&　$(window).scrollTop() < $('#about').offset().top-$(window).height()*3/10){
            $(".menu1").removeClass("menuscroll1");
            $(".menu2").removeClass("menuscroll2");
            $(".menu3").removeClass("menuscroll3");
            $(".menu-block").removeClass("menu-background2");
            
            $(".menu4").addClass("menuscroll4");
            $(".menu5").addClass("menuscroll5");
            $(".menu6").addClass("menuscroll6");
            $(".menu-block").addClass("menu-background1");
        }else if ($(window).scrollTop() > $('.layer1').offset().top-$('.home').height() &&　$(window).scrollTop() < $('#work').offset().top){
            $(".menu4").removeClass("menuscroll4");
            $(".menu5").removeClass("menuscroll5");
            $(".menu6").removeClass("menuscroll6");
            $(".menu-block").removeClass("menu-background2");
            
            $(".menu1").addClass("menuscroll1");
            $(".menu2").addClass("menuscroll2");
            $(".menu3").addClass("menuscroll3");
            $(".menu-block").toggleClass("menu-background1");
        }else if($(window).scrollTop() > $('.layer2').offset().top){
            $(".menu1").removeClass("menuscroll4");
            $(".menu2").removeClass("menuscroll5");
            $(".menu3").removeClass("menuscroll6");
            $(".menu-block").removeClass("menu-background1");

            $(".menu4").addClass("menuscroll1");
            $(".menu5").addClass("menuscroll2");
            $(".menu6").addClass("menuscroll3");
            $(".menu-block").addClass("menu-background2");
        }

        var home = $('.home').height();
        var layer1= $('.layer1').height();
        var screen =  $(window).height();
        var height = home+layer1-screen;
        
        
        console.log("height"+height+" scroll"+$(window).scrollTop());
        if ($(window).scrollTop() >= height) {
            $('.layer2').addClass('move');
        } else {
            $('.layer2').removeClass('move');
        }
        
        var rate=$('.html-rate').offset().top;
        if ($(window).scrollTop() >= rate-screen && $(window).scrollTop() <= rate) {
            $('.html-rate').addClass('rate-anime');
            $('.html-butterfly').addClass('html-butterfly-anime');
        } else {
            $('.html-rate').removeClass('rate-anime');
            $('.html-butterfly').removeClass('html-butterfly-anime');
        }
        var rate=$('.css-rate').offset().top;
        if ($(window).scrollTop() >= rate-screen && $(window).scrollTop() <= rate) {
            $('.css-rate').addClass('rate-anime');
            $('.css-butterfly').addClass('css-butterfly-anime');
        } else {
            $('.css-rate').removeClass('rate-anime');
            $('.css-butterfly').removeClass('css-butterfly-anime');
        }
        var rate=$('.js-rate').offset().top;
        if ($(window).scrollTop() >= rate-screen && $(window).scrollTop() <= rate) {
            $('.js-rate').addClass('rate-anime');
            $('.js-butterfly').addClass('js-butterfly-anime');
        } else {
            $('.js-rate').removeClass('rate-anime');
            $('.js-butterfly').removeClass('js-butterfly-anime');
        }
        var rate=$('.rails-rate').offset().top;
        if ($(window).scrollTop() >= rate-screen && $(window).scrollTop() <= rate) {
            $('.rails-rate').addClass('rate-anime');
            $('.rails-butterfly').addClass('rails-butterfly-anime');
        } else {
            $('.rails-rate').removeClass('rate-anime');
            $('.rails-butterfly').removeClass('rails-butterfly-anime');
        }
        var rate=$('.java-rate').offset().top;
        if ($(window).scrollTop() >= rate-screen && $(window).scrollTop() <= rate) {
            $('.java-rate').addClass('rate-anime');
            $('.java-butterfly').addClass('java-butterfly-anime');
        } else {
            $('.java-rate').removeClass('rate-anime');
            $('.java-butterfly').removeClass('java-butterfly-anime');
        }
        var rate=$('.processing-rate').offset().top;
        if ($(window).scrollTop() >= rate-screen && $(window).scrollTop() <= rate) {
            $('.processing-rate').addClass('rate-anime');
            $('.processing-butterfly').addClass('processing-butterfly-anime');
        } else {
            $('.processing-rate').removeClass('rate-anime');
            $('.processing-butterfly').removeClass('processing-butterfly-anime');
        }
        var rate=$('.unity-rate').offset().top;
        if ($(window).scrollTop() >= rate-screen && $(window).scrollTop() <= rate) {
            $('.unity-rate').addClass('rate-anime');
            $('.unity-butterfly').addClass('unity-butterfly-anime');
        } else {
            $('.unity-rate').removeClass('rate-anime');
            $('.unity-butterfly').removeClass('unity-butterfly-anime');
        }

        var rate=$('.ai-rate').offset().top;
        if ($(window).scrollTop() >= rate-screen && $(window).scrollTop() <= rate) {
            $('.ai-rate').addClass('rate-anime');
            $('.ai-butterfly').addClass('ai-butterfly-anime');
        } else {
            $('.ai-rate').removeClass('rate-anime');
            $('.ai-butterfly').removeClass('ai-butterfly-anime');
        }
        var rate=$('.ps-rate').offset().top;
        if ($(window).scrollTop() >= rate-screen && $(window).scrollTop() <= rate) {
            $('.ps-rate').addClass('rate-anime');
            $('.ps-butterfly').addClass('ps-butterfly-anime');
        } else {
            $('.ps-rate').removeClass('rate-anime');
            $('.ps-butterfly').removeClass('ps-butterfly-anime');
        }
        var rate=$('.csp-rate').offset().top;
        if ($(window).scrollTop() >= rate-screen && $(window).scrollTop() <= rate) {
            $('.csp-rate').addClass('rate-anime');
            $('.csp-butterfly').addClass('csp-butterfly-anime');
        } else {
            $('.csp-rate').removeClass('rate-anime');
            $('.csp-butterfly').removeClass('csp-butterfly-anime');
        }

        var rate=$('.maya-rate').offset().top;
        if ($(window).scrollTop() >= rate-screen && $(window).scrollTop() <= rate) {
            $('.maya-rate').addClass('rate-anime');
            $('.maya-butterfly').addClass('maya-butterfly-anime');
        } else {
            $('.maya-rate').removeClass('rate-anime');
            $('.maya-butterfly').removeClass('maya-butterfly-anime');
        }
        var rate=$('.ae-rate').offset().top;
        if ($(window).scrollTop() >= rate-screen && $(window).scrollTop() <= rate) {
            $('.ae-rate').addClass('rate-anime');
            $('.ae-butterfly').addClass('ae-butterfly-anime');
        } else {
            $('.ae-rate').removeClass('rate-anime');
            $('.ae-butterfly').removeClass('ae-butterfly-anime');
        }
        var rate=$('.arduino-rate').offset().top;
        if ($(window).scrollTop() >= rate-screen && $(window).scrollTop() <= rate) {
            $('.arduino-rate').addClass('rate-anime');
            $('.arduino-butterfly').addClass('arduino-butterfly-anime');
        } else {
            $('.arduino-rate').removeClass('rate-anime');
            $('.arduino-butterfly').removeClass('arduino-butterfly-anime');
        }
    });

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
