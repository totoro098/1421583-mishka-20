var mainNav=document.querySelector(".main-nav");
mainNav.classList.remove("main-nav--nojs");
mainNav.classList.add("main-nav--closed");

var mainToggle = document.querySelector(".main-nav__toggle");
mainToggle.addEventListener("click", function () {
  if (mainNav.classList.contains("main-nav--closed")) {
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--opened");
  } else {
    mainNav.classList.remove("main-nav--opened");
    mainNav.classList.add("main-nav--closed");
  }
});
