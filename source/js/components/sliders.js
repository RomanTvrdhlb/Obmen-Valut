import Swiper from "../vendor/swiper.js";
import vars from "../_vars.js";

document.addEventListener("DOMContentLoaded", function () {
  const { mainSliders} = vars;

  mainSliders.forEach(function (slider) {
    const container = slider.querySelector(".swiper-container");
    const nextBtn = slider.querySelector(".swiper-button-next");
    const prevBtn = slider.querySelector(".swiper-button-prev");
    const pagination = slider.querySelector(".swiper-pagination");

    const mainSwiper = new Swiper(container, {
      spaceBetween: 30,
      slidesPerView: 'auto',
     
      loop: true,
      speed: 1800,
      watchOverflow: true,
      observer: true,
      observeParents: true,

      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
      pagination: {
        el: pagination,
        clickable: true,
      },
      breakpoints: {
        320: {
          spaceBetween: 20,
          slidesPerView: 1,
          autoHeight: true,
        },
        576: {
          slidesPerView: 'auto',
          autoHeight: false,
        },
        1024: {
          spaceBetween: 30,
        },
        1240: {
          spaceBetween: 50,
        },
        1440: {
          centeredSlides: true,
          slidesPerView: 3,
        },
      },
    });
  });
});
