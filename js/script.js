// Team Section


$(function(){
  
    $('.owl-carousel').owlCarousel({
        loop:true,
        smartSpeed: 700,
        // margin:10,
        nav:true,
        dots:false,
        autoPlay: true,
        autoPlayHoverPause: true,
        navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })
    });