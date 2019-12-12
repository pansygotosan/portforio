$(function(){
    
    //メニューボタンでのスクロール
    $('.menu-top').click(function(){
        var target = 0;
        $('html, body').animate({ scrollTop: target });
    })
    $('.menu-works').click(function(){
        var target = $('#works').offset().top;
        $('html, body').animate({ scrollTop: target });
    })
    $('.menu-about').click(function(){
        var target = $('#about').offset().top;
        $('html, body').animate({ scrollTop: target });
    })

    
    $(window).scroll(function(){
        //メニューの色
        if ($(window).scrollTop() > $('#top').offset().top &&　$(window).scrollTop()+$(window).height()*1/2 < $('#works').offset().top){
            $(".menu-top").addClass("menu-now");
            $(".menu-works").removeClass("menu-now");
            $(".menu-about").removeClass("menu-now");
       }else if ($(window).scrollTop()+$(window).height()*1/2 > $('#works').offset().top &&　$(window).scrollTop()+$(window).height()*1/2 < $('#about').offset().top){
            $(".menu-top").removeClass("menu-now");
            $(".menu-works").addClass("menu-now");
            $(".menu-about").removeClass("menu-now");
       }else if($(window).scrollTop()+$(window).height()*1/2 > $('#about').offset().top){
            $(".menu-top").removeClass("menu-now");
            $(".menu-works").removeClass("menu-now");
            $(".menu-about").addClass("menu-now");
       }

       //スキル
       if ($(window).scrollTop()+$(window).height()*1/2 > $('#about').offset().top){
            $('.flag1').delay(0).queue(function(){
                $(this).addClass("fade-in");
            });
            $('.after').delay(200).queue(function(){
                $(this).addClass("fade-in");
            });
            $('.react').delay(400).queue(function(){
                $(this).addClass("fade-in");
            });
            $('.proc').delay(600).queue(function(){
                $(this).addClass("fade-in");
            });
            $('.rub').delay(800).queue(function(){
                $(this).addClass("fade-in");
            });
            $('.flag2').delay(1000).queue(function(){
                $(this).addClass("fade-in");
            });
            $('.ard').delay(1200).queue(function(){
                $(this).addClass("fade-in");
            });
            $('.uni').delay(1400).queue(function(){
                $(this).addClass("fade-in");
            });
            $('.java').delay(1600).queue(function(){
                $(this).addClass("fade-in");
            });
            $('.photo').delay(1800).queue(function(){
                $(this).addClass("fade-in");
            });
            $('.flag3').delay(2000).queue(function(){
                $(this).addClass("fade-in");
            });
            $('.jq').delay(2200).queue(function(){
                $(this).addClass("fade-in");
            });
            $('.js').delay(2400).queue(function(){
                $(this).addClass("fade-in");
            });
            $('.html').delay(2600).queue(function(){
                $(this).addClass("fade-in");
            });
            $('.Ill').delay(2800).queue(function(){
                $(this).addClass("fade-in");
            });
       }

    });


});
