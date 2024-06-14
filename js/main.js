const hamburgerOpen = document.getSelectedById(".hamburger-open");
const hamburgerClose = document.getSelectedById(".hamburger-close");
const navList = document.getSelectedById(".header__nav--list");

hamburgerOpen.addEventListener("click", function () {
  navList.classList.toggle("active");
  hamburgerOpen.style.display = "none";
  hamburgerClose.style.display = "block";
});

hamburgerClose.addEventListener("click", function () {
  navList.classList.toggle("active");
  hamburgerOpen.style.display = "block";
  hamburgerClose.style.display = "none";
});
