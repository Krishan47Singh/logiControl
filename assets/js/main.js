$(".product-carousel").owlCarousel({
  loop: true,
  // margin: 10,
  dots: true,
  // nav: true,
  autoplay: false,
  smartSpeed: 3000,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});


$(".client-carousel").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  // nav: true, 
  autoplay: true,
  smartSpeed: 3000,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});



// topbar js ------------------------------------------------------


$(function(){

    $(".top").click(function(e){
        e.preventDefault();
        $("html,body").animate({scrollTop:0})
    });

    $(window).scroll(function(){
        const top=$(this).scrollTop();
        if(top>=600){
            $(".top").fadeIn();
        }
        else{
            $(".top").fadeOut();
        }
    
    });

});
