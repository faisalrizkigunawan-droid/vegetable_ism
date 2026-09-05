// toggle class active untuk hamburger menu
const navbarnav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarnav.classList.toggle("active");
};
// toggle class active untuk search form
const searchform = document.querySelector(".search-form");
const searchbox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchform.classList.toggle("active");
  searchbox.focus();
  e.preventDefault();
};
// klik diluar elemen
const hamburger = document.querySelector("#hamburger-menu");
const searchbutton = document.querySelector("#search-button");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
  if (!searchbutton.contains(e.target) && !searchform.contains(e.target)) {
    searchform.classList.remove("active");
  }
});
