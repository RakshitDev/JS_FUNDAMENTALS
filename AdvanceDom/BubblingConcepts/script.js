const themeBtns = document.querySelector(".theme-buttons");

const btn = document.querySelectorAll(".theme-btn");

const alltheme = document.querySelectorAll(".theme-content");

themeBtns.addEventListener("click", function (e) {
  e.preventDefault();

  const clickedBtn = e.target.closest(".theme-btn");

  if (!clickedBtn) return;

  // 1. Remove active class from all buttons
  btn.forEach((btn) => {
    btn.classList.remove("theme-btn--active");
  });

  // 2. Add active class to clicked button
  clickedBtn.classList.add("theme-btn--active");

  // 3. Remove active class from all themes
  alltheme.forEach((theme) => {
    theme.classList.remove("theme-content--active");
  });

  // 4 get data theme of the btn clicked
  const theme = clickedBtn.dataset.theme;

  // 5 find the theme matching  div now
  const activeTheme = document.querySelector(`.theme-content--${theme}`);
  console.log(activeTheme);

  activeTheme.classList.add("theme-content--active");
});
