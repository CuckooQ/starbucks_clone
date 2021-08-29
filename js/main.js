/* Header Elements */
const headerEl = document.querySelector("header");
const searchEl = headerEl.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
const badgesEl = headerEl.querySelector(".badges");

/* Main Elements */
const mainEl = document.querySelector("main");
const visualEl = mainEl.querySelector(".visual");
const fadeEls = visualEl.querySelectorAll(".fade-in");
const noticeEl = mainEl.querySelector(".notice");
const promotionEl = noticeEl.querySelector(".promotion");
const promotionToggleEl = noticeEl.querySelector(".toggle-promotion");

function openSearchInputEl() {
  searchInputEl.focus();
}

function searchfocused() {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
}

function searchblurred() {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
}

function controlBadges() {
  if (window.scrollY > 500) {
    gsap.to(badgesEl, .4, {
      opacity: 0,
      display: "none"
    });
  } else {
    gsap.to(badgesEl, .3, {
      opacity: 1,
      display: "block"
    });
  }
}

function setHeaderEl() {
  searchEl.addEventListener("click", openSearchInputEl);
  searchInputEl.addEventListener("focus", searchfocused);
  searchInputEl.addEventListener("blur", searchblurred);
  document.addEventListener("scroll", _.throttle(controlBadges, 300));
}

function showVisualEl() {
  fadeEls.forEach((fadeEl, idx) => {
    gsap.to(fadeEl, 1, {
      delay: .7 * (idx + 1),
      opacity: 1,
    });
  });
}

function setNoticeLineSwiper() {
  new Swiper(".notice .notice-line .swiper-container", {
    direction: "vertical",
    autoplay: true,
    loop: true
  });
}

function setNoticePromotionSwiper() {
  new Swiper(".notice .promotion .swiper-container", {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000
    },
    pagination: {
      el: ".notice .promotion .swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".promotion .swiper-next",
      prevEl: ".promotion .swiper-prev"
    }
  });
}

function togglePrmotionEl() {
  if (promotionEl.classList.contains("hide")) {
    promotionEl.classList.remove("hide");
  } else {
    promotionEl.classList.add("hide");
  }
}

function setMainEl() {
  showVisualEl();
  setNoticeLineSwiper();
  setNoticePromotionSwiper();
  promotionToggleEl.addEventListener("click", togglePrmotionEl);
}

function init() {
  setHeaderEl();
  setMainEl();
}

init();