// Get classes
const body = document.querySelector("body");
const btnhamburger = document.querySelector("#btnhamburger");
const header = document.querySelector(".header");
const headerMenu = document.querySelector(".header__menu"); // Select the menu element
// const menuLinks = headerMenu.querySelectorAll("a");
const container = document.querySelector(".container");
// const mediaQuery = window.matchMedia("(min-width: 768px)");

btnhamburger.addEventListener("click", function () {
  header.classList.toggle("open");
  body.classList.toggle("noscroll");
});

headerMenu.addEventListener("click", () => {
  console.log("clicked");
  header.classList.remove("open");

  if (header.classList.contains("open")) {
    body.classList.add("noscroll");
  } else {
    body.classList.remove("noscroll");
  }
});

container.addEventListener("click", function () {
  // console.log('container clicked')
  header.classList.remove("open");
  body.classList.remove("noscroll");
});
// current Year generator
const yearspan = document.querySelector("#currentYear");
const currentYear = new Date();
yearspan.innerHTML = currentYear.getFullYear();
