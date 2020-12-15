// Team Section

$(function(){
  
    $('.team-members').owlCarousel({
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

    //RESPONSIVE TABS

    $(function() {
        $("#services-tabs").responsiveTabs({
            animation: 'slide'
        });
    });

    //PORTOFOLIO

    // $(function(){
    //     $(".button").click(function(){
    //         var value =$(this).attr("data-filter");
    //         if(value=="all"){
    //             $(".filter").show("100");
    //         }
    //         else{
    //             $(".filter").not("."+value).hide("100");
    //             $(".filter").filter("."+value).show("100");
    //         }
    //         $("ul .button").click(function(){
    //             $(this).addClass('active').siblings().removeClass('active');
    //              })


    //     });


    // });


    //TESTIMONIALS

    $(function(){
  
        $("#testimonial-slider").owlCarousel({
            items: 1,
            singleItem: true,
            autoPlay: false,
            loop: true,
            smartSpeed: 700,
            nav:true,
            dots:false,
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
                    items:1
                }
            }
        
        })
        });

        //CLIENTS

        $('#clients-list').owlCarousel({
            items: 5,
            loop:true,
            smartSpeed: 700,
            // margin:10,
            nav:true,
            dots:false,
            autoPlay: false,
            autoPlayHoverPause: true,
            navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        //     responsive:{
        //         0:{
        //             items:1
        //         },
        //         600:{
        //             items:1
        //         },
        //         1000:{
        //             items:2
        //         }
        //     }
        // })
        });

