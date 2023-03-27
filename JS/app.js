"use strict";

const navbarBtn = document.getElementById("navbar-btn");
const closeBtn = document.getElementById("close-btn");
const asideBar = document.getElementById("aside");
const registerBtn = document.querySelectorAll(".register-btn");
const signUpCloseBtn = document.getElementById("signUp-close-btn");
const signUpSide = document.getElementById("signUp");
const blur = document.querySelector("#signUp-blur");
const moreBtn = document.querySelector(".learn-more-btn");

// NAVBAR
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
    blur.classList.remove("hidden");
    document.querySelector("html").style.paddingRight = "17px";
  });
});
// SIGNUP CLOSE

signUpCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("body").style.overflow = "auto";
  signUpSide.className = "close";
  // blur.className = "hidden";
  blur.classList.add("hidden");
  document.querySelector("html").style.paddingRight = "0px";
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelector("body").style.overflow = "auto";
    signUpSide.className = "close";
    blur.classList.add("hidden");
    document.querySelector("html").style.paddingRight = "0px";
  }
});
//SCROLLING MAIN TO BOTTOM
moreBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("section-1").scrollIntoView({ behavior: "smooth" });
});
// SCROLLING NAVBAR TO SECTIONS
const navLink = document.querySelectorAll(".navbar-link");

navLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

//SCROLLING ASIDE BAR TO SECTIONS
const barLink = document.querySelectorAll(".aside-link");

barLink.forEach((barlink) => {
  barlink.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    asideBar.classList.remove("show-aside");
  });
});

// TABBED COMPONENT
const btnsContainer = document.querySelectorAll(".slider-btns");
const tabContainer = document.querySelector(".slider-system");
const btnSelf = document.querySelectorAll(".slider-btn");

tabContainer.addEventListener("click", (e) => {
  const clickedButton = e.target.closest(".slider-btn");
  // console.log(clickedButton);
  if (!clickedButton) return;
  btnSelf.forEach((btnS) => {
    btnS.classList.remove("active-slider-btn");
  });
  clickedButton.classList.add("active-slider-btn");
});
