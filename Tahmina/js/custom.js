$(function () {
    var back = $(".back_to_top");
    var html_body = $('html,body');
    
    
    
        $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
               
            
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
    
    
    //banner slide
    $('.portfolio_full').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade:false,
        arrows:false,
    });
    
    
    
    
    
     var c1 = $('.first.circle');

  c1.circleProgress({
    startAngle: -Math.PI / 4 * 3,
    value: 0.8,
    lineCap: 'round',
    fill: {color: '#f63b82'}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
  });

  // Let's emulate dynamic value update
  setTimeout(function() { c1.circleProgress('value', 0.7); }, 1000);
  setTimeout(function() { c1.circleProgress('value', 1.0); }, 1100);
  setTimeout(function() { c1.circleProgress('value', 0.8); }, 2100);
  /*
   * Example 2:
   *
   * - default gradient
   * - listening to `circle-animation-progress` event and display the animation progress: from 0 to 100%
   */
  var c2 = $('.second.circle');

  c2.circleProgress({
    startAngle: -Math.PI / 4 * 3,
    value: 0.6,
    lineCap: 'round',
    fill: {color: '#f63b82'}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(60 * progress) + '<i>%</i>');
  });

  // Let's emulate dynamic value update
  setTimeout(function() { c2.circleProgress('value', 0.7); }, 1000);
  setTimeout(function() { c2.circleProgress('value', 1.0); }, 1100);
  setTimeout(function() { c2.circleProgress('value', 0.6); }, 2100);

  /*
   * Example 3:
   *
   * - very custom gradient
   * - listening to `circle-animation-progress` event and display the dynamic change of the value: from 0 to 0.8
   */
  var c3 = $('.third.circle');

  c3.circleProgress({
    startAngle: -Math.PI / 4 * 3,
    value: 0.9,
    lineCap: 'round',
    fill: {color: '#f63b82'}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
  });

  // Let's emulate dynamic value update
  setTimeout(function() { c3.circleProgress('value', 0.7); }, 1000);
  setTimeout(function() { c3.circleProgress('value', 1.0); }, 1100);
  setTimeout(function() { c3.circleProgress('value', 0.9); }, 2100);

  /*
   * Example 4:
   *
   * - solid color fill
   * - custom start angle
   * - custom line cap
   * - dynamic value set
   */
  var c4 = $('.forth.circle');

  c4.circleProgress({
    startAngle: -Math.PI / 4 * 3,
    value: 0.5,
    lineCap: 'round',
    fill: {color: '#f63b82'}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(50 * progress) + '<i>%</i>');
  });

  // Let's emulate dynamic value update
  setTimeout(function() { c4.circleProgress('value', 0.7); }, 1000);
  setTimeout(function() { c4.circleProgress('value', 1.0); }, 1100);
  setTimeout(function() { c4.circleProgress('value', 0.5); }, 2100);
    
    
    
    
    
    
   $('.recent_all_works').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 700,
        nextArrow: ".banner_icon_right",
        prevArrow: ".banner_icon_left",
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
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