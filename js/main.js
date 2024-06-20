const hamburgerMenu = document.getElementById('hamburgerMenu');
const overlay = document.getElementById('headerNavOverlay');
const navList = document.getElementById('headerNavList');

hamburgerMenu.addEventListener('click', function () {
  hamburgerMenu.classList.toggle('active');
  navList.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', function () {
  hamburgerMenu.classList.remove('active');
  navList.classList.remove('active');
  overlay.classList.remove('active');
});

const policy = document.getElementById('textPolicy');
policy.addEventListener('click', function () {
  alert('ルールとマナーを守って楽しくデュエル!!');
});
