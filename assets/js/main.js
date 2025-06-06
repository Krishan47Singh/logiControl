$(".why-us").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  // nav: true,
  autoplay: true,
  smartSpeed: 3000,
  autoplayTimeout: 3000,
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



