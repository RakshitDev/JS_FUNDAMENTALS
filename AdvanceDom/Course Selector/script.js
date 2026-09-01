const btns = document.querySelectorAll(".course-btn");
const container = document.querySelector(".course-container");
const counrseContent = document.querySelectorAll(".course-content");
container.addEventListener("click", function (e) {
  e.preventDefault();

  // #1 find which btn is clicked
  const clickedBtn = e.target.closest(".course-btn");

  // #2 now remove the active class from all the btn
  btns.forEach((btn) => {
    btn.classList.remove("course-btn--active");
  });

  // #3 add only active class to the clicked btn
  clickedBtn.classList.add("course-btn--active");

  //#4 get the matching data Set
  const course = clickedBtn.getAttribute("data-course");

  // #5 now find the element using the query selector
  const content = document.querySelector(`.course-content--${course}`);
  // #6 remove the active class from the  div
  counrseContent.forEach((content) => {
    content.classList.remove("course-content--active");
  });
  // #7 now only add to the active div
  content.classList.add("course-content--active");
});
