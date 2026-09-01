"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// add scroll event
const btnScroll = document.querySelector(".btn--scroll-to");
const btnScrollTO = document.querySelector(".section__description");

btnScroll.addEventListener("click", function (e) {
  e.preventDefault();
  btnScrollTO.scrollIntoView({
    behavior: "smooth",
  });
});

// // generating random rgba colors
// const randomColor = () => {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return `rgba(${r},${g},${b})`;
// // };

// // event captuing and bubbling
// const navLink = document.querySelector(".nav__link");
// const navLinks = document.querySelector(".nav__links");
// const nav = document.querySelector(".nav");

// navLink.addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("CHILD", e.target);
// });

// navLinks.addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("ParentContainer", e.target);
// });

// nav.addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("NAVBAR", e.target);
// });

const navLinks = document.querySelector(".nav__links");
// bubble delegation -
navLinks.addEventListener("click", function (e) {
  e.preventDefault();
  const id = e.target.getAttribute("href");
  const element = document.querySelector(id);
  element.scrollIntoView({
    behavior: "smooth",
  });
});

// bubble delegation inside the operation tab add class to the btn which is clicker

// first find which btn is getting clicked
const btnContainer = document.querySelector(".operations__tab-container");

const btns = btnContainer.querySelectorAll(".operations__tab");

const contents = document.querySelectorAll(".operations__content");

btnContainer.addEventListener("click", function (e) {
  e.preventDefault();

  const clickedBtn = e.target.closest(".operations__tab");

  if (!clickedBtn) return;

  // 1. Remove active class from all buttons
  btns.forEach(function (btn) {
    btn.classList.remove("operations__tab--active");
  });

  // 2. Add active class to clicked button
  clickedBtn.classList.add("operations__tab--active");

  // 3. Find which tab was clicked
  const tab = clickedBtn.dataset.tab;

  // 4. Remove active class from all contents
  contents.forEach(function (content) {
    content.classList.remove("operations__content--active");
  });

  // 5. Activate matching content
  const content = document.querySelector(`.operations__content--${tab}`);

  content.classList.add("operations__content--active");
});
