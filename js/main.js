const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

function focused() {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
}

function blurred() {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
}

function openSearchInputEl() {
  searchInputEl.focus();
}

function init() {
  searchEl.addEventListener("click", openSearchInputEl);
  searchInputEl.addEventListener("focus", focused);
  searchInputEl.addEventListener("blur", blurred);
}

init();