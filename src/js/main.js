import * as functions from "./modules/functions.js";

functions.isWebp();
let offset = 0;
let activeSlideNmb = 0;
const sliderLine = document.querySelector(".head__slider-line");
const btnRight = document.querySelector(".head__arrow--right");
const btnLeft = document.querySelector(".head__arrow--left");
let sliderItems = document.querySelectorAll(".head-slide");

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

function nextSlide() {
  offset += 160;
  sliderLine.style.right = offset + "px";
  sliderItems[activeSlideNmb].classList.remove("head-slide--active");
  const slide = sliderItems[activeSlideNmb].cloneNode(true);

  // setTimeout(() => {
  //   sliderItems[activeSlideNmb].remove();
  //   sliderLine.append(slide);
  //   sliderItems = document.querySelectorAll(".head-slide");
  // }, 1000);

  activeSlideNmb++;
  if (activeSlideNmb > 3) {
    activeSlideNmb = 0;
    offset = 0;
    sliderLine.style.right = offset + "px";
    sliderItems[activeSlideNmb].classList.add("head-slide--active");
  } else {
    sliderItems[activeSlideNmb].classList.add("head-slide--active");
  }

  console.log(sliderItems);
}

function prevSlide() {
  offset -= 160;
  sliderLine.style.right = offset + "px";
  sliderItems[activeSlideNmb].classList.remove("head-slide--active");
  activeSlideNmb--;
  if (activeSlideNmb < 0) {
    activeSlideNmb = 3;
    offset = 480;
    sliderLine.style.right = offset + "px";
    sliderItems[activeSlideNmb].classList.add("head-slide--active");
  } else {
    sliderItems[activeSlideNmb].classList.add("head-slide--active");
  }
}
