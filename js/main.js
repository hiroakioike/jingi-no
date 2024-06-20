const hamburgerOpen = document.getElementById("hamburgerOpen");
const hamburgerClose = document.getElementById("hamburgerClose");
const navList = document.getElementById("headerNavList");

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

const images = document.querySelectorAll(".slider__image");
const totalImages = images.length;
let imageIndex = 0;
let interval;

function updateSlider() {
  //すべての画像からactiveクラスを取り外す
  images.forEach((image) => {
    image.classList.remove("slider__image--active");
  });
  images[imageIndex].classList.add("slider__image--active");
}

function nextImage() {
  imageIndex++;
  if (imageIndex > totalImages - 1) {
    imageIndex = 0;
  }
  updateSlider();
}

function autoPlay() {
  interval = setInterval(nextImage, 3000);
}

updateSlider();
autoPlay();
