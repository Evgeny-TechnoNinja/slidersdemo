$(document).ready(function () {
  // slider one (slick)
  $('.slick-slider').slick({
    // autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 400,
    prevArrow: '<div class="icon-arrow-left slick-slider__btn-left"></div>',
    nextArrow: '<div class="icon-arrow-right slick-slider__btn-right"></div>',
  });
  // --end slick----

  // owl-carousel
  $(".owl-carousel").owlCarousel({
    autoplay: true
  });
  // --end owl-carousel---

  // Swiper
  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.icon-arrow-left',
      prevEl: '.icon-arrow-right',
    },
    loop: true
  });
  // --end Swiper---
});