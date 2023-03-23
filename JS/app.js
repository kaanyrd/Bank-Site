"use strict";

const navBtn = document.querySelector("#navbar-btn");
const closeBtn = document.querySelector("#close-btn");
let navbar = document.querySelector(".nav-self");

navBtn.addEventListener("click", () => {
  navbar.classList.add("show-nav");
});
closeBtn.addEventListener("click", () => {
  navbar.classList.remove("show-nav");
});
