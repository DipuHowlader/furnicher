$(document).ready(function(){
    "use strict"

    $(".owl-carousel").owlCarousel({
        items:1,
        nav:true,
        navigaiton:true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        autoplaySpeed:true,
    });

    // ======== navigation ==============
 

    $('.icone-bar').click(() =>{
       $('.mobile-nav').addClass('added-class')
        $('body').css({'overflow-y':'hidden'})

       $('.layer').css({
           'z-index':'999999999999999999',
           'background':'rgba(0, 0, 0, 0.7)'
           
       })
    });

    $('.cross-icones').click(() =>{
        $('.mobile-nav').removeClass('added-class')
        $('body').css({'overflow-y':'auto'})
        $('.layer').css({
            'z-index':'0',
            'background':'rgba(0, 0, 0, 0)'
        })


    });



  });








