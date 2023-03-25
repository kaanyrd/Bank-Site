"use strict";

const navbarBtn = document.getElementById("navbar-btn");
const closeBtn = document.getElementById("close-btn");
const asideBar = document.getElementById("aside");

navbarBtn.addEventListener("click", () => {
  asideBar.classList.add("show-aside");
});

closeBtn.addEventListener("click", () => {
  asideBar.classList.remove("show-aside");
});

// SWIPER JS
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});
