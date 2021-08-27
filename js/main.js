const headerEl = document.querySelector("header");
const searchEl = headerEl.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
const badgesEl = headerEl.querySelector(".badges");

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

function init() {
  searchEl.addEventListener("click", openSearchInputEl);
  searchInputEl.addEventListener("focus", searchfocused);
  searchInputEl.addEventListener("blur", searchblurred);
  document.addEventListener("scroll", _.throttle(controlBadges, 300))
}

init();