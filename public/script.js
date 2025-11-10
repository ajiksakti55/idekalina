// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 32,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 32,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});

// hamburger
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector("#hamburger");
  const navMenu = document.querySelector("#nav-menu");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  });
});

// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
