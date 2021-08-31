/* Header Elements */
const headerEl = document.querySelector("header");
const searchEl = headerEl.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
const badgesEl = headerEl.querySelector(".badges");

/* Footer Elements */
const footerEl = document.querySelector("footer");
const copyRightEl = footerEl.querySelector(".copyright");
const yearEl = copyRightEl.querySelector(".this-year");

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

function setHeaderEl() {
  searchEl.addEventListener("click", openSearchInputEl);
  searchInputEl.addEventListener("focus", searchfocused);
  searchInputEl.addEventListener("blur", searchblurred);
}

function setThisYear() {
  const year = new Date().getFullYear();
  yearEl.textContent = year;
}

function setFooterEl() {
  setThisYear();
}

function init() {
  setHeaderEl();
  setFooterEl();
}

init();