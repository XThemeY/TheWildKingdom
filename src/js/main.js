import * as functions from "./modules/functions.js";
functions.isWebp();

const sliderLine = document.querySelector(".head__slider-line");
const btnRight = document.querySelector(".head__btn-arrow");
const slides = document.querySelectorAll(".head-slide");

for (let i = 0; i < slides.length; i++) {
  sliderLine.insertAdjacentHTML("beforeend", slides[i].outerHTML);
}

let sliderItems = document.querySelectorAll(".head-slide");
sliderItems[0].classList.add("head-slide--active");
let index = 0;
let offset = 160;
let lastClick = 0;
const getSlides = () => document.querySelectorAll(".head-slide");
document.documentElement.style.setProperty(
  "--transition",
  "all ease-in-out 0.5s"
);
function nextSlide() {
  //Проверка на частые клики мыши
  if (new Date().getTime() - lastClick < 500) return;
  lastClick = new Date().getTime();

  sliderItems = getSlides();
  document.documentElement.style.setProperty(
    "--transition",
    "all ease-in-out 0.5s"
  );
  if (index >= sliderItems.length - 1) {
    index = 0;
    sliderLine.style.right = `${offset * index}px`;
    sliderItems[index].classList.add("head-slide--active");
    sliderItems[sliderItems.length - 1].classList.remove("head-slide--active");
    return;
  }
  sliderItems[index].classList.remove("head-slide--active");
  index++;
  sliderLine.style.right = `${offset * index}px`;
  sliderItems[index].classList.add("head-slide--active");
  resetSlider();
}
function resetSlider() {
  if (index == sliderItems.length / 2) {
    setTimeout(() => {
      document.documentElement.style.setProperty("--transition", "0s");
      sliderLine.style.right = "0px";
      sliderItems[index].classList.remove("head-slide--active");
      index = 0;
      sliderItems[index].classList.add("head-slide--active");
    }, 500);
  }
}

btnRight.addEventListener("click", nextSlide);
