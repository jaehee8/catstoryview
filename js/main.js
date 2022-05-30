$(document).ready(function(){
    var swiper1 = new Swiper(".slider .mySwiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".slider .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".slider .swiper-button-next",
          prevEl: ".slider .swiper-button-prev",
        },
    });
          
  });