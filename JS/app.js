"use strict";

const navbarBtn = document.getElementById("navbar-btn");
const closeBtn = document.getElementById("close-btn");
const asideBar = document.getElementById("aside");
const registerBtn = document.querySelectorAll(".register-btn");
const signUpCloseBtn = document.getElementById("signUp-close-btn");
const signUpSide = document.getElementById("signUp");
const blur = document.querySelector("#signUp-blur");
const moreBtn = document.querySelector(".learn-more-btn");

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
// SIGNUP OPEN
registerBtn.forEach((index) => {
  index.addEventListener("click", (e) => {
    e.preventDefault();
    signUpSide.className = "open";
    document.querySelector("body").style.overflow = "hidden";
    blur.className = "blur";
  });
});
// SIGNUP CLOSE
signUpCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("body").style.overflow = "auto";
  signUpSide.className = "close";
  blur.className = "hidden";
});
//SCROLLING MAIN TO BOTTOM
moreBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("section-1").scrollIntoView({ behavior: "smooth" });
});
