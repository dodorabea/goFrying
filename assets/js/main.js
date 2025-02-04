(function ($) {
  "use strict";
  /*====Dom is loaded==== */
  var $loader = document.querySelector("#preloader-background");

  window.onload = function () {
    setTimeout(function () {
      $loader.remove();
    });
  };
    /*=====AOS animation=====*/
    AOS.init({
      // Global settings:
      duration: 900,
      easing: 'ease-in-cubic',
      disable: 'mobile',
    });
    AOS.refresh();
  /*====Back to top==== */
  var amountScrolled = 200;
  var amountScrolledNav = 25;
  $(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled) {
      $("button.back-to-top").addClass("show");
    } else {
      $("button.back-to-top").removeClass("show");
    }
  });

  $("button.back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
  ////category
  var swiperCategory = new Swiper(".mySwiper.category", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1.25,
      },
      400: {
        slidesPerView: 1.5,
      },
      880: {
        slidesPerView: 2,
      },
      1025: {
        slidesPerView: 3,
      },
      1366: {
        slidesPerView: 4,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  ////
  var swiperFade = new Swiper(".swiperFade", {
    effect: "fade",
    loop: true,
    autoplay:true,
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });
  ////swiper product
  var swiperProduct = new Swiper(".mySwiper.product", {
    slidesPerView: 1.25,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1.25,
      },
      400: {
        slidesPerView: 1.5,
      },
      880: {
        slidesPerView: 2,
      },
      1025: {
        slidesPerView: 3,
      },
      1366: {
        slidesPerView: 3.75,
      },
    },
  });
  ///Swiper certificate
  var swiperCertificate = new Swiper(".mySwiper.certificate", {
    slidesPerView: 1.5,
    spaceBetween: 24,
    speed: 15000,
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 0,
    },
    freeMode: true,
    breakpoints: {
      0: {
        slidesPerView: 1.5,
      },
      400: {
        slidesPerView: 1.5,
      },
      880: {
        slidesPerView: 3,
      },
      1025: {
        slidesPerView: 4.5,
      },
      1366: {
        slidesPerView: 5.25,
      },
    },
  });
  ////
  var swipersubslider = new Swiper(".mySwiper.product-sub-slider", {
    centeredSlides: true,
    spaceBetween: 16,
    centeredSlidesBounds: true,
    slidesPerView: 3,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: 'vertical'
   
  });
  var swiperslider = new Swiper(".mySwiper2.product-details-slider", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swipersubslider,
    },
  });
  /////////
  var swiperPartner = new Swiper(".mySwiper.partnerSwiper", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    speed: 15000,
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 0,
    },
    freeMode: true,
    breakpoints: {
      0: {
        slidesPerView: 1.5,
      },
      400: {
        slidesPerView: 3.5,
      },
      880: {
        slidesPerView: 5.5,
      },
      1025: {
        slidesPerView: 6.5,
      },
      1366: {
        slidesPerView: 7.5,
      },
    },
  });
})(jQuery);
/*=====Header=====*/
const menu = document.querySelector(".menu");
const menuInner = menu.querySelector(".menu__inner");
const menuArrow = menu.querySelector(".menu__arrow");
const menuTitle = menu.querySelector(".menu__title");
const burger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");

// Navbar Menu Toggle Function
function toggleMenu() {
  menu.classList.toggle("is-active");
  overlay.classList.toggle("is-active");
}

// Show Mobile Submenu Function
function showSubMenu(children) {
  subMenu = children.querySelector(".submenu");
  subMenu.classList.add("is-active");
  subMenu.style.animation = "slideLeft 0.35s ease forwards";
  const menuTitle =
    children.querySelector("i").parentNode.childNodes[0].textContent;
  menu.querySelector(".menu__title").textContent = menuTitle;
  menu.querySelector(".menu__header").classList.add("is-active");
}

// Hide Mobile Submenu Function
function hideSubMenu() {
  subMenu.style.animation = "slideRight 0.35s ease forwards";
  setTimeout(() => {
    subMenu.classList.remove("is-active");
  }, 300);

  menu.querySelector(".menu__title").textContent = "";
  menu.querySelector(".menu__header").classList.remove("is-active");
}

// Toggle Mobile Submenu Function
function toggleSubMenu(e) {
  if (!menu.classList.contains("is-active")) {
    return;
  }
  if (e.target.closest(".menu__dropdown")) {
    const children = e.target.closest(".menu__dropdown");
    showSubMenu(children);
  }
}

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    if (menu.classList.contains("is-active")) {
      toggleMenu();
    }
  }
});

// Initialize All Event Listeners
burger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
menuArrow.addEventListener("click", hideSubMenu);
menuTitle.addEventListener("click", hideSubMenu);
menuInner.addEventListener("click", toggleSubMenu);
