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
