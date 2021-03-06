/* Main Elements */
const mainEl = document.querySelector("main");
const visualEl = mainEl.querySelector(".visual");
const fadeEls = visualEl.querySelectorAll(".fade-in");
const noticeEl = mainEl.querySelector(".notice");
const promotionEl = noticeEl.querySelector(".promotion");
const promotionToggleEl = noticeEl.querySelector(".toggle-promotion");
const videoEl = mainEl.querySelector(".video");
const floatingEls = mainEl.querySelectorAll(".floating");
const spyEls = mainEl.querySelectorAll("section.scroll-spy");

/* To-Top Element */
const toTopEl = document.querySelector("#to-top");

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

function setScrollSpy() {
  spyEls.forEach((spyEl) => {
    new ScrollMagic
      .Scene({
        triggerElement: spyEl,
        triggerHook: .8
      })
      .setClassToggle(spyEl, "show")
      .addTo(new ScrollMagic.Controller());
  });
}

function setAwardsSwiper() {
  new Swiper(".awards .swiper-container", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: ".awards .swiper-next",
      prevEl: ".awards .swiper-prev"
    }
  });
}

function setMainEl() {
  showVisualEl();
  setNoticeLineSwiper();
  setNoticePromotionSwiper();
  promotionToggleEl.addEventListener("click", togglePrmotionEl);
  setFloatingMotions();
  setScrollSpy();
  setAwardsSwiper();
}

function controlToTopEl() {
  if (window.scrollY > 600) {
    gsap.to(toTopEl, .2, {
      x: 0,
      display: "flex"
    });
  } else {
    gsap.to(toTopEl, .2, {
      x: 100,
      display: "none"
    });
  }
}

function goToTop() {
  gsap.to(window, .7, {
    scrollTo: 0
  });
}

function setToTopEl() {
  document.addEventListener("scroll", _.throttle(controlToTopEl, 700));
  toTopEl.addEventListener("click", goToTop);
}

function init() {
  setHeaderEl();
  setMainEl();
  setToTopEl();
}

init();