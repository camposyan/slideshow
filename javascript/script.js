let totalSlides = document.querySelectorAll(".slider--item").length;
let currentSlide = 0;
let icons;

document.querySelector(".slider--width").style.width = `calc(100vw * ${totalSlides})`;
document.querySelector(".slider--controls").style.height = `${document.querySelector(".slider").clientHeight}px`;

function goNext() {
  currentSlide++;
  currentSlide = currentSlide > totalSlides - 1 ? (currentSlide = 0) : currentSlide;

  switch (currentSlide) {
    case 0:
        document.querySelector('i').classList.remove(`fa-building`);
        document.querySelector('i').classList.remove(`fa-sun`);
        document.querySelector('i').classList.add(`fa-spider`);
      break;
    case 1:
        document.querySelector('i').classList.remove(`fa-spider`);
        document.querySelector('i').classList.remove(`fa-sun`);
        document.querySelector('i').classList.add(`fa-building`);
      break;
    case 2:
        document.querySelector('i').classList.remove(`fa-building`);
        document.querySelector('i').classList.remove(`fa-spider`);
        document.querySelector('i').classList.add(`fa-sun`);
      break;
  }

  updateMargin();
}

function goPrev() {
  currentSlide--;
  currentSlide = currentSlide < 0 ? totalSlides - 1 : currentSlide;

  updateMargin();
}

function updateMargin() {
  let sliderWidth = document.querySelector(".slider--item").clientWidth;
  let newMargin = currentSlide * sliderWidth;
  document.querySelector(".slider--width").style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 5000);
