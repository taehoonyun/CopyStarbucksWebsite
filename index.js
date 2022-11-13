"use strict";

// const option = document.getElementsByClassName("option");
const menuBtn = document.querySelector("#menuBtn");
const side_bar = document.querySelector(".side_bar");

const aboutBtn = document.querySelector(".aboutBtn");
const About_contents = document.querySelectorAll(".About_contents>li");
const CareerBtn = document.querySelector(".CareerBtn");
const Career_contents = document.querySelectorAll(".Career_contents>li");
const SocialBtn = document.querySelector(".SocialBtn");
const Social_contents = document.querySelectorAll(".Social_contents>li");
const BusBtn = document.querySelector(".BusBtn");
const Business_contents = document.querySelectorAll(".Business_contents>li");
const OrderBtn = document.querySelector(".OrderBtn");
const OnP_contents = document.querySelectorAll(".OnP_contents>li");

aboutBtn.addEventListener("click", () =>
  About_contents.forEach((item) => item.classList.toggle("active"))
);
CareerBtn.addEventListener("click", () =>
  Career_contents.forEach((item) => item.classList.toggle("active"))
);
BusBtn.addEventListener("click", () =>
  Business_contents.forEach((item) => item.classList.toggle("active"))
);
SocialBtn.addEventListener("click", () =>
  Social_contents.forEach((item) => item.classList.toggle("active"))
);
OrderBtn.addEventListener("click", () =>
  OnP_contents.forEach((item) => item.classList.toggle("active"))
);

function handleMenu() {
  side_bar.classList.toggle("active");
}

menuBtn.addEventListener("click", handleMenu);
