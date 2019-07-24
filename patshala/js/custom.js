$(function () {
    var back = $(".back_to_top");
    var html_body = $('html,body');
    
    
    
        $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
           
            
        if(scrolling>120){
        $(".header_nav").addClass("header_nav_bg");     
        }
        else{
        $(".header_nav").removeClass("header_nav_bg");    
        }
            
            
        if(scrolling >100){
           back.fadeIn(800);
           }
        else{
           back.fadeOut(800);
         }
    });
    
    // back to top icon
    back.click(function(){
       html_body.animate({scrollTop:0},1500); 
    });
    
    
    //mixit image
     var mixer = mixitup('.mixit_img');
    
    
    
    //counter
     $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    
    
    
    //banner slide
    $('.content_slide_part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade:true,
        arrows:false,
    });
    
    
    //animation scroll js
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1200, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });
	
     new WOW().init();
});