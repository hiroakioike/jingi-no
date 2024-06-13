// js/main.js
document.addEventListener("DOMContentLoaded", function () {
  const humbargerOpen = document.querySelector(".humbarger-open");
  const humbargerClose = document.querySelector(".humbarger-close");
  const navList = document.querySelector(".header-nav-list");

  humbargerOpen.addEventListener("click", function () {
    navList.classList.toggle("active");
    humbargerOpen.style.display = "none";
    humbargerClose.style.display = "block";
  });

  humbargerClose.addEventListener("click", function () {
    navList.classList.toggle("active");
    humbargerOpen.style.display = "block";
    humbargerClose.style.display = "none";
  });
});
