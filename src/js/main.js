import * as functions from "./modules/functions.js";
functions.isWebp();

const sliderLine = document.querySelector(".head__slider-line");
const btnRight = document.querySelector(".btn-arrow");
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

function nextSlide() {
  document.documentElement.style.setProperty(
    "--transition",
    "all ease-in-out 0.5s"
  );
  window.innerWidth <= 1130 ? (offset = 130) : (offset = 160);

  //Проверка на частые клики мыши
  if (new Date().getTime() - lastClick < 500) return;
  lastClick = new Date().getTime();

  sliderItems = getSlides();

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
//-----------
const menuBtn = document.querySelector(".menu__button");
const menu = document.querySelector(".header__menu");
const nav = document.querySelector(".menu__body");
const body = document.body;

document
  .querySelectorAll(".menu__body .link, .menu__body .button")
  .forEach((el) => {
    el.addEventListener("click", showMenu);
  });

function showMenu(e) {
  e.stopPropagation();
  menu.classList.toggle("menu--active");
  nav.classList.toggle("menu__body--active");
  body.classList.toggle("body--overflow");
}

nav.addEventListener("click", (e) => {
  showMenu(e);
});

window.addEventListener("resize", function () {
  menu.classList.remove("menu--active");
  nav.classList.remove("menu__body--active");
  body.classList.remove("body--overflow");
});
menuBtn.addEventListener("click", showMenu);
