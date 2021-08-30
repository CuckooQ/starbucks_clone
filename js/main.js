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
const videoEl = mainEl.querySelector(".video");
const floatingEls = videoEl.querySelectorAll(".floating");

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

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function setFloatingMotion(el, delay, y) {
  gsap.to(el, random(1.5, 2.5), {
    y,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}

function setFloatingMotions() {
  setFloatingMotion(floatingEls[0], 1, 15);
  setFloatingMotion(floatingEls[1], .5, 15);
  setFloatingMotion(floatingEls[2], 1.5, 20);
}

function setMainEl() {
  showVisualEl();
  setNoticeLineSwiper();
  setNoticePromotionSwiper();
  promotionToggleEl.addEventListener("click", togglePrmotionEl);
  setFloatingMotions();
}

function init() {
  setHeaderEl();
  setMainEl();
}

init();